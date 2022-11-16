import "./App.css";

import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
