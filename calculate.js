function calculate()
{
    
    var rate_value;
    var value=document.getElementById("members").value;
        // $("input[type='radio'][name='indian']:checked").val();
    // $("input[type='radio'][name='italian']:checked").val();
    // $("input[type='radio'][name='chinese']:checked").val();
    // $("input[type='radio'][name='mexican']:checked").val();
    if (document.getElementById('indian').checked) {
  rate_value = document.getElementById('indian').value;
}
else if(document.getElementById('italian').checked){
rate_value = document.getElementById('italian').value;
}
else if(document.getElementById('chinese').checked){
rate_value = document.getElementById('chinese').value;
}
else if(document.getElementById('mexican').checked){
rate_value = document.getElementById('mexican').value;
}
window.alert("Your Final amount will be : $"+(value*rate_value));
//document.getElementById("answer").innerHTML = (value*rate_value);

}

