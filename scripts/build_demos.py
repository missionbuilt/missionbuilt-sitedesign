#!/usr/bin/env python3
"""
build_demos.py — Mission Built Demo Builder
Generates click-through demo HTML files from real skill templates.
Each demo injects sample data and a floating step-by-step overlay.

Usage: python3 scripts/build_demos.py
Output: public/demos/{spotter,approach,warmup}.html

Run from the project root: cd /path/to/missionbuilt-site && python3 scripts/build_demos.py
"""

import json
import os
import re
import sys

# ── Paths ────────────────────────────────────────────────────────────────────

SCRIPT_DIR    = os.path.dirname(os.path.abspath(__file__))
SITE_ROOT     = os.path.dirname(SCRIPT_DIR)
LOADOUT_ROOT  = os.path.join(os.path.dirname(SITE_ROOT), 'loadout')

SPOTTER_TEMPLATE  = os.path.join(LOADOUT_ROOT, 'missionbuilt-mcp/src/skill-content/spotter/spotter-template.html')
APPROACH_TEMPLATE = os.path.join(LOADOUT_ROOT, 'missionbuilt-mcp/src/skill-content/the-approach/approach-template.html')
WARMUP_SHELL      = os.path.join(LOADOUT_ROOT, 'missionbuilt-mcp/src/warmup-shell.rawjs')

OUT_DIR = os.path.join(SITE_ROOT, 'public', 'demos')
os.makedirs(OUT_DIR, exist_ok=True)

# ── Sample data ───────────────────────────────────────────────────────────────

