import { ThemeProviderMUI } from './theme/ThemeProviderMUI';
import { RouterProviderPages } from './router/RouterProviderPages';
import { Toaster } from 'sonner';

function App() {
  return (
    <ThemeProviderMUI>
      <Toaster richColors />
      <RouterProviderPages />
    </ThemeProviderMUI>
  );
}

export default App;
