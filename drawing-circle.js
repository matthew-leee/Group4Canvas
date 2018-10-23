class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord){
        
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.lineWidth = stroke;
        this.contextReal.strokeStyle = `${strokeStyle}`;
        this.contextReal.fillStyle = `${fill}`;
       
        
    }
    onDragging(coord){
        this.contextDraft.beginPath();
        this.contextDraft.lineWidth = stroke;
        this.contextDraft.strokeStyle = `${strokeStyle}`;
        this.contextDraft.fillStyle = `${fill}`;
        
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        radius = Math.sqrt(Math.pow((coord[0]- this.origX),2)+Math.pow((coord[1] - this.origY),2));
        console.log ([coord[0], coord[1], radius]);
        this.contextDraft.arc(this.origX,this.origY,radius,0,2*Math.PI)
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        radius = Math.sqrt(Math.pow((coord[0]- this.origX),2)+Math.pow((coord[1] - this.origY),2));
        this.contextReal.arc(this.origX,this.origY,radius,0,2*Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
    onKeyEnter(){}
}
