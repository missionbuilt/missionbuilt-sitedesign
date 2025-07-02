
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Target, TrendingUp, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import jsPDF from 'jspdf';

interface ChecklistItem {
  id: string;
  text: string;
  points: number;
  category: string;
  group: string;
}

interface ChecklistPdfExportProps {
  checkedItems: Set<string>;
  checklistItems: ChecklistItem[];
  totalScore: number;
  maxScore: number;
  completionPercentage: number;
  scoreLevel: {
    label: string;
    description: string;
    color: string;
    ring: string;
  };
  groupScores: Record<string, { total: number; max: number }>;
}

const ChecklistPdfExport: React.FC<ChecklistPdfExportProps> = ({
  checkedItems,
  checklistItems,
  totalScore,
  maxScore,
  completionPercentage,
  scoreLevel,
  groupScores
}) => {
  const { toast } = useToast();

  const generatePDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      let yPosition = 20;

      // Header with Mission Built branding
      doc.setFontSize(24);
      doc.setTextColor(51, 51, 51); // Dark gray
      doc.text('Mission Built', 20, yPosition);
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text('MissionBuilt.io', 20, yPosition + 8);
      
      yPosition += 25;

      // Report title
      doc.setFontSize(20);
      doc.setTextColor(51, 51, 51);
      doc.text('Mission Alignment Report', 20, yPosition);
      
      // Current date
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      doc.text(`Generated on ${currentDate}`, 20, yPosition + 10);
      
      yPosition += 30;

      // Score summary box
      doc.setDrawColor(200, 200, 200);
      doc.rect(20, yPosition, pageWidth - 40, 40);
      
      doc.setFontSize(16);
      doc.setTextColor(51, 51, 51);
      doc.text('Overall Score', 25, yPosition + 15);
      
      doc.setFontSize(24);
      doc.setTextColor(220, 154, 0); // Sunburst color
      doc.text(`${totalScore} / ${maxScore}`, 25, yPosition + 30);
      
      doc.setFontSize(14);
      doc.setTextColor(51, 51, 51);
      doc.text(`${completionPercentage}% Complete`, 120, yPosition + 20);
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text(`Status: ${scoreLevel.label}`, 120, yPosition + 32);
      
      yPosition += 55;

      // Score interpretation
      doc.setFontSize(12);
      doc.setTextColor(51, 51, 51);
      doc.text('Score Interpretation:', 20, yPosition);
      yPosition += 8;
      
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      const wrappedDescription = doc.splitTextToSize(scoreLevel.description, pageWidth - 40);
      doc.text(wrappedDescription, 20, yPosition);
      yPosition += wrappedDescription.length * 5 + 15;

      // Group scores section
      doc.setFontSize(14);
      doc.setTextColor(51, 51, 51);
      doc.text('Performance by Category', 20, yPosition);
      yPosition += 15;

      const groupOrder = ['Mission Foundation', 'Execution & Adaptation', 'Sustainability & Culture'];
      
      groupOrder.forEach((groupName) => {
        const groupScore = groupScores[groupName];
        const percentage = groupScore ? Math.round((groupScore.total / groupScore.max) * 100) : 0;
        
        doc.setFontSize(12);
        doc.setTextColor(51, 51, 51);
        doc.text(groupName, 25, yPosition);
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`${groupScore?.total || 0}/${groupScore?.max || 0} points (${percentage}%)`, 25, yPosition + 8);
        
        // Progress bar
        const barWidth = 100;
        const barHeight = 4;
        const barX = 120;
        const barY = yPosition - 3;
        
        // Background bar
        doc.setFillColor(240, 240, 240);
        doc.rect(barX, barY, barWidth, barHeight, 'F');
        
        // Progress bar
        doc.setFillColor(220, 154, 0); // Sunburst color
        doc.rect(barX, barY, (barWidth * percentage) / 100, barHeight, 'F');
        
        yPosition += 20;
      });

      yPosition += 10;

      // Detailed checklist results
      if (yPosition > pageHeight - 60) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(14);
      doc.setTextColor(51, 51, 51);
      doc.text('Detailed Results', 20, yPosition);
      yPosition += 15;

      const groupedItems = checklistItems.reduce((acc, item) => {
        if (!acc[item.group]) {
          acc[item.group] = {};
        }
        if (!acc[item.group][item.category]) {
          acc[item.group][item.category] = [];
        }
        acc[item.group][item.category].push(item);
        return acc;
      }, {} as Record<string, Record<string, ChecklistItem[]>>);

      groupOrder.forEach((groupName) => {
        if (yPosition > pageHeight - 80) {
          doc.addPage();
          yPosition = 20;
        }

        doc.setFontSize(12);
        doc.setTextColor(51, 51, 51);
        doc.text(groupName, 20, yPosition);
        yPosition += 10;

        const categories = Object.keys(groupedItems[groupName] || {});
        categories.forEach((categoryName) => {
          const items = groupedItems[groupName][categoryName];
          
          doc.setFontSize(10);
          doc.setTextColor(80, 80, 80);
          doc.text(categoryName, 25, yPosition);
          yPosition += 8;

          items.forEach((item) => {
            if (yPosition > pageHeight - 30) {
              doc.addPage();
              yPosition = 20;
            }

            const isChecked = checkedItems.has(item.id);
            
            doc.setFontSize(9);
            doc.setTextColor(isChecked ? 100 : 150, isChecked ? 100 : 150, isChecked ? 100 : 150);
            
            // Checkbox symbol
            doc.text(isChecked ? '☑' : '☐', 30, yPosition);
            
            // Wrap text to fit page width
            const wrappedText = doc.splitTextToSize(item.text, pageWidth - 70);
            doc.text(wrappedText, 40, yPosition);
            
            // Points
            doc.text(`${item.points} pts`, pageWidth - 40, yPosition);
            
            yPosition += Math.max(wrappedText.length * 4, 8);
          });
          
          yPosition += 5;
        });
        
        yPosition += 10;
      });

      // Footer with license and website
      const footerY = pageHeight - 30;
      doc.setDrawColor(200, 200, 200);
      doc.line(20, footerY - 5, pageWidth - 20, footerY - 5);
      
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text('This report was generated by MissionBuilt.io', 20, footerY);
      doc.text('Visit https://missionbuilt.io for more resources', 20, footerY + 8);
      doc.text('Licensed under MIT License - Free to use and modify', 20, footerY + 16);

      // Save the PDF
      doc.save(`mission-alignment-report-${currentDate.replace(/\s+/g, '-').toLowerCase()}.pdf`);

      toast({
        title: "Report Downloaded",
        description: "Your Mission Alignment Report has been saved as a PDF.",
      });

    } catch (error) {
      console.error('PDF generation failed:', error);
      toast({
        title: "Export Failed",
        description: "Unable to generate the PDF report. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      onClick={generatePDF}
      variant="outline"
      className="flex items-center gap-2 bg-gradient-to-r from-army/5 to-steel/5 dark:from-sunburst/5 dark:to-army/5 hover:from-army/10 hover:to-steel/10 dark:hover:from-sunburst/10 dark:hover:to-army/10 border-army/30 dark:border-sunburst/30"
    >
      <Download className="h-4 w-4" />
      Export PDF Report
    </Button>
  );
};

export default ChecklistPdfExport;
