import { Button } from '@mui/material';
import { ThemeProviderMUI } from './theme/ThemeProviderMUI';
import { useThemeStore } from './store/theme';

function App() {
  const { mode, setMode } = useThemeStore();

  return (
    <ThemeProviderMUI>
      <Button variant="contained" onClick={() => setMode(!mode)}>
        Button
      </Button>
    </ThemeProviderMUI>
  );
}

export default App;
