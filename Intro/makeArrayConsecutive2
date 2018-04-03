// sorting and filling in the missing numbers of an array

function makeArrayConsecutive2(statues) {
    
    statues.sort((a,b)=> {
        return a-b;
    });
    
    var count = 0;
    
    for(var i = statues[0]; i < statues[statues.length-1]; i++) {
        
        if(statues.indexOf(i) === -1) {
            count++;
        }
    }
    
    return count;

}
