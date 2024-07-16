import 
{
	Game, Canvas, Collision, Input, Moviment, GameObject, 
	vec, ActionMove, ColliderCircle, ColliderRectangle, CollisionEffectBlock, 
	CollisionEffectBounce, Controller, Sprite, Velocity
} 
from "./libLoader.js"

// const gameData = 
// {
// 	game: undefined,
// 	gameModules = 
// 	{
// 		canvas: undefined,
// 		input: undefined,
// 		collision: undefined,
// 	}

// }

//		Game Instance		//

const game = new Game();

//		Game Modules		//

//Canvas
const canvas = new Canvas('canvas', 1024, 720);
game.addGameModule(canvas);

// Input
const input = new Input();
game.addGameModule(input);

//Bounce Collision
const collision = new Collision();
game.addGameModule(collision);

//Moviment
const speed = new Moviment();
game.addGameModule(speed);


//		Actions				//

//Move up
const moveUpAction = new ActionMove(270, 200);

//Move down
const moveDownAction = new ActionMove(90, 200);


//		Controllers			//

//controller1
const controller1 = new Controller();
controller1.addAction('w', moveUpAction);
controller1.addAction('s', moveDownAction);

//controller2
const controller2 = new Controller();
controller2.addAction('ArrowUp', moveUpAction);
controller2.addAction('ArrowDown', moveDownAction);

//		GameObjects			//

//ball
const ball = new GameObject('ball', vec(200, 512));
const ballSprite = new Sprite
(
'./assets/sprites/ballCyan40x40.png', 
40, 40
);
const ballVelocity = new Velocity(315, 500, true);
const ballCollider = new ColliderCircle(20);
const ballColliderEffect = new CollisionEffectBounce();
ball.addComponent(ballVelocity);
ball.addComponent(ballSprite);
ball.addComponent(ballCollider);
ball.addComponent(ballColliderEffect);
game.addGameObject(ball);

//pawn2
const pawn1 = new GameObject('pawn1', vec(100, 500));
const pawn1Sprite = new Sprite
(
	'./assets/sprites/rectangleCyan20x160.png', 
	20, 160
);
const pawn1Velocity = new Velocity(270);
const pawn1Collider = new ColliderRectangle(20, 160);
const pawn1ColliderEffect = new CollisionEffectBlock();
pawn1.addComponent(controller1);
pawn1.addComponent(pawn1Velocity);
pawn1.addComponent(pawn1Sprite);
pawn1.addComponent(pawn1Collider);
pawn1.addComponent(pawn1ColliderEffect);
game.addGameObject(pawn1);

//pawn2
const pawn2 = new GameObject('pawn2', vec(900, 500));
const pawn2Sprite = new Sprite
(
	'./assets/sprites/rectangleCyan20x160.png', 
	20, 160
);

const pawn2Velocity = new Velocity(270);
const pawn2Collider = new ColliderRectangle(20, 160);
const pawn2ColliderEffect = new CollisionEffectBlock();
pawn2.addComponent(controller2);
pawn2.addComponent(pawn2Velocity);
pawn2.addComponent(pawn2Sprite);
pawn2.addComponent(pawn2Collider);
pawn2.addComponent(pawn2ColliderEffect);
game.addGameObject(pawn2);

//WallLeft
const wallLeft = new GameObject('wallLeft', vec(0, 360));
const wallLeftCollider = new ColliderRectangle(20, 720);
wallLeft.addComponent(wallLeftCollider);
game.addGameObject(wallLeft);

//WallRight
const wallRight = new GameObject('wallRight', vec(1024, 360));
const wallRightCollider = new ColliderRectangle(20, 720);
wallRight.addComponent(wallRightCollider);
game.addGameObject(wallRight);

//WallUp
const wallUp = new GameObject('wallUp', vec(512, 0));
const wallUpSprite = new Sprite
(
	'./assets/sprites/rectangleCyan1024x20.png', 
	1024, 20
);
const wallUpCollider = new ColliderRectangle(1024, 20);
wallUp.addComponent(wallUpSprite);
wallUp.addComponent(wallUpCollider);
game.addGameObject(wallUp);

//WallBottom
const wallBottom = new GameObject('wallBottom', vec(512, 720));
const wallBottomSprite = new Sprite
(
	'./assets/sprites/rectangleCyan1024x20.png', 
	1024, 20
)
const wallBottomCollider = new ColliderRectangle(1024, 20);
wallBottom.addComponent(wallBottomSprite);
wallBottom.addComponent(wallBottomCollider);
game.addGameObject(wallBottom);

game.run();

//player
//gameMode
//canvas.print();
//gameSession