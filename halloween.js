let length = 0;
let width = 0;
let base = 0;
let height = 0;
let radius = 0;

function calculateRectangleArea (length, width) {
  let  rectangArea = length * width;
  if (rectangArea <= 0) {
    return undefined
  } else {
    return rectangArea;
  }
}

function calculateTriangleArea (base, height) {
 let triangleArea = base * height / 2;
  if (triangleArea <=0) {
  return undefined;
  } else {
  return triangleArea
  }
}
function calculateCircleArea(radius) {
  let circleArea =  Math.PI * radius ^ 2;
  if (radius < 0) {
    return undefined;
  } else {
    return circleArea;
  }
}

calculateRectangleArea(length, width)
calculateTriangleArea(base, height)
calculateCircleArea(radius)

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined