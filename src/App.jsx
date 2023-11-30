import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePageJSX from "./pages/HomePage/HomePage";
import NotFoundPageJSX from "./pages/NotFound/NotFound";
import PlayerPageJSX from "./pages/PlayerPage/PlayerPage";
import AssessmentPageJSX from "./pages/AssessmentPage/AssessmentPage";
import FormPageJSX from "./pages/FormPage/FormPage";
import ContentPage from "./pages/ContentPage/ContentPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePageJSX />} />
                    <Route path="/home" element={<HomePageJSX />} />
                    <Route path="/assessment" element={<AssessmentPageJSX />} />
                    <Route path="/content" element={<ContentPage />} />
                    <Route path="/player" element={<PlayerPageJSX />} />
                    <Route path="/player/:id" element={<PlayerPageJSX />} />
                    <Route path="/upload" element={<FormPageJSX />} />
                    <Route path="*" element={<NotFoundPageJSX />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
