
class Game
{	
	#gameModuleList = [];
	#gameObjectList = [];
	#lastTimestamp;
	#loop;

	constructor() 
	{
		this.#lastTimestamp = 0;
		
		this.#loop = (timestamp = 0) =>
		{
			let deltaTime = (timestamp - this.#lastTimestamp) / 1000;

			for (const module of this.#gameModuleList) 
			{
				if (deltaTime > 0.0100)
				{
					deltaTime = 0.0042;
				}

				module.update(deltaTime);
			}

			this.#lastTimestamp = timestamp;

			window.requestAnimationFrame(this.#loop);
		}
	}

	run()
	{
		this.#startModules();
		this.#loop();
	}

	#startModules()
	{
		for (const module of this.#gameModuleList) 
		{
			module.start(this.#gameObjectList);
		}
	}
	
	addGameModule(gameModule)
	{
		this.#gameModuleList.push(gameModule);	
	}
	
	addGameObject(gameObject)
	{
		this.#gameObjectList.push(gameObject);
	}
}

export default Game;