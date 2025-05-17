
import BlogCard from './BlogCard';

// Updated blog post data to match the new theme
const featuredPosts = [
  {
    title: "From Battlefield to Boardroom: Leadership Lessons",
    excerpt: "How military leadership principles translate to effective product management and team leadership in tech.",
    date: "May 10, 2023",
    category: "Leadership",
    slug: "battlefield-to-boardroom",
    image: "/placeholder.svg"
  },
  {
    title: "Building Strength Through Adversity",
    excerpt: "Developing mental and physical resilience through consistent training and embracing challenges.",
    date: "April 28, 2023",
    category: "Personal Growth",
    slug: "strength-through-adversity",
    image: "/placeholder.svg"
  },
  {
    title: "Mission-Driven Product Development",
    excerpt: "How to align your product strategy with a clear mission that inspires both your team and users.",
    date: "April 15, 2023",
    category: "Product Strategy",
    slug: "mission-driven-products",
    image: "/placeholder.svg"
  }
];

const FeaturedPosts = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
          <h2 className="heading-md text-slate dark:text-slate-100 mb-4 md:mb-0">Field Notes</h2>
          <a href="/field-notes" className="text-steel dark:text-slate-100 font-medium flex items-center group">
            View all notes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        
        <div className="space-y-10">
          {/* First featured post (larger) */}
          <BlogCard {...featuredPosts[0]} featured={true} />
          
          {/* Other featured posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.slice(1).map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
            
            {/* Third card - Philosophy & Training connection */}
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate to-steel text-white shadow-sm card-hover">
              <div className="p-6 h-full flex flex-col">
                <h3 className="heading-sm mb-4 text-white font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Leadership Philosophy
                </h3>
                <p className="mb-6 flex-grow">
                  Discover how military discipline and strategic thinking enhance product leadership, and how mission-driven values improve team performance.
                </p>
                <a href="/philosophy" className="inline-flex items-center text-white font-medium group">
                  Explore my philosophy
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
