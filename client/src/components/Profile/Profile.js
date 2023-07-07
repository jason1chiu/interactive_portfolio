import React from 'react';
import { Button } from 'react-bootstrap';
import ProfileForm from './ProfileForm';

const AdminProfile = ({ profile, handleEdit }) => {
  const [editing, setEditing] = React.useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleFormSubmit = (updatedProfile) => {
    handleEdit(updatedProfile);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <ProfileForm profile={profile} handleSubmit={handleFormSubmit} />
      ) : (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <Button variant="primary" onClick={handleEditClick}>Edit Profile</Button>
        </>
      )}
    </div>
  );
};

export default AdminProfile;