window.onload = function () {
let canv = $('#myCanvas');

	canv.drawArc({
		//Стиль обводки
		strokeStyle: 'brawn',
		//Стиль заливки
		fillStyle: 'gray',
		//Ширина обводки
		strokeWidth: 4,
		x: 250, y: 250,
		radius: 100,
		start: 249, end: 120,
		//Замкнутый контр
		closed: true
	});

	canv.drawLine({
		//Стиль обводки
		strokeStyle: 'black',
		//Ширина обводки
		strokeWidth: 4,
		//Закругленные концы
		rounded: true,
		x1: 100, y1: 200,
		x2: 150, y2: 220,
		//Замкнутый контр
		closed: true
	});

		canv.drawLine({
		//Стиль обводки
		strokeStyle: 'black',
		//Ширина обводки
		strokeWidth: 4,
		//Закругленные концы
		rounded: true,
		x1: 140, y1: 140,
		x2: 190, y2: 170,
		//Замкнутый контр
		closed: true
	});

		canv.drawLine({
		//Стиль обводки
		strokeStyle: 'black',
		//Ширина обводки
		strokeWidth: 4,
		//Закругленные концы
		rounded: true,
		x1: 330, y1: 120,
		x2: 300, y2: 160,
		//Замкнутый контр
		closed: true
	});


		canv.drawLine({
		//Стиль обводки
		strokeStyle: 'black',
		//Ширина обводки
		strokeWidth: 4,
		//Закругленные концы
		rounded: true,
		x1: 230, y1: 150,
		x2: 230, y2: 100,
		//Замкнутый контр
		closed: true
	});

		canv.drawLine({
		//Стиль обводки
		strokeStyle: 'black',
		//Ширина обводки
		strokeWidth: 4,
		//Закругленные концы
		rounded: true,
		x1: 390, y1: 180,
		x2: 340, y2: 200,
		//Замкнутый контр
		closed: true
	});

		canv.drawLine({
		//Стиль обводки
		strokeStyle: 'black',
		//Ширина обводки
		strokeWidth: 4,
		//Закругленные концы
		rounded: true,
		x1: 410, y1: 250,
		x2: 350, y2: 250,
		//Замкнутый контр
		closed: true
	});


		canv.drawLine({
		//Стиль заливки
		fillStyle: 'gray',
		//Ширина обводки
		strokeWidth: 4,
		//Закругленные концы
		rounded: true,
		x1: 150, y1: 240,
		x2: 160, y2: 288,
		x3: 110, y3: 285,
		//Замкнутый контр
		closed: true
	});

		canv.drawArc({
		//Стиль заливки
		fillStyle: 'black',
		//Ширина обводки
		strokeWidth: 4,
		x: 150, y: 260,
		radius: 5,
		start: 50, end: 20,
		//Замкнутый контр
		closed: true
	});

		canv.drawArc({
		//Стиль заливки
		fillStyle: 'black',
		//Ширина обводки
		strokeWidth: 4,
		x: 110, y: 285 ,
		radius: 5,
		start: 50, end: 20,
		//Замкнутый контр
		closed: true
	});

}	
