import BackToTop from "./component/backToTop";
import Dashboard from "./component/dashboard";

function App() {
  return (
    <div className="bg-body-color min-w-mobile">
      <Dashboard />
      <BackToTop />
    </div>
  );
}

export default App;
