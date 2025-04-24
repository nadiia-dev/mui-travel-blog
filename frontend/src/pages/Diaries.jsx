import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import DiaryItem from "../components/diaries/DiaryItem";
import { getAllPosts } from "../api-helpers/postsApi";

const Diaries = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data?.allPosts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={3}
      justifyContent="center"
      alignItems="center"
    >
      {posts &&
        posts.map((item) => (
          <DiaryItem key={item._id} post={item} userName={item.user.name} />
        ))}
    </Box>
  );
};

export default Diaries;
