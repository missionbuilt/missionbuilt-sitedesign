
import BlogCard from './BlogCard';

// Sample blog post data
const featuredPosts = [
  {
    title: "The Product Manager's Journey: From Vision to Reality",
    excerpt: "How the journey of building great products mirrors the discipline required in strength training.",
    date: "May 10, 2023",
    category: "Product Philosophy",
    slug: "product-managers-journey",
    image: "/placeholder.svg"
  },
  {
    title: "Principles of Progressive Overload in Product Development",
    excerpt: "Applying weightlifting's core principle to incrementally improve your products over time.",
    date: "April 28, 2023",
    category: "Growth",
    slug: "progressive-overload-principle",
    image: "/placeholder.svg"
  },
  {
    title: "Building Resilience: Mental Models for Product Teams",
    excerpt: "How the mental toughness developed in weightlifting can help product teams overcome challenges.",
    date: "April 15, 2023",
    category: "Team Building",
    slug: "building-resilience",
    image: "/placeholder.svg"
  }
];

const FeaturedPosts = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
          <h2 className="heading-md text-slate mb-4 md:mb-0">Featured Articles</h2>
          <a href="/blog" className="text-steel font-medium flex items-center group">
            View all posts
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
                  The Mind-Body Connection
                </h3>
                <p className="mb-6 flex-grow">
                  Discover how the discipline of weightlifting enhances product thinking, and how product philosophy improves physical training.
                </p>
                <a href="/philosophy" className="inline-flex items-center text-white font-medium group">
                  Explore the philosophy
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
