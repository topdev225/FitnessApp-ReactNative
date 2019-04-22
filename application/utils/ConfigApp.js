
//////////////////// CONFIG APP

import Expo from 'expo';

const isStandAloneApp = Expo.Constants.appOwnership == "standalone";

const ConfigApp = {

    // backend url 198.18.8.11
    URL: "http://192.168.1.109/backend/",

    // banner admob unit id
    BANNER_ID: "ca-app-pub-9928027194719936/8447124326",

    // interstitial admob unit id
    INTERSTITIAL_ID: "ca-app-pub-9928027194719936/4479125009",

    // testdevice id, DON'T CHANGE IT
    TESTDEVICE_ID : isStandAloneApp?"EMULATOR" : "EMULATOR"
};

export default ConfigApp;
