import { Route, Routes, Navigate } from "react-router-dom";
import { useUser, SignIn, SignUp } from "@clerk/clerk-react";
import PropTypes from 'prop-types';
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Test from "./pages/Test";
import FraudDetection from "./pages/frauddetection";
import "./index.css";

// Protected route that redirects to sign-in if not authenticated
const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <Navigate to="/sign-in" />;
};

// Public route that redirects to dashboard if already authenticated
const PublicRoute = ({ children }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? <Navigate to="/dashboard" /> : children;
};

// Styled container for auth pages
const AuthContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        {children}
      </div>
    </div>
  );
};

// PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  const { isSignedIn } = useUser();

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public routes that redirect to dashboard if logged in */}
        <Route path="/sign-in" element={
          <PublicRoute>
            <AuthContainer>
              <SignIn routing="path" path="/sign-in" />
            </AuthContainer>
          </PublicRoute>
        } />
        <Route path="/sign-up" element={
          <PublicRoute>
            <AuthContainer>
              <SignUp routing="path" path="/sign-up" />
            </AuthContainer>
          </PublicRoute>
        } />
        
        {/* Protected routes that redirect to sign-in if not logged in */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/frauddetection" element={
          <ProtectedRoute>
            <FraudDetection />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        
        {/* Test route */}
        <Route path="/hello" element={<Test />} />
        
        {/* Default route - redirect based on auth status */}
        <Route path="*" element={
          isSignedIn ? <Navigate to="/dashboard" /> : <Navigate to="/sign-in" />
        } />
      </Routes>
    </>
  );
}

export default App;