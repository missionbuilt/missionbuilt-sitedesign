
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Chapter } from "@/data/chapters-data";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface PdfExportButtonProps {
  chapter: Chapter;
}

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

      // Helper function to add text with word wrapping
      const addText = (text: string, fontSize: number = 12, isBold: boolean = false) => {
        pdf.setFontSize(fontSize);
        if (isBold) {
          pdf.setFont("helvetica", "bold");
        } else {
          pdf.setFont("helvetica", "normal");
        }
        
        const lines = pdf.splitTextToSize(text, maxWidth);
        
        // Check if we need a new page
        if (yPosition + (lines.length * fontSize * 0.4) > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        
        pdf.text(lines, margin, yPosition);
        yPosition += lines.length * fontSize * 0.4 + 5;
      };

      // Title
      addText(`Training Log ${chapter.id}: ${chapter.title}`, 20, true);
      yPosition += 10;

      // Description
      addText(chapter.description, 14);
      yPosition += 10;

      // Metadata
      addText("Metadata:", 16, true);
      addText(`Date: ${chapter.date}`);
      addText(`Duration: ${chapter.duration}`);
      addText(`Difficulty: ${chapter.difficulty}`);
      addText(`Location: ${chapter.location}`);
      if (chapter.weather) {
        addText(`Weather: ${chapter.weather}`);
      }
      yPosition += 10;

      // Sections
      chapter.sections.forEach((section) => {
        addText(section.title, 16, true);
        addText(section.content);
        yPosition += 5;
      });

      // Further Reading
      if (chapter.furtherReading && chapter.furtherReading.length > 0) {
        addText("Further Reading:", 16, true);
        chapter.furtherReading.forEach((resource) => {
          addText(`• ${resource.title}`, 12, true);
          if (resource.description) {
            addText(`  ${resource.description}`);
          }
          if (resource.note) {
            addText(`  Note: ${resource.note}`, 10);
          }
          addText(`  URL: ${resource.url}`, 10);
          yPosition += 3;
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
