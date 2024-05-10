// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

let numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let oneNumber of numberArray){
  let ordinaryEnding: string;
  if (oneNumber === 1){
      ordinaryEnding = "st";
   }
   else if(oneNumber === 2){
      ordinaryEnding = "nd";
   }
   else {
      ordinaryEnding = "th";
   }
   console.log(` ${oneNumber} ${ordinaryEnding}`)
}
