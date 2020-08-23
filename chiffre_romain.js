/* Dans ce premier test, je vais vous demander de créer une fonction appelé parseToRoman qui, pour un nombre donné, va retourner sa valeur en chiffres romains.*/
var parseToRoman = function (number) {
  // les variables tableaux décimal et chifRomain décroissant
  const decimal = [1000, 500, 100, 50, 10, 5, 1];
  const chifRomain = ["M", "D", "C", "L", "X", "V", "I"];
  let result = "";
  // boucle sur le tableau decimal pour la correspondance avec le tableau chifRomain
  for (let i = 0; i < decimal.length; i++) {
    // condition avec modulo pour recupérer le numéro et convertir en chiffre romain
    while (number % decimal[i] < number) {
      result += chifRomain[i]; // recupération du resultat
      number -= decimal[i]; // on retranche le nombre decimal du number et le reste est aussi soumis au modulo
      console.log(chifRomain[i]);
    }
  }
};

parseToRoman(4); // === "IV"
//parseToRoman(37); // === "XXXVII"
//parseToRoman(143); // === "CXLIII"
//parseToRoman(1234); // === "MCCXXXIV"
