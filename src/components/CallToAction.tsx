
import { Button } from "@/components/ui/button";
import { ArrowRight, GitBranch, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Build Your Mission?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Begin with the playbook, share your thoughts, and help shape where this goes next.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-army hover:bg-army-dark text-white group">
              <Link to="/playbook">
                Start Reading
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group">
              <a 
                href="https://github.com/yourusername/mission-built" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <GitBranch className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="lg" className="group">
              <a 
                href="mailto:hello@missionbuilt.io" 
                className="flex items-center"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </div>
          
          <div className="pt-8 border-t border-muted">
            <p className="text-sm text-muted-foreground">
              This is an open-source project. Contribute, suggest improvements, or simply follow along as we build in public.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