SPOTTER_DATA = {
  "config": {
    "fontToolName": ""
  },
  "meta": {
    "epicTitle": "Comments on Dashboards",
    "epicDeck": "A review of the Comments on Dashboards epic. Nine areas, three judges each.",
    "author": "Jordan",
    "date": "20 May 2026"
  },
  "areas": [
    {
      "id": "a01",
      "num": "01",
      "cat": "Problem space",
      "title": "User & Problem",
      "deck": "Does the epic show deep understanding of the user's reality?",
      "verdict": "good",
      "verdictLabel": "Good lift",
      "pips": ["w", "w", "r"],
      "pipSub": "2 of 3 white",
      "excerpt": "Data analysts and ops leads lose context every time they need to discuss a specific chart. Today the workflow is: screenshot the chart, paste it into Slack, tag the owner, wait. The chart and the conversation live in different places. We've seen this in 47 support tickets and 3 enterprise interviews this quarter.\n\nWe are building threaded comments anchored directly to dashboard tiles. A comment thread lives on the tile. Mentions notify via the existing notification bell. No screenshot required.",
      "excerptLabel": "Problem section",
      "excerptMeta": "94 words · unchanged",
      "isEmpty": False,
      "notes": [
        { "type": "observation", "body": "Real evidence (47 tickets, 3 enterprise interviews) grounds the problem well. The Slack screenshot workflow is vivid and verifiable." },
        { "type": "suggest", "body": "Name the assumptions. You're assuming analysts own this workflow — does the screenshot habit also belong to executives? Different user, different solution." },
        { "type": "missing", "body": "No alternatives considered. What did you rule out? Linking from Slack back to the tile? Inline annotations? The strongest epics show the option space." },
        { "type": "recommend", "body": "Add one sentence on why this problem isn't solved today — is it a product gap, a permissions model constraint, or something else?" }
      ],
      "chips": ["Name assumptions", "Show option space", "Why not solved already?"]
    },
    {
      "id": "a02",
      "num": "02",
      "cat": "Competitive",
      "title": "Competitive landscape",
      "deck": "Who else solves this, and how?",
      "verdict": "good",
      "verdictLabel": "Good lift",
      "pips": ["w", "w", "w"],
      "pipSub": "3 of 3 white",
      "excerpt": "Tableau: Comments are available on views and workbooks. Users can tag others; notifications go via email. The thread is on the view, not the tile — you can't anchor a comment to a specific chart element.\n\nPower BI: Comments are in the service (not desktop), anchored to the page, not the visual. Mobile shows badges but no inline read.\n\nLooker: Tile-level discussions are an Enterprise feature. Anchor is tile ID. Mentions route to Slack or email via configured integration. The experience is closer to what we're building — but gated behind the top tier.",
      "excerptLabel": "Competitive section",
      "excerptMeta": "111 words · unchanged",
      "isEmpty": False,
      "notes": [
        { "type": "observation", "body": "All three majors named with specific, accurate detail. Workflow distinctions (page vs. tile anchor) are the right level of precision." },
        { "type": "observation", "body": "The Looker comparison is sharp — naming it as Enterprise-gated positions the free-tier play clearly." },
        { "type": "suggest", "body": "Add one sentence on what we do differently — the competitive section describes what others do but doesn't land the daylight." }
      ],
      "chips": ["Name the daylight explicitly"]
    },
    {
      "id": "a03",
      "num": "03",
      "cat": "Differentiation",
      "title": "Strategic differentiation",
      "deck": "Why does this win from your platform?",
      "verdict": "no-lift",
      "verdictLabel": "No-lift",
      "pips": ["r", "r", "w"],
      "pipSub": "1 of 3 white · blocker",
      "excerpt": "Comments on dashboards is a widely-requested feature that will close a gap with Tableau and Power BI. Making it free for all paid tiers positions us well for mid-market.",
      "excerptLabel": "Differentiation section",
      "excerptMeta": "34 words · unchanged",
      "isEmpty": False,
      "notes": [
        { "type": "missing", "body": "No moat. The epic names catch-up, not differentiation. That's fine to say — but the epic doesn't say it explicitly." },
        { "type": "suggest", "body": "Write the press release sentence: what changes for the analyst on Monday morning? That framing will surface whether the value is sharp enough to commit to." },
        { "type": "recommend", "body": "If the bet is on distribution (free tier drives upgrades), name that as the strategy. Catch-up justified by expansion motion is a real answer." }
      ],
      "chips": ["State the strategy explicitly", "Write the press release sentence"]
    },
    {
      "id": "a04",
      "num": "04",
      "cat": "Solution",
      "title": "Solution approach",
      "deck": "How does the team plan to build this?",
      "verdict": "good",
      "verdictLabel": "Good lift",
      "pips": ["w", "w", "r"],
      "pipSub": "2 of 3 white",
      "excerpt": "Comments are anchored by tile ID. Thread storage: new comments table, FK to dashboard_id and tile_id. @-mention parsing happens in the input layer. Notification delivery reuses the existing notification service — new event type: comment_mention.\n\nAI decision: AI considered and declined. We explored LLM summarization of long threads; the risk of hallucinated synthesis on data discussions is too high. We'll revisit when confidence calibration improves.",
      "excerptLabel": "Solution section",
      "excerptMeta": "82 words · unchanged",
      "isEmpty": False,
      "notes": [
        { "type": "observation", "body": "Tile-ID anchor is the right call — it preserves the comment through dashboard edits, unlike page-level anchors." },
        { "type": "observation", "body": "AI decision is explicit and reasoned. The hallucination concern for data discussions is a good specific argument." },
        { "type": "missing", "body": "No skills-first consideration. Can comment threads be exposed via API or MCP tool so agents can read and write comments? One sentence on why in-app only is intentional." }
      ],
      "chips": ["Skills-first consideration"]
    },
    {
      "id": "a05",
      "num": "05",
      "cat": "Holistic",
      "title": "Holistic impact",
      "deck": "What else changes when this ships?",
      "verdict": "good",
      "verdictLabel": "Good lift",
      "pips": ["w", "w", "w"],
      "pipSub": "3 of 3 white",
      "excerpt": "Notifications team: new comment_mention event type required. Two-sprint dependency; scheduling aligned.\n\nMobile: badge on notification bell only. Inline read and compose deferred to Q3. Users on mobile will see the mention notification but must go to desktop to read the thread. Known gap, intentional sequencing.\n\nSearch: comment content is not indexed in v1. Known gap.\n\nPermissions: comments inherit dashboard permissions. A viewer can read but not post. This closes the ask from enterprise customers who don't want viewers cluttering threads.",
      "excerptLabel": "Holistic impact section",
      "excerptMeta": "96 words · unchanged",
      "isEmpty": False,
      "notes": [
        { "type": "observation", "body": "The mobile sequencing decision is well-reasoned and explicitly named. Users on mobile will know what to expect." },
        { "type": "observation", "body": "Notification team dependency is flagged and scheduled. The cascade is visible." },
        { "type": "suggest", "body": "Add one sentence: when mobile compose ships in Q3, does the notification architecture need to change again, or is it already built for that?" }
      ],
      "chips": ["Q3 mobile compose dependency check"]
    },
    {
      "id": "a06",
      "num": "06",
      "cat": "Packaging",
      "title": "Packaging & pricing",
      "deck": "Which tier, what model, and why?",
      "verdict": "good",
      "verdictLabel": "Good lift",
      "pips": ["w", "w", "r"],
      "pipSub": "2 of 3 white",
      "excerpt": "Free for all paid tiers (Starter, Growth, Enterprise). No usage metering in v1.\n\nRationale: comments are a collaboration feature, not a consumption feature. Metering per comment would create friction exactly where we want engagement. Looker gates this at Enterprise — we can position our free-tier availability as a win in competitive deals.\n\nPricing review: not required. This fits the existing model.",
      "excerptLabel": "Packaging section",
      "excerptMeta": "73 words · unchanged",
      "isEmpty": False,
      "notes": [
        { "type": "observation", "body": "The rationale is clear — collaboration vs. consumption framing is the right lens." },
        { "type": "suggest", "body": "Name the competitive pricing benchmark explicitly. Looker Enterprise is ~$65K/yr minimum. Free-tier availability is a meaningful GTM point." },
        { "type": "missing", "body": "What is the upsell hypothesis? If comments drive collaboration, what behavior signals that a Starter customer is ready for Growth?" }
      ],
      "chips": ["Name competitive benchmark", "Upsell hypothesis"]
    },
    {
      "id": "a07",
      "num": "07",
      "cat": "Launch",
      "title": "Launch readiness",
      "deck": "How does this get to customers?",
      "verdict": "no-lift",
      "verdictLabel": "No-lift",
      "pips": ["r", "r", "w"],
      "pipSub": "1 of 3 white · blocker",
      "excerpt": "Launch plan TBD. Will coordinate with marketing closer to ship date.",
      "excerptLabel": "Launch section",
      "excerptMeta": "13 words · unchanged",
      "isEmpty": False,
      "notes": [
        { "type": "missing", "body": "No documentation plan. Who writes the help article? By when? This is how customers get value without calling support." },
        { "type": "missing", "body": "No field enablement. Sales needs a one-liner for competitive deals (Looker = Enterprise tier, you = all paid). That's a specific deliverable." },
        { "type": "suggest", "body": "Name the release sequence: quiet rollout behind a flag? Beta group? Marquee announcement? Each has a different content surface requirement." }
      ],
      "chips": ["Doc plan", "Field enablement", "Release sequence"]
    },
    {
      "id": "a08",
      "num": "08",
      "cat": "Post-launch",
      "title": "Post-launch ownership",
      "deck": "Who watches what after it ships?",
      "verdict": "no-lift",
      "verdictLabel": "No-lift",
      "pips": ["r", "r", "r"],
      "pipSub": "0 of 3 white · blocker",
      "excerpt": "We'll track adoption in Amplitude.",
      "excerptLabel": "Post-launch section",
      "excerptMeta": "7 words · unchanged",
      "isEmpty": False,
      "notes": [
        { "type": "missing", "body": "No telemetry events specified. What events get logged? comment_created, comment_mention_sent, thread_read? The instrumentation plan should be in the epic." },
        { "type": "missing", "body": "No success criteria. What does adoption look like in 90 days? A threshold with a number is the difference between 'tracking adoption' and actually knowing if it worked." },
        { "type": "missing", "body": "No owner named for post-launch review. Who looks at the dashboard each week?" },
        { "type": "recommend", "body": "Propose a 30/60/90-day check-in cadence with a specific metric threshold. If adoption is below X at 60 days, what does the team do?" }
      ],
      "chips": ["Telemetry events", "Success criteria with numbers", "Named owner"]
    },
    {
      "id": "a09",
      "num": "09",
      "cat": "Governance",
      "title": "Trust, governance & auditability",
      "deck": "Safe to ship? Compliant? Transparent?",
      "verdict": "no-lift",
      "verdictLabel": "No-lift",
      "pips": ["w", "r", "r"],
      "pipSub": "1 of 3 white · blocker",
      "excerpt": "Comments inherit dashboard permissions. Admins can delete any comment.",
      "excerptLabel": "Governance section",
      "excerptMeta": "11 words · unchanged",
      "isEmpty": False,
      "notes": [
        { "type": "missing", "body": "No data retention policy. How long do comments live? What happens when a dashboard is deleted? Enterprise customers will ask." },
        { "type": "missing", "body": "No moderation story beyond admin delete. Can workspace owners review flagged content? Can a comment be edited with an audit trail?" },
        { "type": "suggest", "body": "Add one sentence on PII handling: @-mentions store user IDs. When a user is deprovisioned, what happens to their threads?" },
        { "type": "recommend", "body": "Enterprise customers will ask about export: can comment history be exported for compliance? Even 'not in v1, roadmap item' is better than silence." }
      ],
      "chips": ["Data retention", "Moderation story", "PII on deprovisioning"]
    }
  ]
}

# ── APPROACH_DATA — Rogue Fitness ─────────────────────────────────────────────

