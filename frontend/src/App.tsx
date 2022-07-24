import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ThoughtList } from './ThoughtList';

export const App = () => {

  return (
    <>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Cbt App</Typography>
        </Toolbar>
      </AppBar>
      <ThoughtList />
    </>
  );
}

export default App;
