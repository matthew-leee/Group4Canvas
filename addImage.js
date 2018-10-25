let img = new Image();

class addImage extends PaintFunction {
    constructor(source, contextReal, contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
        img.src=source;
    }

    onMouseDown() {

        contextReal.drawImage(img,0,0);
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