APPROACH_DATA = {
  "config": {
    "fontToolName": ""
  },
  "meta": {
    "company":      "Rogue Fitness",
    "contact":      "Jock Padgett",
    "contactTitle": "Chief Technology Officer",
    "seller":       "Mike (AE)",
    "se":           "Sarah (SE)",
    "callTime":     "14:30 ET",
    "callDate":     "Wed 20 May 2026",
    "briefNumber":  "001",
    "deck":         "A pre-call brief for the first meeting with Jock Padgett, CTO — selling Elastic Security into the Rogue Fitness stack.",
    "sourceCount":  "12",
    "generated":    "20 May 2026",
    "readingTime":  "~12 min"
  },
  "meddpicc": {
    "title": "Where we stand on the deal.",
    "deck": "Eight dimensions, scored from public intel. **Pain** is confirmed — Padgett named it publicly at DefCon 31.",
    "cells": [
      {
        "letter": "M", "label": "Metrics",
        "status": "partial",
        "headline": "Breach cost and OT downtime are the right anchors",
        "evidence": "No named baseline yet. Rogue runs a $700M+ DTC operation — downtime costs are real. Use manufacturing peer breach data to start the conversation.",
        "next": "Ask: 'What does an hour of line downtime cost you, ballpark?'"
      },
      {
        "letter": "E", "label": "Economic Buyer",
        "status": "partial",
        "headline": "Padgett likely owns the decision — Henniger above a threshold",
        "evidence": "Bill Henniger is founder-operator. Padgett has broad mandate. Signing threshold unknown.",
        "next": "Confirm authority in back half of call."
      },
      {
        "letter": "D", "label": "Decision Criteria",
        "status": "unknown",
        "headline": "Not formalized — early enough to shape",
        "evidence": "No public RFP or vendor scorecard visible. Conference talks emphasize operational visibility over compliance.",
        "next": "Ask: 'How will you know which platform fits?'"
      },
      {
        "letter": "D", "label": "Decision Process",
        "status": "unknown",
        "headline": "Founder-led, fast — mechanics unknown",
        "evidence": "Private company, no PE, no board delays. Henniger moves quickly when he decides.",
        "next": "Ask: 'Walk me through how a decision like this gets made here.'"
      },
      {
        "letter": "P", "label": "Paper Process",
        "status": "unknown",
        "headline": "No procurement data visible",
        "evidence": "Private company. No SOC 2 mandate visible. Rogue has in-house legal.",
        "next": "Defer to call 2 unless Padgett raises it."
      },
      {
        "letter": "I", "label": "Identify Pain",
        "status": "confirmed",
        "headline": "Named publicly — OT/IT convergence and MILO fleet visibility",
        "evidence": "DefCon 31 (Aug 2023): 'Security has to live where the work happens.' OT/IT gap and MILO fleet monitoring cited by name.",
        "next": "Quote the DefCon phrase. Don't re-discover what he already named."
      },
      {
        "letter": "C", "label": "Champion",
        "status": "partial",
        "headline": "Padgett is likely buyer and champion in one",
        "evidence": "Military background, public commitment to the problem, broad technical mandate.",
        "next": "Identify a SecOps ally by call 2."
      },
      {
        "letter": "C", "label": "Competition",
        "status": "partial",
        "headline": "Splunk incumbent inferred from job posts",
        "evidence": "Three open roles require 'Splunk or equivalent SIEM experience.' No direct confirmation.",
        "next": "Ask: 'What are you running today for SIEM and endpoint?'"
      }
    ]
  },
  "sections": [
    {
      "id": "snapshot",
      "number": "01",
      "for": "the AE",
      "title": "Company snapshot.",
      "deck": "What they do, how they make money, and what shape they're in.",
      "tldr": "Founder-led. Private. **$700M+ revenue**. DTC e-commerce is the spine. **$45M manufacturing expansion** broke ground in West Jefferson, March 2026.",
      "prose": [
        {
          "type": "p",
          "text": "Founded 2006 by Bill Henniger in Columbus, OH. Approximately 1,400 employees. Rogue Fitness is the dominant US manufacturer of strength equipment — barbells, power racks, and accessories. Revenue is DTC-first via roguefitness.com, with Amazon and limited wholesale as secondary channels.",
          "source": { "text": "roguefitness.com · About page", "tier": "company" }
        },
        {
          "type": "pull",
          "text": "Five more years of demand we already have on the books — that's why we're building.",
          "cite": "Bill Henniger, Columbus Business First · March 2026"
        },
        {
          "type": "facts",
          "items": [
            { "k": "Founded",   "v": "2006",          "note": "Columbus, OH" },
            { "k": "Revenue",   "v": "$700M+",        "note": "FY24, triangulated" },
            { "k": "Headcount", "v": "~1,400",        "note": "Manufacturing + corporate" },
            { "k": "Capex",     "v": "$45M",          "note": "West Jefferson plant, Mar 2026" },
            { "k": "Model",     "v": "DTC + Amazon",  "note": "Shopify Plus storefront" }
          ]
        }
      ],
      "action": "Rogue is in expansion mode. _Lead with operational scale_ — the $45M build and 1,400-person headcount mean attack surface is growing faster than the security team. That's the opening."
    },
    {
      "id": "leadership",
      "number": "02",
      "for": "the AE",
      "title": "Leadership & the buyer.",
      "deck": "Who's in the room, what they care about, and what they've said in public.",
      "tldr": "**Jock Padgett, CTO** — prior military, broad mandate, publicly committed to the OT/IT security problem. He is the buyer and the champion.",
      "prose": [
        {
          "type": "p",
          "text": "Padgett joined Rogue as CTO after a military career. His public profile emphasizes operational technology security and the challenge of securing physical manufacturing environments connected to IP networks.",
          "source": { "text": "LinkedIn · Jock Padgett", "tier": "social" }
        },
        {
          "type": "pull",
          "chip": { "text": "I · Pain", "status": "confirmed" },
          "text": "Security has to live where the work happens — not in a dashboard nobody checks until after the incident.",
          "cite": "Jock Padgett · DefCon 31, August 2023"
        },
        {
          "type": "p",
          "text": "Bill Henniger (founder/CEO) is operationally active. He controls capital allocation. Above a threshold — likely $500K-$1M — he will be in the room. The call today is the right level for technical qualification.",
          "source": { "text": "Columbus Business First · March 2026", "tier": "press" }
        }
      ],
      "action": "Reference the DefCon quote by name — _'security where the work happens'_ — early in the call. It shows you did the work and frames the product conversation before he has to re-explain the problem."
    },
    {
      "id": "financial",
      "number": "03",
      "for": "the AE",
      "title": "Financial posture.",
      "deck": "Is the money there? Is the timing right?",
      "tldr": "**Active capital deployment.** $45M in physical plant. Hiring in engineering and IT security. Private — no earnings pressure, decision speed is high.",
      "prose": [
        {
          "type": "p",
          "text": "Rogue is privately held with no PE or VC overhang. Henniger controls the balance sheet. The $45M West Jefferson expansion signals confidence in demand — this is not a company managing costs, it's a company investing in scale.",
          "source": { "text": "Columbus Business First · March 2026", "tier": "press" }
        },
        {
          "type": "facts",
          "items": [
            { "k": "Ownership",  "v": "Founder-held",  "note": "No PE/VC" },
            { "k": "Cap spend",  "v": "$45M",          "note": "Active, March 2026" },
            { "k": "Hiring",     "v": "IT Security",   "note": "3 open roles (LinkedIn)" },
            { "k": "Timing",     "v": "High",          "note": "Expansion = growing attack surface" }
          ]
        }
      ],
      "action": "Three open IT security roles are a buying signal. Name it: _'It looks like you're building out the security team — is there a platform play that would make those hires more effective faster?'_"
    },
    {
      "id": "industry",
      "number": "04",
      "for": "the AE",
      "title": "Industry context.",
      "deck": "What's happening in manufacturing security right now?",
      "tldr": "Manufacturing is the **#2 ransomware target** globally. OT/IT convergence is the headline risk — exactly what Padgett named at DefCon.",
      "prose": [
        {
          "type": "p",
          "text": "Manufacturing surpassed finance as the second most-targeted sector for ransomware in 2024 (IBM X-Force). The attack pattern is consistent: IT network compromise leads to OT lateral movement, triggering line shutdowns. Average recovery cost: $4.7M per incident.",
          "source": { "text": "IBM X-Force Threat Intelligence Index 2025", "tier": "" }
        },
        {
          "type": "pull",
          "text": "The attackers don't distinguish between the office network and the production floor. But most security tools do.",
          "cite": "Dragos ICS Threat Landscape Report · 2025"
        }
      ],
      "action": "The industry context is Padgett's home turf — he knows it. Use it as confirmation, not discovery. _'You called this at DefCon two years ago. The IBM data now backs you up.'_"
    },
    {
      "id": "signal",
      "number": "05",
      "for": "the AE",
      "title": "Recent signal.",
      "deck": "What's changed in the last 90 days?",
      "tldr": "**$45M plant expansion** broke ground March 2026. **Three IT security hires** active on LinkedIn. No public security incidents.",
      "prose": [
        {
          "type": "facts",
          "items": [
            { "k": "Mar 2026",  "v": "$45M plant broke ground",    "note": "West Jefferson, OH" },
            { "k": "Apr 2026",  "v": "3 IT security roles posted", "note": "LinkedIn — SIEM/endpoint required" },
            { "k": "May 2026",  "v": "No public incidents",        "note": "Clean public record" }
          ]
        },
        {
          "type": "p",
          "text": "The job posts are the most actionable signal. All three require 'Splunk or equivalent SIEM experience' — which suggests an incumbent evaluation is already in motion or they're formalizing around an existing deployment.",
          "source": { "text": "LinkedIn Jobs · Rogue Fitness", "tier": "social" }
        }
      ],
      "action": "The SIEM job posts are an opening. _'We saw you're hiring for SIEM experience — are you formalizing a platform or evaluating options?'_ Either answer sets up the demo."
    },
    {
      "id": "stack",
      "number": "06",
      "for": "the SE",
      "title": "Stack & integrations.",
      "deck": "What they're running and where Elastic fits.",
      "tldr": "**Shopify Plus** storefront. **NetSuite** ERP. MILO fleet on the OT side — the visibility gap Padgett named. SIEM: **Splunk inferred**, not confirmed.",
      "prose": [
        {
          "type": "table",
          "rows": [
            { "layer": "Storefront",  "tool": "Shopify Plus",    "status": "Native",   "statusClass": "",    "note": "DTC core. Standard connector." },
            { "layer": "ERP",         "tool": "NetSuite",        "status": "Native",   "statusClass": "",    "note": "Manufacturing + finance." },
            { "layer": "OT Fleet",    "tool": "MILO (proprietary)", "status": "Gap",   "statusClass": "gap", "note": "No visibility layer confirmed." },
            { "layer": "SIEM",        "tool": "Splunk (inferred)", "status": "Confirm", "statusClass": "unk", "note": "Job posts. Confirm on call." },
            { "layer": "Endpoint",    "tool": "Unknown",         "status": "Confirm",  "statusClass": "unk", "note": "Ask." },
            { "layer": "Cloud",       "tool": "AWS (inferred)",  "status": "Confirm",  "statusClass": "unk", "note": "Shopify Plus + NetSuite point to AWS." }
          ]
        },
        {
          "type": "p",
          "text": "The MILO fleet is proprietary Rogue equipment — connected machines used in fulfillment and manufacturing. No commercial monitoring layer is visible. This is the gap Padgett named at DefCon and the highest-value Elastic integration opportunity.",
          "source": { "text": "DefCon 31 talk abstract · 2023", "tier": "press" }
        }
      ],
      "action": "Lead the SE demo with MILO fleet visibility — it's the confirmed pain, it's a gap, and it's where Elastic Security has native OT support. Splunk displacement is the secondary conversation."
    },
    {
      "id": "security",
      "number": "07",
      "for": "the SE",
      "title": "Public security events.",
      "deck": "Any incidents, CVEs, or threat activity touching Rogue or their stack?",
      "tldr": "**No public incidents against Rogue.** Shopify Plus and NetSuite have each had advisories in the last 12 months — prep for questions.",
      "prose": [
        {
          "type": "p",
          "text": "No ransomware incidents, breach disclosures, or regulatory actions against Rogue Fitness are in the public record. Clean history is common for private manufacturers — it often reflects underreporting, not absence of risk.",
          "source": { "text": "HaveIBeenPwned · Rogue domain check", "tier": "" }
        },
        {
          "type": "facts",
          "items": [
            { "k": "Rogue direct",  "v": "No public incidents",       "note": "Clean as of May 2026" },
            { "k": "Shopify Plus",  "v": "1 advisory (Oct 2025)",    "note": "GraphQL rate-limit bypass, patched" },
            { "k": "NetSuite",      "v": "1 CVE (Dec 2025)",         "note": "SSRF in SuiteScript, patched" }
          ]
        }
      ],
      "action": "If Padgett asks about their stack's exposure history, be ready on the Shopify and NetSuite advisories. Frame as _'here's how Elastic would have caught this in your environment'_ — not as FUD."
    },
    {
      "id": "demos",
      "number": "08",
      "for": "the SE",
      "title": "Demo prep.",
      "deck": "What to show, what to skip, and in what order.",
      "tldr": "**Lead with OT visibility** (MILO fleet gap). Transition to SIEM comparison if Splunk is confirmed. End with the unified timeline — it's the closer.",
      "prose": [
        {
          "type": "facts",
          "items": [
            { "k": "Demo 1",   "v": "OT/IT unified view",      "note": "MILO fleet as the hook. 5 min." },
            { "k": "Demo 2",   "v": "Alert triage workflow",   "note": "Show speed vs. Splunk. 5 min." },
            { "k": "Demo 3",   "v": "Unified timeline",        "note": "IT + OT in one view. 3 min. Closer." },
            { "k": "Skip",     "v": "SIEM feature matrix",     "note": "Don't lead with feature comparison." }
          ]
        }
      ],
      "action": "If Splunk is confirmed, ask: _'When you look at a Splunk alert, how many clicks does it take to see what happened on the endpoint?'_ Then show the Elastic answer in the demo."
    },
    {
      "id": "opener",
      "number": "09",
      "for": "both",
      "title": "Opener & discovery.",
      "deck": "What to say in the first 90 seconds, and the questions that follow.",
      "tldr": "Root the opener in Padgett's DefCon quote. It's the fastest way to signal you did the work and create space for him to talk.",
      "prose": [
        {
          "type": "opener",
          "script": "Jock, thanks for making time. I want to be upfront — I came into this call having done some homework. You gave a talk at DefCon two years ago about the gap between the office network and the production floor, and you said something I wrote down: 'Security has to live where the work happens.' We've spent the last three years building exactly that. Before I show you anything, I want to understand whether that problem has gotten better or worse since 2023, and what changed with the West Jefferson expansion. That's my first question.",
          "beats": [
            "Pause. He will answer. If he says 'it's gotten worse,' that's your buying signal and the rest of the call is qualification.",
            "If he redirects to Splunk or an existing vendor, note it and pivot: 'What's the gap you're trying to close that you're not closing with what you have?'"
          ]
        },
        {
          "type": "questions",
          "items": [
            {
              "chip": { "text": "I · Pain", "status": "confirmed" },
              "text": "Since the West Jefferson plant broke ground, has the OT/IT gap gotten harder to manage, or has your team solved the visibility problem you named at DefCon?"
            },
            {
              "chip": { "text": "C · Competition", "status": "partial" },
              "text": "What are you running today for SIEM and endpoint? Are you formalizing a platform, or is this an evaluation?"
            },
            {
              "chip": { "text": "E · Economic Buyer", "status": "partial" },
              "text": "If we get to a proof of concept, who else needs to be in that conversation — is this your call, or does Bill weigh in on platform decisions?"
            },
            {
              "chip": { "text": "D · Criteria", "status": "unknown" },
              "text": "How will you know which platform fits? What does the winning vendor need to prove?"
            }
          ]
        }
      ],
      "action": "If the call goes well, close with a PoC ask scoped to the MILO fleet. _'What would it take to run a 30-day proof on the OT side only — no production change, read-only telemetry?'_ Low risk for them, high signal for us."
    }
  ],
  "actDivider": {
    "kicker": "Handoff · For Sarah, the SE",
    "title": "Technical depth.",
    "deck": "Stack, security events, demo prep, and the discovery questions Sarah runs in the back half. Read before the call, not during."
  },
  "product": "Elastic Security pre-call brief",
  "version": "v0.2.4"
}

