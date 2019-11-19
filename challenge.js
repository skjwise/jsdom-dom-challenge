const counter = document.getElementById("counter")
const incrementButton = document.getElementById("plus")
const decrementButton = document.getElementById("minus")
const heartButton = document.getElementById("heart")
const pauseButton = document.getElementById("pause")
const commentButton = document.getElementById("submit")
const commentInput = document.getElementById("comment-input")
const commentList = document.getElementById("list")
const likeList = document.getElementsByClassName("likes")[0]

var comments = []
var likedNumbers = []
var pauseState = false

function timer(){
    setInterval(function(){
        if(pauseState === false){
            increment()
            decrementButton.disabled = false;
            incrementButton.disabled = false; 
            heartButton.disabled = false;
            commentButton.disabled = false;
        } else {
            pauseState === true
            pause.innerText = 'Pause'
            decrementButton.disabled = true;
            incrementButton.disabled = true; 
            heartButton.disabled = true;
            commentButton.disabled = true;
        }
    },1000)
}

function getIncDec(){
    incrementButton.addEventListener("click", function(){increment()});
    decrementButton.addEventListener("click", function(){decrement()});
}

function getHeart(){
    heartButton.addEventListener("click", function(){heart()})
}

function getPause(){
    pauseButton.addEventListener("click", function(){pause()})
}

function getSubmit(){
    commentButton.addEventListener("click", function(){submit()})
}

function increment(){
    if(pauseState === false){
    counter.innerText++
    }
}

function decrement(){
    if(pauseState === false){
    counter.innerText--
    }
}

function heart(){
    if(pauseState === false){

    if(isNaN(likedNumbers[parseInt(counter.innerText)])){
        likedNumbers[parseInt(counter.innerText)] = 1
    }else{
        likedNumbers[parseInt(counter.innerText)] += 1
    }
    updateHearts()
}
}

function updateHearts(){
    likeList.innerHTML = ''
    likedNumbers.forEach(function(num, index){
        let newList = document.createElement('li')
        likeList.appendChild(newList)
        newList.innerText = `${index} has ${num} likes` 
    })
}

function pause(){
    pauseState = !pauseState
    if(pauseState === false){
        pauseButton.innerText = "Pause"
    } else{
        pauseButton.innerText = "Resume"
    }
}

function submit(){
   
    refreshComments(commentInput.value)
}

function refreshComments(comment){
        let newComment = document.createElement('li')

        newComment.innerText = comment 
        console.log(newComment)
        // console.log("dsfdsf")
        commentList.appendChild(newComment)

        //comments not appending but page is refreshing....

}


(function init(){
    
    console.log("init")
    timer();
    
    getIncDec();
    getHeart();
    getPause();
    getSubmit();
    // submit();
    refreshComments();
    

})();



// const counter = document.querySelector("#counter");
// const pause = document.querySelector("#pause");
// const subtract = document.querySelector("#minus");
// const add = document.querySelector("#plus");
// const like = document.querySelector("#heart");
// const commentSubmitButton = document.querySelector("#submit");
// const commentInput = document.querySelector('#comment-input');
// const commentsField = document.querySelector('.comments');

// const likeList = document.getElementsByClassName("likes")[0]
// let comments = []
// let likedNumbers = []
// let pauseState = false;
// let timer = true;

// setInterval(function(){
//     if (timer){
//         counter.innerText++;
//     }
// }, 1000);

// pause.addEventListener('click', function(e){
//     if (timer) {
//         timer = false;
//         pause.innerText = 'Resume'
//         subtract.disabled = true;
//         add.disabled = true; 
//         like.disabled = true;
//         commentSubmitButton.disabled = true;
//     } else {
//         timer = true
//         pause.innerText = 'Pause'
//         subtract.disabled = false;
//         add.disabled = false; 
//         like.disabled = false;
//         commentSubmitButton.disabled = false;
//     }
// });

// subtract.addEventListener('click', function(e){
//     if (timer) {
//         counter.innerText--;
//     }
// });

// add.addEventListener('click', function(e){
//     if (timer) {
//         counter.innerText++;
//     }
// });

// like.addEventListener('click', function(e){
//     let likes = document.querySelector(".likes");
//     let liked = document.createElement("li")
//     let likedNum = parseInt(counter.innerHTML) + ' has been liked ' + `<span> ${ 0 + 1} </span>` + ' time';
//     liked.innerHTML = likedNum;
//     likes.append(liked);
    // likedNumbers.forEach(function(num, index){
    //     let newList = document.createElement('li')
    //     likeList.appendChild(newList)
    //     newList.innerText = `${index} has ${num} likes` 
    // })
// });

// commentSubmitButton.addEventListener('submit', function(e){
//     e.preventDefault();
    // let list = document.querySelector("#list")
    // list.innerHTML = ""
    // let p = document.createElement('p')
    // p.innerText = commentInput.value;
    // commentInput.value = "";

    // commentsField.appendChild(p);

    // let list = document.querySelector("#list")
    // list.innerHTML = ""
    // let pEl = document.createElement('p')
    // let getCommentValue = document.querySelector("#comment-input").value
    // // liEL.innerHTML = `${getCommentValue}`;
    // pEL.innerText = getCommentValue
    // list.appendChild(pEl)

// });