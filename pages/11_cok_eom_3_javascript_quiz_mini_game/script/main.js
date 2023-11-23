// Сообщение о загрузке скрипта
console.log('Script is loaded');

// Объявление переменных HTML классы элементов
const QuestionDiv = document.querySelector('.questions_cards_side');
const pointsOfCorrectAnswers = [];


// Создаваемые элементы в DOM
let veryEasyQuestions = document.querySelector('.very_easy_questions');
let easyQuestions = document.querySelector('.easy_questions');
let middleQuestions = document.querySelector('.middle_questions');
let middleHardQuestions = document.querySelector('.middle_hard_questions');
let HardQuestions = document.querySelector('.hard_questions');
let PopUpWindow = document.querySelector('#popup_main_1');
let closePopUpButton = document.querySelector('#close_popup_button_1');
let correctMarkerPlace = document.querySelector('#correct_marker_1');


// Вытаскиваем ID кнопок из HTML
let pointsOfAttempt = 10;
let parseQuestionPlace = document.querySelector('#text_question_1');
let pointsOfAttemptPlace = document.querySelector('#points_of_attempt_1');
let popupsPart = document.querySelector('#popup_answers_1');


// Массив с вопросами
let mainQuestions = [
    {
        text: 'Какие два вида энергосберегающих источников света были актуальны 5-7 лет назад:', //Текст вопроса 
        right: [1], // Номер правильного ответа, поскольку это массив то отсчет идет от нуля
        type: 1, // Поменять тип вопроса, 1 это закрытый с одним ответом, 2 это закрытый с одним вариантом и изображением, 3 это закрытый с несколькими, 4 как 3 + картинка 
        points: 100, // Не трогай
        answers: ['люминесцентные и галогенные', 'люминесцентные и светодиодные', 'галогенные и светодиодные', 'лампы накаливания и люминисцентные'], // Варианты ответа
    }, // Следующий вопрос 
    {
        text: 'Какие типы диммеров существуют.',
        right: [0,1],
        type: 3,
        sourceImg: './content/03_01.png',
        points: 100,
        answers: ['Непрерывные и дискретные', 'Встроенные и внешние', 'Цифровые и аналоговые',],
    },
    {
        text: 'Какое влияние оказало производство полупроводниковых материалов на стоимость светодиодов:',
        right: [2],
        type: 1,
        points: 100,
        answers: ['стоимость светодиодов увеличилась', 'стоимость светодиодов не изменилась', 'стоимость светодиодов снизилась', ],
    },
    {
        text: 'Какие явления могут улавливать датчики управления освещением:',
        right: [0],
        type: 1,
        points: 150,
        answers: ['движение, присутствие, свет', 'температуру, влажность, давление', 'загрязнение воздуха, уровень шума', 'все вышеперечисленные', ],
    },
    {
        text: 'Какой эффект может быть достигнут при использовании светлых тонов в интерьере:',
        right: [2],
        type: 1,
        points: 150,
        answers: ['увеличение доли энергии, направляемой на местное освещение', 'уменьшение потребляемой мощности источника света', 'визуальное увеличение освещенности помещения',],
    },
    {
        text: 'Какая светоотдача у светодиодных источников света:',
        right: [3],
        type: 1,
        // sourceImg: './content/03_01.png',
        points: 150,
        answers: ['200–300 Лм/Вт', '50–70 Лм/Вт', '100–200 Лм/Вт', '80–150 Лм/Вт', ],
    },
    {
        text: 'Какой способ коммуникации используется для передачи управляющего сигнала при автоматическом диммировании:',
        right: [2],
        type: 1,
        points: 200,
        answers: ['по проводу с использованием цифрового протокола DALI', 'по Wi-Fi', 'оба варианта возможны', ],
    },
    {
        text: 'Как работают датчики света?',
        right: [1],
        type: 1,
        points: 200,
        answers: ['Отслеживают уровень инфракрасного излучения', 'Фокусируют лучи света и направляют их к детектору', 'Измеряют освещенность и отправляют сигнал на контроллер', 'Создают напряжение при достижении определенного уровня яркости',],
    },
    {
        text: 'Какое устройство предоставляет возможность регулировать электрическую мощность от 100% до 0%:',
        right: [2],
        type: 1,
        points: 200,
        answers: ['регулятор напряжения', 'трансформатор с переменным напряжением', 'диммер', 'инвертор переменного тока',],
    },
    {
        text: 'Пускорегулирующий аппарат (ПРА) – это:',
        right: [1],
        type: 1,
        points: 250,
        answers: ['устройство для пуска и регулирования работы электрического двигателя', 'устройство для подключения ламп и регулирования их работы', 'устройство для экономии электроэнергии в коммерческих помещениях',],
    },
    {
        text: 'При снижении лампы до высоты 2000 мм освещенность:',
        right: [0],
        type: 1,
        points: 250,
        answers: ['увеличится в 1,82 раза', 'уменьшится в 1,82 раза', 'останется прежней',],
    },
    {
        text: 'Светильники с отраженным светом создают:',
        right: [2],
        type: 1,
        points: 250,
        answers: ['темные углы и тени', 'направленный и яркий свет',  'равномерное и рассеянное освещение без резких теней',],
    },
    {
        text: 'Какие преимущества имеют электронные ПРА по сравнению с электромагнитными:',
        right: [0],
        type: 1,
        points: 300,
        answers: ['значительная экономия электроэнергии, отсутствие мерцания и мигания лампы, бесшумная работа', 'более низкая рабочая температура, меньшие потери мощности лампы, больший световой КПД', 'компактные размеры, низкий вес, упрощенный процесс установки' ],
    },
    {
        text: 'Какие компоненты включают в себя специальные светильники класса hi-end:',
        right: [2],
        type: 1,
        points: 300,
        answers: ['фильтры для изменения цвета света', 'вентиляционную систему', 'зеркальный отражатель и зеркальную решетку', ],
    },
    {
        text: 'Какой вид короткого замыкания изображен на рисунке.',
        right: [0,1,2,3],
        type: 3,
        sourceImg: './content/1.png',
        points: 300,
        answers: ['Комбинирование двух видов освещения: естественного и искусственного', 'Регулирование интенсивности света по-отдельности в каждом секторе', 'Наличие автоматической системы, оперативно отзывающейся на любое изменение требованиях к освещению', 'Применение дополнительного маломощного освещения при невозможности использования диммирования',],
    },
];





