import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './component/context/AuthProvider';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </AuthProvider>
    </Router>
  </React.StrictMode>
);

