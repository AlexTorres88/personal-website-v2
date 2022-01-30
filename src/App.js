import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { CssBaseline } from '@material-ui/core'
import Loading from "./components/Loading";

const Resume = lazy(() => import("./components/Resume"));
const Home = lazy(() => import('./modules/home/Home'));

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>
            <Navigation />
            <Suspense fallback={Loading}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume/>}/>
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