// Цикл создающий модальные окна, также пушит вопросы и ответы
for (i = 0; i < mainQuestions.length; i++){
    pointsOfAttemptPlace.innerHTML = pointsOfAttempt;
    let popUpPlace = document.createElement('div');
    popUpPlace.classList.add('popup' , 'closed');

    popUpPlace.id = 'popup' + '_' + i;
    popupsPart.appendChild(popUpPlace);

    let popUpBody = document.createElement('div');
    popUpBody.classList.add('popup_body');
    popUpBody.id = 'popup_body_' + '_' + i;

    popUpPlace.appendChild(popUpBody);
    
    let popUpContentWindow = document.createElement('div');
    popUpContentWindow.classList.add('popup_content');
    popUpContentWindow.id = 'popup_content' + '_' + i;

    popUpBody.appendChild(popUpContentWindow);

    let closePopupButton = document.createElement('div');
    closePopupButton.classList.add('close_popup');
    

    let questionsPlace = document.createElement('div');
    questionsPlace.classList.add('questions');
    questionsPlace.id = 'question_number' + '_' + i;
    questionsPlace.innerHTML = mainQuestions[i].text;
    
    

    popUpContentWindow.appendChild(closePopupButton);

    closePopupButton.appendChild(questionsPlace);

    let answerPlace = document.createElement('div');
    answerPlace.classList.add('answers_btn');
    answerPlace.id = 'answers_buttons' + '_' + i;

    popUpContentWindow.appendChild(answerPlace);

//Один ответ без картинки 
    if(mainQuestions[i].type == 1){

        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        
        answerPlace.appendChild(form);
        form.dataset.right = mainQuestions[i].right;
    
        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.type = 'radio';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };

//Подозреваю, что несколько ответов и картинка
    if(mainQuestions[i].type == 2){
        let mainWindow = document.createElement('div');
        mainWindow.classList = ('second_type_questions');
        mainWindow.id = 'second_type_question_' + i;
        answerPlace.appendChild(mainWindow);

        let secondTypeImg = document.createElement('img');
        secondTypeImg.src = mainQuestions[i].sourceImg
        mainWindow.appendChild(secondTypeImg);

        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        mainWindow.appendChild(form);
        form.dataset.right = mainQuestions[i].right;

        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);

            let input = document.createElement('input');
            input.type = 'radio';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };

