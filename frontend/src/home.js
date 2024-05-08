import React from "react"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();

    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else { 
            navigate("/login")
        }
    }

    localStorage.setItem("navMenu", "menu1")

    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>AS/400 Data</div>
        </div>
        <br></br>
        <div className={"titleContainer"}>
            Please {loggedIn ? "Log Out" : "Log In"}
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
        </div>
    </div>
}

export default Home