# ── WARMUP_DATA — Rogue Fitness CISO morning brief ────────────────────────────

WARMUP_DATA = {
  "config": {
    "name":          "Alex",
    "mode":          "CISO",
    "company":       "Rogue Fitness",
    "sector":        "Manufacturing",
    "reportDate":    "Wednesday, 20 May 2026",
    "updated":       "20 May 2026",
    "lastRun":       "2026-05-19",
    "dateRange":     "May 13 – May 20, 2026",
    "sourcesActive": 9,
    "sourcesQuiet":  3,
    "showQuote":     True,
    "scanTime":      "06:14 ET",
    "timezone":      "ET",
    "region":        "US",
    "vendors":       "Shopify Plus, NetSuite",
    "interests":     "powerlifting, garage gym",
    "totalLinks":    14,
    "skipScan":      False,
    "searchDepth":   "standard"
  },
  "sections": [
    {
      "id":    "threat",
      "label": "Threat Landscape",
      "sub":   "Active campaigns and fresh exploitation. What your stack should be watching for today.",
      "note":  None,
      "items": [
        {
          "dot": "d1", "src": "CISA",
          "tags": [{"cls": "t-alert", "text": "KEV ADDED"}, {"cls": "t-mitre", "text": "T1190"}],
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
          "hl": "CISA adds Ivanti EPMM auth bypass to KEV — federal patch deadline June 3.",
          "deck": "The vulnerability allows unauthenticated remote code execution on mobile device management servers; manufacturing sector has high MDM exposure.",
          "body": "CISA confirmed active exploitation of CVE-2025-4427 in Ivanti Endpoint Manager Mobile. The flaw bypasses authentication on the EPMM API, granting full device management access. Federal agencies have until June 3 to patch. The manufacturing sector's reliance on MDM for OT-adjacent mobile devices makes this relevant outside the federal context.",
          "date": "2026-05-19"
        },
        {
          "dot": "d1", "src": "Dragos",
          "tags": [{"cls": "t-mitre", "text": "T0856"}],
          "url": "https://www.dragos.com/threat-activity-groups/",
          "hl": "VOLTZITE expands targeting to US mid-market OT environments.",
          "body": "Dragos reports VOLTZITE — a China-nexus threat actor — has shifted from critical infrastructure to mid-market manufacturing targets with OT/IT convergence. Initial access via exposed VPN appliances; lateral movement into historian and SCADA-adjacent systems. No Rogue-specific indicators, but the profile matches.",
          "date": "2026-05-18"
        },
        {
          "dot": "d2", "src": "Shodan Monitor",
          "tags": [],
          "url": "https://monitor.shodan.io",
          "hl": "Shopify Plus API endpoint newly indexed — review access controls.",
          "body": "A new Shopify Plus storefront API endpoint at your domain appeared in Shodan indexing this week. The endpoint appears to be a staging webhook receiver. Recommend verifying it is not publicly accessible without authentication.",
          "date": "2026-05-17"
        }
      ]
    },
    {
      "id":    "ai",
      "label": "AI Intelligence",
      "sub":   "LLM risk, agentic attack surface, and model supply chain. The vectors your AI vendors aren't leading with.",
      "note":  None,
      "items": [
        {
          "dot": "d2", "src": "OWASP",
          "tags": [{"cls": "t-community", "text": "COMMUNITY"}],
          "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
          "hl": "OWASP updates LLM Top 10 — prompt injection now the #1 risk for agentic deployments.",
          "deck": "As agentic AI tools touch more enterprise systems, prompt injection via document content or API responses becomes a primary attack vector, not a theoretical one.",
          "body": "OWASP's updated LLM Application Security Top 10 elevates prompt injection to the leading risk, with a new subcategory for indirect injection via data retrieval (RAG attacks). For manufacturing companies adopting AI-assisted procurement or quality control, any document-ingestion pipeline is a potential injection surface. The guidance recommends sandboxing agent actions and adding human-in-the-loop gates for consequential operations.",
          "date": "2026-05-16"
        }
      ]
    },
    {
      "id":    "vertical",
      "label": "Manufacturing Security",
      "sub":   "OT/IT convergence, supply chain risk, and sector-specific threat intelligence for manufacturing environments.",
      "note":  None,
      "items": [
        {
          "dot": "d1", "src": "Claroty",
          "tags": [{"cls": "t-alert", "text": "SECTOR REPORT"}],
          "url": "https://claroty.com/team82/research",
          "hl": "42% of manufacturing OT devices have at least one critical-severity CVE — Q1 2026 State of XIoT.",
          "deck": "The attack surface for connected manufacturing environments grew faster in Q1 2026 than any prior quarter, driven by accelerated OT/IT integration projects.",
          "body": "Claroty's Q1 2026 State of XIoT Security report finds that 42% of OT devices in manufacturing environments carry at least one critical-severity CVE, up from 35% in Q4 2025. The increase correlates with accelerated OT/IT integration projects — the same expansion dynamic Rogue Fitness is running with the West Jefferson plant. Legacy PLCs and historian servers top the vulnerability list.",
          "date": "2026-05-15"
        },
        {
          "dot": "d2", "src": "NIST",
          "tags": [],
          "url": "https://www.nist.gov/cybersecurity",
          "hl": "NIST finalizes guidance on OT network segmentation under CSF 2.0.",
          "body": "NIST published a new practice guide on OT network segmentation mapped to CSF 2.0 Govern and Protect functions. The guidance is non-prescriptive but gives auditors a reference framework. Relevant if Rogue's West Jefferson expansion triggers any compliance review.",
          "date": "2026-05-14"
        }
      ]
    },
    {
      "id":    "interests",
      "label": "Special Interests",
      "sub":   "Powerlifting competition results, garage gym equipment releases, and strength community signal.",
      "note":  None,
      "items": [
        {
          "dot": "d3", "src": "IPF",
          "tags": [{"cls": "t-community", "text": "○"}],
          "url": "https://www.powerlifting.sport",
          "hl": "Amanda Lawrence sets new IPF Women's 76kg world record at 2026 Classic Worlds — 262.5kg squat.",
          "deck": "Lawrence's third consecutive title and a 5kg improvement on her own squat record, cementing her place as the dominant 76kg lifter in the federation era.",
          "body": "Amanda Lawrence squatted 262.5kg, benched 145kg, and totaled 657.5kg at the IPF World Classic Powerlifting Championships, breaking her own squat world record in the process. The total places her well above the historical mark for the weight class. Competition was held in Almaty, Kazakhstan.",
          "date": "2026-05-18"
        },
        {
          "dot": "d3", "src": "Garage Gym Reviews",
          "tags": [{"cls": "t-community", "text": "○"}],
          "url": "https://www.garagegymreviews.com",
          "hl": "Rogue ships the Ohio Bar v4 — knurling update and new cerakote options reviewed.",
          "body": "Garage Gym Reviews published a first-look on Rogue's Ohio Bar v4, noting a refined medium knurling pattern and three new cerakote finish options. The reviewer flagged the updated center knurling as an improvement for Olympic lifting crossover. Price unchanged at $395.",
          "date": "2026-05-16"
        },
        {
          "dot": "d3", "src": "Starting Strength",
          "tags": [{"cls": "t-community", "text": "○"}],
          "url": "https://startingstrength.com",
          "hl": "Starting Strength Classic results: Rogue-sponsored meet draws record 340 lifters.",
          "body": "The 2026 Starting Strength Classic in Columbus drew 340 lifters across 12 weight classes, making it the largest SS-sanctioned event on record. Rogue provided barbell and equipment sponsorship. Top open total in the men's 110kg class: 712.5kg.",
          "date": "2026-05-17"
        }
      ]
    },
    {
      "id":    "social",
      "label": "Social Signal",
      "sub":   "Security community discourse — what practitioners are saying, debating, and warning about this week.",
      "note":  None,
      "items": [
        {
          "dot": "d3", "src": "Mastodon / Infosec.exchange",
          "tags": [{"cls": "t-community", "text": "COMMUNITY"}],
          "url": "https://infosec.exchange",
          "hl": "Thread: 'Your SOC tooling was never designed for OT — and the vendors know it.'",
          "deck": "A long-running discussion on the gap between SOC platforms built for IT telemetry and the OT/ICS environments that manufacturing CISOs are now responsible for.",
          "body": "A thread started by a practitioner at a mid-size manufacturer is drawing significant engagement. The core argument: SOC platforms were built around log ingestion from IT infrastructure; OT telemetry (ladder logic changes, historian writes, PLC firmware deltas) requires different parsers, different correlation rules, and different analyst training. Several CISOs reply with variations of 'we're running two separate tools and calling it a strategy.' Relevant framing for positioning Elastic's OT integration story.",
          "date": "2026-05-19"
        },
        {
          "dot": "d3", "src": "Robert Lee · LinkedIn",
          "tags": [{"cls": "t-community", "text": "○"}],
          "url": "https://www.linkedin.com/in/robertmlee/",
          "hl": "Robert Lee (Dragos CEO): 'The VOLTZITE expansion should change how mid-market manufacturers think about threat intel.'",
          "body": "Lee's post argues that VOLTZITE's shift from critical infrastructure to mid-market OT targets invalidates the 'we're not a target' assumption that many manufacturing security teams still operate on. He calls for sector-specific threat intel as a baseline, not a luxury. 847 reactions in 18 hours.",
          "date": "2026-05-18"
        }
      ]
    }
  ],
  "sources": [
    {"nm": "CISA KEV Catalog",             "dom": "cisa.gov",             "dot": "d1", "ct": "1 item",  "status": "active"},
    {"nm": "Dragos Threat Intelligence",   "dom": "dragos.com",           "dot": "d1", "ct": "1 item",  "status": "active"},
    {"nm": "Shodan Monitor",               "dom": "monitor.shodan.io",    "dot": "d2", "ct": "1 item",  "status": "active"},
    {"nm": "OWASP",                        "dom": "owasp.org",            "dot": "d2", "ct": "1 item",  "status": "active"},
    {"nm": "Claroty Team82",               "dom": "claroty.com",          "dot": "d1", "ct": "1 item",  "status": "active"},
    {"nm": "NIST Cybersecurity",           "dom": "nist.gov",             "dot": "d1", "ct": "1 item",  "status": "active"},
    {"nm": "IPF",                          "dom": "powerlifting.sport",   "dot": "d3", "ct": "1 item",  "status": "active"},
    {"nm": "Garage Gym Reviews",           "dom": "garagegymreviews.com", "dot": "d3", "ct": "1 item",  "status": "active"},
    {"nm": "Infosec.exchange",             "dom": "infosec.exchange",     "dot": "d3", "ct": "1 item",  "status": "active"},
    {"nm": "NSA Advisories",               "dom": "nsa.gov",              "dot": "d1", "ct": "—",       "status": "quiet"},
    {"nm": "MITRE ATT&CK",                 "dom": "attack.mitre.org",     "dot": "d1", "ct": "—",       "status": "quiet"},
    {"nm": "HackerNews",                   "dom": "news.ycombinator.com", "dot": "d3", "ct": "—",       "status": "quiet"}
  ],
  "safety": {
    "domains": [
      {"domain": "cisa.gov",             "verdict": "ALLOWLISTED"},
      {"domain": "dragos.com",           "verdict": "CLEAN"},
      {"domain": "monitor.shodan.io",    "verdict": "CLEAN"},
      {"domain": "owasp.org",            "verdict": "ALLOWLISTED"},
      {"domain": "claroty.com",          "verdict": "CLEAN"},
      {"domain": "nist.gov",             "verdict": "ALLOWLISTED"},
      {"domain": "powerlifting.sport",   "verdict": "CLEAN"},
      {"domain": "garagegymreviews.com", "verdict": "CLEAN"},
      {"domain": "infosec.exchange",     "verdict": "CLEAN"}
    ],
    "totalUrls": 14,
    "flagged":   0,
    "scannedAt": ""
  },
  "dates": {
    "CISA adds Ivanti EPMM": "2026-05-19",
    "VOLTZITE expands targeting": "2026-05-18",
    "Shopify Plus API endpoint newly indexed": "2026-05-17",
    "OWASP updates LLM Top 10": "2026-05-16",
    "42% of manufacturing OT devices": "2026-05-15",
    "NIST finalizes guidance on OT network segmentation": "2026-05-14",
    "Amanda Lawrence sets new IPF": "2026-05-18",
    "Rogue ships the Ohio Bar v4": "2026-05-16",
    "Starting Strength Classic results": "2026-05-17",
    "Thread: Your SOC tooling": "2026-05-19",
    "Robert Lee · LinkedIn": "2026-05-18"
  }
}

