const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";

function missingDigits(numStr) {
  const str = "0123456789";
  let missingDigits = "";

  for (const dgit of str) {
    if (!numStr.includes(dgit)) {
      if (missingDigits !== "") {
        missingDigits += ", ";
      }
      missingDigits += dgit;
    }
  }

  if (missingDigits) {
    return `${numStr} Missing Digit = ${missingDigits}`;
  } else {
    return `${numStr} has no missing digits`;
  }
}

console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));