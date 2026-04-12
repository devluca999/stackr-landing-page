import { MetadataRoute } from 'next';

const COMPOUNDS = [
  'bpc-157','tb-500','ghk-cu','ipamorelin','cjc-1295','semax','selank',
  'epithalon','mots-c','retatrutide','semaglutide','nmn','resveratrol',
  'spermidine','metformin','rapamycin','alpha-gpc','l-theanine','lions-mane',
  'magnesium-l-threonate','glycine','apigenin','melatonin','creatine',
  'ashwagandha','berberine','tongkat-ali','fadogia-agrestis','omega-3',
  'vitamin-d3-k2','nac','quercetin','fisetin','coq10','rhodiola-rosea',
  'bacopa-monnieri','phosphatidylserine','beta-alanine','citrulline-malate',
  'l-carnitine','zinc-bisglycinate','melanotan-i','melanotan-ii',
  'dhea','egcg','lutein','pqq','pt-141','taurine','boron','hmb',
];

const STACKS = [
  'wolverine-recovery','bryan-johnson-blueprint','deep-focus-protocol',
  'huberman-deep-sleep','testosterone-foundation','senolytic-longevity',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://stackrapp.com';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                 lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/peptides`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/glossary`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/stacks`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${base}/#pricing`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const compoundPages: MetadataRoute.Sitemap = COMPOUNDS.map(slug => ({
    url: `${base}/peptides/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const stackPages: MetadataRoute.Sitemap = STACKS.map(slug => ({
    url: `${base}/stacks/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...compoundPages, ...stackPages];
}
