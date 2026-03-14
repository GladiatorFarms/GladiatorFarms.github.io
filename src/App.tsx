import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import './App.css';
import SiteNav from "./components/SiteNav.tsx";
import About from "./pages/About.tsx";

function App() {
    return (
        <>
            <SiteNav/>
            <HashRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </main>
            </HashRouter>
        </>
    )
}

export default App
