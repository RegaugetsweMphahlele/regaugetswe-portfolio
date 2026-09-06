/* Editorial Atelier: the app shell stays deliberately quiet so the portfolio page owns the visual rhythm. */
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
