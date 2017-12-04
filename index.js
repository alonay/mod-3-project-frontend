document.addEventListener("DOMContentLoaded", function(){
     function getBooks(){
           fetch('')
             .then(res => res.json())
             .then(contestants => getContestants(contestants))
           }

let prediction = document.getElementById("prediction_input")
let predictions = document.getElementById("prediction_history")
let form_submission = document.getElementById("prediction_form")

prediction.addEventListener("click", (event) => {
  event.preventDefault()
  let input = document.getElementById("prediction_input")
  predictions.innerHTML += `<li>${input.value} at ${time.now}</li>`
}



getContestants()
