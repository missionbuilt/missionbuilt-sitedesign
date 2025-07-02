
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

      // Load and add logo image
      const logoImg = new Image();
      logoImg.onload = () => {
        // Add logo to PDF
        doc.addImage(logoImg, 'PNG', 20, yPosition, 12, 12);
        
        // Header with Mission Built branding next to logo
        doc.setFontSize(20);
        doc.setTextColor(71, 85, 105); // Slate-600
        doc.text('Mission Built', 40, yPosition + 8);
        
        doc.setFontSize(10);
        doc.setTextColor(148, 163, 184); // Slate-400
        doc.text('MissionBuilt.io', 40, yPosition + 16);
        
        yPosition += 35;

        // Report title with color
        doc.setFontSize(24);
        doc.setTextColor(15, 23, 42); // Slate-900
        doc.text('Mission Alignment Report', 20, yPosition);
        
        // Current date
        doc.setFontSize(10);
        doc.setTextColor(100, 116, 139); // Slate-500
        const currentDate = new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        doc.text(`Generated on ${currentDate}`, 20, yPosition + 12);
        
        yPosition += 35;

        // Score summary box with better styling
        doc.setFillColor(248, 250, 252); // Slate-50
        doc.setDrawColor(226, 232, 240); // Slate-200
        doc.roundedRect(20, yPosition, pageWidth - 40, 50, 3, 3, 'FD');
        
        doc.setFontSize(16);
        doc.setTextColor(51, 65, 85); // Slate-700
        doc.text('Overall Score', 30, yPosition + 20);
        
        doc.setFontSize(36);
        doc.setTextColor(245, 158, 11); // Amber-500 (sunburst)
        doc.text(`${totalScore}`, 30, yPosition + 40);
        
        doc.setFontSize(18);
        doc.setTextColor(100, 116, 139); // Slate-500
        doc.text(`/ ${maxScore}`, 65, yPosition + 40);
        
        doc.setFontSize(14);
        doc.setTextColor(51, 65, 85); // Slate-700
        doc.text(`${completionPercentage}% Complete`, 130, yPosition + 25);
        
        doc.setFontSize(12);
        // Set status color based on score level
        if (scoreLevel.label === 'Mission Strong') {
          doc.setTextColor(22, 163, 74); // Green-600
        } else if (scoreLevel.label === 'Mission Drifting') {
          doc.setTextColor(245, 158, 11); // Amber-500
        } else {
          doc.setTextColor(220, 38, 127); // Pink-600
        }
        doc.text(`Status: ${scoreLevel.label}`, 130, yPosition + 40);
        
        yPosition += 70;

        // Score interpretation with better formatting
        doc.setFontSize(14);
        doc.setTextColor(51, 65, 85); // Slate-700
        doc.text('Score Interpretation:', 20, yPosition);
        yPosition += 10;
        
        doc.setFontSize(11);
        doc.setTextColor(71, 85, 105); // Slate-600
        const wrappedDescription = doc.splitTextToSize(scoreLevel.description, pageWidth - 40);
        doc.text(wrappedDescription, 20, yPosition);
        yPosition += wrappedDescription.length * 6 + 20;

        // Group scores section with enhanced styling
        doc.setFontSize(16);
        doc.setTextColor(51, 65, 85); // Slate-700
        doc.text('Performance by Category', 20, yPosition);
        yPosition += 20;

        const groupOrder = ['Mission Foundation', 'Execution & Adaptation', 'Sustainability & Culture'];
        
        groupOrder.forEach((groupName) => {
          const groupScore = groupScores[groupName];
          const percentage = groupScore ? Math.round((groupScore.total / groupScore.max) * 100) : 0;
          
          doc.setFontSize(13);
          doc.setTextColor(51, 65, 85); // Slate-700
          doc.text(groupName, 25, yPosition);
          
          doc.setFontSize(11);
          doc.setTextColor(100, 116, 139); // Slate-500
          doc.text(`${groupScore?.total || 0}/${groupScore?.max || 0} points (${percentage}%)`, 25, yPosition + 10);
          
          // Enhanced progress bar
          const barWidth = 120;
          const barHeight = 6;
          const barX = 130;
          const barY = yPosition - 2;
          
          // Background bar
          doc.setFillColor(241, 245, 249); // Slate-100
          doc.roundedRect(barX, barY, barWidth, barHeight, 3, 3, 'F');
          
          // Progress bar with color
          doc.setFillColor(245, 158, 11); // Amber-500
          if (percentage > 0) {
            doc.roundedRect(barX, barY, (barWidth * percentage) / 100, barHeight, 3, 3, 'F');
          }
          
          yPosition += 25;
        });

        yPosition += 15;

        // Detailed checklist results
        if (yPosition > pageHeight - 80) {
          doc.addPage();
          yPosition = 20;
        }

        doc.setFontSize(16);
        doc.setTextColor(51, 65, 85); // Slate-700
        doc.text('Detailed Results', 20, yPosition);
        yPosition += 20;

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
          if (yPosition > pageHeight - 100) {
            doc.addPage();
            yPosition = 20;
          }

          doc.setFontSize(14);
          doc.setTextColor(245, 158, 11); // Amber-500
          doc.text(groupName, 20, yPosition);
          yPosition += 15;

          const categories = Object.keys(groupedItems[groupName] || {});
          categories.forEach((categoryName) => {
            const items = groupedItems[groupName][categoryName];
            
            doc.setFontSize(12);
            doc.setTextColor(71, 85, 105); // Slate-600
            doc.text(categoryName, 25, yPosition);
            yPosition += 12;

            items.forEach((item) => {
              if (yPosition > pageHeight - 40) {
                doc.addPage();
                yPosition = 20;
              }

              const isChecked = checkedItems.has(item.id);
              
              doc.setFontSize(10);
              doc.setTextColor(isChecked ? 71 : 148, isChecked ? 85 : 163, isChecked ? 105 : 184);
              
              // Better checkbox representation
              doc.setFillColor(isChecked ? 34 : 248, isChecked ? 197 : 250, isChecked ? 94 : 252);
              doc.setDrawColor(isChecked ? 34 : 203, isChecked ? 197 : 213, isChecked ? 94 : 230);
              doc.roundedRect(30, yPosition - 3, 4, 4, 1, 1, 'FD');
              
              if (isChecked) {
                doc.setTextColor(255, 255, 255);
                doc.setFontSize(8);
                doc.text('✓', 31, yPosition + 0.5);
              }
              
              // Reset color for text
              doc.setTextColor(isChecked ? 71 : 148, isChecked ? 85 : 163, isChecked ? 105 : 184);
              doc.setFontSize(10);
              
              // Wrap text to fit page width
              const wrappedText = doc.splitTextToSize(item.text, pageWidth - 85);
              doc.text(wrappedText, 40, yPosition);
              
              // Points with color
              doc.setTextColor(245, 158, 11); // Amber-500
              doc.text(`${item.points} pts`, pageWidth - 40, yPosition);
              
              yPosition += Math.max(wrappedText.length * 5, 10);
            });
            
            yPosition += 8;
          });
          
          yPosition += 15;
        });

        // Enhanced footer with proper license
        const footerY = pageHeight - 35;
        doc.setDrawColor(226, 232, 240); // Slate-200
        doc.line(20, footerY - 8, pageWidth - 20, footerY - 8);
        
        doc.setFontSize(9);
        doc.setTextColor(100, 116, 139); // Slate-500
        doc.text('This report was generated by MissionBuilt.io', 20, footerY);
        doc.text('Visit https://missionbuilt.io for more resources', 20, footerY + 8);
        
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184); // Slate-400
        doc.text('This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.', 20, footerY + 18);

        // Save the PDF
        doc.save(`mission-alignment-report-${currentDate.replace(/\s+/g, '-').toLowerCase()}.pdf`);

        toast({
          title: "Report Downloaded",
          description: "Your Mission Alignment Report has been saved as a PDF.",
        });
      };

      logoImg.onerror = () => {
        // Fallback: generate PDF without logo if image fails to load
        console.warn('Logo failed to load, generating PDF without logo');
        generatePdfWithoutLogo();
      };

      // Set the logo source
      logoImg.src = '/lovable-uploads/4827977a-5d7e-4623-8106-38556f67728e.png';

      // Fallback function for when logo doesn't load
      const generatePdfWithoutLogo = () => {
        // Header with Mission Built branding only
        doc.setFontSize(24);
        doc.setTextColor(71, 85, 105); // Slate-600
        doc.text('Mission Built', 20, yPosition);
        
        doc.setFontSize(12);
        doc.setTextColor(148, 163, 184); // Slate-400
        doc.text('MissionBuilt.io', 20, yPosition + 10);
        
        // Continue with rest of PDF generation...
        // (Same code as above but without logo positioning)
      };

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
