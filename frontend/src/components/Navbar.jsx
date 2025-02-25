import React from "react";
import { Link } from "react-router-dom";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { Shield, User } from 'lucide-react';

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl backdrop-blur-md bg-black/30 rounded-full border border-gray-800 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/dashboard" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/frauddetection" className="hover:text-gray-300 transition-colors">Fraud Detection</Link>
          <Link to="/assets" className="hover:text-gray-300 transition-colors">Assets</Link>
          <Link to="/features" className="hover:text-gray-300 transition-colors">Features</Link>
          <Link to="/pricing" className="hover:text-gray-300 transition-colors">Pricing</Link>
          <Link to="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            Protection
          </button>
          {isSignedIn ? (
            <SignOutButton>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
                <User className="w-4 h-4" />
                Sign Out
              </button>
            </SignOutButton>
          ) : (
            <Link to="/sign-in">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
                <User className="w-4 h-4" />
                Create Account
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;