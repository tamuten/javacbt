import { Grid, TextField, Typography } from "@material-ui/core";

export const Register = () => {
  return (
    <>
      <Typography variant="h3">Register</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField multiline label="automaticThinking" />
        </Grid>
      </Grid>
    </>
  );
}