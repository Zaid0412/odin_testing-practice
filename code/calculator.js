export const calculator = {
  add(a, b) {
    if (a == undefined || b == undefined) {
      return NaN;
    }
    return a + b;
  },

  subtract(a, b) {
    if (a == undefined || b == undefined) {
      return NaN;
    }
    return a - b;
  },

  divide(x, y) {
    if (a == undefined || b == undefined) {
      return NaN;
    }
    return x / y;
  },

  multiply(x, y) {
    if (a == undefined || b == undefined) {
      return NaN;
    }
    return x * y;
  },
};
