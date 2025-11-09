import {inputNameElement, commentsTextElement ,containerCommentsElement, writeButtonCommentEl} from './dom-elements.js';

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