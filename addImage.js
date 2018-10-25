let img = new Image();

        $("#img1").click(() => {
            img.src = 'sunset2.jpg';
            contextBg.drawImage(img,0,0);
            BgIsColor = false;
        })

        $("#img2").click(() => {
            img.src = 'field.jpg';
            contextBg.drawImage(img,0,0);
            BgIsColor = false;
        })

        $("#img3").click(() => {
            img.src = 'hkskyline.jpg';
            contextBg.drawImage(img,0,0);
            BgIsColor = false;
        })

        $("#img4").click(() => {
            img.src = 'stars.jpg';
            contextBg.drawImage(img,0,0);
            BgIsColor = false;
        })

// class addImage extends PaintFunction {
//     constructor(source, contextReal, contextDraft){
//         super();
//         this.contextDraft = contextDraft;
//         this.contextReal = contextReal;
//         img.src=source;
//     }

//     onMouseDown() {
//         contextReal.drawImage(img,0,0);
//      }
//     onDragging() { }
//     onMouseMove() { }
//     onMouseUp() { }
//     onMouseLeave() { }
//     onMouseEnter() { }
//     onKeyEnter() { } //new add
//     onMouseDownWithoutCanvas() { } //new add
//     onLayerCreate() { } //new add
// }