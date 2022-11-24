const matrix = [
    [0, 1, 2, 3],
    [11, 12, 13, 4],
    [10, 15, 14, 5],
    [9, 8, 7, 6],
  ];

const walkMatrix = matrix => {
    const result = [];
  
    // Initialize the upper and lower bounds indexes
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;
    let startRow = 0;
    let endRow = rowCount - 1;
    let startColumn = 0;
    let endColumn = columnCount - 1;
  

    while (endRow >= startRow && endColumn >= startColumn) {
      for (let column = startColumn; column <= endColumn; column++) {
        result.push(matrix[startRow][column]);
      }
      startRow++;
      for (let row = startRow; row <= endRow; row++) {
        result.push(matrix[row][endColumn]);
      }
      endColumn--;
      if (endRow >= startRow) {
        for (let column = endColumn; column >= startColumn; column--) {
          result.push(matrix[endRow][column]);
        }
      }
      endRow--;
      if (endColumn >= startColumn) {
        for (let row = endRow; row >= startRow; row--) {
          result.push(matrix[row][startColumn]);
        }
      }
      startColumn++;
    }
    return result;
  };

  console.log(walkMatrix(matrix))

````````

const matrix1 = [
    [1,2,3,4],
    [2,3,4,5],
    [4,5,6,7],
    [5,6,7,8]
]

const walkMatrix1 = matrix => {
    const result1 = [];
    const rowCount1 = matrix.length;
    const columnCount1 =  matrix[0].length;
    let startRow1 = 0;
    let endRow1 = rowCount1 - 1;
    let startColumn1 = 0;
    let endColumn1 = columnCount1 - 1;

    while (endRow1 >= startRow1 && endColumn1 >= startColumn1){
        for (let column = startColumn1; column <= endColumn1; column++) {
            result1.push(matrix[startColumn1][column]);
        }
        for (let row = startRow1; row <= endRow1; row++) {
            result1.push(matrix[startColumn1][row]);
        }
        for (let column = endColumn1; column <= endColumn1; column++) {
            result1.push(matrix[startColumn1][column]);
        }
    }

}