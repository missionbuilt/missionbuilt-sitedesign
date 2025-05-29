
import React, { useRef } from 'react';
import { Download, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JSZip from 'jszip';

const LogoDownloader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // SVG logo generator
  const generateLogoSVG = (color: string = '#10b981', size: number = 256) => {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <!-- M Letter -->
        <path d="M40 60 L40 196 L60 196 L60 100 L90 140 L128 140 L158 100 L158 196 L178 196 L178 60 L158 60 L128 110 L98 60 Z" fill="${color}" stroke="none"/>
        
        <!-- Barbell -->
        <!-- Left weight plate -->
        <rect x="30" y="210" width="24" height="36" rx="4" fill="#1f2937"/>
        <!-- Left bar connection -->
        <rect x="54" y="223" width="40" height="10" fill="#1f2937"/>
        <!-- Center bar -->
        <rect x="94" y="225" width="68" height="6" fill="#1f2937"/>
        <!-- Right bar connection -->
        <rect x="162" y="223" width="40" height="10" fill="#1f2937"/>
        <!-- Right weight plate -->
        <rect x="202" y="210" width="24" height="36" rx="4" fill="#1f2937"/>
        
        <!-- Weight plate details -->
        <circle cx="42" cy="228" r="8" fill="none" stroke="#374151" stroke-width="2"/>
        <circle cx="214" cy="228" r="8" fill="none" stroke="#374151" stroke-width="2"/>
      </svg>
    `;
  };

  // Generate PNG from SVG
  const svgToPng = (svgString: string, size: number): Promise<string> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      canvas.width = size;
      canvas.height = size;
      
      img.onload = () => {
        if (ctx) {
          ctx.fillStyle = 'transparent';
          ctx.fillRect(0, 0, size, size);
          ctx.drawImage(img, 0, 0, size, size);
          resolve(canvas.toDataURL('image/png'));
        }
      };
      
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      img.src = URL.createObjectURL(blob);
    });
  };

  // Generate favicon ICO (simplified - just use 32x32 PNG)
  const generateFavicon = async (): Promise<string> => {
    const svgString = generateLogoSVG('#10b981', 32);
    return await svgToPng(svgString, 32);
  };

  // Download single file
  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Download PNG file
  const downloadPNG = async (dataUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Generate and download complete logo package
  const downloadLogoPackage = async () => {
    const zip = new JSZip();
    
    // Create folders
    const svgFolder = zip.folder('SVG');
    const pngFolder = zip.folder('PNG');
    const faviconFolder = zip.folder('Favicon');
    
    // Generate SVG versions
    const logoSVG = generateLogoSVG('#10b981', 256);
    const logoSVGMono = generateLogoSVG('#1f2937', 256);
    const logoSVGWhite = generateLogoSVG('#ffffff', 256);
    
    svgFolder?.file('missionbuilt-logo.svg', logoSVG);
    svgFolder?.file('missionbuilt-logo-monochrome.svg', logoSVGMono);
    svgFolder?.file('missionbuilt-logo-white.svg', logoSVGWhite);
    
    // Generate PNG versions at different sizes
    const sizes = [32, 64, 128, 256, 512];
    const colors = [
      { name: 'color', color: '#10b981' },
      { name: 'monochrome', color: '#1f2937' },
      { name: 'white', color: '#ffffff' }
    ];
    
    for (const size of sizes) {
      for (const colorVariant of colors) {
        const svgString = generateLogoSVG(colorVariant.color, size);
        const pngDataUrl = await svgToPng(svgString, size);
        const base64Data = pngDataUrl.split(',')[1];
        pngFolder?.file(`missionbuilt-logo-${colorVariant.name}-${size}x${size}.png`, base64Data, { base64: true });
      }
    }
    
    // Generate favicon
    const faviconDataUrl = await generateFavicon();
    const faviconBase64 = faviconDataUrl.split(',')[1];
    faviconFolder?.file('favicon-32x32.png', faviconBase64, { base64: true });
    
    // Add README
    const readme = `# MissionBuilt Logo Package

This package contains the MissionBuilt logo in various formats and sizes.

## Contents:

### SVG/
- missionbuilt-logo.svg (Brand green version)
- missionbuilt-logo-monochrome.svg (Dark gray version)
- missionbuilt-logo-white.svg (White version for dark backgrounds)

### PNG/
Multiple sizes (32x32, 64x64, 128x128, 256x256, 512x512) in three color variants:
- Color (brand green)
- Monochrome (dark gray)
- White (for dark backgrounds)

### Favicon/
- favicon-32x32.png (Optimized for browser favicon use)

## Usage Guidelines:
- Use the color version on light backgrounds
- Use the white version on dark backgrounds
- Maintain aspect ratio when resizing
- Ensure adequate contrast with background

## Brand Colors:
- Primary Green: #10b981
- Barbell Gray: #1f2937

Built with care by MissionBuilt.io
`;
    
    zip.file('README.md', readme);
    
    // Generate and download ZIP
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'missionbuilt-logo-package.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Download individual formats
  const downloadSVG = () => {
    const svgContent = generateLogoSVG('#10b981', 256);
    downloadFile(svgContent, 'missionbuilt-logo.svg', 'image/svg+xml');
  };

  const downloadPNGSingle = async (size: number = 256) => {
    const svgString = generateLogoSVG('#10b981', size);
    const pngDataUrl = await svgToPng(svgString, size);
    await downloadPNG(pngDataUrl, `missionbuilt-logo-${size}x${size}.png`);
  };

  return (
    <div className="bg-card rounded-lg p-6 border shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Package className="h-6 w-6 text-army" />
        <h3 className="text-xl font-display font-semibold">MissionBuilt Logo Downloads</h3>
      </div>
      
      {/* Logo Preview */}
      <div className="mb-6 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground mb-3">Preview:</p>
        <div 
          className="w-32 h-32 mx-auto"
          dangerouslySetInnerHTML={{ __html: generateLogoSVG('#10b981', 128) }}
        />
      </div>
      
      {/* Download Options */}
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-3">Complete Package</h4>
          <Button 
            onClick={downloadLogoPackage}
            className="w-full bg-army hover:bg-army/90 text-white"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Complete Logo Package (.zip)
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Includes SVG, PNG (multiple sizes), favicon, and documentation
          </p>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium mb-3">Individual Downloads</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button variant="outline" onClick={downloadSVG}>
              <Download className="h-4 w-4 mr-2" />
              SVG Format
            </Button>
            <Button variant="outline" onClick={() => downloadPNGSingle(256)}>
              <Download className="h-4 w-4 mr-2" />
              PNG (256x256)
            </Button>
            <Button variant="outline" onClick={() => downloadPNGSingle(512)}>
              <Download className="h-4 w-4 mr-2" />
              PNG (512x512)
            </Button>
            <Button variant="outline" onClick={() => downloadPNGSingle(128)}>
              <Download className="h-4 w-4 mr-2" />
              PNG (128x128)
            </Button>
          </div>
        </div>
      </div>
      
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default LogoDownloader;
