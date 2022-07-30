import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from "./Routes/Main"
import UserInfo from "./Routes/UserInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/userinfo" element={<UserInfo />}></Route>
        <Route path="/" element={<Main />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
