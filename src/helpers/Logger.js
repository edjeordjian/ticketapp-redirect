import {LOG_URL} from "../constants/URLs";
import {postTo} from "./RequestHandler";
import {USERS_HOST} from "../constants/generalConstants";

const logRemote = async (message,
                         type) => {
    console.log("***" + message + "***");

    const logBody = {
        message: message,
        type: type
    };

    await postTo(USERS_HOST + LOG_URL,
        logBody);
};

const logError = async (message) => {
    await logRemote(message,
        "error");
};

export {
    logError
};
