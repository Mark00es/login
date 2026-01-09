import { Button } from '@mui/material';
import { useThemeStore } from '@/store/theme';

export const ButtonTheme = () => {
  const { mode, setMode } = useThemeStore();

  return (
    <Button variant="contained" onClick={() => setMode(!mode)}>
      {mode ? 'Light' : 'Dark'}
    </Button>
  );
};
