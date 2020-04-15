const uaJudge = () => {
    const ua = window.navigator.userAgent.toLowerCase();
    let userAgent = {};
    if (ua.indexOf('iphone') > -1 || ua.indexOf('ipod') > -1) {
        userAgent.display = 'sp';
        userAgent.device = 'iphone';
    } else if (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1) {
        userAgent.display = 'sp';
        userAgent.device = 'andoroid';
    } else if (ua.indexOf('ipad') > -1) {
        userAgent.display = 'tab';
        userAgent.device = 'ipad';
    } else if (ua.indexOf('Android') > -1) {
        userAgent.display = 'tab';
        userAgent.device = 'atab';
    } else {
        userAgent.display = 'pc';
    }
    if (ua.indexOf('msie') != -1 ||
        ua.indexOf('trident') != -1) {
        userAgent.browser = 'ie';
    } else if (ua.indexOf('edge') != -1) {
        userAgent.browser = 'edge';
    } else if (ua.indexOf('chrome') != -1) {
        userAgent.browser = 'chrome';
    } else if (ua.indexOf('safari') != -1) {
        userAgent.browser = 'safari';
    } else if (ua.indexOf('firefox') != -1) {
        userAgent.browser = 'ff';
    } else if (ua.indexOf('opera') != -1) {
        userAgent.browser = 'o';
    }
    return userAgent;
}

export default uaJudge;