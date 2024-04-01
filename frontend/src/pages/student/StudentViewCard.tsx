import { Box, Button, Card, Grid, Grow, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface EduProps {
  id: string;
  fName: string;
  lName: string;
  birthday: string;
  degree: string;
  index: string;
  address: string;
  course1: string;
  course2: string;
  course3: string;
  course4: string;
}

function StudentViewCard() {
  const navigate = useNavigate();
  const [view, setView] = useState<EduProps[] | null>();

  useEffect(() => {
    const savedView = localStorage.getItem("view");

    if (savedView) {
      const views = JSON.parse(savedView);
      setView(views);
    }
  }, []);

  console.log(view);

  return (
    <Grow
      in={true}
      {...(true ? { timeout: 700 } : {})}
      style={{ transformOrigin: "0 0 0" }}
    >
      <Card
        sx={{
          width: "50rem",
          alignItems: "center",
          paddingLeft: "2rem",
          background: "#e1f1fd",
          borderRadius: "15px",
        }}
      >
        <Box p={1} width="640px">
          <Grid container spacing={1} paddingTop="2rem">
            <Grid sx={{ padding: "1rem" }} item xs={6} md={6}>
              <Typography paddingTop="1rem">Student ID</Typography>
              <Typography>{view[0]?.id}</Typography>
            </Grid>
            <Grid sx={{ padding: "1rem" }} item xs={6} md={6}>
              <Typography paddingTop="1rem">Full Name</Typography>
              <Typography>
                {firstObject?.fName}
                {firstObject?.lName}
              </Typography>
            </Grid>
            <Grid sx={{ padding: "1rem" }} item xs={6} md={6}>
              <Typography paddingTop="1rem">Address</Typography>
              <Typography>{firstObject?.address}</Typography>
            </Grid>
            <Grid sx={{ padding: "1rem" }} item xs={6} md={15}>
              <Typography paddingTop="1rem">BirthDay</Typography>
              <Typography>{firstObject?.birthday}</Typography>
            </Grid>
            <Grid sx={{ padding: "1rem" }} item xs={6} md={6}>
              <Typography paddingTop="1rem">Degree</Typography>
              <Typography>{firstObject?.degree}</Typography>
            </Grid>
            <Grid sx={{ padding: "1rem" }} item xs={6} md={6}>
              <Typography paddingTop="1rem">Course 1</Typography>
              <Typography>{firstObject?.course1}</Typography>
            </Grid>
            <Grid sx={{ padding: "1rem" }} item xs={6} md={6}>
              <Typography paddingTop="1rem">Course 2</Typography>
              <Typography>{firstObject?.course2}</Typography>
            </Grid>
            <Grid sx={{ padding: "1rem" }} item xs={6} md={6}>
              <Typography paddingTop="1rem">Course 3</Typography>
              <Typography>{firstObject?.course3}</Typography>
            </Grid>
            <Grid sx={{ padding: "1rem" }} item xs={6} md={6}>
              <Typography paddingTop="1rem">Course 4</Typography>
              <Typography>{firstObject?.course4}</Typography>
            </Grid>
            <Grid sx={{ padding: "1rem" }} item xs={6} md={15}>
              <Box paddingTop="20px">
                <Button
                  sx={{
                    bgcolor: "#09bd0c" + " !important",
                    "&:hover": {
                      backgroundColor: "#4EF037",
                      opacity: [0.9, 0.8, 0.7],
                    },
                    color: "white",
                    width: "120px",
                  }}
                  onClick={() => navigate("/student")}
                  variant="contained"
                >
                  Back
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Grow>
  );
}

export default StudentViewCard;
