
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources | Mission Built</title>
        <meta name="description" content="Essential tools and resources to help you stay aligned with your mission and build purposeful work." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Navbar />
        
        <main className="container-custom py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6 bg-gradient-to-r from-army via-steel to-sunburst bg-clip-text text-transparent">
              Mission Resources
            </h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Tools, checklists, and frameworks designed to help you maintain alignment with your mission and build work that matters.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Mission Alignment Checklist */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-army/20 dark:hover:border-sunburst/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-army/10 to-steel/10 dark:from-sunburst/10 dark:to-army/10 group-hover:from-army/20 group-hover:to-steel/20 dark:group-hover:from-sunburst/20 dark:group-hover:to-army/20 transition-all duration-300">
                      <Target className="h-8 w-8 text-army dark:text-sunburst" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-army dark:group-hover:text-sunburst transition-colors">
                        Mission Alignment Checklist
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-army/10 text-army dark:bg-sunburst/10 dark:text-sunburst border-army/20 dark:border-sunburst/20">
                          Interactive Tool
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          19 Questions
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-army dark:group-hover:text-sunburst group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  A comprehensive assessment tool with 19 carefully crafted questions across three key areas: Mission Foundation, Execution & Adaptation, and Sustainability & Culture. Track your alignment score and export your results as a PDF.
                </CardDescription>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-2xl font-bold text-army dark:text-sunburst mb-1">4 pts</div>
                    <div className="text-sm text-muted-foreground">Mission Foundation</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-2xl font-bold text-steel mb-1">3 pts</div>
                    <div className="text-sm text-muted-foreground">Execution & Adaptation</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-2xl font-bold text-sunburst mb-1">2 pts</div>
                    <div className="text-sm text-muted-foreground">Sustainability & Culture</div>
                  </div>
                </div>

                <Link 
                  to="/mission-alignment-checklist"
                  className="inline-flex items-center gap-2 btn-primary w-full md:w-auto justify-center group-hover:bg-army/90 dark:group-hover:bg-sunburst/90"
                >
                  Start Assessment
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center mt-16 pt-12 border-t border-muted/30">
            <p className="body text-muted-foreground italic">
              Stay tuned—this library will keep growing over time.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
