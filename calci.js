<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"> </script>
$(document).ready(function(){
    var count = -1;
    var string = "";
    var op = 0;
    var ans = 0;
    $("button").click(function(){
        if($(this).val() == '+' || '*' || '/' || '-'){
            op = count + 1;
            count = count + 1;
            string = string.concat($(this).val());
            document.getElementById("output").innerHTML = document.getElementById("output").append($(this).val());
        }
        else if($(this).val() != '=')
        {
            document.getElementById("output").innerHTML = document.getElementById("output").append($(this).val());
            string = string.concat($(this).val());
            count = count + 1;
        }
        // alert(value);
        // var a = parseInt(value, 10);
        else{
            switch(string.substr(op,op+1)){
                case '+': ans = parseInt(string.substr(0,op), 10) + parseInt(string.substr(op+1), 10);
                case '*': ans = parseInt(string.substr(0,op), 10) * parseInt(string.substr(op+1), 10);
                case '/': ans = parseInt(string.substr(0,op), 10) / parseInt(string.substr(op+1), 10);
                case '-': ans = parseInt(string.substr(0,op), 10) - parseInt(string.substr(op+1), 10);
            }
            document.getElementById("output").innerHTML = ans;
            string = ans.toString();
        }

    });
});
