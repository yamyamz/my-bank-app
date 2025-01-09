import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard'; 
import CreateClaim from './components/CreateClaims';
// Import the Dashboard component
// Example of route configuration
const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-claim" element={<CreateClaim/>} />

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
