const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  
   //animate: true,
   duration: 10,
   dimensions: [ 1080, 1080 ],
   fps: 10
   
   
};


const sketch = () => {

  return ({ context, width, height }) => {
    

    function generarNumero(numero){
      return (Math.random()*numero).toFixed(0);
    }
    
    function colorRGB(){
      let color = "("+generarNumero(10)+"," + generarNumero(250) + "," + generarNumero(250) +")";
      return "rgb" + color;
    }


    context.fillStyle = 'white'; 
    
    context.fillRect(0, 0, width, height);

    //Variables for square
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * random.range(0.1, 0.5);

    //const h = height * 0.1; original
    let x, y;
    
    
    //const radius = width * 0.3; original
    //let num = 40;

    /**
     * 
     * --------- MODIFICADOS ----------
     */

    let num = random.range(1, 40);
    const radius = width * random.range(0.25, 0.5);


    for(let i = 0; i < num; i++){

      const slice = math.degToRad(360/num);
      const angle = slice * i;
      
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      //Square afther a lines o clock
      context.save();
      context.translate(x, y);
      
        //context.fillStyle = 'black';
        context.fillStyle = colorRGB();
        context.rotate(-angle); 
        context.scale(random.range(0.1, 2), random.range(0.2, 0.5));
   
      
      context.beginPath();
      context.rect(-w * 0.5, random.range (0, -h * 0.5), w, h);
      context.fill();
      context.restore();


      //Circle
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
      
      context.lineWidth = random.range(5, 20);

      context.beginPath();

      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.strokeStyle = colorRGB();
      context.stroke();
  
      context.restore();


      //Texto
      context.save();
      context.font = "50px Courier";
      context.fillStyle = colorRGB();
      context.fillText("CREATIVE", cx-190, cy);
      context.restore();

      //Texto
      context.save();
      context.font = "50px Courier";
      context.fillStyle = colorRGB();
      context.fillText("CODE", cx+60, cy);
      context.restore();


      

    }//End for


  };//end return
  



};

canvasSketch(sketch, settings);

