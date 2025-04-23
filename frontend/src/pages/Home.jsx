import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box position="relative" width="100%" height="90vh">
      <img src="/road.jpg" alt="hero image" width={"100%"} height="70%" />
      <Typography
        fontFamily={"Dancing Script,cursive"}
        variant="h3"
        fontWeight="bold"
        width="100%"
        textAlign="center"
        sx={{
          position: "absolute",
          top: "0px",
          color: "#111115de",
          background: "#B2C8DF",
        }}
      >
        Dare to live the life you've always wanted
      </Typography>
      <Box width="100%" height="30%" display={"flex"} flexDirection="column">
        <Typography
          fontFamily={"quicksand"}
          textAlign={"center"}
          variant="h4"
          padding={4}
        >
          SHARE YOUR TRAVEL DIARIES WITH US
        </Typography>
        <Box margin={"auto"}>
          <Button variant="outlined" sx={{ mr: 2 }}>
            Share Your Story
          </Button>
          <Button
            variant="contained"
            LinkComponent={Link}
            to="/diaries"
            sx={{ ml: 2 }}
          >
            View Diaries
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
