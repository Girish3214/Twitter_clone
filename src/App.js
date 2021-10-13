import  CssBaseline from '@mui/material/CssBaseline';
import Container  from '@mui/material/Container';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';


function App() {
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Container maxWidth="lg" disableGutters={true}>
        Girish
      </Container>
    </ThemeProvider>
  );
}

export default App;
