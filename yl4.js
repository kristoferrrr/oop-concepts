class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  getArea() {
    // See meetod tuleb üle kirjutada iga alamklassi jaoks
    // Selle implementatsioon sõltub konkreetsest kujundist
    return 0;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  print() {
    return `Circle (r: ${this.radius}, color: ${this.color})`;
  }
}

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }

  print() {
    return `Square (a: ${this.side}, color: ${this.color})`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  print() {
    return `Rectangle (l: ${this.length}, w: ${this.width}, color: ${this.color})`;
  }
}

class Paint {
  constructor() {
    this.shapes = [];
  }

  addShape(shape) {
    this.shapes.push(shape);
  }

  getShapes() {
    return this.shapes;
  }

  calculateTotalArea() {
    return this.shapes.reduce((totalArea, shape) => totalArea + shape.getArea(), 0);
  }

  getCircles() {
    return this.shapes.filter(shape => shape instanceof Circle);
  }

  getSquares() {
    return this.shapes.filter(shape => shape instanceof Square);
  }

  getRectangles() {
    return this.shapes.filter(shape => shape instanceof Rectangle);
  }
}

let paint = new Paint();

let circle = new Circle("red", 5);
let square = new Square("blue", 4);
let rectangle = new Rectangle("green", 3, 6);

paint.addShape(circle);
paint.addShape(square);
paint.addShape(rectangle);

console.log("Shapes:", paint.getShapes());
console.log("Total Area:", paint.calculateTotalArea());
console.log("Circles:", paint.getCircles());
console.log("Squares:", paint.getSquares());
console.log("Rectangles:", paint.getRectangles());