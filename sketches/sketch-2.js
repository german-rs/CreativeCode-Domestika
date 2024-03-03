const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
//canvas-sketch sketch-2 --new --open

const settings = {
  dimensions: [ 1080, 1080 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    
    const colorFondo = 'black';

    const colorManillas = '#FFFF00';
    const colorCirExt = '#39ff14';
    const colorCirInt = '#FF1493';
    const colorSuCirInt = '#2204cc';
    const colorCirIntx2 = '#7df9ff';
    
    //Background color
    context.fillStyle = colorFondo;
    
    //context.fillRect(0, 0, width, height);
    context.fillRect(0, 0, width, height);
    
    //Color manillas reloj
    context.fillStyle = colorManillas;
    const cx = width * 0.5;
    const cy = height * 0.5;
    let x, y;
    const w = width * 0.01;
    const h = height * 0.1;


    //Cantidad de manillas
    const num = random.range(30, 50);
    const radius = width * 0.3;


    for(let i = 0; i < num; i++){

      const slice = math.degToRad(360/num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save(); //--
      

      context.translate(0, 1080);
      context.rotate(-angle);
      /**
       * Reloj
       * 
       * Ancho manillas y largo
       */
      context.scale(random.range(0.1, 0.9), random.range(5, 25));
      //context.scale(random.range(0.1, 2), random.range(0.2, 0.5));
  

      /**
       * Figura 2. Cuadrado.
       */
      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      //context.closePath();
      context.restore(); //Restablecer el estado del contexto.

      /**
       * Figura 3. Círculo
       */
      context.save();
      context.translate(0, 1080);
      context.rotate(-angle);

      /**
       * Ancho de línea
       */
      context.lineWidth = random.range(12, 15);
      
      context.beginPath();  
                        /**
                         * Radio del círculo
                         *  */            
      context.arc(0, 0, radius * random.range(3, 4), slice * random.range(1, -8), slice * random.range(1, 5));
      //context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.strokeStyle = colorCirExt;
      context.stroke();
      context.restore();
    

      /**
       * Otro círculo interior
       */
      context.save();
      context.beginPath(); 
      context.translate(0, 1080);
      context.rotate(-angle*2);
      context.lineWidth = random.range(9, 11);
      context.arc(0, 0, radius * random.range(2, 3), slice * random.range(1, -9), slice * random.range(0.1, 2));
      context.strokeStyle = colorCirInt;
      context.stroke();
      context.restore();

       /**
       * Otro círculo  super interior
       */
       context.save();
       context.beginPath(); 
       context.translate(0, 1080);
       context.rotate(-angle);
       context.lineWidth = random.range(7, 9);
       context.arc(0, 0, radius * random.range(1, 2), slice * random.range(1, -9), slice * random.range(0.1, 2));
       context.strokeStyle = colorSuCirInt;
       context.stroke();
       context.restore();


        /**
         * Otro círculo interior x2
         */
        context.save();
        context.beginPath(); 
        //context.translate(cx, cy);
        context.translate(0, 1080);
        context.rotate(-angle);
        context.lineWidth = random.range(7, 10);
        context.arc(0, 0, radius * random.range(0.5, 1), slice * random.range(1, -9), slice * random.range(0.1, 2));
        context.strokeStyle = colorCirIntx2;
        context.stroke();
        context.restore();


    }



  };
};

canvasSketch(sketch, settings);




/**
 * Funciones
 * 
 * 
const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
};

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};
 * 
 * 
 * 
 * Ejemplo del círculo
 * 
 *   context.fillStyle = 'black';
    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;

    context.save(); //--
    context.translate(x, y);
    context.rotate(0.3);

    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.closePath();

    context.restore(); //Restablecer el estado del contexto.

    context.translate(100, 400);
    context.beginPath();
    context.arc(0, 0, 50, 0, Math.PI * 2);
    context.fill();
    context.closePath();
 * 
 * 
 */