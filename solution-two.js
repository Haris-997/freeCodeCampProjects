//This function works and passes the test too. Describes what solution 1 actually does:

function telephoneCheck(str) {
  // Strip leading/trailing whitespace (just in case)
  str = str.trim();

  // optional country code check
  if (str[0] === '1') {
    // Remove the leading '1' and optional space
    str = str.slice(1);
    if (str[0] === ' ') {
      str = str.slice(1);
    }
  }

  // Check for valid area code: either (xxx) or xxx
  let areaCode;
  if (str[0] === '(') {
    if (str[4] !== ')') return false; // unmatched parentheses
    areaCode = str.slice(0, 5); // "(555)"
    str = str.slice(5); // remaining string
  } else {
    areaCode = str.slice(0, 3); // "555"
    if (!/^\d{3}$/.test(areaCode)) return false;
    str = str.slice(3);
  }

  // Check for optional separator (space or dash)
  if (str[0] === ' ' || str[0] === '-') {
    str = str.slice(1);
  }

  // Get next 3 digits
  const centralOfficeCode = str.slice(0, 3);
  if (!/^\d{3}$/.test(centralOfficeCode)) return false;
  str = str.slice(3);

  // Optional separator again
  if (str[0] === ' ' || str[0] === '-') {
    str = str.slice(1);
  }

  //Final 4 digits
  const lineNumber = str.slice(0, 4);
  if (!/^\d{4}$/.test(lineNumber)) return false;

  //Should be nothing left
  if (str.length !== 4) return false;

  return true;
}
  
