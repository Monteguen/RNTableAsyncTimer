export function isNumeric(str: any) {
    if (typeof str != 'string') return false;
    return !isNaN(parseFloat(str));
  }