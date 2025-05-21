
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

interface LogFeaturedImageProps {
  imageUrl: string;
  imageAlt?: string;
  caption?: string;
}

const LogFeaturedImage: React.FC<LogFeaturedImageProps> = ({ 
  imageUrl, 
  imageAlt = "Featured Image", 
  caption = "Featured image caption" 
}) => {
  return (
    <div className="mb-10">
      <Card className="overflow-hidden border-0 shadow-md">
        <AspectRatio ratio={21/9}>
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <CardContent className="p-2 text-center text-xs text-slate/70 dark:text-slate-400">
          {caption}
        </CardContent>
      </Card>
    </div>
  );
};

export default LogFeaturedImage;
