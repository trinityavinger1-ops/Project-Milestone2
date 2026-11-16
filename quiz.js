function submitQuiz() {
  let score = 0;
  let answer1 =document.getElementById("q1"). value;
  if (answer1.toLowerCase() === "HyperText Markup Language") {
    score++;
  }

let answer2 = document.querySelector("input [name="q2"]:checked");
  if answer2 && answer2.value ==== "1990")
  {
    score++;
  }
  document.getElementById("results").innerHTML = "Your score is +score "/2";
}

letanswer3 = 
