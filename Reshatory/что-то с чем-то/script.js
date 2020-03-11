window.onload = function () {
	let canv = $('#myCanvas');
	
	//Прямоугольник
	canv.drawRect({
		//Стиль обводки
		strokeStyle: 'dodgerblue',
		//Стиль заливки
		fillStyle: 'steelblue',
		//Ширина обводки
		strokeWidth: 4,
		//Перенос ключевой точки из центра в левый угол
		fromCenter: false,
		x: 10, y: 10, 
		width: 200,
		height: 200
	});

	//Дуги и окружности
	canv.drawArc({
		//Стиль обводки
		strokeStyle: 'red',
		//Стиль заливки
		fillStyle: 'yellow',
		//Ширина обводки
		strokeWidth: 4,
		x: 350, y: 110,
		radius: 100,
		start: 0, end: 150,
		//Замкнутый контр
		closed: true
	});

	//Линии
	canv.drawLine({
		//Стиль обводки
		strokeStyle: 'green',
		//Стиль заливки
		fillStyle: 'yellow',
		//Ширина обводки
		strokeWidth: 4,
		//Закругленные концы
		rounded: true,
		x1: 10, y1: 400,
		x2: 100, y2: 230,
		x3: 250, y3: 400,
		//Замкнутый контр
		closed: true
	});
}