# ── Demo overlay ──────────────────────────────────────────────────────────────

def make_overlay(steps, skill_name):
    """Build the demo overlay script block."""
    steps_json = json.dumps(steps, ensure_ascii=False)
    return f"""
<!-- ═══════════════════════════════════════════════════════════════════════
     MISSION BUILT DEMO OVERLAY — {skill_name.upper()}
     Click-through walkthrough injected by scripts/build_demos.py
     ═══════════════════════════════════════════════════════════════════════ -->
<style>
  #mb-demo-overlay {{
    position: fixed;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 14px 20px 14px 22px;
    background: #1a1612;
    border: 1px solid #a8211a;
    border-left: 3px solid #a8211a;
    font-family: 'JetBrains Mono', 'Menlo', 'Consolas', monospace;
    box-shadow: 0 4px 24px rgba(0,0,0,0.35);
    min-width: 480px;
    max-width: min(680px, 94vw);
    color: #fffaeb;
    pointer-events: auto;
  }}
  #mb-demo-close {{
    position: absolute;
    top: 8px;
    right: 10px;
    background: none;
    border: none;
    color: #968974;
    font-family: inherit;
    font-size: 13px;
    cursor: pointer;
    padding: 2px 4px;
    line-height: 1;
  }}
  #mb-demo-close:hover {{ color: #fffaeb; }}
  #mb-demo-counter {{
    font-size: 10px;
    letter-spacing: 0.22em;
    color: #a8211a;
    text-transform: uppercase;
    flex-shrink: 0;
    white-space: nowrap;
  }}
  #mb-demo-body {{
    flex: 1;
    min-width: 0;
  }}
  #mb-demo-title {{
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #fffaeb;
    margin: 0 0 3px;
  }}
  #mb-demo-desc {{
    font-size: 12px;
    letter-spacing: 0.03em;
    color: #c8bea7;
    margin: 0;
    line-height: 1.5;
    white-space: normal;
  }}
  .mb-demo-btn {{
    background: none;
    border: 1px solid #3a342d;
    color: #fffaeb;
    font-family: inherit;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 6px 14px;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
    transition: border-color 120ms, color 120ms;
  }}
  .mb-demo-btn:hover {{ border-color: #a8211a; color: #a8211a; }}
  .mb-demo-btn:disabled {{ opacity: 0.4; cursor: default; }}
  .mb-demo-btn.primary {{ border-color: #a8211a; background: #a8211a; }}
  .mb-demo-btn.primary:hover {{ background: #c02a20; border-color: #c02a20; color: #fffaeb; }}
  @keyframes mb-pulse {{
    0%, 100% {{
      box-shadow:
        0 0 0 3px #fffaeb,
        0 0 0 6px #a8211a,
        0 0 18px 4px rgba(168,33,26,0.55);
    }}
    50% {{
      box-shadow:
        0 0 0 3px #fffaeb,
        0 0 0 8px #a8211a,
        0 0 28px 8px rgba(168,33,26,0.70);
    }}
  }}
  .mb-highlight {{
    outline: none !important;
    box-shadow:
      0 0 0 3px #fffaeb,
      0 0 0 6px #a8211a,
      0 0 18px 4px rgba(168,33,26,0.55) !important;
    animation: mb-pulse 1.6s ease-in-out infinite !important;
    position: relative !important;
    z-index: 1000 !important;
  }}
</style>
<script>
(function() {{
  'use strict';
  var STEPS = {steps_json};
  var current = 0;
  var prevHighlight = null;

  // Build overlay
  var ov = document.createElement('div');
  ov.id = 'mb-demo-overlay';
  ov.innerHTML =
    '<button id="mb-demo-close" title="Close demo">✕</button>' +
    '<span id="mb-demo-counter"></span>' +
    '<div id="mb-demo-body">' +
      '<p id="mb-demo-title"></p>' +
      '<p id="mb-demo-desc"></p>' +
    '</div>' +
    '<button class="mb-demo-btn" id="mb-demo-prev">← Prev</button>' +
    '<button class="mb-demo-btn primary" id="mb-demo-next"></button>';
  document.body.appendChild(ov);

  var $counter = document.getElementById('mb-demo-counter');
  var $title   = document.getElementById('mb-demo-title');
  var $desc    = document.getElementById('mb-demo-desc');
  var $prev    = document.getElementById('mb-demo-prev');
  var $next    = document.getElementById('mb-demo-next');
  var $close   = document.getElementById('mb-demo-close');

  function clearHighlight() {{
    if (prevHighlight) {{
      prevHighlight.classList.remove('mb-highlight');
      prevHighlight = null;
    }}
  }}

  function goTo(n) {{
    if (n < 0 || n >= STEPS.length) return;
    clearHighlight();
    current = n;
    var step = STEPS[current];

    $counter.textContent = (current + 1) + ' of ' + STEPS.length;
    $title.textContent   = step.title;
    $desc.textContent    = step.desc;
    $prev.disabled       = current === 0;
    $next.textContent    = current === STEPS.length - 1 ? 'Done' : 'Next →';

    if (step.selector) {{
      var el = document.querySelector(step.selector);
      if (el) {{
        el.classList.add('mb-highlight');
        // Use window.scrollTo() instead of el.scrollIntoView() — scrollIntoView()
        // propagates through iframe boundaries in Chrome and jerks the parent page.
        // window.scrollTo() is scoped to this iframe's document only.
        var rect = el.getBoundingClientRect();
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var target = scrollTop + rect.top - (window.innerHeight / 2) + (rect.height / 2);
        window.scrollTo({{ top: Math.max(0, target), behavior: 'smooth' }});
        prevHighlight = el;
      }}
    }}
  }}

  $prev.addEventListener('click', function() {{ goTo(current - 1); }});
  $next.addEventListener('click', function() {{
    if (current === STEPS.length - 1) {{
      clearHighlight();
      ov.style.display = 'none';
    }} else {{
      goTo(current + 1);
    }}
  }});
  $close.addEventListener('click', function() {{
    clearHighlight();
    ov.style.display = 'none';
  }});

  document.addEventListener('keydown', function(e) {{
    if (ov.style.display === 'none') return;
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'Escape')     {{ clearHighlight(); ov.style.display = 'none'; }}
  }});

  // Wait for JS rendering to settle before going to step 0
  setTimeout(function() {{ goTo(0); }}, 600);
}})();
</script>
"""

