import { useThemeStore } from '@/store/theme';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Props extends React.PropsWithChildren {}

export const ThemeProviderMUI = ({ children }: Props) => {
  const { mode } = useThemeStore();

  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
