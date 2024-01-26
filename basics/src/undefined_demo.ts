let lucky_num;
let array = ["one", "two", "three", lucky_num, "nine"]

for (let i=0;i<array.length;i++){
    CheckAndPrintElement(array[i])
}

function CheckAndPrintElement(i: string | undefined){
    if (i == undefined){
        console.log("Invalid array element")
    }
    else{
        console.log(`valid element: ${i}`)
    }
}

