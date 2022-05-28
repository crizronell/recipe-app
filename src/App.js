import Pages from "./pages/Pages"
import Header from "./components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Pages/>
      </Router>
    </div>
  );
}

export default App;
