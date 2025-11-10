import {inputNameElement, commentsTextElement ,containerCommentsElement, writeButtonCommentEl} from './dom-elements.js';

const comments = [
    {
        name: "Глеб Фокин",
        date: "12.02.22 12:18",
        text: "Это будет первый комментарий на этой странице",
        likes: 3,
        isLiked: false
    },
    {
        name: "Варвара Н.",
        date: "13.02.22 19:22",
        text: "Мне нравится как оформлена эта страница! ❤",
        likes: 75,
        isLiked: true
    }
];

function renderComments(){
    const commentsHtml = comments.map(comment =>{
        let likeClass;
        if (comment.isLiked === true) {
            likeClass = ' -active-like';
        } else {
            likeClass = '';
        }
        return `
             <li class="comment">
              <div class="comment-header">
                <div>${comment.name}</div>
                <div>${comment.date} </div>
              </div>
              <div class="comment-body">
                <div class="comment-text">
                  ${comment.text}
                </div>
              </div>
              <div class="comment-footer">
                <div class="likes">
                  <span class="likes-counter">${comment.likes}</span>
                  <button class="like-button${likeClass}"></button> 
                </div>
              </div>
            </li>
        `
    }).join("");
    containerCommentsElement.innerHTML = commentsHtml;
}
renderComments();

containerCommentsElement.addEventListener('click', function(event) {
    if (!event.target.classList.contains('like-button')) return;

    const commentElement = event.target.closest('.comment');
    const allCommentsOnPage = Array.from(containerCommentsElement.children);
    const commentNumber = allCommentsOnPage.indexOf(commentElement);
    const commentData = comments[commentNumber];

    if (commentData.isLiked === true) {
        commentData.likes = commentData.likes - 1;
        commentData.isLiked = false;
    } else {
        commentData.likes = commentData.likes + 1;
        commentData.isLiked = true;
    }

    renderComments();
});

inputNameElement.addEventListener('input',function (ev){
    if (inputNameElement.value === ""){
        alert('Введите имя!')
    }
    const resultInputName = inputNameElement.value;
});

commentsTextElement.addEventListener('input',function (ev){
    if (commentsTextElement.value === ""){
        alert('Введите комментарий!')
    }
    const resultInputComment = commentsTextElement.value;
})

writeButtonCommentEl.addEventListener('click', function (ev){
    const userName = inputNameElement.value;
    const userComment = commentsTextElement.value;

    if (userName === "" || userComment === "" ){
        alert('заполните все поля');
        return;
    }

    comments.push({
        name: userName,
        date: new Date().toLocaleString(),
        text: userComment,
        likes: 0,
        isLiked: false
    });

    renderComments();

    inputNameElement.value = "";
    commentsTextElement.value = "";
});