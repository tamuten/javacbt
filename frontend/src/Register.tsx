import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

export const Register = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>Register</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <DatePicker value={new Date()} label="日時" disableFuture onChange={() => console.log("date changed.")} /> */}
        </Grid>
        <Grid item xs={12}>
          <TextField multiline fullWidth label="自動思考" />
        </Grid>
        <Grid item xs={12}>
          <TextField multiline fullWidth label="根拠" />
        </Grid>
        <Button>登録</Button>
      </Grid>
    </>
  );
}