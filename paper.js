class Paper
{
    constructor(x , y, r)
    {
        var Option = 
        {
            isStatic : false,
            restitution : 0.3,
            density : 5,
            friction : 1
        }
        this.body = Bodies.circle(x , y,  r, Option)
        World.add(world,this.body)
        this.radius = r;

        this.image = loadImage("paper.png")
    }

    display()
    {
        var angle = this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
 
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop()
    }

}