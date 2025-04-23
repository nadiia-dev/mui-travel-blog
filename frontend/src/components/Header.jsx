import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Tab, Tabs, Toolbar, AppBar } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const linksArr = ["home", "diaries", "auth"];
const loggedInLinks = ["home", "diaries", "add", "profile"];

const Header = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const isLoggedIn = useSelector((state) => state.isAuthorised);

  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/diaries") {
      setValue(1);
    } else if (location.pathname === "/auth") {
      setValue(2);
    }
  }, [location]);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white" }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "black" }} />
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {isLoggedIn
            ? loggedInLinks.map((link) => (
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
              ))
            : linksArr.map((link) => (
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
