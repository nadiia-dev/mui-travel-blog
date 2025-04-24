import { useEffect, useState } from "react";
import { getUserDetails } from "../api-helpers/authApi";
import { Box, Button, Typography } from "@mui/material";
import DiaryItem from "../components/diaries/DiaryItem";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  useEffect(() => {
    getUserDetails()
      .then((data) => {
        setUser(data);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <Box display="flex" flexDirection="column">
      {user && (
        <>
          <Typography
            textAlign={"center"}
            variant="h3"
            fontFamily={"quicksand"}
            padding={2}
          >
            User Profile
          </Typography>
          <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
            Name: {user.name}
          </Typography>
          <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
            Email: {user.email}
          </Typography>
          <Button
            onClick={handleClick}
            sx={{ mr: "auto", width: "15%" }}
            color="warning"
            variant="contained"
          >
            Logout
          </Button>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            {user.posts.map((post) => (
              <DiaryItem key={post._id} post={post} userName={user.name} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Profile;
