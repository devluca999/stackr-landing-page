import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { render } from "@react-email/components";
import WaitlistConfirmation from "../../../emails/WaitlistConfirmation";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string = (body.email ?? "").toLowerCase().trim();
    const source: string = body.source ?? "landing_page";

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Insert into Supabase
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert({ email, source });

    if (dbError) {
      // Duplicate — still send a success response (don't re-send email)
      if (dbError.code === "23505") {
        return NextResponse.json({ success: true, message: "already_registered" });
      }
      console.error("[waitlist] DB error:", dbError.message);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    // Send confirmation email (non-blocking — don't fail the response if email fails)
    if (process.env.RESEND_API_KEY) {
      try {
        const html = await render(WaitlistConfirmation({ email }));
        await resend.emails.send({
          from: "Stackr <hello@stackr-online.com>",
          to: email,
          subject: "You're on the Stackr waitlist 🔥",
          html,
          replyTo: "hello@stackr-online.com",
        });
      } catch (emailErr) {
        // Log but don't block — user is on the list regardless
        console.error("[waitlist] Email error:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[waitlist] Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
