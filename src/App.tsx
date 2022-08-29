import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from "./Routes/Main"
import Search from "./Routes/Search";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/" element={<Main />}>
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;