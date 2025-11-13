function isOldEnoughToDrinkAndDrive(edad) {
  // En Estados Unidos (y en la mayoría de los lugares), aunque una persona 
  // tenga la edad legal para beber (21 años) y para conducir, la ley prohíbe
  // conducir después de consumir alcohol (Leyes DUI/DWI).
  // Por lo tanto, nunca es legal combinar ambas actividades.
  return false;
}

let output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false

let output2 = isOldEnoughToDrinkAndDrive(35);
console.log(output2); // --> false