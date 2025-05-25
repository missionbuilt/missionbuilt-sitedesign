
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Chapter } from "@/data/chapters-data";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface PdfExportButtonProps {
  chapter: Chapter;
}

// Function to get the actual content from LogSections
const getSectionContent = (chapterId: number, sectionId: string) => {
  if (chapterId === 1) {
    switch (sectionId) {
      case "the-mission-is-the-magnet":
        return `Before I ever built products, I served in the U.S. Army as an Airborne intelligence sergeant. That experience — of working in service of something larger than myself, of making decisions under pressure with lives on the line — shaped everything that came after. I learned early that mission comes first. Not ego. Not recognition. Mission.

That mindset followed me from the military to cybersecurity, and into leadership roles where the stakes changed but the values stayed the same. Whether it was securing critical systems, helping build Elastic Security, or coaching in the gym, the goal has always been the same: real strength is lifting others.

One of the proudest chapters of my product career was building Endgame. We entered a brutally competitive market — going head-to-head with massive players like McAfee and CrowdStrike — and carved out real ground. Not because we had more money or brand recognition, but because we had something harder to copy: a clear mission. Protect high-value targets from nation-state level attacks. That focus, and the small, fierce team who rallied behind it, made all the difference.

At the heart of it was Nate Fick, a Marine officer turned tech CEO, and later the U.S. Ambassador for Cyberspace and Digital Policy. He led with conviction, clarity, and a deep respect for the mission. In all-hands meetings, Nate would remind us that we were an "elevator asset company" — that if the building burned down, the most important assets could still fit in the elevator. It wasn't the code or the tools. It was the people — the ones who understood the user's mission and had the passion to serve it.

That idea stuck with me. Nate's example reinforced what I learned in uniform: The success is the user's success. Your mission is their mission.

Metrics are the outcome of making your user successful. Yes, we need to measure them. But they are the result of serving the mission — not the reason for it.

There's a moment in every product meeting when the question slides in like it always does:

"How will we measure success?"

It's a good question — just not always a good first question.

In lifting, it's the same story. People chase PRs every week like the number on the barbell is the whole point. Add five pounds. Hit record. Post the clip. Repeat.

But metrics without mission? That's just noise. Pressure with no direction. Goals with no guts.

"The weight on the bar isn't the goal — it's the evidence of progress, not the destination."

We've all seen what happens when this mindset takes over. It's not a failure of talent — it's a failure of alignment. Cyberpunk 2077 didn't initially flop because the devs didn't care — far from it. The development team poured years into building something ambitious. But the pressure to hit a holiday launch window — a decision made at the executive level — overrode the mission of delivering a complete, polished experience. The result was a rocky release, millions in refunds, a reputational hit, and a stock crash.

To their credit, the team stuck with it. Years later, after patches and a reimagined DLC, the game has earned back much of the trust it lost — a testament to what happens when talented people are finally given the space to do the work right.

And we've seen what it looks like to protect the mission — even when it means stepping back. Simone Biles did exactly that in front of the entire world at the 2021 Olympics. Under unimaginable pressure, she chose long-term purpose over short-term performance. She knew something was off, and she honored that instinct.

"I have to focus on my mental health… if you don't, then you're not going to enjoy your score and you're not gonna succeed as much as you want to." - Simone Biles

Her move wasn't retreat — it was leadership. And in time, she returned to competition stronger, on her terms, and more respected than ever. A different kind of comeback — one powered by mission, not metrics.

Success isn't about hitting every metric. It's about refusing to lose yourself trying.

MORE THAN JUST GOOD INTENTIONS

Mission-driven isn't a poster in the break room or a bullet in a pitch deck. It's how you move — how you decide, how you show up when it's hard.

In a world that celebrates velocity, mission is quiet. But that doesn't make it weak. Mission gives you clarity when things get blurry and stamina when things get hard.

Take Patagonia. They once ran a campaign telling customers not to buy their jacket unless they truly needed it. Why? Because their values mattered more than their quarterly revenue.

Or SpaceX — aiming at goals that span decades, not quarters. It's not about idolizing companies. It's about recognizing what real mission-alignment looks like when the stakes are high and the timelines are long.

And it pays off. Research shows that people who believe in the purpose behind their work stay longer, burn out less, and deliver more.

WHEN METRICS ECLIPSE MEANING

Let's be clear: metrics matter. But only when they serve the mission — not when they become it.

Here's where teams lose the plot:
- They ship fast instead of shipping right.
- They chase signups instead of learning why users leave.
- They brag about launches and ignore long-term usage.

When dates drive development, teams start cutting corners. Feedback loops close. Energy fades. You build momentum toward a number — not toward value.

In the gym, this is ego lifting. In product, it's just as risky. It looks like burned-out engineers, brittle systems, and growth that collapses the second you stop pushing it uphill.

THE FULFILLMENT FLYWHEEL (POWERED BY PURPOSE)

There's a better model. One that's as relevant in combat as it is in code — or in the squat rack.

It's called the OODA Loop: Observe, Orient, Decide, Act. Developed for fighter pilots. Adopted by startups. Powered by clarity.

But here's the catch — without a clear mission, the whole loop spins out.

In lifting, it's trusting the plan instead of maxing out because you feel good that day. In product, it's waiting to ship because your users aren't ready — even if your OKRs are.

Mission turns chaos into clarity. It makes every rep count. Every release matter. Every decision directional.

This is the real flywheel of fulfillment:
- Mission fuels clarity.
- Clarity powers resilience.
- Resilience drives real progress.
- And real progress reinforces the mission.

That's the throughline. That's what keeps us going.
Metrics follow. But the mission leads.

[TABLE: OODA Loop Analysis]

OODA Stage | With Mission-Driven Focus | Without It
Observe | You know what matters to watch | You collect everything, drowning in noise
Orient | Purpose helps filter & frame inputs | Metrics get over-prioritized, lose big picture
Decide | Mission becomes a north star for action | Risk of chasing vanity wins or short-term gains
Act | Execution has energy and resolve | Actions may be misaligned or half-hearted`;
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  if (chapterId === 2) {
    switch (sectionId) {
      case "the-myth-of-overnight-success":
        return `We've all heard the stories.

The product that "took off overnight."

The lifter who casually pulls four plates like they've always been able to.

The founder in a garage who changes the world with a single keynote.

It's tempting to believe that mastery happens like that — in a flash.

But that's not really how it works.

Take the iPhone. The 2007 reveal made it feel like it dropped from the sky fully formed. But behind that moment were years of trial and error. Touchscreens that didn't quite work. Software that crashed mid-demo. A mountain of prototypes that never saw the light of day. The final product wasn't a stroke of brilliance — it was the result of relentless iteration.

Same with Instagram. What looked like an overnight success was actually the second version of a too-close-to-Foursquare check-in app called Burbn. The team just kept listening, trimming, trying again. One update at a time.

And that big deadlift on your feed? Probably not magic. More likely: a hundred quiet sessions, some of them rough. A lot of small choices to show up, tweak form, trust the program.

We love the idea of sparks — fast wins, big leaps, sudden breakthroughs. But progress usually doesn't feel like that.

Most of the time, it feels a lot more like repetition.

The engineer fixing the same piece of code — again.

The founder rewriting their pitch for the fifth time.

The lifter doing the same warm-up cues every session, no matter the weight.

It's not flashy. But it adds up.

That's part of what makes the first few months — or the first year — so exhilarating. In the gym, you make gains almost every week. In a startup, your product evolves daily. Everything feels fast, and the feedback is loud.

But then you hit the plateau.

The easy wins dry up. Strength doesn't come as quickly. Users get harder to surprise. Suddenly, it's not about chasing sparks anymore — it's about showing up and pushing through.

This is where the real work begins.

In lifting, that means grinding through the middle — not maxing out, but mastering the basics under load. In product, it's navigating the shift from scrappy innovation to enterprise-grade reliability. Less fanfare, more focus.

That's the part people don't always talk about — and the part that actually defines mastery.

It's not just about adding more weight or shipping more features.

It's about learning to hone your form.

In lifting, that might mean dialing in your brace, fixing a subtle shift in your squat, or finally feeling your lats engage in a deadlift.

In product, it's refining an initiative until it truly solves the right problem — not just adds to the roadmap.

You start to realize: Reps aren't just about volume.

They're about attention.

That's what makes progress sustainable.

And that's what Mission Built is really about — building better products, one rep at a time.`;
      default:
        return "Content for this section will be added soon.";
    }
  }
  
  return "Content for this section will be added soon.";
};

const getSections = (chapterId: number) => {
  if (chapterId === 1) {
    return [
      { id: "the-mission-is-the-magnet", title: "The Mission Is the Magnet" }
    ];
  }
  
  if (chapterId === 2) {
    return [
      { id: "the-myth-of-overnight-success", title: "The Myth of Overnight Success" }
    ];
  }
  
  return [];
};

const PdfExportButton: React.FC<PdfExportButtonProps> = ({ chapter }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const maxWidth = pageWidth - (margin * 2);
      let yPosition = margin;
      const lineHeight = 1.5;

      // Helper function to check if we need a new page
      const checkPageBreak = (additionalHeight: number) => {
        if (yPosition + additionalHeight > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
          return true;
        }
        return false;
      };

      // Helper function to add text with word wrapping and proper page breaks
      const addText = (text: string, fontSize: number = 11, isBold: boolean = false, isTitle: boolean = false) => {
        pdf.setFontSize(fontSize);
        if (isBold) {
          pdf.setFont("helvetica", "bold");
        } else {
          pdf.setFont("helvetica", "normal");
        }
        
        const lines = pdf.splitTextToSize(text, maxWidth);
        const totalHeight = lines.length * fontSize * 0.3 * lineHeight;
        
        // Check if we need a new page for this text block
        checkPageBreak(totalHeight);
        
        // Add extra space before titles (except if at top of page)
        if (isTitle && yPosition > margin) {
          yPosition += 8;
        }
        
        // Add the text line by line
        lines.forEach((line: string, index: number) => {
          // Check for page break before each line if needed
          if (yPosition + fontSize * 0.3 * lineHeight > pageHeight - margin) {
            pdf.addPage();
            yPosition = margin;
          }
          
          pdf.text(line, margin, yPosition);
          yPosition += fontSize * 0.3 * lineHeight;
        });
        
        // Add spacing after text blocks
        yPosition += fontSize * 0.2;
      };

      // Helper function to add table
      const addTable = () => {
        const tableData = [
          ["OODA Stage", "With Mission-Driven Focus", "Without It"],
          ["Observe", "You know what matters to watch", "You collect everything, drowning in noise"],
          ["Orient", "Purpose helps filter & frame inputs", "Metrics get over-prioritized, lose big picture"],
          ["Decide", "Mission becomes a north star for action", "Risk of chasing vanity wins or short-term gains"],
          ["Act", "Execution has energy and resolve", "Actions may be misaligned or half-hearted"]
        ];

        const colWidths = [maxWidth * 0.2, maxWidth * 0.4, maxWidth * 0.4];
        const rowHeight = 20;
        const tableHeight = tableData.length * rowHeight;
        
        // Check if table fits on current page
        checkPageBreak(tableHeight + 20);
        
        // Add some space before table
        yPosition += 10;
        
        tableData.forEach((row, rowIndex) => {
          // Check for page break before each row
          if (yPosition + rowHeight > pageHeight - margin) {
            pdf.addPage();
            yPosition = margin;
          }
          
          let xPosition = margin;
          
          row.forEach((cell, colIndex) => {
            // Draw cell border
            pdf.rect(xPosition, yPosition, colWidths[colIndex], rowHeight);
            
            // Add cell content
            pdf.setFontSize(9);
            if (rowIndex === 0) {
              pdf.setFont("helvetica", "bold");
            } else {
              pdf.setFont("helvetica", "normal");
            }
            
            // Split text to fit in cell
            const cellLines = pdf.splitTextToSize(cell, colWidths[colIndex] - 4);
            const textY = yPosition + 6;
            
            cellLines.forEach((line: string, lineIndex: number) => {
              pdf.text(line, xPosition + 2, textY + (lineIndex * 4));
            });
            
            xPosition += colWidths[colIndex];
          });
          
          yPosition += rowHeight;
        });
        
        // Add space after table
        yPosition += 10;
      };

      // Add spacing between sections
      const addSectionSpacing = () => {
        yPosition += 10;
      };

      // Title
      addText(chapter.title, 18, true, true);
      addSectionSpacing();

      // Description
      addText(chapter.description, 12);
      addSectionSpacing();

      // Sections content
      const sections = getSections(chapter.id);
      sections.forEach((section, index) => {
        // Section title
        addText(section.title, 14, true, true);
        
        // Section content
        const content = getSectionContent(chapter.id, section.id);
        
        // Process content line by line to handle table placement correctly
        const lines = content.split('\n');
        let i = 0;
        while (i < lines.length) {
          const line = lines[i];
          
          // Check if this line is the table marker
          if (line.includes('[TABLE: OODA Loop Analysis]')) {
            // Skip the table marker line and the empty line after it
            i++;
            if (i < lines.length && lines[i].trim() === '') {
              i++;
            }
            
            // Add the table
            addTable();
            
            // Skip the table header and data lines
            while (i < lines.length && (lines[i].includes('|') || lines[i].includes('OODA Stage') || lines[i].includes('Observe') || lines[i].includes('Orient') || lines[i].includes('Decide') || lines[i].includes('Act'))) {
              i++;
            }
            continue;
          }
          
          // Regular text line - collect paragraph
          let paragraph = '';
          while (i < lines.length && lines[i].trim() !== '' && !lines[i].includes('[TABLE:')) {
            paragraph += (paragraph ? ' ' : '') + lines[i].trim();
            i++;
          }
          
          if (paragraph) {
            addText(paragraph, 11);
            yPosition += 3; // Add small spacing between paragraphs
          }
          
          // Skip empty lines
          while (i < lines.length && lines[i].trim() === '') {
            i++;
          }
        }
        
        // Add spacing between sections
        if (index < sections.length - 1) {
          addSectionSpacing();
        }
      });

      // Further Reading section
      if (chapter.furtherReading && chapter.furtherReading.length > 0) {
        addSectionSpacing();
        addText("Further Reading", 14, true, true);
        
        chapter.furtherReading.forEach((resource, index) => {
          // Resource title
          addText(resource.title, 11, true);
          
          // Resource description
          if (resource.description) {
            addText(resource.description, 10);
          }
          
          // Resource note
          if (resource.note) {
            addText(resource.note, 10);
          }
          
          // Resource URL
          addText(resource.url, 9);
          
          // Add spacing between resources
          if (index < chapter.furtherReading.length - 1) {
            yPosition += 8;
          }
        });
      }

      // Download the PDF
      const fileName = `training-log-${chapter.id}-${chapter.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
      pdf.save(fileName);

      toast({
        title: "PDF Generated",
        description: "Your training log has been downloaded as a PDF.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={generatePDF}
      disabled={isGenerating}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      <Download className="h-4 w-4" />
      {isGenerating ? "Generating PDF..." : "Download PDF"}
    </Button>
  );
};

export default PdfExportButton;
