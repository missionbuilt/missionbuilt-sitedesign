
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PdfExportButton: React.FC = () => {
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      console.log("Starting PDF download...");
      console.log("Current URL:", window.location.href);
      
      // Use URL-encoded filename to handle spaces
      const pdfPath = '/Mission%20Built%20v1.0.pdf';
      console.log("Attempting to fetch:", window.location.origin + pdfPath);
      
      // First, check if the file exists by making a HEAD request
      const response = await fetch(pdfPath, { method: 'HEAD' });
      console.log("File check response:", response.status, response.statusText);
      console.log("Response headers:", Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        throw new Error(`File not found: ${response.status} ${response.statusText}`);
      }

      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = 'Mission Built v1.0.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      
      console.log("Triggering download...");
      link.click();
      
      // Clean up
      document.body.removeChild(link);

      toast({
        title: "Download Started",
        description: "Mission Built v1.0 is downloading.",
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
    <Button
      onClick={handleDownload}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      <Download className="h-4 w-4" />
      Download PDF
    </Button>
  );
};

export default PdfExportButton;
