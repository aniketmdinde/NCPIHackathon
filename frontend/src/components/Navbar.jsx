import React from "react";
import { Link } from "react-router-dom";
import { useUser, SignOutButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      {isSignedIn ? <SignOutButton /> : <Link to="/sign-in">Sign In</Link>}
    </nav>
  );
};

export default Navbar;