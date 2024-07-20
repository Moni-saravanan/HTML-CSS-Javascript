function convert(){
    let cm=Number(document.getElementById("cm").value)
    let result=document.getElementById("result")
    let inch=cm/2.54
    result.innerHTML=inch.toFixed(2)
}
