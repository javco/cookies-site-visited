
// replace "cookie_name" with you custom cookie name
var cookie="cookie_name=";

if (document.cookie.indexOf(cookie) < 0) {
    
    /**
     * HERE GOES YOUR CUSTOM CODE FOR SHOWING AN ALERT, MESSAGE, ETC.
     */
    alert("site not visited");
    
    //set cookie
    var expire=new Date();
    expire.setTime(expire.getTime()+(365*24*60*60*1000)); // 1 year
    document.cookie=cookie+"1; expires="+expire.toGMTString();
}
else{
    alert("site already visited");
}