# ── Step definitions ──────────────────────────────────────────────────────────

SPOTTER_STEPS = [
    {
        "selector": ".wbar",
        "title": "The worksheet",
        "desc": "Epic title, overall verdict, and export — visible as soon as the brief renders."
    },
    {
        "selector": ".tracker",
        "title": "Nine areas at a glance",
        "desc": "Every area has a pip score and opens into a full critique. The grid is your at-a-glance read."
    },
    {
        "selector": ".area",
        "title": "Open an area",
        "desc": "Each area expands to show the epic excerpt, the critique notes, and the action buttons."
    },
    {
        "selector": ".status",
        "title": "The verdict",
        "desc": "Three judges, three pips. White = pass, red = fail. Two white = Good lift. Two red = No-lift."
    },
    {
        "selector": ".notes-pane",
        "title": "Critique notes",
        "desc": "Four note types: Missing (a gap), Suggest (a fix), Recommend (a stronger path), Observation (what's working)."
    },
    {
        "selector": ".note-actions",
        "title": "Accept or skip",
        "desc": "Accept Spotter's read as-is, or skip the area if it's not relevant to this review. Your call drives the final score."
    },
    {
        "selector": "[data-act='refine']",
        "title": "Chat to iterate",
        "desc": "Not satisfied with the read? Hit Refine with Spotter, type a note, and it rewrites the critique — tighter framing, a different angle, a sharper recommendation."
    },
    {
        "selector": ".export",
        "title": "Export when ready",
        "desc": "When areas are settled, export to HTML or Markdown. Share with the team or drop it into your epic archive."
    }
]

