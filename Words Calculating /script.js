function calculate(){
    let words=String(document.getElementById("words").value);
    let result = document.getElementById("result");
    let warray = words.split(" ");
    let count= warray.length;
    result.innerHTML=`${count} words`;
}
