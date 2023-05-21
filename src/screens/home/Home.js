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

           <BlankLine/>

           <Typography> ¿Todavía no tenés la aplicación? Descargala acá para Android:
           </Typography>

           <Typography> https://drive.google.com/drive/folders/1sRYQEzYPe54zNvUkHYNKIk3gs7pJEDfc
           </Typography>
       </>
    );
};

export {
    Home
};
