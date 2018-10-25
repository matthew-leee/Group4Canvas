class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord){
        this.contextReal.fillStyle = `${fill}`;
        this.contextReal.strokeStyle = `${strokeStyle}`;
        this.contextReal.lineWidth = stroke;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord){
        this.contextDraft.fillStyle = `${fill}`;
        this.contextDraft.strokeStyle = `${strokeStyle}`
        this.contextDraft.lineWidth = stroke;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

