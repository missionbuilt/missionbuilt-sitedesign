
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoDownloader from '@/components/LogoDownloader';

const LogoDownload: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Logo Downloads | MissionBuilt</title>
        <meta name="description" content="Download the MissionBuilt logo in various formats and sizes." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="heading-lg mb-4">MissionBuilt Logo Downloads</h1>
            <p className="body text-muted-foreground">
              Download the MissionBuilt logo in multiple formats, sizes, and color variations.
            </p>
          </div>
          
          <LogoDownloader />
          
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <h3 className="font-medium mb-2">Usage Guidelines</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Use the color version on light backgrounds</li>
              <li>• Use the white version on dark backgrounds or colored surfaces</li>
              <li>• Maintain the original aspect ratio when resizing</li>
              <li>• Ensure adequate contrast between logo and background</li>
              <li>• The logo represents the intersection of strength training and product building</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LogoDownload;
