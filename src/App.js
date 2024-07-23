import StockForm from "./form";
import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";

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


                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default App;
