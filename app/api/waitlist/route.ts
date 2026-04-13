import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import WaitlistConfirmation from "../../../emails/WaitlistConfirmation";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// SendPulse SMTP transporter — created once, reused across requests
// Credentials: SendPulse → SMTP Settings → General tab
const transporter = nodemailer.createTransport({
  host: "smtp-pulse.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.SENDPULSE_SMTP_USER, // your SendPulse login email
    pass: process.env.SENDPULSE_SMTP_PASS, // SMTP password from SendPulse settings (NOT your account password)
  },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string = (body.email ?? "").toLowerCase().trim();
    const source: string = body.source ?? "landing_page";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert({ email, source });

    if (dbError) {
      // Duplicate — treat as success, no second email
      if (dbError.code === "23505") {
        return NextResponse.json({ success: true, message: "already_registered" });
      }
      console.error("[waitlist] DB error:", dbError.message);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    // 2. Send confirmation email via SendPulse SMTP (non-blocking)
    if (process.env.SENDPULSE_SMTP_USER && process.env.SENDPULSE_SMTP_PASS) {
      try {
        const html = await render(WaitlistConfirmation({ email }));
        await transporter.sendMail({
          from: `"Stackr" <${process.env.SENDPULSE_SMTP_FROM ?? process.env.SENDPULSE_SMTP_USER}>`,
          to: email,
          subject: "You're on the Stackr waitlist 🔥",
          html,
          text: `Hey — you're on the Stackr waitlist!\n\nWe're building the biohacking protocol OS. Early Optimizer pricing ($4.99/mo forever) is available to the first 500 members.\n\nSee pricing: https://stackr-online.com/#pricing\n\nQuestions? Reply to this email.\n\n— The Stackr team`,
        });
      } catch (emailErr) {
        // Log but never block the signup response
        console.error("[waitlist] Email error:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[waitlist] Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
