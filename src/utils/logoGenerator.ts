
/**
 * Generates the MissionBuilt logo as an SVG string
 * @param color - The color for the "M" letter (default: #10b981)
 * @param size - The size of the logo in pixels (default: 256)
 * @returns SVG string
 */
export const generateLogoSVG = (color: string = '#10b981', size: number = 256): string => {
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

/**
 * Converts SVG string to PNG data URL
 * @param svgString - The SVG string to convert
 * @param size - The desired size for the PNG
 * @returns Promise<string> - Data URL of the PNG
 */
export const svgToPng = (svgString: string, size: number): Promise<string> => {
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
