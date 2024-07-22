import StockForm from "./form";
import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout";
import Home from "./home";
import Login from "./login";
import { useState } from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');

    return (
        <div className="App">
            <BrowserRouter>
                {/* <Routes>
                    <Route path="/" 
                        element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
                        <Route index element = {<StockForm/>} />
                    </Route>
                    <Route path="login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} /> } />
                </Routes> */}
                <Routes>
                    <Route
                        path="/"
                        element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
                    />
                    <Route  
                        path="/login"
                        element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
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
