// Image optimization utilities for Android performance

export const preloadImages = (imageSources: string[]): Promise<void[]> => {
  return Promise.all(
    imageSources.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        
        // Set high priority loading
        if ('fetchPriority' in img) {
          (img as any).fetchPriority = 'high';
        }
        
        // Set loading strategy
        img.loading = 'eager';
        img.decoding = 'async';
        
        // Handle both success and error to avoid hanging
        const handleLoad = () => {
          resolve();
        };
        
        img.onload = handleLoad;
        img.onerror = handleLoad;
        
        // Start loading
        img.src = src;
      });
    })
  );
};

export const optimizeImageElement = (img: HTMLImageElement): void => {
  // Apply mobile-specific optimizations
  img.style.willChange = 'transform';
  img.style.backfaceVisibility = 'hidden';
  img.style.transform = 'translateZ(0)';
  
  // Set loading attributes
  img.loading = 'eager';
  img.decoding = 'async';
  
  // Set fetch priority if supported
  if ('fetchPriority' in img) {
    (img as any).fetchPriority = 'high';
  }
};

export const createImageCache = (): Map<string, HTMLImageElement> => {
  return new Map();
};

// Team member image sources
export const TEAM_IMAGES = [
  '/characters/Risvi Chatterji.png',
  '/characters/Alfred T Manoj.png',
  '/characters/Abhishankar S.png',
  '/characters/Alfin T Manoj.png',
  '/characters/Abhinandh K M.png',
  '/characters/Rakesh.png'
];