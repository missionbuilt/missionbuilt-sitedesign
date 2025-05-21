
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

interface LogFeaturedImageProps {
  imageUrl: string;
  imageAlt?: string;
  caption?: string;
  ratio?: number;
  className?: string;
  cardClassName?: string;
  imageClassName?: string;
  captionClassName?: string;
}

const LogFeaturedImage: React.FC<LogFeaturedImageProps> = ({ 
  imageUrl, 
  imageAlt = "Featured Image", 
  caption = "Featured image caption", 
  ratio = 21/9,
  className = "mb-10",
  cardClassName = "overflow-hidden border-0 shadow-md",
  imageClassName = "object-cover w-full h-full",
  captionClassName = "p-2 text-center text-xs text-slate/70 dark:text-slate-400"
}) => {
  return (
    <div className={className}>
      <Card className={cardClassName}>
        <AspectRatio ratio={ratio}>
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className={imageClassName} 
          />
        </AspectRatio>
        {caption && (
          <CardContent className={captionClassName}>
            {caption}
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default LogFeaturedImage;