APPROACH_STEPS = [
    {
        "selector": ".head",
        "title": "The brief masthead",
        "desc": "Company, contact, seller and SE, call time, brief number — everything in the header before you scroll."
    },
    {
        "selector": ".toc",
        "title": "Jump to any section",
        "desc": "Nine sections across two acts. The table of contents gets you to any section in one click."
    },
    {
        "selector": "#snapshot",
        "title": "AE half: company snapshot",
        "desc": "Revenue, headcount, capex, business model — the context the AE needs before the first question."
    },
    {
        "selector": "#meddpicc",
        "title": "MEDDPICC scorecard",
        "desc": "Eight deal dimensions, scored from public intel. Confirmed, partial, or unknown — with a next action for each."
    },
    {
        "selector": ".act-divider",
        "title": "The handoff",
        "desc": "AE sections above. SE sections below. Both acts travel in one document — both get read before the call."
    },
    {
        "selector": "#stack",
        "title": "SE half: stack & integrations",
        "desc": "What they're running, where the gaps are, and what to confirm on the call. The SE's pre-call checklist."
    },
    {
        "selector": "#opener",
        "title": "Opener & discovery",
        "desc": "A 90-second verbatim opener rooted in a real public signal, plus MEDDPICC-tagged discovery questions."
    }
]

