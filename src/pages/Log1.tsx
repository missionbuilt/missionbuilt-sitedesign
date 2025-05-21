
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogContent from "../components/logs/LogContent";

const Log1 = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);

  // Define the sections for this log
  const sections = [
    {
      id: "section-1",
      title: "\u00A0",
      content: <p>\u00A0</p>,
      image: {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        alt: ""
      }
    },
    {
      id: "section-2",
      title: "\u00A0",
      content: <p>\u00A0</p>,
      image: {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        alt: ""
      }
    },
    {
      id: "section-3",
      title: "\u00A0",
      content: <p>\u00A0</p>
    },
    {
      id: "section-4",
      title: "\u00A0",
      content: <p>\u00A0</p>
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <LogContent
          title="Mission Before Metrics"
          subtitle="Success isn't the dashboard — it's the user's outcome."
          featuredImage={{
            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
            alt: "Mission Before Metrics"
          }}
          sections={sections}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Log1;
