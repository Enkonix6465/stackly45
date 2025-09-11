import { useEffect, useState } from 'react';
import { getCurrentUser, isAuthenticated, isAdmin } from '../utils/auth';

export default function AdminDebug() {
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    const currentUser = getCurrentUser();
    const authenticated = isAuthenticated();
    const admin = isAdmin();
    
    setDebugInfo({
      currentUser,
      authenticated,
      admin,
      localStorage: {
        authUser: localStorage.getItem('authUser'),
        users: localStorage.getItem('users')
      }
    });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-md z-50">
      <h3 className="font-bold mb-2">Admin Debug Info:</h3>
      <pre className="whitespace-pre-wrap overflow-auto max-h-64">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  );
}
