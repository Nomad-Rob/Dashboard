import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';



function App() {
  // Get the current mode from the store
  const mode = useSelector((state) => state.mode);
  // Create a theme with the current mode
  const theme = useMemo(() => createTheme(themeSettings[mode]), [mode]);
  return (
    <div className="app">
      {/* Apply the theme to the entire app easy setup*/}
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
