import TableData from "./form";
import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import CompareCSV from "./compare";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element = {<TableData/>} />
                        <Route path="/compare" element={<CompareCSV />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default App;
