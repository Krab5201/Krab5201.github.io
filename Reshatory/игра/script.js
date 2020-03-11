window.onload = function() {
	//Функция, которая возвращает случайное число от 0 до size
	function getRandom(size) {
		return Math.floor(Math.random()*size)
	}
	//Функция, которая вычисляет расстояние от клика до клада
	function getDistance(event, target) { 
		let difX = event.offsetX - target.x;
		let difY = event.offsetY - target.y;
		let distance = Math.sqrt(difX*difX + difY*difY);
		return distance
	}

	function image(distance) {
		let ice = 'img/ice.png' 
		let fire = 'img/fire.png' 
		return distance > 200 ? ice: fire

	}

	//Функция окончания
	function theEnd(last){
		$('div').empty();
		$('div').append('<h1>' + last + '</h1>')
		$('div').append('<button onclick = "location.reload()">Начать занаво</button>')
	}

	let width;
	let height;

	//Делаем размер картинки под размер окна
	width = $('div').width()
	height = $('div').height()*0.95

	$('#canvas').attr({	
		width: width,
		height: height
	});

	let clicks = 0;

	//Случайная позиция клада
	let target = {
		x: getRandom(width),
		y: getRandom(height)
	};

	$('#canvas').drawImage({
		source: 'img/img1.jpg',
		x: 0, y: 0,
		fromCenter: false,
		width: width, height: height
	});

	$('#canvas').click(function(event) {
		clicks++;
		//Получаем расстояние до клада
		let distance = getDistance(event, target);
		//Преобразуем расстояние в подсказку
		//Сделать дома
		let hint = image(distance);
		let size = distance<=200? 11 - Math.floor(distance/20) : 1
		
		if(distance < 20) {
			theEnd('Красавчик, ты нашёл клад!!!')
		}
		if(clicks==20){
			theEnd('Прости, но ты неудачник!!!')
		}
		//Проверка выигрыша
		//Выводим подсказку
		$('#canvas').drawImage({
			source: hint,
			x: event.offsetX, y: event.offsetY,
			width: 20*size, height: 20*size
		});
	});
} 
