//TASK 1
function parseCount(value) {
    let parsedNum = parseInt(value);

    if (isNaN(parsedNum)) {
        throw new Error("Невалидное значение");
    }
    
    return parsedNum;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

//TASK 2
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let s = this.getPerimeter() / 2;
        let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        };
    }
}