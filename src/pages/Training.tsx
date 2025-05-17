
import { Helmet } from 'react-helmet-async';
import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

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
              <h2 className="heading-sm mb-8 text-slate">Logo Design</h2>
              
              {/* Complete Logo (Image + Text) */}
              <div className="mb-10">
                <h3 className="body font-semibold mb-6 text-slate/70">Complete Logo (Image + Text) with Color Schemes</h3>
                
                <div className="space-y-8">
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Default Color Scheme</h4>
                    <Logo size="md" asLink={false} colorScheme="default" />
                  </div>
                  
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Subtle Color Scheme</h4>
                    <Logo size="md" asLink={false} colorScheme="subtle" />
                  </div>
                  
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Monochrome Color Scheme</h4>
                    <Logo size="md" asLink={false} colorScheme="monochrome" />
                  </div>
                </div>
              </div>
              
              <Separator className="my-10" />
              
              {/* Different Sizes */}
              <div className="mb-10">
                <h3 className="body font-semibold mb-6 text-slate/70">Sizes (Using Subtle Color Scheme)</h3>
                <div className="space-y-8">
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Small</h4>
                    <Logo size="sm" asLink={false} colorScheme="subtle" />
                  </div>
                  
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Medium (Default)</h4>
                    <Logo size="md" asLink={false} colorScheme="subtle" />
                  </div>
                  
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Large</h4>
                    <Logo size="lg" asLink={false} colorScheme="subtle" />
                  </div>
                </div>
              </div>
              
              <Separator className="my-10" />
              
              {/* Logo Image Only */}
              <div className="mb-10">
                <h3 className="body font-semibold mb-6 text-slate/70">Logo Image Only (M with barbell)</h3>
                <div className="space-y-8">
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Small</h4>
                    <Logo size="sm" asLink={false} showImage={true} showText={false} />
                  </div>
                  
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Medium</h4>
                    <Logo size="md" asLink={false} showImage={true} showText={false} />
                  </div>
                  
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Large</h4>
                    <Logo size="lg" asLink={false} showImage={true} showText={false} />
                  </div>
                </div>
              </div>
              
              <Separator className="my-10" />
              
              {/* Logo Text Only */}
              <div>
                <h3 className="body font-semibold mb-6 text-slate/70">Logo Text Only with Different Color Schemes</h3>
                <div className="space-y-8">
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Default Color Scheme</h4>
                    <Logo size="md" asLink={false} showImage={false} showText={true} colorScheme="default" />
                  </div>
                  
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Subtle Color Scheme</h4>
                    <Logo size="md" asLink={false} showImage={false} showText={true} colorScheme="subtle" />
                  </div>
                  
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="text-sm text-slate/60 mb-3">Monochrome Color Scheme</h4>
                    <Logo size="md" asLink={false} showImage={false} showText={true} colorScheme="monochrome" />
                  </div>
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
