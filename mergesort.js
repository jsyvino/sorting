function split(wholeArray){
    
    let i = Math.ceil(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0,i);
    let secondHalf = wholeArray.slice(i);

    return [firstHalf, secondHalf];
}

function merge(arr1,arr2){
    let outputarr = [];
    //console.log(outputarr);
    let temp1 = arr1[0];
    let temp2 = arr2[0];
    while(arr1.length>0||arr2.length>0){
        //console.log('temp1 ', temp1,' temp2 ',temp2,' outputarr ',outputarr);
        if(temp1>temp2){
            outputarr.push(temp2);
            arr2.shift()
            temp2 = arr2[0];
        }
        else{
            outputarr.push(temp1);
            arr1.shift();
            temp1 = arr1[0];
        }
    }
    if(arr1.length){
        outputarr.concat(arr1);
    }
    else{
        outputarr.concat(arr2);
    }


    return outputarr;
}

function mergeSort(arr){
    let outputarr2 = [];
    let temp = [];
    let output = [];
    if(arr.length>1){

        temp = split(arr);
       // console.log('split ',temp);
        outputarr2 = merge(mergeSort(temp[0]),mergeSort(temp[1]));
        console.log('output of mergesort ',mergeSort(temp[0]));
        
    }

    else{
       return arr;
    }
    console.log('output ',outputarr2);

    return outputarr2;
}