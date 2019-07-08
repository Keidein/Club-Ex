var likes = 0;
    function likeVideo() {
        likes += 1;
        document.getElementById("likes").innerHTML = likes;
    }

var dislikes = 0;
    function dislikeVideo() {
        dislikes += 1;
        document.getElementById("dislikes").innerHTML = dislikes;
    }