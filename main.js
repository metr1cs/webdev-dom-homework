import {inputNameElement, commentsTextElement ,containerCommentsElement, writeButtonCommentEl} from './dom-elements.js';


const comments = [
    {
        name: "Глеб Фокин",
        date: "12.02.22 12:18",
        text: "Это будет первый комментарий на этой странице",
        likes: 3,
        like: false
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
              </div>  <!-- ← Закрывающий div -->
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

    const newComment = document.createElement('li');
    newComment.className = 'comment';
    newComment.innerHTML = `
        <div class="comment-header">
            <div>${userName}</div>
            <div>${new Date().toLocaleString()}</div>
        </div>
        <div class="comment-body">
            <div class="comment-text">
                ${userComment}
            </div>
        </div>
        <div class="comment-footer">
            <div class="likes">
                <span class="likes-counter">0</span>
                <button class="like-button"></button>
            </div>
        </div>
    `;

    containerCommentsElement.append(newComment);

    inputNameElement.value = "";
    commentsTextElement.value = "";
});

