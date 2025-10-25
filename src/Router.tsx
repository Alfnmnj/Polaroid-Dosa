import { lazy, Suspense } from 'react';
import App from './App';
import { shouldShowAndroidView } from './android/utils/deviceDetection';

// Lazy load Android app to avoid loading it for web users
const AppAndroid = lazy(() => import('./android/AppAndroid'));

export function Router() {
  if (shouldShowAndroidView()) {
    return (
      <Suspense fallback={
        <div style={{ 
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#000',
          color: '#F59922',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>
          Loading...
        </div>
      }>
        <AppAndroid />
      </Suspense>
    );
  }
  
  return <App />;
}