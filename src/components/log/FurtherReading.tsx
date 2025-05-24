
import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";

const FurtherReading: React.FC = () => {
  const resources = [
    {
      title: "Leadership in the Digital Age",
      description: "A comprehensive guide to modern leadership principles",
      url: "#"
    },
    {
      title: "Building High-Performance Teams",
      description: "Strategies for creating and maintaining effective teams",
      url: "#"
    },
    {
      title: "Mission-Driven Organizations",
      description: "How to align your team around a common purpose",
      url: "#"
    }
  ];

  return (
    <section className="border-t border-slate/10 pt-8">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="h-5 w-5 text-army" />
        <h3 className="text-xl font-semibold text-slate">Further Reading</h3>
      </div>
      
      <div className="grid gap-4">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            className="flex items-start justify-between p-4 bg-slate/5 hover:bg-slate/10 rounded-lg border border-slate/10 transition-colors duration-200 group"
          >
            <div>
              <h4 className="font-medium text-slate group-hover:text-army transition-colors duration-200">
                {resource.title}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                {resource.description}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-army transition-colors duration-200 flex-shrink-0 ml-4" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default FurtherReading;
