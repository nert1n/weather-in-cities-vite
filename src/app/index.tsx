import "./styles/index.scss";
import AppRouter from "./routes";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
