import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Profile = () => {
  const { user } = useUser();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/profile", { withCredentials: true })
      .then((response) => setProfileData(response.data.user))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profileData?.name}</p>
      <p>Email: {profileData?.email}</p>
    </div>
  );
};

export default Profile;
