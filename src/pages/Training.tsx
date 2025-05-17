
import { Helmet } from 'react-helmet-async';
import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Training = () => {
  return (
    <>
      <Helmet>
        <title>Training Programs | MissionBuilt.io</title>
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <section className="mb-12 text-center">
            <h1 className="heading-lg mb-6">
              Training Programs
            </h1>
            <p className="body-lg mb-10">
              Specialized training programs designed to help you build strength, discipline, and purpose.
            </p>

            {/* Logo Showcase Section */}
            <div className="my-16 p-10 bg-slate/5 rounded-xl border border-slate/10">
              <h2 className="heading-sm mb-8 text-slate">New Logo Design</h2>
              <div className="space-y-10 flex flex-col items-center">
                {/* Small Logo */}
                <div className="p-6 bg-white rounded-lg shadow-sm w-full max-w-md">
                  <h3 className="body font-semibold mb-2 text-slate/70">Small Size</h3>
                  <Logo size="sm" asLink={false} className="text-slate" />
                </div>
                
                {/* Medium Logo */}
                <div className="p-6 bg-white rounded-lg shadow-sm w-full max-w-md">
                  <h3 className="body font-semibold mb-2 text-slate/70">Medium Size (Default)</h3>
                  <Logo size="md" asLink={false} className="text-slate" />
                </div>
                
                {/* Large Logo */}
                <div className="p-6 bg-white rounded-lg shadow-sm w-full max-w-md">
                  <h3 className="body font-semibold mb-2 text-slate/70">Large Size</h3>
                  <Logo size="lg" asLink={false} className="text-slate" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Training;
