$('.btn').on('click', function() {
	this.style.display = 'none';


const ship = {
	lives: 3,
	xCoordinate: 5,
	yCoordinate: 2,
	score: 0,

	attack(){
		const newLaser = new Laser(this.xCoordinate, this.yCoordinate);
		newLaser.moveLaser();
	},
	moveLeft(){
		if(this.xCoordinate == 5 && this.yCoordinate == 2){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 3;
			this.yCoordinate = 3;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}else if(this.xCoordinate == 3 && this.yCoordinate == 3){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 2;
			this.yCoordinate = 5;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}else if(this.xCoordinate == 2 && this.yCoordinate == 5){
			console.log("ROOM TO MOVE RIGHT")
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 3;
			this.yCoordinate = 7;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}else if(this.xCoordinate == 3 && this.yCoordinate == 7){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 5;
			this.yCoordinate = 8;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();

		}else if(this.xCoordinate == 5 && this.yCoordinate == 8){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 7;
			this.yCoordinate = 7;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}else if(this.xCoordinate == 7 && this.yCoordinate == 7){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 8;
			this.yCoordinate = 5;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}else if(this.xCoordinate == 8 && this.yCoordinate == 5){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 7;
			this.yCoordinate = 3;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}else if(this.xCoordinate == 7 && this.yCoordinate == 3){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 5;
			this.yCoordinate = 2;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();

		}
	},
	moveRight(){
		if(this.xCoordinate == 5 && this.yCoordinate < 4){
			console.log("ROOM TO MOVE RIGHT")
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 7;
			this.yCoordinate = 3;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}else if(this.xCoordinate == 7 && this.yCoordinate == 3){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 8;
			this.yCoordinate = 5;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();

		}else if(this.xCoordinate == 8 && this.yCoordinate == 5){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 7;
			this.yCoordinate = 7;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}
		else if(this.xCoordinate == 7 && this.yCoordinate == 7){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 5;
			this.yCoordinate = 8;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}
		else if(this.xCoordinate == 5 && this.yCoordinate == 8){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 3;
			this.yCoordinate = 7;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}
		else if(this.xCoordinate == 3 && this.yCoordinate == 7){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 2;
			this.yCoordinate = 5;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}
		else if(this.xCoordinate == 2 && this.yCoordinate == 5){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 3;
			this.yCoordinate = 3;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}
		else if(this.xCoordinate == 3 && this.yCoordinate == 3){
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('ship');
			this.xCoordinate = 5;
			this.yCoordinate = 2;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('ship')
			console.log(`${this.xCoordinate}-${this.yCoordinate}`);
			this.detectCollision();
		}
	},
	detectCollision(){
		const squareAboutToBeLasered = $(`.game-square-${this.xCoordinate}-${this.yCoordinate}`)
		if(squareAboutToBeLasered.hasClass('enemy')){
			squareAboutToBeLasered.removeClass('enemy');
			squareAboutToBeLasered.addClass('explosion');
			this.score++;
			$('.score').text(`Score: ${this.score}`);
			console.log(`Score: ${this.score}`);
			setTimeout(()=>{
				squareAboutToBeLasered.removeClass('explosion');
			}, 200)
			enemies.forEach(function(enemy){
				if(enemy.enemyNumber == squareAboutToBeLasered.attr('enemy')){
					console.log("DESTROYED ENEMY " + enemy.enemyNumber);
					squareAboutToBeLasered.removeAttr('enemy');
					enemy.isDestroyed = true;
				}
			})
		}
	},
}
const enemies = [];
let enemyNumber = 1;
class Enemy {
	constructor(xCoordinate){
		this.xCoordinate = xCoordinate;
		this.yCoordinate = 5;
		this.direction = Math.floor(Math.random() * 4 + 1);
		this.enemyNumber = enemyNumber;
		this.isDestroyed = false;
		gameBoard[0][xCoordinate] = this;
		$(`.game-square-${xCoordinate}-5`).addClass('enemy');
		$(`.game-square-${xCoordinate}-5`).attr('enemy', enemyNumber);
		enemyNumber++;
		enemies.push(this);
	}
	moveUp(){
		if(this.yCoordinate == 10){
			alert('you lose');
		}else{
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('enemy')
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeAttr('enemy')
			this.yCoordinate++;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('enemy')
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).attr('enemy', this.enemyNumber)
		}
	}
	moveDown(){
		if(this.yCoordinate == 0){
			alert('you lose');
		}else{
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('enemy')
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeAttr('enemy')
			this.yCoordinate--;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('enemy')
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).attr('enemy', this.enemyNumber)
		}
	}
	moveRight(){
		if(this.xCoordinate == 10){
			alert('you lose');
		}else{
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('enemy')
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeAttr('enemy')
			this.xCoordinate++;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('enemy')
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).attr('enemy', this.enemyNumber)
		}
	}
	moveLeft(){
		if(this.xCoordinate == 0){
			alert('you lose');
		}else{
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeClass('enemy')
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).removeAttr('enemy')
			this.xCoordinate--;
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).addClass('enemy')
			$(`.game-square-${this.xCoordinate}-${this.yCoordinate}`).attr('enemy', this.enemyNumber)
		}
	}
	move(){
		if(this.isDestroyed){
			console.log("DONT MOVE PUNK")
			return;
		}
		if(this.direction == 1){
			this.moveUp();
		} else if(this.direction == 2){
			this.moveDown();
		}
		else if( this.direction == 3){
			this.moveRight();
		} else if( this.direction == 4){
			this.moveLeft();
		}
		setTimeout(()=>{
			this.move()
		}, 1800)
	}
}
const gameBoard = [ [0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,ship,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0,0,0,0]
]

for(let i = gameBoard.length-1; i >= 0; i--){
	let row = gameBoard[i];
	$('.game-board').append(`<div class='game-row-${i} game-row'></div>`)
	for(let x = 0; x < row.length; x++){
		$(`.game-row-${i}`).append(`<div class="game-square game-square-${x}-${i}"></div>`)
	}
}
$('.game-square-5-2').addClass('ship');
$(document).keydown(function(e){
	let keyPressed = e.which;
	if(keyPressed == 37){
		ship.moveLeft();
	} else if(keyPressed == 39){
		ship.moveRight();
	} else if(keyPressed == 32){
		ship.attack();
	}
})
const lrrr = new Enemy(5);
const enemyAssault = setInterval(function(){
	const newEnemy = new Enemy(5);
	newEnemy.move();
}, 1000)
})
