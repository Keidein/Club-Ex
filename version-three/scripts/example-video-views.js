var videoViews = 0;
var hasViewed = false;

function viewCounter() {
    if (hasViewed == false) {
        videoViews = videoViews + 1;
        $(".video-views").text( "This video has been viewed " + videoViews + " times" );
        hasViewed = true;
        }
}