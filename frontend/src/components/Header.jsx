import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Tab, Tabs, Toolbar, AppBar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const linksArr = ["home", "diaries", "auth"];

const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <AppBar position="sticky" sx={{ bgcolor: "transparent" }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "black" }} />
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {linksArr.map((link) => (
            <Tab
              key={link}
              LinkComponent={Link}
              to={`/${link === "home" ? "" : link}`}
              label={link}
              sx={{
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "18px",
                },
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
