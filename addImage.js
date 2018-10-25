let img = new Image();

class addImage extends PaintFunction {
    constructor(source, contextReal, contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
        this.img = img;
        this.img.src = source; 
    }

    onMouseDown() {
        console.log ("image added")
        contextReal.drawImage(this.img,0,0);
     }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
    onKeyEnter() { } //new add
    onMouseDownWithoutCanvas() { } //new add
    onLayerCreate() { } //new add
}