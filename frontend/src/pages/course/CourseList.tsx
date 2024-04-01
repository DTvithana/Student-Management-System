import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  Collapse,
  Dialog,
  Divider,
  Fade,
  Grid,
  Grow,
  InputAdornment,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import CourseListComponent from "./CourseListComponent";
import axios, { CanceledError } from "axios";

interface CourseProps {
  id: string;
  courseName: string;
  courseId: string;
}

function CourseList() {
  const navigate = useNavigate();

  const [course, setCourse] = useState<CourseProps[]>([]);

  const [SearchCourse, setSearchCourse] = useState<CourseProps[]>([...course]);
  const [error, setError] = useState("");
  const [view, setView] = useState<CourseProps[]>([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleView = (id: string) => {
    const views = course.filter((u) => u.id === id);
    console.log(views)
    localStorage.setItem("view", JSON.stringify(views));
    navigate("/course/view");
  };

  const handleEdit = (id: string) => {
    localStorage.setItem("edit", JSON.stringify(id));
  };

  const SearchStd = (id: string) => {
    if (id) setSearchCourse(course.filter((u) => u.courseId == id));
    else setSearchCourse(course);
    console.log(course);
  };

  // const handelDelete = (id: string) => {
  //   const originalWork = [...Course];
  //   setCourse(Course.filter(u => u.id !== id));

  //   axios.delete(`http://localhost:5000/api/Course/${id}` )
  //   .catch(err => {
  //     setError(err.message);
  //     setCourse(originalWork)
  //   })
  // }

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<CourseProps[]>("http://localhost:5000/course")
      .then((res) => {
        setCourse(res.data);

      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);


  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 700 } : {})}
    >
      <Card
        sx={{ width: "60rem", borderRadius: "15px", paddingBottom: "2rem" }}
      >
        <Box p={5}>
          <TextField
            InputProps={{
              sx: { borderRadius: "15px" },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
            placeholder="Search"
            id="outlined-basic"
            variant="outlined"
            onChange={(event) => SearchStd(event.target.value)}
          />
        </Box>
        <Grid container spacing={3}>
          <CourseListComponent
            data={SearchCourse.length == 0 ? course : SearchCourse}
            handleView={handleView}
            handleEdit={handleEdit}
          />
        </Grid>
        {/* <SimpleDialog
                open={open}
                onClose={handleClose} selectedValue={''}    /> */}
      </Card>
    </Grow>
  );
}

export default CourseList;
