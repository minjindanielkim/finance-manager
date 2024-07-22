import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const {logginIn, email} = props
    const navigate = useNavigate()
    const onButtonClick = () => {
        // placeholder function
    }

    return (
        <>
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div> Welcome </div>
            </div>
            <div>Home page</div>
            <div className={'buttonContainer'}>
                <input  
                    className={'inputButton'}
                    type="button"
                    onClick={onButtonClick}
                    value={logginIn ? "Logout" : "Login"}
                />
                {logginIn ? <div>Your email address is {email}</div> : <div />}
            </div>
        </div>
        </>
    )
}

export default Home;