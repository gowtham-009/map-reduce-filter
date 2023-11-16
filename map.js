function map_method(){
    let len=Number(prompt("enter a length:"))
    let arr=[]
    for(let i=0; i<len; i++){
        let val=Number(prompt("enter a number:"))
        arr.push(val)
    }
   document.getElementById('arr').innerHTML="Orginal Array:"+arr
   let arra=arr.map(x=>x**3)
   document.getElementById('marr').innerHTML="map using Array:"+arra
}

function filter_method(){
    let len=Number(prompt("enter a length:"))
    let arr=[]
    for(let i=0; i<len; i++){
        let val=Number(prompt("enter a number:"))
        arr.push(val)
    }
   document.getElementById('farrs').innerHTML="Orginal Array:"+arr
   let arra=arr.filter(x=>x<100)
   document.getElementById('farr').innerHTML="Filter using Array:"+arra
}
function reduced_method(){
    let len=Number(prompt("enter a length:"))
    let arr=[]
    for(let i=0; i<len; i++){
        let val=Number(prompt("enter a number:"))
        arr.push(val)
    }
   document.getElementById('arrsr').innerHTML="Orginal Array:"+arr
   let arrr=arr.reduce((tot, ar)=>tot+ar)
   document.getElementById('arrr').innerHTML="Filter using Array:"+arrr
}