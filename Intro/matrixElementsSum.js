// finding the sum of elements in a matrix

function matrixElementsSum(matrix) {
    
    var total = 0;
    var banned = [];
    
    for(i = 0; i < matrix.length; i++) {
        for(j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                banned.push(j);
            }else if(banned.indexOf(j)=== -1) {
                total += matrix[i][j];
                
            }
        }
    }
    return total;

}
