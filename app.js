const qustions = [
    {
        qustions: 'Столица России?'
    },
    {
        qustions: 'Столица Франции?'
    },
    {
        qustions: 'Столица Германии?'
    },
    {
        qustions: 'Столица Финляндии?'
    },
]



const charArray = document.querySelectorAll('.game__column');
const checkBtn = document.querySelector('.сheck-btn');
const clearBtn = document.querySelector('.clear-btn')
const input = document.querySelector('.total')
const qustionsBlock = document.querySelector('.qustions')
const qustionsHeader = document.querySelector('.qustions__header');

let inputValue;
let answerQuestion = ['МОСКВА', 'ПАРИЖ', 'БЕРЛИН', 'ХЕЛЬСИНКИ'];
let qustionsIdx = 0;
let score = 0;
let text;



// Очистка html разметки
function clearHtml(){
    qustionsBlock.innerHTML = '';
}
// Показ вопроса
function showQustions(){
    const qustionsTemplate = `
        <div class="qustions__header">
            %title%
        </div>
    `
    const title = qustionsTemplate.replace('%title%',  qustions[qustionsIdx]['qustions'])
    qustionsBlock.innerHTML = title
}
// Показ результатов
function showResult(){
    console.log(score)
    let scoreHtml = `
        <h1 class ="score">Ваш счет : ${score} из ${qustions.length}</h1>
    `
    if(score === qustions.length){
        text ='Поздравляю все ответы верны'
    }else if((score * 100) / qustions.length >=50){
        text = 'Неплохой результат'
    }else{
        text = 'Купи учебник географии';
    }
    qustionsBlock.innerHTML = scoreHtml + text;
    checkBtn.innerText = 'Повторить'
    checkBtn.onclick = () =>{history.go()}
}
clearHtml();
showQustions();



charArray.forEach(el => {
    el.addEventListener('click', () => {
        input.value = input.value + el.textContent;
    });
});



checkBtn.addEventListener('click', () => {
   if(answerQuestion.includes(input.value)){
       console.log(answerQuestion);
       score++;
       input.value = '';
   } else{
       console.log('Попробуй еще раз!')
       input.value = '';
   }
   if(qustionsIdx !== qustions.length-1){
    qustionsIdx++;
    clearHtml();
    showQustions();
   }else{
    clearHtml();
    showResult();
   }
   console.log(input.value);
});

clearBtn.addEventListener('click', () => {
    delChar()
});

function delChar(){
    let str = input.value
    input.value = str.substring(0, str.length-1);
}