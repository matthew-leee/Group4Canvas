class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }

    onMouseDown(coord,event){
        this.context.strokeStyle = `${fill}`;
        // this.context.lineJoin = "bezel";
        this.context.lineWidth = stroke;
        this.context.lineCap = 'round';
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
    onKeyEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
<<<<<<< HEAD
=======
=======
class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }

    onMouseDown(coord,event){
        this.context.strokeStyle = `${strokeStyle}`;
        this.context.lineJoin = "bezel";
        this.context.lineWidth = stroke;
        this.context.lineCap = 'round';
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
    onKeyEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
>>>>>>> 09a0c4ad2cfb38e2f1c55e0221529a74f0393508
>>>>>>> caec504ba50e5dee52efed8fdd1a4880eaaea095
}