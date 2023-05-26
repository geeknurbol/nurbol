
function toggleAnswer(riddleNumber) {
    var answerElement = document.getElementById("answer" + riddleNumber);
    var buttonElement = document.getElementById("btn" + riddleNumber);

    if (answerElement.style.display === "none") {
        answerElement.style.display = "block";
        buttonElement.textContent = "Скрыть ответ";
    } else {
        answerElement.style.display = "none";
        buttonElement.textContent = "Показать ответ";
    }
}