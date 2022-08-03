function myJ(){
    let pk=document.getElementById('number').value;
    let result;
    document.getElementById('name').innerHTML="";
    for(let index=1; index<=10; index++){
         result=pk+ "x"+index+ "="+pk*index;
        shoresult="<h1>"+result+"</h1>";
     document.getElementById('name').innerHTML+=shoresult;}
    }

