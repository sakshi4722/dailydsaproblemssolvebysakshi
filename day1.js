n = 5;
var arr = [15, 2, 5, 12, 7]
 function valueEqualToIndex(arr,n){
    let result= [];
    for (let i=0; i<n; i++){
        if (arr [i]== i+1)
        result.push(arr[i]);
        
    }
    return result
} console.log(valueEqualToIndex(arr,n))