// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        return this.radius *2
    }
    set diameter(num) {
        this.radius = num / 2
    }

    get circumference() {
        return 2 * Math.PI * this.radius
    }
    set circumference(num) {
        this.radius = (num / 2 / Math.PI)
    }

    get area() {
        return Math.PI * this.radius ** 2
    }
    set area(num) {
        this.radius = Math.sqrt(num / Math.PI)
    }
}