class DrawingPen extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    

    onMouseDown(coord) {
        clickCount++;
        console.log (clickCount);
        this.contextReal.fillStyle = `${fill}`;
        this.contextReal.fillStyle = `${fill}`;
        this.contextDraft.fillStyle = `${fill}`;
        this.contextDraft.fillStyle = `${fill}`;
        this.origX = coord[0];
        this.origY = coord[1];
        clickArr.push([coord[0], coord[1]])
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, 10, 0, 2 * Math.PI)
        this.contextDraft.stroke();
        if (clickCount > 0) {
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(clickArr[0][0], clickArr[0],[1]);
            for (let i = 0; i < clickCount; i++) {
                this.contextDraft.lineTo(clickArr[i][0], clickArr[i][1])
            };
            this.contextDraft.stroke();

            this.contextReal.beginPath();
            this.contextReal.moveTo(clickArr[0][0], clickArr[0], [1]);
            for (let j = 0; j < clickCount; j++) {
                this.contextReal.lineTo(clickArr[j][0], clickArr[j][1])
            };
            this.contextReal.stroke();
        }
    }

    onDragging(coord){
        if (clickArr.length > 1){
            let x = clickArr.length;
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(clickArr[x-2][0],clickArr[x-2][1]);
            this.contextDraft.quadraticCurveTo(coord[0], coord[1], clickArr[x-1][0], clickArr[x-1][1]);
            this.contextDraft.stroke();

            this.contextReal.beginPath();
            this.contextReal.moveTo(clickArr[x-2][0],clickArr[x-2][1]);
            this.contextReal.quadraticCurveTo(coord[0], coord[1], clickArr[x-1][0], clickArr[x-1][1]);
            this.contextReal.stroke();
        }
    }
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
    onKeyEnter(){
        $("body").on("keypress", e => {
            let code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13){
                console.log ("enter!")
                this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            }
        })
        // $("#finish").on("click", () =>{
        //     console.log('clicked');
        //     this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // })
    }

}