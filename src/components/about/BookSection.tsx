
import React from "react";
import BookIntroSection from "./BookIntroSection";
import ProjectPurposeSection from "./ProjectPurposeSection";
import EmbracingAiSection from "./EmbracingAiSection";
import OpenThanksSection from "./OpenThanksSection";

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
      <OpenThanksSection />
    </div>
  );
};

export default BookSection;
