class Chain{
    constructor(body1,body2){
        var options={
            bodyA: body1,
            bodyB: body2,
            length: 10,
            stiffness: 0.05
        }
        this.body = constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        var pos1 = this.body.bodyA.position;
        var pos2 = this.body.bodyB.position;
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
}