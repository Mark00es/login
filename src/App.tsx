import { Button } from '@mui/material';
import { ThemeProviderMUI } from './theme/ThemeProviderMUI';

function App() {
  return (
    <ThemeProviderMUI>
      <Button variant="contained">Button</Button>
    </ThemeProviderMUI>
  );
}

export default App;
