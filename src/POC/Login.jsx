import React from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const goTo = useNavigate();

    const onOkBtnClick = () => {
        goTo('/');
    }
    const onCancelBtnClick = () => {
        goTo('/SignUp');
    };

    return (
        <>
            <div className="container">
                <div className="heading">
                    <h2>
                        Login
                    </h2>
                </div>
                <div className="email">
                    <input type="email" placeholder="Enter login email" />
                </div>
                <div className="password">
                    <input type="password" placeholder="Enter login password" />
                </div>
                <div className="btnclass">
                    <button className="okBtn" onClick={onOkBtnClick}>OK</button>
                    <button className="cancelBtn" onClick={onCancelBtnClick}>Cancel</button>
                </div>

            </div>
        </>
    );

};

export default Login;
