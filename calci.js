"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
$(document).ready(function(){
    var string = "";
    var ans = 0.0;
    $("button").click(function(){
        if($(this).val() == 'C'){
            document.getElementById("output").innerHTML = ''
            string = '';
        }
        else if($(this).val() == 'del') {
            document.getElementById("output").innerHTML = string.substr(0, (string.length)-1);
            string = string.substr(0, (string.length)-1);
        }
        else if($(this).val() != '=')
        {
            document.getElementById("output").append($(this).val());
            string = string.concat($(this).val());
        }
        // alert(value);
        // var a = parseInt(value, 10);
        else{
            ans = eval(string);
            document.getElementById("output").innerHTML = ans.toString();
            string = ans.toString();
        }

    });
});
