import React from "react";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
    const navigate = useNavigate();

    const employeeSearchButtonClick = () => {
        navigate("/employeeSearch")
    }

    const homeButtonClick = () => {
        navigate("/")
    }


    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Main Menu</div>
        </div>
        
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={employeeSearchButtonClick}
                value={"Employee Search"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={homeButtonClick}
                value={"Home"} />
        </div>
    </div>
}

export default Main