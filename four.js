function Shape() {
    this.calArea = function() {}
    this.calPeri = function() {}
}

function Circle(r) {
    this.r = r;

    this.calArea = function() {
        return (Math.PI) * this.r * this.r;
    }
    this.calPeri = function() {
        return 2 * (Math.PI) * this.r;
    }
}

function Triangle(h,b,s1,s2,s3) {
    this.height = h;
    this.base = b;
    this.side1 = s1;
    this.side2 = s2;
    this.side3 = s3;

    this.calArea = function() {
        return (this.height * this.base)/2;
    }

    this.calPeri = function() {
        return this.side1 + this.side2 + this.side3;
    }
}

function Rectangle(l,b) {
    this.length = l;
    this.breadth = b;

    this.calArea = function() {
        return this.length * this.breadth;
    }

    this.calPeri = function() {
        return 2 * (this.length + this.breadth);
    }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;


const c = new Circle(5);
const t = new Triangle(8,6,5,7,10);
const r = new Rectangle(4,6);
console.log(`${c.calArea()} + ${c.calPeri()}`);
console.log(`${t.calArea()} + ${t.calPeri()}`);
console.log(`${r.calArea()} + ${r.calPeri()}`);