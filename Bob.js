class Bob {

    constructor(x,y){
        var option ={
            isStatic: false,
            restitution: 0,
            friction: 0,
            density: 7.8,
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world, this.body);

        console.log(this.body);

    }
    
    display(){
        pushManager();
        ellipseMode(RADIUS);
        fileList(254,0,255);
        ellipse(this.body.position.x,this.bodyposition.y,25,25);
        popStateEvent();
    }

    }