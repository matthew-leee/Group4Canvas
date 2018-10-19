// class drawLine extends PaintFunction {
//     constructor (contextReal, contextDraft){
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;
//     }

//     onMouseDown(coord, event){
//         this.contextReal.strokeStyle = "#000000";
//         this.contextReal.lineJoin = "round"
//         this.context.lineWidth = "5";
//         this.origX = coord[0];
//         this.origY = coord[1];
//     }

//     onDragging(coord,event){
//         this.contextReal.strokeStyle = "#000000";
//         this.contextReal.lineJoin = "round"
//         this.context.lineWidth = "5";
//         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
//     }


// }

