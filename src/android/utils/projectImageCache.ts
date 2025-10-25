// Optimized image loading utility for fast mobile performance

class ProjectImageCache {
  private cache = new Map<string, HTMLImageElement>();
  private loadingPromises = new Map<string, Promise<HTMLImageElement>>();
  private preloadQueue: string[] = [];
  private isPreloading = false;

  async preloadImage(src: string): Promise<HTMLImageElement> {
    // Return cached image if available
    if (this.cache.has(src)) {
      return this.cache.get(src)!;
    }

    // Return existing loading promise if in progress
    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src)!;
    }

    // Create new loading promise with optimizations
    const loadingPromise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      
      // Mobile-optimized loading settings
      img.loading = 'eager';
      img.decoding = 'async'; // Better for mobile performance
      
      // Set size hints for faster rendering
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      
      img.onload = () => {
        this.cache.set(src, img);
        this.loadingPromises.delete(src);
        resolve(img);
      };
      
      img.onerror = () => {
        this.loadingPromises.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      // Start loading
      img.src = src;
    });

    this.loadingPromises.set(src, loadingPromise);
    return loadingPromise;
  }

  // Batch preload with throttling for better mobile performance
  async preloadBatch(sources: string[], batchSize = 3): Promise<void> {
    if (this.isPreloading) return;
    
    this.isPreloading = true;
    this.preloadQueue = [...sources];
    
    while (this.preloadQueue.length > 0) {
      const batch = this.preloadQueue.splice(0, batchSize);
      const promises = batch.map(src => this.preloadImage(src).catch(() => null));
      await Promise.all(promises);
      
      // Small delay between batches to prevent blocking
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    this.isPreloading = false;
  }

  getCachedImage(src: string): HTMLImageElement | null {
    return this.cache.get(src) || null;
  }

  isCached(src: string): boolean {
    return this.cache.has(src);
  }

  clearCache(): void {
    this.cache.clear();
    this.loadingPromises.clear();
  }

  getCacheSize(): number {
    return this.cache.size;
  }

  // Preload critical images immediately (non-blocking)
  preloadCritical(sources: string[]): void {
    sources.slice(0, 4).forEach((src, index) => {
      setTimeout(() => {
        this.preloadImage(src).catch(() => {
          console.log(`Failed to preload image: ${src}`);
        });
      }, index * 100); // Stagger loading
    });
  }
}

// Global instance
export const projectImageCache = new ProjectImageCache();

// Project image sources - Updated to use correct asset paths
export const PROJECT_IMAGES = [
  "/assets/0001 (1).jpg",
  "/assets/0002 (1).jpg",
  "/assets/0003.jpg",
  "/assets/feastale-20251023-0001.jpg",
  "/assets/launch poster.jpg",
  "/assets/leadiedc-20251023-0001.jpg",
  "/assets/leadiedc-20251023-0002.jpg",
  "/assets/WhatsApp Image 2025-10-20 at 2.45.25 AM.jpeg",
  "/assets/WhatsApp Image 2025-10-20 at 3.00.25 AM.jpeg",
  "/assets/WhatsApp Image 2025-10-20 at 3.03.20 AM.jpeg",
  "/assets/White and Purple Modern Event Speaker List Instagram Post (1).jpg",
  "/assets/NEC.jpg",
  "/assets/obt.jpg",
  "/assets/placement.jpg",
  "/assets/poster 1.jpg",
  "/assets/poster 2.jpg",
  "/assets/YRTS.jpg",
];