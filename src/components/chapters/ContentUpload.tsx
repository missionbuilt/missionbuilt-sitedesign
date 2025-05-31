
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, FileText } from "lucide-react";
import { Chapter } from "@/data/chapters-data";
import { useToast } from "@/hooks/use-toast";

interface ContentUploadProps {
  chapters: Chapter[];
  onContentUpload: (chapterId: number, sections: { id: string; title: string; content: string; }[]) => void;
}

const ContentUpload: React.FC<ContentUploadProps> = ({ chapters, onContentUpload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChapterId, setSelectedChapterId] = useState<string>("");
  const [uploadedContent, setUploadedContent] = useState("");
  const [parsedSections, setParsedSections] = useState<{ id: string; title: string; content: string; }[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setUploadedContent(content);
      parseContent(content);
    };
    reader.readAsText(file);
  };

  const parseContent = (content: string) => {
    // Simple parsing logic - split by headers (lines starting with #)
    const lines = content.split('\n');
    const sections: { id: string; title: string; content: string; }[] = [];
    let currentSection: { id: string; title: string; content: string; } | null = null;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Check if line is a header (starts with # or is all caps and short)
      if (trimmedLine.startsWith('#') || (trimmedLine.length < 100 && trimmedLine === trimmedLine.toUpperCase() && trimmedLine.length > 0)) {
        // Save previous section if exists
        if (currentSection) {
          sections.push(currentSection);
        }
        
        // Start new section
        const title = trimmedLine.replace(/^#+\s*/, ''); // Remove markdown headers
        currentSection = {
          id: `section-${sections.length + 1}`,
          title: title || `Section ${sections.length + 1}`,
          content: ""
        };
      } else if (currentSection && trimmedLine) {
        // Add content to current section
        currentSection.content += (currentSection.content ? '\n' : '') + line;
      }
    });

    // Add the last section
    if (currentSection) {
      sections.push(currentSection);
    }

    // If no sections were found, create one section with all content
    if (sections.length === 0 && content.trim()) {
      sections.push({
        id: "section-1",
        title: "Main Content",
        content: content.trim()
      });
    }

    setParsedSections(sections);
  };

  const handleSave = () => {
    if (!selectedChapterId || parsedSections.length === 0) {
      toast({
        title: "Error",
        description: "Please select a chapter and upload content.",
        variant: "destructive"
      });
      return;
    }

    onContentUpload(parseInt(selectedChapterId), parsedSections);
    
    toast({
      title: "Success",
      description: "Chapter content uploaded successfully!",
    });

    // Reset form
    setSelectedChapterId("");
    setUploadedContent("");
    setParsedSections([]);
    setIsOpen(false);
  };

  const updateSectionTitle = (index: number, title: string) => {
    const updated = [...parsedSections];
    updated[index].title = title;
    setParsedSections(updated);
  };

  const updateSectionContent = (index: number, content: string) => {
    const updated = [...parsedSections];
    updated[index].content = content;
    setParsedSections(updated);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-sunburst text-slate hover:bg-sunburst/90">
          <Upload className="mr-2 h-4 w-4" />
          Upload Chapter Content
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Upload Chapter Content</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Chapter Selection */}
          <div>
            <Label htmlFor="chapter-select">Select Chapter</Label>
            <Select value={selectedChapterId} onValueChange={setSelectedChapterId}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a chapter to upload content for..." />
              </SelectTrigger>
              <SelectContent>
                {chapters.map((chapter) => (
                  <SelectItem key={chapter.id} value={chapter.id.toString()}>
                    Chapter {chapter.id}: {chapter.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* File Upload */}
          <div>
            <Label htmlFor="file-upload">Upload Text File</Label>
            <div className="mt-2">
              <input
                id="file-upload"
                type="file"
                accept=".txt,.md"
                onChange={handleFileUpload}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100"
              />
              <p className="mt-1 text-sm text-gray-500">
                Upload a .txt or .md file with your chapter content
              </p>
            </div>
          </div>

          {/* Content Preview and Edit */}
          {parsedSections.length > 0 && (
            <div>
              <Label>Parsed Content (Review and Edit)</Label>
              <div className="mt-2 space-y-4">
                {parsedSections.map((section, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="mb-2">
                      <Label htmlFor={`section-title-${index}`}>Section Title</Label>
                      <input
                        id={`section-title-${index}`}
                        type="text"
                        value={section.title}
                        onChange={(e) => updateSectionTitle(index, e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`section-content-${index}`}>Section Content</Label>
                      <Textarea
                        id={`section-content-${index}`}
                        value={section.content}
                        onChange={(e) => updateSectionContent(index, e.target.value)}
                        rows={6}
                        className="mt-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!selectedChapterId || parsedSections.length === 0}>
              <FileText className="mr-2 h-4 w-4" />
              Save Chapter Content
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentUpload;
