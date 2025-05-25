
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateEpub } from "@/utils/epubExport";
import { Chapter } from "@/data/chapters-data";

interface EpubExportButtonProps {
  chapter: Chapter;
}

const EpubExportButton: React.FC<EpubExportButtonProps> = ({ chapter }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleExport = async () => {
    setIsGenerating(true);
    
    try {
      await generateEpub(chapter);
      
      toast({
        title: "EPUB Generated",
        description: `${chapter.title} has been downloaded as an EPUB file.`,
      });
    } catch (error) {
      console.error('Export failed:', error);
      
      toast({
        title: "Export Failed",
        description: "Unable to generate EPUB file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      onClick={handleExport}
      disabled={isGenerating}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      <Download className="h-4 w-4" />
      {isGenerating ? "Generating..." : "Download EPUB"}
    </Button>
  );
};

export default EpubExportButton;
