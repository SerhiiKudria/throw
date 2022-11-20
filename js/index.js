/*
Для рекурсивної функції піднесення числа до степеня pow(base, exponent) 
реалізувати валідацію значень, що передаються, і генерацію помилок 
відповідних типів.
Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок)
 різних типів з оповіщенням користувача про тип помилки.
*/
function pow(base, exponent) {
  if (typeof base !== "number") {
    throw new TypeError("base must be number value");
  }
  if (typeof exponent !== "number") {
    throw new TypeError("exponent must be number value");
  }
  if (!Number.isSafeInteger(exponent)) {
    throw new RangeError("exponent must be save integer value");
  }
  if (base === 0) {
    return 0;
  }
  if (exponent === 0) {
    return 1;
  }
  if (exponent === 1) {
    return base;
  }
  return base * pow(base, exponent - 1);
}

try {
  console.log("pow(2, 4)", pow(3.6, 0.6));
} catch (error) {
  console.dir(error);
  if (error instanceof TypeError) {
    console.log("TypeError error : ", error);
  } else if (error instanceof RangeError) {
    console.log("RangeError error : ", error);
  } else {
    console.log("Something went wrong");
  }
}
