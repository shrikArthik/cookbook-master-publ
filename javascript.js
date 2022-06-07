function texu(){
    var elm = parseInt(document.getElementById("tex").value);
    if(isNaN(elm)){
        alert("Enter a valid amount");
    }
    else{
        window.confirm("Are you sure to donate!");
    }   
}