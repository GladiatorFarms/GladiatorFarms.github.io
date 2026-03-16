import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import './App.css';
import SiteNav from "./components/SiteNav.tsx";
import WhatWeGrow from "./pages/WhatWeGrow.tsx";
import Footer from "./components/Footer.tsx";
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
                        <Route path="/our-produce" element={<WhatWeGrow/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </main>
                <Footer/>
            </HashRouter>
        </>
    )
}

export default App
