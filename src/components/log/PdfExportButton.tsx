
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Chapter } from "@/data/chapters-data";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface PdfExportButtonProps {
  chapter: Chapter;
}

// Helper function to check if next training log is available
const isNextLogAvailable = (currentChapterId: number) => {
  // Check if the next chapter exists in our chapters data
  const nextChapterId = currentChapterId + 1;
  // For now, we know that chapters 1 and 2 exist, so only chapter 3+ are "coming soon"
  return nextChapterId <= 2;
};

// Helper function to get next chapter info
const getNextChapterInfo = (currentChapterId: number) => {
  const nextChapterId = currentChapterId + 1;
  
  // Define known chapter titles
  const chapterTitles: { [key: number]: string } = {
    1: "Mission Before Metrics",
    2: "Built Through Reps",
    3: "Rituals Over Rules"
  };
  
  return {
    id: nextChapterId,
    title: chapterTitles[nextChapterId] || "Coming Soon"
  };
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

      // Helper function to add footer to current page
      const addFooter = () => {
        const footerY = pageHeight - 10;
        
        // Left side - missionbuilt.io
        pdf.setFontSize(9);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(107, 114, 128); // Gray color
        pdf.text("missionbuilt.io", margin, footerY);
        
        // Middle - page number
        const pageNum = pdf.getCurrentPageInfo().pageNumber;
        const pageText = `${pageNum}`;
        const pageTextWidth = pdf.getTextWidth(pageText);
        const pageX = (pageWidth - pageTextWidth) / 2;
        pdf.text(pageText, pageX, footerY);
        
        // Right side - CC BY-NC 4.0
        const licenseText = "CC BY-NC 4.0";
        const licenseTextWidth = pdf.getTextWidth(licenseText);
        const licenseX = pageWidth - margin - licenseTextWidth;
        pdf.text(licenseText, licenseX, footerY);
      };

      // Helper function to check if we need a new page
      const checkPageBreak = (additionalHeight: number) => {
        if (yPosition + additionalHeight > pageHeight - margin - 15) { // Leave space for footer
          addFooter(); // Add footer to current page before creating new one
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
          if (yPosition + fontSize * 0.3 * lineHeight > pageHeight - margin - 15) {
            addFooter(); // Add footer before page break
            pdf.addPage();
            yPosition = margin;
          }
          
          pdf.text(line, margin, yPosition);
          yPosition += fontSize * 0.3 * lineHeight;
        });
        
        // Add spacing after text blocks
        yPosition += fontSize * 0.2;
      };

      // Helper function to add centered text
      const addCenteredText = (text: string, fontSize: number = 11, isBold: boolean = false, yPos?: number) => {
        pdf.setFontSize(fontSize);
        if (isBold) {
          pdf.setFont("helvetica", "bold");
        } else {
          pdf.setFont("helvetica", "normal");
        }
        
        const textWidth = pdf.getTextWidth(text);
        const x = (pageWidth - textWidth) / 2;
        const y = yPos || yPosition;
        
        pdf.text(text, x, y);
        
        if (!yPos) {
          yPosition += fontSize * 0.3 * lineHeight;
        }
      };

      // Add spacing between sections
      const addSectionSpacing = () => {
        yPosition += 15;
      };

      // === COVER PAGE ===
      // Set dark background color (matching dark mode)
      pdf.setFillColor(34, 40, 49); // Dark blue-gray background
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');

      // Add Mission Built logo area - include the actual logo image
      pdf.setTextColor(255, 255, 255); // White text
      
      // Logo image (M with barbell)
      try {
        // Add the logo image at the top
        const logoSize = 40;
        const logoX = (pageWidth - logoSize) / 2;
        pdf.addImage("/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png", "PNG", logoX, 40, logoSize, logoSize);
      } catch (error) {
        // Fallback if image fails to load - use text representation
        pdf.setFontSize(32);
        pdf.setFont("helvetica", "bold");
        addCenteredText("M", 32, true, 60);
      }
      
      // MissionBuilt text logo
      pdf.setTextColor(255, 255, 255); // White text
      pdf.setFontSize(24);
      pdf.setFont("helvetica", "bold");
      addCenteredText("MISSION", 24, true, 90);
      addCenteredText("BUILT", 24, true, 115);
      
      // Website
      pdf.setTextColor(156, 163, 175); // Light gray
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "normal");
      addCenteredText("missionbuilt.io", 14, false, 140);

      // Book title
      pdf.setTextColor(245, 158, 11); // Sunburst color (amber)
      pdf.setFontSize(28);
      pdf.setFont("helvetica", "bold");
      addCenteredText("Mission Built", 28, true, 190);
      
      pdf.setTextColor(255, 255, 255); // White
      pdf.setFontSize(20);
      pdf.setFont("helvetica", "normal");
      addCenteredText("Lessons from the Barbell", 20, false, 220);
      addCenteredText("and the Boardroom", 20, false, 245);

      // Training log details
      pdf.setTextColor(34, 197, 94); // Army green
      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      addCenteredText(`Training Log ${chapter.id}`, 18, true, 290);
      
      pdf.setTextColor(255, 255, 255); // White
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "normal");
      addCenteredText(chapter.title, 16, false, 315);

      // Author
      pdf.setTextColor(156, 163, 175); // Light gray
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "normal");
      addCenteredText("by Mike Nichols", 16, false, 350);

      // Creative Commons License at bottom - properly positioned
      pdf.setTextColor(107, 114, 128); // Darker gray
      pdf.setFontSize(8);
      pdf.setFont("helvetica", "normal");
      addCenteredText("This work is licensed under a Creative Commons", 8, false, pageHeight - 30);
      addCenteredText("Attribution-NonCommercial 4.0 International License", 8, false, pageHeight - 20);

      // Add footer to cover page
      addFooter();

      // Start new page for content
      pdf.addPage();
      
      // Reset text color and position for content
      pdf.setTextColor(0, 0, 0); // Black text for content
      yPosition = margin;

      // Title
      addText(chapter.title, 18, true, true);
      addSectionSpacing();

      // Description
      addText(chapter.description, 12);
      addSectionSpacing();

      // Process each section from the chapter data
      chapter.sections.forEach((section, index) => {
        // Section title
        addText(`${index + 1}. ${section.title}`, 14, true, true);
        yPosition += 5;
        
        // Section content
        const paragraphs = section.content.split('\n\n');
        paragraphs.forEach((paragraph) => {
          if (paragraph.trim()) {
            addText(paragraph.trim(), 11);
            yPosition += 3;
          }
        });
        
        // Add spacing between sections
        if (index < chapter.sections.length - 1) {
          addSectionSpacing();
        }
      });

      // Add conditional text before Further Reading section
      addSectionSpacing();
      addSectionSpacing(); // Extra space before the conditional text
      
      const nextLogAvailable = isNextLogAvailable(chapter.id);
      const nextChapter = getNextChapterInfo(chapter.id);
      
      if (nextLogAvailable) {
        addText("One chapter. One set.", 11, true);
        addText(`Let's keep the rhythm. Training Log ${nextChapter.id} – ${nextChapter.title} is next.`, 11, true);
        addText(`missionbuilt.io/log/${nextChapter.id}`, 11, true);
      } else {
        addText("Good set. We're chalking up for the next one.", 11, true);
        addText(`Training Log ${nextChapter.id} – ${nextChapter.title} is coming soon.`, 11, true);
        addText("Want a heads-up when it's live? Until then follow along at missionbuilt.io or over on Bluesky: missionbuilt.bsky.social", 11, true);
      }

      // Further Reading section - handle string array
      if (chapter.furtherReading && chapter.furtherReading.length > 0) {
        addSectionSpacing();
        addText("Further Reading", 14, true, true);
        
        chapter.furtherReading.forEach((resource, index) => {
          // Since furtherReading is string[], just add each string as a resource URL
          addText(resource, 10);
          
          // Add spacing between resources
          if (index < chapter.furtherReading.length - 1) {
            yPosition += 8;
          }
        });
      }

      // Add License and Citation section
      addSectionSpacing();
      addSectionSpacing(); // Extra space before license section
      
      addText("License", 14, true, true);
      addText("This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0).", 11);
      addText("You are free to share and adapt this material for non-commercial purposes, with proper attribution.", 11);
      
      yPosition += 10; // Space between license and citation
      
      addText("Citation", 14, true, true);
      addText("Nichols, Mike. Mission Built: Lessons from the Barbell and the Boardroom. missionbuilt.io", 11);

      // Add footer to the last page
      addFooter();

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
