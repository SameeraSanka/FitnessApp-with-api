import { Box, Container } from "@mui/material";
import React from "react";

const HorizontalScrollbar = ({ data }) => {
  return (
    <Container sx={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 10px"  // Adjust the margin as needed
          display="inline-block"  // Display items in a row
        >
          {item}
        </Box>
      ))}
    </Container>
  );
};

export default HorizontalScrollbar;
