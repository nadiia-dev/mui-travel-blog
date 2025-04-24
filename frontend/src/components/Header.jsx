import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Tab, Tabs, Toolbar, AppBar } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const linksArr = [
  { path: "", label: "Home" },
  { path: "diaries", label: "Diaries" },
  { path: "auth", label: "Auth" },
];
const loggedInLinks = [
  { path: "", label: "Home" },
  { path: "diaries", label: "Diaries" },
  { path: "add", label: "Add" },
  { path: "profile", label: "Profile" },
];

const Header = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const isLoggedIn = useSelector((state) => state.isAuthorised);

  useEffect(() => {
    let index;
    if (isLoggedIn) {
      index = loggedInLinks.findIndex((tab) => tab.path === location.pathname);
    } else {
      index = linksArr.findIndex((tab) => tab.path === location.pathname);
    }
    if (index !== -1) {
      setValue(index);
    }
  }, [location, isLoggedIn]);

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
                  key={link.label}
                  LinkComponent={Link}
                  to={`/${link.label === "Home" ? "" : link.path}`}
                  label={link.label}
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
                  key={link.label}
                  LinkComponent={Link}
                  to={`/${link.label === "Home" ? "" : link.path}`}
                  label={link.label}
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
