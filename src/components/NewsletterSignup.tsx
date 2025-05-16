
import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a newsletter service
    console.log('Submitted email:', email);
    setIsSubmitted(true);
    setEmail('');
    // Reset the success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  
  return (
    <section className="bg-gradient-to-br from-steel/10 to-slate/5 py-16">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-md text-slate mb-4">Join the Mission</h2>
          <p className="text-slate/80 mb-8 max-w-lg mx-auto">
            Subscribe to get insights on product philosophy, weightlifting wisdom, and strategies for personal and professional growth.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-3 rounded-lg border border-slate/20 focus:outline-none focus:ring-2 focus:ring-steel/50"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 text-sm text-green-600 animate-fade-in">
              Thank you for subscribing! Check your inbox soon.
            </div>
          )}
          
          <p className="text-xs text-slate/60 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
