import {GameModule, vec, Shape, Sprite, Velocity} from "../../libLoader.js"
class Canvas extends GameModule
{
	#context;
	#canvas;
	#canvasId;
	#canvasWidth;
	#canvasHeight;
	#gameObjectMap;

	constructor(canvasId, width = window.innerWidth, height = window.innerHeight) 
	{
		super();
	
		this.#canvas = undefined;
		this.#context = undefined;
		this.#canvasId = canvasId;
		this.#canvasWidth = width;
		this.#canvasHeight = height;
		this.#gameObjectMap = new Map();
	}

	start(gameObjectList)
	{
		this.#canvas = document.getElementById(this.#canvasId);
		this.#canvas.width = this.#canvasWidth;
		this.#canvas.height = this.#canvasHeight;		
		this.#context = this.#canvas.getContext('2d');

		for (const gameObject of gameObjectList) 
		{
			this.#getComponent(gameObject, gameObject.getComponentList());
		}	
	}

	#getComponent(gameObject, componentList)
	{
		const shape = componentList.find(gameObject => 
										 gameObject instanceof Shape);
		if (shape)
		{
			this.#gameObjectMap.set(gameObject, shape); 	
		}

		const sprite = componentList.find(gameObject => 
										  gameObject instanceof Sprite);
		
		if (sprite)
		{
			this.#gameObjectMap.set(gameObject, sprite); 	
		}
	}

	update()
	{
		this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
		
		for (const pair of this.#gameObjectMap) 
		{
			const gameObject = pair[0];

			const component = pair[1];

			if (component instanceof Shape)
			{
				component.draw(this.#context, gameObject.getPosition());
			}

			if (component instanceof Sprite)
			{
				const componentList = gameObject.getComponentList();

				const velocity = componentList.find(gameObject => 
												gameObject instanceof Velocity);
				
				let direction = vec(0, 0);

				if (velocity)
				{
					direction = velocity.getDirection();
				}

				component.print(this.#context, gameObject.getPosition(), 
								direction);
			}
		}	
	}
}

export default Canvas;