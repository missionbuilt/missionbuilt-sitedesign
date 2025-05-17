
import BlogCard from './BlogCard';

// Updated blog post data to match the new theme
const featuredPosts = [
  {
    title: "The User Mission Method",
    excerpt: "Product is simple: Make users successful in their mission. Here's how we implement this philosophy.",
    date: "May 10, 2023",
    category: "Product",
    slug: "user-mission-method",
    image: "/placeholder.svg"
  },
  {
    title: "Building Strength Through Consistency",
    excerpt: "Passion is measurable by consistency, not noise. How daily practice builds extraordinary results.",
    date: "April 28, 2023",
    category: "Training",
    slug: "strength-through-consistency",
    image: "/placeholder.svg"
  },
  {
    title: "Simplify Until Success Is Obvious",
    excerpt: "How removing complexity creates clarity and helps teams achieve meaningful outcomes.",
    date: "April 15, 2023",
    category: "Product Strategy",
    slug: "simplify-for-success",
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
                  Built, Not Theorized
                </h3>
                <p className="mb-6 flex-grow">
                  Everyone wants to invent a new model. Most of them overcomplicate what should be simple. 
                  We believe in tearing down the unnecessary to build up what works.
                </p>
                <a href="/philosophy" className="inline-flex items-center text-white font-medium group">
                  Explore our philosophy
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
