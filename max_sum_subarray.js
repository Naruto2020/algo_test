// Algorithme du sous-tableau maximum Informations de base(Maximum Subarray using javascript)
// permet de trouver et de retourner le sous-tableau dont la somme des élémént est la plus grande
// alogorithme de Kadane
var maxSum = (arr) => {
  // on stock les variables somme courante et somme max
  let n1 = 0; // somme courante
  let n2 = arr[0]; // somme max
  // boucle forEach pour executer les op sur chaques elt du tableau
  arr.forEach((i, n) => {
    n1 = Math.max(i, n1 + i);
    n2 = Math.max(n1, n2);
  });
  console.log(n2);
};
maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // retourne 6