WARMUP_STEPS = [
    {
        "selector": ".masthead",
        "title": "Your morning brief",
        "desc": "Company, mode, date, and scan time at the top. Covers threat landscape, sector intel, special interests, and social signal."
    },
    {
        "selector": "#section-nav",
        "title": "Jump to any section",
        "desc": "The nav rail shows every section in today's brief. Click to jump directly; mark sections done as you read."
    },
    {
        "selector": "#threat",
        "title": "Threat landscape",
        "desc": "Active KEV entries, exploited vulnerabilities, and campaign signals. The lead item is the most urgent."
    },
    {
        "selector": "#interests",
        "title": "Special interests",
        "desc": "Your brief pulls in what you care about outside the office — powerlifting results, new equipment releases."
    },
    {
        "selector": "#link-safety",
        "title": "Link safety verified",
        "desc": "Every URL is checked against CISA allowlists and URLScan.io before it renders. Clean or excluded — no middle ground."
    },
    {
        "selector": ".tb-export",
        "title": "Export your brief",
        "desc": "Export to a self-contained HTML file or print to PDF. Your brief travels with you — no login required to read it."
    }
]

# ── Build functions ───────────────────────────────────────────────────────────

def build_spotter():
    print("Building spotter demo...")
    with open(SPOTTER_TEMPLATE, 'r', encoding='utf-8') as f:
        html = f.read()

    data_json = json.dumps(SPOTTER_DATA, ensure_ascii=False)

    # Inject SPOTTER_DATA — replace the placeholder
    html = html.replace('window.SPOTTER_DATA = __SPOTTER_DATA__;', f'window.SPOTTER_DATA = {data_json};')

    # Inject overlay before the real </body> tag.
    # Use rfind — spotter-template.html has '</body></html>' inside a JS string
    # literal (the export function), so str.replace hits that first. rfind
    # always finds the actual closing tag at the end of the file.
    overlay = make_overlay(SPOTTER_STEPS, 'The Spotter')
    idx = html.rfind('</body>')
    html = html[:idx] + overlay + '\n</body>' + html[idx + len('</body>'):]

    out_path = os.path.join(OUT_DIR, 'spotter.html')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"  → {out_path}")
    return True


def build_approach():
    print("Building approach demo...")
    with open(APPROACH_TEMPLATE, 'r', encoding='utf-8') as f:
        html = f.read()

    data_json = json.dumps(APPROACH_DATA, ensure_ascii=False)

    # Inject APPROACH_DATA — the template wraps it in try/catch
    html = html.replace('window.APPROACH_DATA = __APPROACH_DATA__;', f'window.APPROACH_DATA = {data_json};')

    # Inject overlay before the real </body> tag (rfind for safety).
    overlay = make_overlay(APPROACH_STEPS, 'The Approach')
    idx = html.rfind('</body>')
    html = html[:idx] + overlay + '\n</body>' + html[idx + len('</body>'):]

    out_path = os.path.join(OUT_DIR, 'approach.html')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"  → {out_path}")
    return True


def build_warmup():
    print("Building warmup demo...")
    with open(WARMUP_SHELL, 'r', encoding='utf-8') as f:
        shell_js = f.read()

    data_json     = json.dumps(WARMUP_DATA, ensure_ascii=False)
    overlay_html  = make_overlay(WARMUP_STEPS, 'The Warmup')

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>The Warmup · Morning Edition · Rogue Fitness</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500&family=Permanent+Marker&display=swap" rel="stylesheet">
</head>
<script id="warmup-tools">
// Demo mode: data is hardcoded below — no MCP bridge needed.
window.WARMUP_TOOLS = {{ dataTool: '' }};
window.WARMUP_DATA  = {data_json};
// Set a non-empty fontToolName so the shell's line-910 guard passes.
// Without this, the shell immediately shows an error banner.
window.WARMUP_DATA.config.fontToolName = 'warmup_get_fonts';
// Clear any stale data cache so Phase 1 (localStorage fast-paint) doesn't override demo data.
try {{ localStorage.removeItem('warmup-data-cache-v1'); }} catch(_) {{}}
// Intercept callMcpTool so any font requests return stub CSS immediately.
// Uses Object.defineProperty so the intercept applies whether window.cowork is
// already injected by Cowork desktop or injected later.
(function() {{
  var _STUB = [
    '/* demo — real fonts via Google Fonts CDN in <head> */',
    '@font-face {{ font-family: "Oswald"; font-weight: 400 700; src: local("Oswald"); }}',
    '@font-face {{ font-family: "Merriweather"; font-weight: 400 700; src: local("Merriweather"); }}',
    '@font-face {{ font-family: "JetBrains Mono"; font-weight: 400 500; src: local("JetBrains Mono"); }}'
  ].join('\\n');
  function _reply() {{ return Promise.resolve({{ content: [{{ type: 'text', text: _STUB }}] }}); }}
  function _patch(c) {{
    if (!c || c.__demoPatch) return;
    var orig = c.callMcpTool;
    c.callMcpTool = function(t, a) {{
      return t === 'warmup_get_fonts' ? _reply() : (orig ? orig.call(c, t, a) : Promise.reject('demo'));
    }};
    c.__demoPatch = true;
  }}
  _patch(window.cowork);
  try {{
    var _ref = window.cowork;
    Object.defineProperty(window, 'cowork', {{
      get: function() {{ return _ref; }},
      set: function(v) {{ _ref = v; _patch(_ref); }},
      configurable: true, enumerable: true
    }});
  }} catch(e) {{}}
}})();
</script>
<body><script>
{shell_js}
</script>
{overlay_html}
</body>
</html>"""

    out_path = os.path.join(OUT_DIR, 'warmup.html')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"  → {out_path}")
    return True


# ── Main ──────────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    print(f"Mission Built Demo Builder")
    print(f"Output: {OUT_DIR}\n")

    errors = []

    for name, fn, template_path in [
        ('Spotter',  build_spotter,  SPOTTER_TEMPLATE),
        ('Approach', build_approach, APPROACH_TEMPLATE),
        ('Warmup',   build_warmup,   WARMUP_SHELL),
    ]:
        if not os.path.exists(template_path):
            print(f"  ✗ {name}: template not found at {template_path}")
            errors.append(name)
        else:
            try:
                fn()
                print(f"  ✓ {name}")
            except Exception as e:
                print(f"  ✗ {name}: {e}")
                errors.append(name)

    print()
    if errors:
        print(f"Build finished with errors: {', '.join(errors)}")
        sys.exit(1)
    else:
        print("All three demos built successfully.")
        print()
        print("Next: embed in skill pages via <iframe>")
        print("  src='/demos/spotter.html'")
        print("  src='/demos/approach.html'")
        print("  src='/demos/warmup.html'")
