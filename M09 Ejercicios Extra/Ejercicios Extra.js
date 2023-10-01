/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const result = [];
   for (let key in objeto) {
      result.push([key, objeto[key]]);
   }
   return result;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const charCount = {};
   for (let char of string) {
      char = char.toLowerCase();
      if (/[a-z]/.test(char)) {
         charCount[char] = (charCount[char] || 0) + 1;
      }
   }
   return Object.keys(charCount)
      .sort()
      .reduce((acc, char) => {
         acc[char] = charCount[char];
         return acc;
      }, {});
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let upperCaseLetters = '';
   let lowerCaseLetters = '';

   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         upperCaseLetters += string[i];
      } else {
         lowerCaseLetters += string[i];
      }
   }

   return upperCaseLetters + lowerCaseLetters;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const words = frase.split(' ');
   const mirroredWords = words.map(word => {
      return word.split('').reverse().join('');
   });
   return mirroredWords.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicúa".
   // Caso contrario: "No es capicúa".
   // Tu código:
   const strNumero = numero.toString();
   const reversedStrNumero = strNumero.split('').reverse().join('');

   if (strNumero === reversedStrNumero) {
      return 'Es capicúa';
   } else {
      return 'No es capicúa';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[a-c]/g, '');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const intersection = [];
   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
         intersection.push(array1[i]);
      }
   }
   return intersection;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
