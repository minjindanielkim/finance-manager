import StockForm from "./form";
import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element = {<StockForm/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default App;
