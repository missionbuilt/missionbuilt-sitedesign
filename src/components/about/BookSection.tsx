
import React from "react";
import { Button } from "@/components/ui/button";
import BookIntroSection from "./BookIntroSection";
import ProjectPurposeSection from "./ProjectPurposeSection";
import EmbracingAiSection from "./EmbracingAiSection";

const BookSection = () => {
  return (
    <div className="mt-20 border-t pt-16 border-slate/10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">About the Book</h2>
        <p className="text-muted-foreground">
          The Mission Behind MissionBuilt
        </p>
      </div>
      
      <BookIntroSection />
      <ProjectPurposeSection />
      <EmbracingAiSection />
      
      <div className="text-center mt-10">
        <Button className="bg-army hover:bg-army/90 text-white">
          Join the Waiting List
        </Button>
      </div>
    </div>
  );
};

export default BookSection;
