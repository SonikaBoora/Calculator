function display(value){
    document.getElementById("displayField").value+=value;
}
function  displayClear(){
    document.getElementById("displayField").value='';
}
function displayResult(){
    try{
        document.getElementById("displayField").value=eval(document.getElementById('displayField').value);
    }
    catch(error){
        document.getElementById('displayField').value='error';
    }
}