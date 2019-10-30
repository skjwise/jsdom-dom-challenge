const counter = document.querySelector("#counter");
const pause = document.querySelector("#pause");
const subtract = document.querySelector("#minus");
const add = document.querySelector("#plus");
const like = document.querySelector("#heart");
const comment = document.querySelector("#submit");

let timer = true;

setInterval(function(){
    if (timer){
        counter.innerText++;
    }
}, 1000);

pause.addEventListener('click', function(e){
    if (timer) {
        timer = false;
        pause.innerText = 'Resume'
    } else {
        timer = true
        pause.innerText = 'Pause'
    }
});

subtract.addEventListener('click', function(e){
    if (timer) {
        counter.innerText--;
    }
});

add.addEventListener('click', function(e){
    if (timer) {
        counter.innerText++;
    }
});

like.addEventListener('click', function(e){
    let likes = document.querySelector(".likes");
    let liked = document.createElement("li")

    let likedNum = parseInt(counter.innerHTML);
    liked.innerHTML = likedNum;
    likes.append(liked);
});

comment.addEventListener('submit', function(e){
    e.preventDefault();
    let getComments = document.querySelector(".comments")
    let getCommentValue = document.querySelector("#comment-input").value;
    let createCommentParagraph = document.createElement('p');

    createCommentParagraph.innerHTML = `${getCommentValue}`;

    getComments.append(createCommentParagraph);

});