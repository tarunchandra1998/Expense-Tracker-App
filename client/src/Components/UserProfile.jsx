import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../Store/Actions/userActions";
import {
  TextField,
  Button,
  Container,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [profilePicture, setProfilePicture] = useState(
    user.profilePicture || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, email, profilePicture }));
    setEditing(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt={name}
          src={profilePicture}
          sx={{ width: 100, height: 100, marginRight: 2 }}
        />
        {editing ? (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              label="Profile Picture URL"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Save
            </Button>
            <Button
              type="button"
              onClick={() => setEditing(false)}
              sx={{ marginTop: 2 }}
            >
              Cancel
            </Button>
          </form>
        ) : (
          <div>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1">{email}</Typography>
            <IconButton onClick={() => setEditing(true)} sx={{ marginTop: 2 }}>
              <EditIcon />
            </IconButton>
          </div>
        )}
      </div>
    </Container>
  );
};

export default UserProfile;
