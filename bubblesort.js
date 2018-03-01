function bubbleSort(arr){
    for(let n=0; n<arr.length-1; n++){
        for(let i=0; i<arr.length-1-n; i++){
            if(comps(arr[i], arr[i+1])){
                arr= swaps(arr, i);
            }
        } 
    }
    return arr;
}

function comps(a, b){
    return(a>b);
};

function swaps(arr1, j){
    let temp= arr1[j];
    arr1[j]= arr1[j+1];
    arr1[j+1]=temp;
    return arr1;
}