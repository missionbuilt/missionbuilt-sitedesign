
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UniversalEpubButton: React.FC = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    try {
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/Mission Built - Lessons from the Barbell and the Boardroom.epub'; // Path to the EPUB in public folder
      link.download = 'Mission Built - Lessons from the Barbell and the Boardroom.epub';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Started",
        description: "Mission Built - Lessons from the Barbell and the Boardroom is downloading.",
      });
    } catch (error) {
      console.error("Download failed:", error);
      toast({
        title: "Download Failed",
        description: "Unable to download the EPUB. Please try again.",
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
      Download EPUB
    </Button>
  );
};

export default UniversalEpubButton;
