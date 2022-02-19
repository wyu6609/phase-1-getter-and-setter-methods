// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //diameter
  get diameter() {
    return 2 * this.radius;
  }
  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  //circumference
  get circumference() {
    return 2 * Math.PI * this.radius;
  }
  set circumference(newCircumference) {
    this.radius = newCircumference / (2 * Math.PI);
  }

  //area
  get area() {
    return Math.PI * this.radius ** 2;
  }
  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }
}
