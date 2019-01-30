function createRectangle(length,width) {
    return {
        length,
        width,
        getArea: function() {
          return this.length  * this.width;
    }
    };
}

let rectangle1 = createRectangle(7,4);
let rectangle2 = createRectangle(30,5);

console.log(`1. Rechteck:
Seitenlänge =  ${rectangle1.length}, Breite = ${rectangle1.width}, Fläche = ${rectangle1.getArea()}
 `);

console.log(`2. Rechteck:
Seitenlänge =  ${rectangle2.length}, Breite = ${rectangle2.width}, Fläche = ${rectangle2.getArea()}
 `);