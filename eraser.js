class Eraser extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }

    onMouseDown(coord,event){
        this.context.globalCompositeOperation = 'destination-out';
        this.context.strokeStyle = "";
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
    onMouseUp(){
        this.context.globalCompositeOperation = 'source-over'
    }
    onMouseLeave(){
        this.context.globalCompositeOperation = 'source-over'
    }
    onMouseEnter(){}
    onKeyEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
}