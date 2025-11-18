function display(value) {
    document.getElementById("result").value += value;
    
}
function calculate() {
    let a =document.getElementById("result").value;
    if(a.includes('+')){
        let b = a.split('+');
        document.getElementById("result").value = parseFloat(b[0]) + parseFloat(b[1]);
    }
    else if(a.includes('-')){
        let b = a.split('-');
        document.getElementById("result").value = parseFloat(b[0]) - parseFloat(b[1]);
    }
    else if(a.includes('*')){
        let b = a.split('*');
        document.getElementById("result").value = parseFloat(b[0]) * parseFloat(b[1]);
    }
    else if(a.includes('/')){
        let b = a.split('/');
        document.getElementById("result").value = parseFloat(b[0]) / parseFloat(b[1]);
    }
    

}

function clearDisply() {
    document.getElementById("result").value = "";
}