class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let total = 0
        for (let i = 0; i < this.sides.length; i++) {
            total += this.sides[i]
        }
        return total
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length === 3) {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            return (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)
        } else {
            return false
        }
    } 
}

class Square extends Polygon {
    get isValid() {
        return (this.sides.length === 4 && this.sides[0] === this.sides[1] && this.sides[0] == this.sides[2] && this.sides[0] == this.sides[3])
    }

    get area() {
        return this.sides[0] ** 2
    }
}