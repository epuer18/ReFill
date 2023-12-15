import { useState } from "react";
import { useSelector } from "react-redux";
import "../css/index.css";
import "../css/profile.css";
import defaultProfilePic from "../image/default.jpeg";

const Profile = () => {
  const [livingArea, setLivingArea] = useState(
    "Please describe your living area"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editLivingArea, setEditLivingArea] = useState(livingArea);

  const { user } = useSelector((state) => state.auth);

  const changeProfile = () => {
    if (isEditing) {
      setLivingArea(editLivingArea); // Save the new living area
    }
    setIsEditing(!isEditing); // Toggle editing mode
  };

  const handleLivingAreaChange = (e) => {
    setEditLivingArea(e.target.value);
  };
  
  // I see your profile picture is added as default Profile Pic, maybe let the user choose their own profile picture to add usability.
  return (
    <main className="profile">
      <div className="profile-content">
        <img
          src={defaultProfilePic}
          alt="profile picture"
          className="profile-pic"
        />
        <h1 className="username">{user.username}</h1>

        {isEditing ? (
          <input
            type="text"
            value={editLivingArea}
            onChange={handleLivingAreaChange}
            className="living-area-input"
          />
        ) : (
          <p className="living-area">{livingArea}</p>
        )}

        <button onClick={changeProfile}>
          {isEditing ? "Save Changes" : "Change Profile"}
        </button>
      </div>
    </main>
  );
};

export default Profile;
