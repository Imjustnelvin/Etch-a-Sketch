let defaultColor = '#5d88fb';

function boardSize(size){
	let board = document.querySelector('.board');
	let squares = board.querySelectorAll('div');
	squares.forEach((div) => div.remove());
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	
		let finalSize = size * size;
		for(let i = 0; i < finalSize; i++)
		{
			let square = document.createElement('div');
			square.style.backgroundColor = 'white';
			square.addEventListener('mouseover', fillColor);
			square.style.borderRadius = '10%';
			board.append(square);
		}
}
boardSize(16);

const changeSize = input => {
	if (input < 2 || input > 100) {
		console.log('Abnormal Size Detected');
	} else {
		boardSize(input);
	}
}

function fillColor() {
	if(defaultColor === 'random') 
	{
		this.style.backgroundColor = `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
	}
	else if (defaultColor === 'eraser')
	{
		this.style.backgroundColor = 'white';
	}
	else
	{
		this.style.backgroundColor = defaultColor;
	}
	
} 

function changeColor(choice) {
	defaultColor = choice;
}