
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

var button=document.getElementById('likeBtn');

function likedVideo() {
    var articleID='articleID';
    if (!hasLiked(articleID)) {
        setLike(articleID);
    } else {
        alert('You cant like or dislike an article twice');
    }
}


function likeVideo() {
    var likes = 0;
    likedVideo();
    if (hasLiked != true) {
        likes ++;
        document.getElementById("likes").innerHTML = likes;
    }
}


function dislikeVideo() {
    var dislikes = 0;
    likedVideo();
    if (hasLiked != true) {
        dislikes ++;
        document.getElementById("dislikes").innerHTML = dislikes;
    }
}