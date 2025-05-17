
import { useState } from 'react';
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { toast } from "./ui/use-toast";

const AboutSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [missionText, setMissionText] = useState(
    "I started this site to bring together two passions: building products that help people succeed, and building myself through strength training—powerlifting, bodybuilding, and all things iron.\n\nMy approach? It's not revolutionary. It's not trendy. It's radically simple. I've found that product management isn't about ceremonies or frameworks. It's about showing up, genuinely caring, and making sure the people using your product are better off because of what you built."
  );

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Story updated",
      description: "Your personal story has been updated successfully.",
    });
  };

  return (
    <section className="py-16 bg-slate/5 dark:bg-slate/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/bac59bd2-efe4-453f-bc0e-ead232657edd.png"
                alt="The energy of mission-driven product development" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sunburst/20 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-steel/20 rounded-full z-0"></div>
          </div>
          
          {/* Content column */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block px-3 py-1 bg-secondary text-slate/80 dark:bg-secondary/30 dark:text-slate-100 rounded-full text-sm font-medium">
                My Story
              </span>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil">
                      <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                      <path d="m15 5 4 4"/>
                    </svg>
                    Edit Story
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Edit Your Story</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <Textarea 
                      value={missionText}
                      onChange={(e) => setMissionText(e.target.value)}
                      className="min-h-[200px]"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => toast({ title: "Changes discarded" })}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>
                      Save Changes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <h2 className="heading-md text-slate mb-6">
              What I've Learned About Product
            </h2>
            
            <div className="text-slate/80 dark:text-slate-200 space-y-4">
              {missionText.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="/field-notes" className="btn-army inline-flex items-center">
                Read My Story
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
