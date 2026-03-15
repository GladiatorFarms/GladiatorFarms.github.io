import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import './App.css';
import SiteNav from "./components/SiteNav.tsx";
import WhatWeGrow from "./pages/WhatWeGrow.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <>
            <SiteNav/>
            <HashRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/what-we-grow" element={<WhatWeGrow/>}/>
                    </Routes>
                </main>
                <Footer/>
            </HashRouter>
        </>
    )
}

export default App
