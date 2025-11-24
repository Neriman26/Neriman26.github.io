
function display(value) {
    document.getElementById("result").value += value;
    
    
}
function calculate() {
    let a =document.getElementById("result").value;
    const parts = a.split(/([+\-x/()])/).filter(x => x.trim() !== "");
    let s=0;
    if(parts[0]==='-' ){
        parts[1]=parts[0]+parts[1];
        parts.shift();
    }
    console.log(parts);
    s=parseFloat(parts[0]);
    for(let i=1;i<parts.length;i++){
        if(parts[i]==='+'){
            s=parseFloat(s)+parseFloat(parts[i+1]);
            document.getElementById("result").value=s;
        }
        else if(parts[i]==='-'){
            s=parseFloat(s)-parseFloat(parts[i+1]);
            document.getElementById("result").value=s;
        }
        else if(parts[i]==='x'){
            
            s=parseFloat(s)*parseFloat(parts[i+1]);
            document.getElementById("result").value=s;
        }
        else if(parts[i]==='/'){
            s=parseFloat(s)/parseFloat(parts[i+1]);
            document.getElementById("result").value=s;
        }   
        
    }
}
function clearDisply() {
    document.getElementById("result").value = "";
}
