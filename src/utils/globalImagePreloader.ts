// Global aggressive image preloader for both web and Android
class GlobalImagePreloader {
  private cache = new Map<string, HTMLImageElement>();
  private loadingPromises = new Map<string, Promise<HTMLImageElement>>();
  private preloadedUrls = new Set<string>();

  // Aggressive preload with multiple strategies
  async preloadImage(src: string, priority: 'high' | 'medium' | 'low' = 'medium'): Promise<HTMLImageElement> {
    if (this.cache.has(src)) {
      return this.cache.get(src)!;
    }

    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src)!;
    }

    const loadingPromise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      
      // Set aggressive loading attributes
      img.crossOrigin = 'anonymous';
      img.decoding = 'async';
      img.loading = priority === 'high' ? 'eager' : 'lazy';
      
      // Set fetch priority if supported
      if ('fetchPriority' in img) {
        (img as any).fetchPriority = priority;
      }

      // Performance hints
      img.style.willChange = 'auto';
      img.style.contain = 'layout style paint';

      img.onload = () => {
        this.cache.set(src, img);
        this.loadingPromises.delete(src);
        this.preloadedUrls.add(src);
        resolve(img);
      };

      img.onerror = () => {
        this.loadingPromises.delete(src);
        console.warn(`Failed to preload image: ${src}`);
        reject(new Error(`Failed to load image: ${src}`));
      };

      // Start loading
      img.src = src;
    });

    this.loadingPromises.set(src, loadingPromise);
    return loadingPromise;
  }

  // Batch preload with controlled concurrency
  async preloadBatch(sources: string[], concurrency = 4, priority: 'high' | 'medium' | 'low' = 'medium'): Promise<void> {
    const batches: string[][] = [];
    for (let i = 0; i < sources.length; i += concurrency) {
      batches.push(sources.slice(i, i + concurrency));
    }

    for (const batch of batches) {
      const promises = batch.map(src => 
        this.preloadImage(src, priority).catch(() => null)
      );
      await Promise.all(promises);
      
      // Small delay between batches to prevent overwhelming
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }

  // Preload critical images immediately
  preloadCritical(sources: string[]): void {
    sources.slice(0, 6).forEach((src, index) => {
      setTimeout(() => {
        this.preloadImage(src, 'high').catch(() => {});
      }, index * 50);
    });
  }

  // Force preload all images with maximum priority
  async forcePreloadAll(sources: string[]): Promise<void> {
    console.log('🚀 Force preloading all images...');
    
    // First batch: Critical images (immediate)
    const critical = sources.slice(0, 4);
    await Promise.all(critical.map(src => 
      this.preloadImage(src, 'high').catch(() => null)
    ));

    // Second batch: Important images
    const important = sources.slice(4, 8);
    await this.preloadBatch(important, 3, 'high');

    // Third batch: Remaining images
    const remaining = sources.slice(8);
    await this.preloadBatch(remaining, 2, 'medium');

    console.log(`✅ Preloaded ${this.cache.size} images`);
  }

  // Check if image is cached
  isCached(src: string): boolean {
    return this.cache.has(src);
  }

  // Get cached image
  getCachedImage(src: string): HTMLImageElement | null {
    return this.cache.get(src) || null;
  }

  // Get cache stats
  getCacheStats(): { size: number, urls: string[] } {
    return {
      size: this.cache.size,
      urls: Array.from(this.preloadedUrls)
    };
  }

  // Clear cache
  clearCache(): void {
    this.cache.clear();
    this.loadingPromises.clear();
    this.preloadedUrls.clear();
  }
}

// Global instance
export const globalImagePreloader = new GlobalImagePreloader();

// Project image URLs - Updated to use optimized PNG versions
export const ALL_PROJECT_IMAGES = [
  "/assets/0001 (1).jpg",
  "/assets/0002 (1).png", 
  "/assets/0003.png",
  "/assets/feastale-20251023-0001.jpg",
  "/assets/launch poster.png",
  "/assets/leadiedc-20251023-0001.jpg",
  "/assets/leadiedc-20251023-0002.jpg",
  "/assets/WhatsApp Image 2025-10-20 at 2.45.25 AM.jpeg",
  "/assets/WhatsApp Image 2025-10-20 at 3.00.25 AM.jpeg",
  "/assets/WhatsApp Image 2025-10-20 at 3.03.20 AM.jpeg",
  "/assets/White and Purple Modern Event Speaker List Instagram Post (1).png",
  "/assets/NEC.png",
  "/assets/obt.png",
  "/assets/placement.png",
  "/assets/poster 1.jpg",
  "/assets/poster 2.png",
  "/assets/YRTS.png"
];

// Initialize simple preloading on app start
export const initializeImagePreloading = () => {
  // Simple preloading without complex optimizers
  globalImagePreloader.preloadCritical(ALL_PROJECT_IMAGES);
};