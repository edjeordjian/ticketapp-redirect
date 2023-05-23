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

           <Typography> ¿Todavía no tenés la aplicación?
           </Typography>

           <a href="https://drive.google.com/file/d/1X2-f7p-vsql9BHcl-58Xe2725bHjl-OO"
              rel="noopener noreferrer"
           >¡Descargala acá para Android!
           </a>
       </>
    );
};

export {
    Home
};
