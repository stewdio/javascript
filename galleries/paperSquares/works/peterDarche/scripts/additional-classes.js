var Mover = {
		position : undefined,
		velocity : undefined,
		acceleration : undefined,
		applyForce : function(force){
			acceleration += force
		},
		update : function(){
			velocity += acceleration
			position += velocity
			acceleration = 0
		},
		display : function(){
			var point = new Point(position)
				path = new Path.Rectangle( point, 20 )
				path.strokeWidth = 4
				path.fillColor = 'white'
		},
		run : function(){
			update()
			display()
		}
}

var Attractor = {
		position : undefined,
		mass : undefined,
		g : undefined,
		attract : function(mover){
			var force = mover.rect.position - (position.x, position.y),
				distance = location.getDistance(mover.rect.position)
				
			force.normalize()
			strength = (g * mass * m.mass) / (distance * distance)
		    force * strength
		    return force
		},
		display : function(){
			var point = new Point(this.position)
				path = new Path.Rectangle( point, 20 )
				path.strokeWidth = 4
				path.fillColor = 'white'
		}
}