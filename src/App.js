import Pages from "./pages/Pages"
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SearchBar/>
        <Pages/>
      </Router>
    </div>
  );
}

export default App;
