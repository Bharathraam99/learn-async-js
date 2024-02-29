function sum2DArray(arr, index) {
  return new Promise((resolve, reject) => {
    if (arr.length > index) {
      setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[index][i];
        }
        resolve(sum);
      }, 0);
    } else {
      reject("BAD INPUT: Expected array as input");
    }
  });
}
async function main() {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log("Begin main ... ");
  try {
    const productName1 = sum2DArray(arr, 0);
    const productName2 = sum2DArray(arr, 1);
    const productName3 = sum2DArray(arr, 2);
    const rowSums = await Promise.all([productName1, productName2, productName3]);
    let tot = 0;
    rowSums.forEach((row) => {
      tot += row;
    });
    console.log("SUM : " + tot);
  } catch (err) {
    console.log(`Failure: ${err.message}`);
  }
}
main();
console.log("End main thread");
