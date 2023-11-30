// Массив с вопросами. Не Зашифрован :)

let themeName = "Эксплуатация и ремонт силового электрооборудования";

let allQuestions = [
    {
        text: 'Какие два вида энергосберегающих источников света были актуальны 5-7 лет назад:', //Текст вопроса 
        answers: ['люминесцентные и галогенные', 'люминесцентные и светодиодные', 'галогенные и светодиодные', 'лампы накаливания и люминисцентные'], // Варианты ответа
        type: 0,
        price: 100,
        correctAnswer: [1],
        answered: null,
    }, // Следующий вопрос 
    {
        text: 'Какие типы диммеров существуют.',
        answers: ['Непрерывные и дискретные', 'Встроенные и внешние', 'Цифровые и аналоговые',],
        type: 1,
        price: 100,
        correctAnswer: [0,1],
        answered: null,
    },
    {
        text: 'Какое влияние оказало производство полупроводниковых материалов на стоимость светодиодов:',
        answers: ['стоимость светодиодов увеличилась', 'стоимость светодиодов не изменилась', 'стоимость светодиодов снизилась', ],
        type: 0,
        price: 100,
        correctAnswer: [2],
        answered: null,
    },
    {
        text: 'Какие явления могут улавливать датчики управления освещением:',
        answers: ['движение, присутствие, свет', 'температуру, влажность, давление', 'загрязнение воздуха, уровень шума', 'все вышеперечисленные', ],
        type: 0,
        price: 150,
        correctAnswer: [0],
        answered: null,
    },
    {
        text: 'Какой эффект может быть достигнут при использовании светлых тонов в интерьере:',
        answers: ['увеличение доли энергии, направляемой на местное освещение', 'уменьшение потребляемой мощности источника света', 'визуальное увеличение освещенности помещения',],
        type: 0,
        price: 150,
        correctAnswer: [2],
        answered: null,
    },
    {
        text: 'Какая светоотдача у светодиодных источников света:',
        answers: ['200–300 Лм/Вт', '50–70 Лм/Вт', '100–200 Лм/Вт', '80–150 Лм/Вт', ],
        type: 0,
        price: 150,
        correctAnswer: [3],
        answered: null,
    },
    {
        text: 'Какой способ коммуникации используется для передачи управляющего сигнала при автоматическом диммировании:',
        answers: ['по проводу с использованием цифрового протокола DALI', 'по Wi-Fi', 'оба варианта возможны', ],
        type: 0,
        price: 200,
        correctAnswer: [2],
        answered: null,
    },
    {
        text: 'Как работают датчики света?',
        answers: ['Отслеживают уровень инфракрасного излучения', 'Фокусируют лучи света и направляют их к детектору', 'Измеряют освещенность и отправляют сигнал на контроллер', 'Создают напряжение при достижении определенного уровня яркости',],
        type: 0,
        price: 200,
        correctAnswer: [1],
        answered: null,
    },
    {
        text: 'Какое устройство предоставляет возможность регулировать электрическую мощность от 100% до 0%:',
        answers: ['регулятор напряжения', 'трансформатор с переменным напряжением', 'диммер', 'инвертор переменного тока',],
        type: 0,
        price: 200,
        correctAnswer: [2],
        answered: null,
    },
    {
        text: 'Пускорегулирующий аппарат (ПРА) – это:',
        answers: ['устройство для пуска и регулирования работы электрического двигателя', 'устройство для подключения ламп и регулирования их работы', 'устройство для экономии электроэнергии в коммерческих помещениях',],
        type: 0,
        price: 250,
        correctAnswer: [1],
        answered: null,
    },
    {
        text: 'При снижении лампы до высоты 2000 мм освещенность:',
        answers: ['увеличится в 1,82 раза', 'уменьшится в 1,82 раза', 'останется прежней',],
        type: 0,
        price: 250,
        correctAnswer: [0],
        answered: null,
    },
    {
        text: 'Светильники с отраженным светом создают:',
        answers: ['темные углы и тени', 'направленный и яркий свет',  'равномерное и рассеянное освещение без резких теней',],
        type: 0,
        price: 250,
        correctAnswer: [2],
        answered: null,
    },
    {
        text: 'Какие преимущества имеют электронные ПРА по сравнению с электромагнитными:',
        answers: ['значительная экономия электроэнергии, отсутствие мерцания и мигания лампы, бесшумная работа', 'более низкая рабочая температура, меньшие потери мощности лампы, больший световой КПД', 'компактные размеры, низкий вес, упрощенный процесс установки' ],
        type: 0,
        price: 300,
        correctAnswer: [0],
        answered: null,
    },
    {
        text: 'Какие компоненты включают в себя специальные светильники класса hi-end:',
        answers: ['фильтры для изменения цвета света', 'вентиляционную систему', 'зеркальный отражатель и зеркальную решетку', ],
        type: 0,
        price: 300,
        correctAnswer: [2],
        answered: null,
    },
    {
        text: 'Какой вид короткого замыкания изображен на рисунке.',
        answers: ['Комбинирование двух видов освещения: естественного и искусственного', 'Регулирование интенсивности света по-отдельности в каждом секторе', 'Наличие автоматической системы, оперативно отзывающейся на любое изменение требованиях к освещению', 'Применение дополнительного маломощного освещения при невозможности использования диммирования',],
        type: 1,
        price: 300,
        correctAnswer: [0,1,2,3],
        answered: null,
    },
];
