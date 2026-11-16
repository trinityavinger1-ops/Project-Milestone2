function submitQuiz() {
  let score = 0;
  let q1 =document.getElementById("q1"). value;
  if (answer1.toLowerCase() === "HyperText Markup Language") {
    score++;
  }

let q2= document.getElementById("q2").value.toLowerCase();
  if (q2 === "Dave Raggett") {
    score++;
  }

let q3 = document.querySelector("input [name="q3"]:checked");
  if answer3 && answer3.value ==== "A")
  {
    score++;
  }
  
  document.getElementById("results").innerHTML = <h3>Your Score:
  ${score} /3 </h3>;
}


let secondsLeft = 600;
let timer = setInterval(function () {

    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;

    document.getElementById("timer").textContent =
        `Time Remaining: ${minutes}:${seconds
            .toString()
            .padStart(2, "0")}`;
    secondsLeft--;
    if (secondsLeft < 0) {
        clearInterval(timer);
        submitQuiz();
    }

}, 1000);
