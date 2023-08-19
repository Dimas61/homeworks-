function parseCount (value) {
 
    if (isNaN(value) === true) {
      throw new Error('Невалидное значение')
    }
    return parseFloat(value)
  }


  function validateCount (value2) {
    try {
     return parseCount(value2)
    }
    catch (err) {
      return err
    }
  }


  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;

      if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
        throw new Error('Треугольник с такими сторонами не существует')
      }
    }

    get perimeter () {
        return this.a + this.b + this.c;
    }

    get area () {
        let p = (this.a + this.b + this.c) / 2;
        let result = p * (p - this.a) * (p - this.b) * (p - this.c);
        return +Math.sqrt(result).toFixed(3)
    }
  }

function getTriangle (a, b, c) {
    const errObj = {
        get perimeter () {
            return 'Ошибка! Треугольник не существует'
        },

        get area () {
            return 'Ошибка! Треугольник не существует'
        },
    }
    let tase =  {};
    try {
        tase = new Triangle(a, b, c);
        return tase
    }
    catch (err) { 
        return errObj;
    }
}
console.log(getTriangle(1, 1, 10));