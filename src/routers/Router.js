import {Route, Routes} from "react-router-dom";

import {Home} from "../screens/home/Home";

import {EVENT_INFO_STR} from "../constants/generalConstants";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route exact path={`/${EVENT_INFO_STR}/:eventId`} element={<Home/>}/>
            </Routes>
        </div>
    );
};

export {
    Router
};
