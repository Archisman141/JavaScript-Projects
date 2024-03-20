const showQuestion = () => {
    resetState();
    let current_question = questions[current_question_index];
    let question_no = current_question_index + 1;
    question_element.innerHTML = question_no + ". "+ current_question.question;

    current_question.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answer_buttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}