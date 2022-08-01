import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from "./Routes/Main"
import Search from "./Routes/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/" element={<Main />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
