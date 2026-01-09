import { ThemeProviderMUI } from './theme/ThemeProviderMUI';
import { RouterProviderPages } from './router/RouterProviderPages';

function App() {
  return (
    <ThemeProviderMUI>
      <RouterProviderPages />
    </ThemeProviderMUI>
  );
}

export default App;
