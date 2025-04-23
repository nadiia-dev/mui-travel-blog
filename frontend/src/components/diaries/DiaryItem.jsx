import { Avatar, Box, CardHeader, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
// import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DiaryItem = () => {
  return (
    <Card
      sx={{
        width: "50%",
        height: "auto",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            {<EditLocationAltIcon />}
          </IconButton>
        }
      />
      <img
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
        height={194}
      />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          Title
        </Typography>
        <hr />
        <Box paddingTop={1} display="flex">
          <Typography
            width="auto"
            fontWeight="bold"
            variant="caption"
            sx={{ mr: 1 }}
          >
            Name:
          </Typography>
          <Typography variant="body2" colot="text.secondary">
            Description
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DiaryItem;
