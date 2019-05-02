function myfunction() {

    var Side1 = parseInt(document.getElementById('Side1').value);
    var Side2 = parseInt(document.getElementById('Side2').value);
    var Side3 = parseInt(document.getElementById('Side3').value);

    if (Side1 <= 0 || Side2 <= 0 || Side3 <= 0) {
        document.getElementById("result").innerText = "INVALID INPUT!";
    }
  else  if(Side1 + Side2<=Side3 || Side3+Side1<=Side2 || Side2 + Side3<=Side1){
            document.getElementById("result").innerText="NOT A TRIANGLE!";
         }

  else if (Side1 === Side2 ===Side3) {
          document.getElementById('result').innerHTML = "THIS IS AN EQUILATERAL TRIANGLE";
    }
    else if (Side2 == Side1 && Side1 !==Side3 || Side2 == Side3 && Side1 !==Side3 || Side3 == Side1 && Side2 !==Side3) {
          document.getElementById('result').innerHTML = "THIS IS AN ISOSCELES TRIANGLE";
    }
    else if (Side1**2 + Side3**2 === Side2**2){
        text = document.getElementById('result').innerHTML = "This is a right-angled triangle.";
    }
    else {
        text = document.getElementById('result').innerHTML = "This is a scalene triangle.";
    }
}

