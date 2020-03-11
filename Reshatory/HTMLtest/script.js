let name;
function getName() {
	name = $('#name').val()

	if(name == "" || name == null) {
		name = "Ученик";
	}

	// Удаляем всё что внутри тега body
	$('body').empty();

	hi(name);
}

function hi(name){
	$('body').prepend('<h2>'+name+', если ты готов начать тестирование, нажми СТАРТ</h2>');
	$('h2').after('<button onclick="test()">СТАРТ</button>');
}

	let questions = ["В CSS есть 16 основных названий для цвета. Какое из перечисленных названий к ним не принадлежит: 1)olive 2)fuchsia 3)cyan 4)aqua", 
	"Какое из следующих свойств не влияет на модель box: 1)content 2)padding 3)margin 4)outline 5)border", 
	"Что из перечисленных не является допустимой единицей в CSS: 1)ch 2)turn 3)ems 4)rem", 
	"4*12 +7 =", "10/5","Перечислите одежду: 1)клей 2)пакет 3)штаны", 
	"Сколько лет Владимиру Зеленскому: 36, 42, 56", "Первая женщина-космонавт: 1)Валентина Терешкова, 2)Елена Кондакова, 3)Светлана Савицкая",
	"Выберите блюдо: 1)яблоко, 2)суп, 3)трава", "Сколько всего месяцев: 6, 17, 12"];
	let answers = ["3", "4", "3", "55", "2", "3", "42", "1", "2", "12"];

	let score = 0;

function test() {
	$('body').empty();
	$('body').append('<h2></h2>');
	$('body').append('<input type="text">');
	$('body').append('<button onclick="check()">Ответить</button>');

	$('h2').text(questions[0])
}

function check() {
	let otvet = $('input').val().toLowerCase()

	if(otvet == answers[0]) {
		score++;
	}
	// Удалить первый элемент из массива
	questions.shift();
	answers.shift();

	if (questions.length != 0) {
		$('h2').text(questions[0]);
		$('input').val('');
	}
	else {
		theEnd();
	}
}

function test1() {
	

	for(let i = 0; i < questions.length; i++) {
		let q = questions[i];
		let a = answers[i];
		let otvet = prompt("Вопрос №" + (i+1) + ": " + q);

		if (otvet == a) {
			score ++;
		}
	}

	alert(name + ", вы набрали " + score + "/" + questions.length + "баллов.");
}
function theEnd() {
	$('body').empty().append('<h1>' name + ', вы набрали' + score + "/" + questions.length + "баллов.");
	$('body').prepend('<div id="d"><h2 id="h2">Молодец '+ name +', ты прошел успешно тест!</h2></div');

	$('#d').css('margin', 'auto')
	$('#d').css('width', '500px')
	$('#d').css('height', '150px')
	$('#d').css('background-color', '#9FF606')
	$('#d').css('color', 'blue')
	$('#d').css('border-radius', '30px')
	$('#d').css('padding', '25px')

	$('#h2').css('font-size', '2em')
	$('#h2').css('text-align', 'center')
}				
function start(){
	// Удаляем элемент с id="start"
	$('#start').remove();
	// Создаём обзац с текстом
	$('body').append('<p>Введите своё имя...</p>');
	$('p').css('color', 'blue')
	// Создам поле для ввода
	$('body').append('<input type="text" id="name">');
	// Создаём кнопку для отправки
	$('body').append('<input type="submit" id="send">');
	// Задаем атрибут onclik значение "название функций"
	$('#send').attr('onclick', 'getName()');

}
