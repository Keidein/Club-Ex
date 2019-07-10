// COOKIES
function setLike(articleID) {
    document.cookie=articleID;
}

function hasLiked(articleID) {
    var cookies=document.cookie.split(';');
    for (var i=0;i<cookies.length;i++) {
        var cookie=cookies[i].split('=');
        if (cookie[0]==articleID) return true;
    }
    return false;
}


function likedVideo() {
    var articleID='articleID';
    if (!hasLiked(articleID)) {
        setLike(articleID);
    } else {
        alert('You cant like or dislike an article twice');
    }
}


var voted = false;
function likeVideo() {
    var likes = 0;
    likedVideo();
    if ((hasLiked != true) && (voted !=true)) {
        likes += 1;
        document.getElementById("likes").innerHTML = likes;
        voted = true;
    }
}

function dislikeVideo() {
    var dislikes = 0;
    likedVideo();
    if ((hasLiked != true) && (voted !=true)) {
        dislikes += 1;
        document.getElementById("dislikes").innerHTML = dislikes;
        voted = true;
    }
}