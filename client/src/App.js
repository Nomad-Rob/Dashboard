import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { themeSettings } from 'theme';
import Layout from 'scenes/layout';
import Dashboard from 'scenes/dashboard';



function App() {
  // Get the current mode from the store
  const mode = useSelector((state) => state.mode);
  // Create a theme with the current mode
  const theme = useMemo(() => createTheme(themeSettings[mode]), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
      {/* Apply the theme to the entire app easy setup*/}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Naviagte to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
