document.addEventListener("DOMContentLoaded", function(){
    //  function getContestants(){
    //        fetch('')
    //          .then(res => res.json())
    //          .then(contestants => getContestants(contestants))
    //        }

let prediction = document.getElementById("prediction_input")
let predictions = document.getElementById("prediction_history")
let form_submission = document.getElementById("prediction_form")
//let button_submit = document.getElementById("button_submit")

document.getElementById("button_submit").addEventListener("click", ()=> {


  let input = document.getElementById("prediction_input")
  predictions.innerHTML += `<li>${input.value}</li>`
})
})


// getContestants()
