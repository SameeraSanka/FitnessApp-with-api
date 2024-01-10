import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
const SearchExercises = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) =>{
    setSearch(e.taget.value);
  };

  const handleChick = () =>{

  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        {" "}
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value="search"
          onChange={handleChange}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
        onClick={handleChick}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
