
import BlogCard from './BlogCard';

// Updated blog post data with more personal tone
const featuredPosts = [
  {
    title: "Chapter: User Success Principles",
    excerpt: "What I've found after years of trial and error: product work is simpler than we make it. Here's how I approach making users successful in their mission.",
    date: "May 10, 2023",
    category: "Product",
    slug: "user-mission-method",
    image: "/placeholder.svg"
  },
  {
    title: "Chapter: The Daily Practice",
    excerpt: "I've learned that passion isn't measured by intensity but by consistency. These are my notes on how showing up daily leads to surprising results.",
    date: "April 28, 2023",
    category: "Training",
    slug: "strength-through-consistency",
    image: "/placeholder.svg"
  },
  {
    title: "Chapter: Finding Clarity",
    excerpt: "My experience with removing complexity to create clarity. When I stopped trying to be clever and focused on being clear, everything changed.",
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
          <h2 className="heading-md text-slate dark:text-slate-100 mb-4 md:mb-0">Latest Chapters</h2>
          <a href="/field-notes" className="text-steel dark:text-slate-100 font-medium flex items-center group">
            View all chapters
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        
        <div className="space-y-10">
          {/* First featured post (larger) */}
          <BlogCard {...featuredPosts[0]} featured={true} />
          
          {/* Other featured posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredPosts.slice(1).map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
