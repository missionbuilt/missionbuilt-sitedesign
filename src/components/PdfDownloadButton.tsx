
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PdfDownloadButton: React.FC = () => {
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      console.log("Starting PDF download...");
      
      const pdfPath = '/mission-built-v1-4.pdf';
      console.log("Attempting to fetch:", window.location.origin + pdfPath);
      
      // First, check if the file exists by making a HEAD request
      const response = await fetch(pdfPath, { method: 'HEAD' });
      console.log("File check response:", response.status, response.statusText);
      
      if (!response.ok) {
        throw new Error(`File not found: ${response.status} ${response.statusText}`);
      }

      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = 'mission-built-v1-4.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      
      console.log("Triggering download...");
      link.click();
      
      // Clean up
      document.body.removeChild(link);

      toast({
        title: "Download Started",
        description: "Mission Built v1.4 is downloading.",
      });
    } catch (error) {
      console.error("Download failed:", error);
      toast({
        title: "Download Failed",
        description: error instanceof Error ? error.message : "Unable to download the PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="inline-block text-right">
      <Button
        onClick={handleDownload}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Download className="h-4 w-4" />
        Download PDF
      </Button>
      <p className="text-sm text-muted-foreground mt-2">
        Mission Built - PDF edition is a work in progress
      </p>
    </div>
  );
};

export default PdfDownloadButton;
