import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Autocomplete from "@mui/material/Autocomplete";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, md: 450 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

export default function BasicGrid() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: "30ch", md: "50ch" },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Gig Title"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: "30ch", md: "50ch" },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Gig Time"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: "30ch", md: "50ch" },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Gig Price"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: "30ch", md: "50ch" },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Gig Catagorey" />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: "30ch", md: "50ch" },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Gig Description"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: "30ch", md: "50ch" },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <input type="file" />
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid
              item
              xs={{
                p: 1,
                m: 1,
              }}
            >
              <Button variant="contained" justifyContent="end">
                Contained
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
