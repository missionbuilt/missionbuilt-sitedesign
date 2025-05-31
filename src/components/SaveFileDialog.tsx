
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, CopyCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SaveFileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fileName: string;
  fileContent: string;
}

const SaveFileDialog = ({ open, onOpenChange, fileName, fileContent }: SaveFileDialogProps) => {
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fileContent);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "The file content has been copied. You can now paste it into your file.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please select and copy the content manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Save Content to File</DialogTitle>
          <DialogDescription>
            Copy the content below and paste it into <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{fileName}</code>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 flex flex-col gap-4 min-h-0">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              File: {fileName}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-2"
            >
              {copied ? <CopyCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
          </div>
          
          <Textarea
            value={fileContent}
            readOnly
            className="flex-1 font-mono text-xs min-h-[400px] resize-none"
            onClick={(e) => e.currentTarget.select()}
          />
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Instructions:</h4>
            <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>1. Click "Copy to Clipboard" above</li>
              <li>2. Open <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">{fileName}</code> in your code editor</li>
              <li>3. Select all content (Ctrl+A / Cmd+A) and paste (Ctrl+V / Cmd+V)</li>
              <li>4. Save the file (Ctrl+S / Cmd+S)</li>
              <li>5. The page will automatically refresh with your content</li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SaveFileDialog;
