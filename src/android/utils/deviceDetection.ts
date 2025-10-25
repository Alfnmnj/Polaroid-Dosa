// Android device detection utilities
export const isAndroid = (): boolean => {
  return /Android/i.test(navigator.userAgent);
};

export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const shouldShowAndroidView = (): boolean => {
  const currentPath = window.location.pathname;
  return currentPath === '/android' || (isAndroid() && currentPath === '/');
};

// Redirect non-Android users from /android route
export const handleAndroidRouting = (): void => {
  if (window.location.pathname === '/android' && !isAndroid()) {
    // Allow manual access to Android view for testing
    console.log('Non-Android device accessing Android view - allowing for testing purposes');
  }
};