import {
  Button,
  Grid,
  TextField,
  Typography,
  Stack,
  Slider,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Thought } from "./Thought";

export const Register = () => {
  const [thought, setThought] = useState<Thought>(
  
  );

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Register
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Stack spacing={3}>
            {/* <DateTimePicker
              label="日時"
              value={thought?.thoughtDateTime}
              onChange={() => console.log()}
            /> */}
            <TextField variant="standard" fullWidth label="気分" />
            <Slider
              step={1}
              min={0}
              max={100}
              defaultValue={50}
              valueLabelDisplay="on"
            />
            <TextField variant="standard" multiline fullWidth label="状況" />
            <TextField
              variant="standard"
              multiline
              fullWidth
              label="自動思考"
            />
            <TextField variant="standard" multiline fullWidth label="根拠" />
            <TextField variant="standard" multiline fullWidth label="反証" />
            <TextField
              variant="standard"
              multiline
              fullWidth
              label="適応的思考"
            />
            <TextField variant="standard" fullWidth label="今の気分" />
            <Slider
              step={1}
              min={0}
              max={100}
              defaultValue={50}
              valueLabelDisplay="on"
            />
            <Button variant="contained" size="large">
              登録
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
