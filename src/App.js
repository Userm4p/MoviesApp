import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRoutes } from './routes/AppRoutes';

const init = () => {
  return JSON.parse(localStorage.getItem('session_id'))  || {logged: false};
}

function App() {
  const [session_id, dispatch] = useReducer( authReducer, {}, init);

  useEffect(() => {
    if(!session_id) return;
    localStorage.setItem('session_id', JSON.stringify(session_id));
  }, [session_id])
  return (
    <AuthContext.Provider value={{
      session_id, dispatch
    }}>
      <AppRoutes/>
    </AuthContext.Provider>
  );
}

export default App;
