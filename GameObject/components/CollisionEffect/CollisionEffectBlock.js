import {vecDirection, CollisionEffect, CollisionEffectBounce} 
from "../../../libLoader.js";

class CollisionEffectBlock extends CollisionEffect
{
	constructor() 
	{
		super();
	}

	effect(object, borderPoint, target)
	{
		if (!(target.collidEffect instanceof CollisionEffectBounce))
		{
			const forceBack = vecDirection(borderPoint, object.position);
			object.velocity.setVecDirection(forceBack);
		}
	}
}

export default CollisionEffectBlock;