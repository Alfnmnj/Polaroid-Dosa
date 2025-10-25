import { createRoot } from "react-dom/client";
import "./index.css";

// Simple test component to check if React is working
function TestApp() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f0f0f0',
      color: '#333',
      fontSize: '2rem',
      fontWeight: 'bold'
    }}>
      <div>
        <h1>Portfolio Test - React is Working! 🎉</h1>
        <p>If you see this, the deployment is successful.</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<TestApp />);