//Несколько ответов без картинки
    if(mainQuestions[i].type == 3){
        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        answerPlace.appendChild(form);
        form.dataset.right = mainQuestions[i].right;
    
        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };


    //Один ответ одна картинка
    if(mainQuestions[i].type == 4){
        let mainWindow = document.createElement('div');
        mainWindow.classList = ('second_type_questions');
        mainWindow.id = 'second_type_question_' + i;
        answerPlace.appendChild(mainWindow);

        let secondTypeImg = document.createElement('img');
        secondTypeImg.src = mainQuestions[i].sourceImg
        mainWindow.appendChild(secondTypeImg);

        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        mainWindow.appendChild(form);
        form.dataset.right = mainQuestions[i].right;

        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };


    let mainButtonsPlace = document.createElement('div');
    mainButtonsPlace.classList.add('main_buttons');
    answerPlace.appendChild(mainButtonsPlace);

    
    let checkAnswerBtn = document.createElement('button');
    checkAnswerBtn.classList.add('check_button');
    checkAnswerBtn.id = 'check_button' + '_' + i;
    checkAnswerBtn.innerHTML = 'Ответить';

    //Добавление ивента для проверки ответов

    checkAnswerBtn.addEventListener('click',function(event)
    {
        let rightcheck = false
        //Получения номера вопроса и блока вопросов
        let questionsblock = event.target.parentNode.parentNode.firstElementChild
        let question_number = questionsblock.id.split('_')
        question_number=question_number[question_number.length-1]
        //Проверка чекбоксов на пустой ответ
        for (let elem of questionsblock.querySelectorAll(".answer_div")) 
		{
            if(elem.firstElementChild.checked)
            {
                rightcheck=true
                break
            }
        }
        if (!rightcheck){
            return 0;
        }
        pointsOfAttempt-=1

        
        
        if (pointsOfAttempt < 0)
        { 
            return 0;//добавлено, чтобы после измены html кода disabled , проверка ответа не происходила. (простыми словами завершение функции)
        }
        pointsOfAttemptPlace.innerHTML = pointsOfAttempt;
        if (pointsOfAttempt < 1)
        {
            //Отключение кнопок ответа
            for(let elem of document.querySelectorAll('.check_button')){
                resultButtonDis.classList.remove('disabled_button')
                resultPopUp.classList.remove('disabled_button')
                elem.disabled = true;
                elem.classList.add('disable_answer_btn');
                
            }
            // Отключение кнопок вопросов 
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 3; j++){
                    cardsPlace.children[i].children[j].disabled = true;
                }
            }
            
        }

        //Обработка
        let counter=0 // Для получения порядкового номера
        for (let elem of questionsblock.querySelectorAll(".answer_div")) 
		{
            if(elem.firstElementChild.checked){
                // Проверка есть ли в массиве правильных ответов этот вариант ответа(counter)
                if (mainQuestions[question_number].right.indexOf(counter) != -1){
                    elem.classList.add('correct')
                }
                else
                {
                    elem.classList.add('incorrect')
                    rightcheck=false
                }
            }
            else{
                //Выделение правильных ответов, если они не выбраны
                if (mainQuestions[question_number].right.indexOf(counter) != -1){
                    elem.classList.add('incorrect2')

                }
            }
            counter++
        }
        //Создание кнопки закрытия
        let popUpPlace = document.getElementById('popup_' + question_number);
        let closeButton = document.createElement('button');
        closeButton.addEventListener('click', function(){
            popUpPlace.classList.add('closed');
            popUpPlace.classList.remove('open');
        });

        closeButton.classList.add('close_popup_button');
        closeButton.id = 'close_popup_button' + '_' + i;
        closeButton.innerHTML = '<img src="./content/close.svg" alt="close_popup">';
        document.getElementById('popup_content_'+question_number).firstElementChild.appendChild(closeButton);

        


        if (rightcheck){
            //В случае правильного ответа
            //Не знаю зачем нужен именно массив правильных очков, но допустим
            pointsOfCorrectAnswers.push(mainQuestions[question_number].points)
            updatescore()
            event.target.parentNode.innerHTML="<p> За этот вопрос вы могли получили " + mainQuestions[question_number].points + " очков </p>"

		//Добавление галочки пройдено
            let imgCorrect = document.createElement('img')
            imgCorrect.src = './content/enab.png'
            document.querySelector('[onclick="showQuestion(' + question_number +')"').appendChild(imgCorrect);
            

        }
        else
	{
            //Добавление крестика неправильного ответа
            event.target.parentNode.innerHTML="<p> За этот вопрос вы могли получить " + mainQuestions[question_number].points + " очков </p>"
            let imgCorrect = document.createElement('img');
            imgCorrect.src = './content/dis.png';
            document.querySelector('[onclick="showQuestion(' + question_number +')"').appendChild(imgCorrect);
        }

    })


    mainButtonsPlace.innerHTML = '<p>' + 'За этот вопрос вы можете получить ' + mainQuestions[i].points + ' очков' + '</p>' + '<br>';

    mainButtonsPlace.appendChild(checkAnswerBtn);
    
}; 
//--------------------------------


