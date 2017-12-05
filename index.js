
function getCastMembersAndPredictions() {
  fetch('http://localhost:3000/shows')
  .then(response => response.json())
  .then(json => {
    let predictionList = document.getElementById("prediction_history")
    const castMembers = json.cast_members
    const predictions = json.predictions

    predictions.forEach(prediction => {
      const name = castMembers[prediction.cast_member_id - 1].name
      predictionList.innerHTML += `<li>${name} ${new Date()}</li>`
    })

    let selectInput = document.getElementById("prediction_input")
    castMembers.forEach(castMember => {
      selectInput.innerHTML += `<option value="${castMember.id}">${castMember.name}</option>`

    })
  })
}

document.addEventListener("DOMContentLoaded", function(){
  getCastMembersAndPredictions()
  let predictions = document.getElementById("prediction_history")
  let selectInputPerdiction = document.getElementById("prediction_input")

  document.getElementById("button_submit").addEventListener("click", () => {
    let object = {
  		method: "POST",
  		headers: {
  			'Content-Type': "application/json",
  			'Accept': "application/json"
  		},
  		body: JSON.stringify({
        cast_member_id: selectInputPerdiction.value,
      })
  	}

  	fetch("http://localhost:3000/predictions", object)
  	.then(response => response.json())
  	.then(json => {
      const name = json.cast_member.name
      predictions.innerHTML += `<li>${name} at ${new Date()}</li>`
    })
  })
})
