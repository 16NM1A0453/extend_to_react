import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const goTo = useNavigate();
    const onLogOutBtnClick = () => {
        goTo('/Login')
    }
    return (
        <>
            <p>Home Page</p>
            <div>
                <button onClick={onLogOutBtnClick}>Log Out</button>
            </div>
        </>
    )
};

export default Home;
