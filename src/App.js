import StockForm from "./form";
import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import HelpPage from "./help";
import { Analytics } from "@vercel/analytics/react";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route  
                        path="/forms"
                        element={<StockForm />}
                     />

                     <Route 
                        path="/help"
                        element={<HelpPage />}
                     />
                </Routes>
            </BrowserRouter>
          <Analytics />
        </div>
    );
}
 
export default App;
