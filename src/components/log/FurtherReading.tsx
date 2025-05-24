
import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";

const FurtherReading: React.FC = () => {
  const resources = [
    {
      title: "Cyberpunk 2077 Launch & CD Projekt Red",
      description: "CD Projekt Red Stock Drops After Buggy, Messy 'Cyberpunk 2077' Launch – Forbes",
      url: "https://www.forbes.com/sites/davidthier/2020/12/11/cd-projekt-red-stock-drops-after-buggy-messy-cyberpunk-2077-launch/",
      note: "A case study in date-driven shipping that sacrificed long-term trust for short-term metrics."
    },
    {
      title: "Simone Biles & Mission-Aligned Decision-Making",
      description: ""I Don't Have to Be Fine": Everything Simone Biles Has Said About Mental Health – People Magazine",
      url: "https://people.com/sports/everything-simone-biles-has-said-about-mental-health/",
      note: "An athlete choosing alignment over achievement — and sparking a global conversation."
    },
    {
      title: "Patagonia & Purpose-Driven Brand Behavior",
      description: "Don't Buy This Jacket – Patagonia",
      url: "https://www.patagonia.com/stories/dont-buy-this-jacket/story-18615.html",
      note: "Iconic ad campaign where brand values overrode short-term sales incentives."
    },
    {
      title: "Research on Purpose & Fulfillment",
      description: "The Business Case for Purpose – Harvard Business Review, 2016",
      url: "https://hbr.org/sponsored/2016/04/the-business-case-for-purpose",
      note: "Purpose-driven companies see higher retention, satisfaction, and performance."
    },
    {
      title: "Purpose at Work – Imperative & NYU Study, 2016",
      description: "Purpose at Work – Imperative & NYU Study, 2016",
      url: "https://www.imperative.com/resource/2016-workforce-purpose-index",
      note: "54% of purpose-driven employees are more likely to stay 5+ years."
    },
    {
      title: "Purpose: Shifting from Why to How – McKinsey & Company, 2020",
      description: "Purpose: Shifting from Why to How – McKinsey & Company, 2020",
      url: "https://www.mckinsey.com/business-functions/people-and-organizational-performance/our-insights/purpose-shifting-from-why-to-how",
      note: "A roadmap for operationalizing purpose across the org."
    },
    {
      title: "Strategic Framing: The OODA Loop",
      description: "John Boyd – OODA Loop – Wikipedia",
      url: "https://en.wikipedia.org/wiki/OODA_loop",
      note: "Military strategy model focused on Observation, Orientation, Decision, and Action. Useful for product and performance under uncertainty."
    },
    {
      title: "Case Study: Product & Organizational Drift",
      description: "What Really Brought Down the Boeing 737 Max? – The New York Times",
      url: "https://www.nytimes.com/2019/09/18/magazine/boeing-737-max-crashes.html",
      note: "How engineering culture and metric pressures at Boeing overtook the company's safety-driven mission — with catastrophic results."
    },
    {
      title: "Individual Drift: Strength and Misalignment",
      description: "Hafthor Björnsson on Pec Injury – Essentially Sports",
      url: "https://www.essentiallysports.com/bodybuilding-news-probably-my-biggest-mistake-months-after-a-horrifying-pec-tear-while-bench-pressing-strongman-legend-makes-a-candid-confession-about-his-injury-hafthor-bjornsson/",
      note: "A personal reflection on chasing numbers too hard — and paying the price with injury."
    },
    {
      title: "Hafthor Björnsson Injury Coverage – AS.com",
      description: "Hafthor Björnsson Injury Coverage – AS.com",
      url: "https://en.as.com/entertainment/game-of-thrones-star-hafthor-bjornsson-suffers-nasty-injury-while-bench-pressing-n/",
      note: "News coverage providing details and public reaction to the injury — reinforces the story's cautionary angle."
    },
    {
      title: "Research: Purpose and Retention",
      description: "Improving Employee Retention – Guidehouse",
      url: "https://guidehouse.com/-/media/new-library/industries/defense-and-security/documents/2023/gh-161-wp-improving-employee-retention.pdf",
      note: "Research-based strategies for employee retention, including mission alignment and culture as key levers."
    },
    {
      title: "Purpose-Driven Work and Turnover – Benevity Talent Retention Study",
      description: "Purpose-Driven Work and Turnover – Benevity Talent Retention Study",
      url: "https://benevity.com/talent-retention-study",
      note: "Mission-driven workers are significantly more likely to stay long-term — supports your thesis with compelling data."
    },
    {
      title: "Rituals, Adaptation, and Innovation",
      description: "Stefi Cohen's Training Philosophy and Hybrid Methodology – Hybrid Performance Method",
      url: "https://www.hybridperformancemethod.com/",
      note: "An elite athlete's fusion of structure and adaptation in strength programming."
    },
    {
      title: "Agile Retrospectives and Team Rituals – Esther Derby & Diana Larsen",
      description: "Agile Retrospectives and Team Rituals – Esther Derby & Diana Larsen",
      url: "https://www.agilealliance.org/resources/books/agile-retrospectives-making-good-teams-great/",
      note: "A guide to turning recurring team reviews into meaningful improvement rituals."
    },
    {
      title: "Atlassian ShipIt (Hack Week Model) – Atlassian",
      description: "Atlassian ShipIt (Hack Week Model) – Atlassian",
      url: "https://www.atlassian.com/company/shipit",
      note: "A structured ritual encouraging innovation through autonomy and creative freedom."
    },
    {
      title: "Spotify Hack Culture Overview – Scaling Agile @ Spotify (Whitepaper)",
      description: "Spotify Hack Culture Overview – Scaling Agile @ Spotify (Whitepaper)",
      url: "https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf",
      note: "How Spotify built agility and creativity into team rituals — not rigid processes."
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
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between p-4 bg-slate/5 hover:bg-slate/10 rounded-lg border border-slate/10 transition-colors duration-200 group"
          >
            <div className="flex-1">
              <h4 className="font-medium text-slate group-hover:text-army transition-colors duration-200 mb-1">
                {resource.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                {resource.description}
              </p>
              <p className="text-xs text-muted-foreground italic">
                {resource.note}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-army transition-colors duration-200 flex-shrink-0 ml-4 mt-1" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default FurtherReading;
