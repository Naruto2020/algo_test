/*Nous allons donc essayer de craquer ce qu’on appelle le ROT13 (ou Rotate By 13 Places). L’idée est de décaler chacune des lettres de l’alphabet de 13 places. Autrement dit, le H devient le U, le E devient le R, etc. */
var transformToRot13 = (StringToTransform) => {
  // stocker la chaine de carractère dans une variable
  var str = StringToTransform;
  // découper la chaine dans un tableau
  str.split("");
  // trouver les codes caractères des lettres situées entre 65 et 98 (caractère speciaux inclus) avec charCodeAt()
  str.split("").map((char) => {
    const code = char.charCodeAt(char);
    // conditions d'affichage des codes caratères des lettres u!]65, 90[ avec String.fromcharCode()
    if (code < 65 || code > 90) {
      console.log(String.fromCharCode(code));
      // le caractère médian étant n avec pour code 78
      // si code caractère < 78 (code += 13) ou si code caractère > 78 (code -= 13)
    } else if (code < 78) {
      console.log(String.fromCharCode(code + 13));
    } else if (code > 78) {
      console.log(String.fromCharCode(code - 13));
    }
  });
};

//transformToRot13('URYYB JBEYQ'); // HELLO WORLD
//transformToRot13('BCRAPYNFFEBBZF'); // OPENCLASSROOMS
transformToRot13("PRPV RFG ZBA PBQR FRPERG"); // CECI EST MON CODE SECRET