let checkAnswerButton = document.querySelectorAll('.check_button');
let forms = document.querySelectorAll('form');
let cardsPlace = document.querySelector('.questions_cards_side');


let formsForAnswers = document.querySelectorAll('.answer_form');
formsForAnswers.forEach((elem, index)=>{
    let answerInput = document.querySelectorAll('.answer_div')
})



// Новые переменные связанные с созданными Модальными окнами
let PopUp1 = document.querySelector('#popup_0');
let PopUp2 = document.querySelector('#popup_1');
let PopUp3 = document.querySelector('#popup_2');
let PopUp4 = document.querySelector('#popup_3');
let PopUp5 = document.querySelector('#popup_4');
let PopUp6 = document.querySelector('#popup_5');
let PopUp7 = document.querySelector('#popup_6');
let PopUp8 = document.querySelector('#popup_7');
let PopUp9 = document.querySelector('#popup_8');
let PopUp10 = document.querySelector('#popup_9');
let PopUp11 = document.querySelector('#popup_10');
let PopUp12 = document.querySelector('#popup_11');
let PopUp13 = document.querySelector('#popup_12');
let PopUp14 = document.querySelector('#popup_13');
let PopUp15 = document.querySelector('#popup_14');


// Пушим переменные модальных окон в массив для удобного вызова функции
popUpArr = [PopUp1, PopUp2, PopUp3, PopUp4, PopUp5, PopUp6, PopUp7, 
PopUp8, PopUp9, PopUp10, PopUp11, PopUp12, PopUp13, PopUp14, PopUp15,];


// Функция вызова модальных окон привязка по onclick html
function showQuestion(i){
    popUpArr[i].classList.remove('closed');  
};



//Сложение очков, для получения счёта( я не знаю зачем тут нужен был массив)
function updatescore(){
    let score=0
    pointsOfCorrectAnswers.forEach(element => {
        score+=element
    
    });
    document.getElementById('points_of_correct_1').innerHTML = score
    resultPopUpPoint.innerHTML = score

   
    answerDiagram.setAttribute('style', '--p:' + (score/1550)*100 + ';' + '--c:rgb(0, 114, 192);');


    if (score < 1550){

        messagePlace.innerHTML = 'Вы проиграли, поскольку не набрали нужное количество очков и потратили все попытки'
        
    } else {
        messagePlace.innerHTML = 'Вы выйграли, поскольку набрали нужное количество очков'
        resultPopUp.classList.remove('disabled_button')
        resultButtonDis.classList.remove('disabled_button')
    }
}

let answerDiagram = document.querySelector('#answer_diagram_1');
let resultButtonDis = document.querySelector('#result_button_3')
resultButtonDis.classList.add('disabled_button')
let updateScorePoint = document.querySelector('#points_of_correct_1')
let messagePlace =document.querySelector('#result_place_3')
let resultPopUpPoint = document.querySelector('#place_question_point')
resultPopUpPoint.innerHTML = 0
let valueOfTests =document.querySelector('#place_question_number')
valueOfTests.innerHTML = pointsOfAttempt
let resultPopUp = document.querySelector('#result_popup_1')
resultPopUp.classList.add('disabled_button')
function showResultPopUP(){
    resultPopUp.classList.remove('disabled_button')
}

function closeResultPopUp(){
    resultPopUp.classList.add('disabled_button')
}



