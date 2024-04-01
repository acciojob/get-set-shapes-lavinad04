//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	get width(){
		return this.width;
	}
	get heigth(){
		return this.height;
	}

	getArea(){
		let areaRec = this.width*this.height;
		let areaSqu =  this.side*this.side;
		return areaRec,areaSqu;
		
	}
	
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
		this.side = side;
	}

	getPerimeter(){
		let perimeter = 4*this.side;
		return perimeter;
	}
}


const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
