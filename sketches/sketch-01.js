const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1000, 1000]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = width * 0.17;

    const off = width * 0.02;

    let x, y;

    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){

        x = ix + (w + gap) * i;
        y = iy + (w + gap) * j;

        context.beginPath();        
        context.rect(x, y, w, h);
        context.strokeStyle = 'white';
        context.stroke();

        if(Math.random() > 0.5){
          context.beginPath();
          context.strokeStyle = '#848484';
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }//EndIf

        
        // if(Math.random() > 1){
          
        //   ctx.beginPath();
        //   context.strokeStyle = '#848484';
        //   ctx.arc(x + off / 2, y + off / 2, 1, 0, Math.PI);
        //   ctx.stroke(); 
        // }


      }
    }

  };
};

canvasSketch(sketch, settings);




/**
 * ORIGINAL
 *  const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = width * 0.17;

    const off = width * 0.02;

    let x, y;

    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){



        x = ix + (w + gap) * i;
        y = iy + (w + gap) * j;

        context.beginPath();
        
        context.rect(x, y, w, h);
        context.strokeStyle = `rgb(0 ${Math.floor(255 - 42.5 * i)} ${Math.floor(255 - 42.5 * j,)})`;
        //context.strokeStyle = 'white';

        context.stroke();

        if(Math.random() > 0.5){
          context.beginPath();
          //context.strokeStyle = "#848484";
          context.strokeStyle = `rgb(0 ${Math.floor(255 - 42.5 * i)} ${Math.floor(255 - 42.5 * j,)})`;
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }//EndIf
 * 
 * 
 * 
 */





