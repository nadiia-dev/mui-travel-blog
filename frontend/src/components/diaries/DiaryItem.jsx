import {
  Avatar,
  Box,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

const DiaryItem = ({ post }) => {
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === post.user._id) {
      return true;
    }
    return false;
  };

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
        avatar={
          <Avatar sx={{ bgcolor: "red", textTransform: "uppercase" }}>
            {post.user.name.slice(0, 2)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<EditLocationAltIcon />}
          </IconButton>
        }
        title={post.location}
        header={post.location}
        subheader={new Date(`${post.date}`).toLocaleDateString()}
      />
      <img src={post.image} alt={post.title} height={194} />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {post.title}
        </Typography>
        <hr />
        <Box paddingTop={1} display="flex">
          <Typography
            width="auto"
            fontWeight="bold"
            variant="caption"
            sx={{ mr: 1 }}
          >
            {post.user.name}:
          </Typography>
          <Typography variant="body2" colot="text.secondary">
            {post.description}
          </Typography>
        </Box>
      </CardContent>
      {isLoggedInUser() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton
            LinkComponent={Link}
            to={`/post/${post._id}`}
            color="warning"
          >
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};

export default DiaryItem;
