require('dotenv').config();

/* Backend hosts */
const EVENT_INFO_STR = "EventInfo";

const DEEP_LINK_PREFIX = process.env.REACT_APP_MOBILE_APP;

export {
    DEEP_LINK_PREFIX, EVENT_INFO_STR
};
