import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import UploadPageJSX from "./pages/PlayerPage/PlayerPage";
import HomePageJSX from "./pages/HomePage/HomePage";
import NotFoundPageJSX from "./pages/NotFound/NotFound";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePageJSX />} />
                    <Route path="/home" element={<HomePageJSX />} />
                    <Route path="/videoplayer" element={<HomePageJSX />} />
                    <Route path="/videoplayer/:id" element={<HomePageJSX />} />
                    <Route path="/upload" element={<UploadPageJSX />} />
                    <Route path="*" element={<NotFoundPageJSX />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
