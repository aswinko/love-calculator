
function calculateLove() {

    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;

    if(input1 == ""){
        alert('Please enter your name');
       }else if (input1.length <=2 ) {
        alert('Min lenght is 3')
       }else if(!isNaN(input1)){
        alert('Numbers are not allowed');
       }
     
       else if(input2 == ""){
        alert('Please enter your love name');
       }else if (input2.length <=2 ) {
        alert('Min lenght is 3')
       }else if(!isNaN(input2)){
        alert('Numbers are not allowed');
       }
       else{
        var loveScore = Math.floor(Math.random() * 100) + 1;
        document.getElementById("myAnchor").setAttribute("href", "result.html");
        document.getElementById('output').innerHTML = loveScore + "%";
       }
       
      }


