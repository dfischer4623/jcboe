import React from "react";
import { useNavigate } from "react-router-dom";

const Main = (props) => {

    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate("/")
    }


    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Main</div>
        </div>
        
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Main"} />
        </div>
    </div>
}

export default Main