const parseCount = (value) => {
  const parsedValue = Number.parseFloat(value);
  if (Number.isNaN(parsedValue)) {
    throw new Error('Невалидное значение');
  }
  return parsedValue;
};

validateCount = (value) => {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
};

// Задача 2

// const isTriangleValid = (a, b, c) => {
//   return a + b > c && b + c > a && c + a > b;
// };

class Triangle {
  constructor(a, b, c) {
    this.a = parseCount(a);
    this.b = parseCount(b);
    this.c = parseCount(c);

    if (
      this.a + this.b < this.c ||
      this.b + this.c < this.a ||
      this.c + this.a < this.b
    ) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    const p = this.perimeter / 2;
    const area = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
    return +area.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    parsedA = parseCount(a);
    parsedB = parseCount(b);
    parsedC = parseCount(c);

    return new Triangle(parsedA, parsedB, parsedC);
  } catch (error) {
    return {
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
}
