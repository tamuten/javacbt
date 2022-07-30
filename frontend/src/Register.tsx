import { Button, Grid, TextField, Typography, Stack } from "@mui/material";

export const Register = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Register
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Stack spacing={3}>
            <TextField multiline fullWidth label="状況" />
            <TextField multiline fullWidth label="自動思考" />
            <TextField multiline fullWidth label="根拠" />
            <TextField multiline fullWidth label="反証" />
            <TextField multiline fullWidth label="適応的思考" />
            <TextField multiline fullWidth label="今の気分" />
            <Button>登録</Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
