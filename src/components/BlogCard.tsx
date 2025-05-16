
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  image?: string;
  featured?: boolean;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  category, 
  slug, 
  image = "/placeholder.svg", 
  featured = false 
}: BlogCardProps) => {
  
  if (featured) {
    return (
      <Link to={`/blog/${slug}`} className="group block">
        <div className="grid md:grid-cols-2 gap-6 rounded-xl overflow-hidden bg-white border border-slate/10 shadow-sm card-hover">
          <div className="aspect-video overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          <div className="p-6 flex flex-col">
            <div className="flex items-center space-x-4 mb-3">
              <span className="inline-block px-3 py-1 bg-secondary text-slate/80 rounded-full text-xs font-medium">
                {category}
              </span>
              <span className="text-slate/60 text-sm">{date}</span>
            </div>
            <h3 className="heading-md text-slate mb-3 group-hover:text-steel transition-colors">
              {title}
            </h3>
            <p className="text-slate/70 mb-4 flex-grow">
              {excerpt}
            </p>
            <div className="flex items-center text-steel font-medium">
              Read more 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  return (
    <Link to={`/blog/${slug}`} className="group block">
      <div className="rounded-xl overflow-hidden bg-white border border-slate/10 shadow-sm card-hover">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-3">
            <span className="inline-block px-3 py-1 bg-secondary text-slate/80 rounded-full text-xs font-medium">
              {category}
            </span>
            <span className="text-slate/60 text-sm">{date}</span>
          </div>
          <h3 className="heading-sm text-slate mb-3 group-hover:text-steel transition-colors">
            {title}
          </h3>
          <p className="text-slate/70">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
