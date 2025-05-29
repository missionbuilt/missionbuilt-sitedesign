
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PdfExportButton: React.FC = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    try {
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/Mission Built v1.0.pdf'; // Path to the PDF in public folder
      link.download = 'Mission Built v1.0.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Started",
        description: "Mission Built v1.0 is downloading.",
      });
    } catch (error) {
      console.error("Download failed:", error);
      toast({
        title: "Download Failed",
        description: "Unable to download the PDF. Please try again.",
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
