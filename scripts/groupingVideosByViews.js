$(document).ready(() => {
    setTimeout(() => {
        var li = document.getElementsByTagName("li"),
        wrapper = document.getElementById("wrapper"),
        newSort = [];

    for (let i = 0; i < li.length-1; i++) {

        var tag1 = li[i].id*1,
        tag2 = li[i + 1].id*1;

        if (!isNaN(tag1)) {
            if (tag1 > tag2) {
                newSort.push(li[i]);
                li[i].remove();
            }
            if (tag1 < tag2) {
                newSort.push(li[i + 1]);
                li[i + 1].remove();
            }
        }
    }
    list = li.length;

    if (list > 0) {
        for (var i = 0; i < list; i++) {
            newSort.push(li[0]);
            li[0].remove();
        }
    }

    for (let i = 0; i < newSort.length; i++) {
        wrapper.innerHTML = wrapper.innerHTML + newSort[i].outerHTML;
    }
    }, 3000);
});