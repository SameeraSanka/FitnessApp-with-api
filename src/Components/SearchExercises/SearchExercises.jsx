import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOption, fetchData } from "../../utils/fetchData";
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";
const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercise, setExercise] = useState([]);
  const [bodyParts, setBodyParatList] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyParatList",
        exerciseOption
      );
      setBodyParatList('all', ...bodyPartsData);
    };
    fetchExercisesData();
  }, []);

  const handleChick = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOption
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercise(searchedExercises);
    }
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
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
      <Box sx={{position: 'relative', width:'100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
