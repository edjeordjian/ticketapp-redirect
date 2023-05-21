import {Typography} from "@mui/material";

import {BlankLine} from "../../components/BlankLine";

import {useEffect} from "react";

import {
    DEEP_LINK_PREFIX,
    EVENT_INFO_STR
} from "../../constants/generalConstants";

const Home = () => {
    const eventId = window.location.href.split(EVENT_INFO_STR + "/")[1];

    useEffect(() => {
        console.log(eventId);

        window.location.replace(`${DEEP_LINK_PREFIX}/${EVENT_INFO_STR}/${eventId}`);
    });

    return (
       <>
           <BlankLine/>

           <Typography> Redirigiendo...
           </Typography>
       </>
    );
};

export {
    Home
};
