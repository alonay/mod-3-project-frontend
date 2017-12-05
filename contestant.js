document.addEventListener("DOMContentLoaded", function(){
  function getContestants(){
    fetch('http://localhost:3000/cast_members')
    	.then(res => res.json())
    	.then(contestant_info => displayContestants(contestant_info))
    }

    function displayContestants(contestant_info) {
      let details_container = document.getElementById("details");
      contestant_info.forEach(contestant => {
        details_container.innerHTML += `<li>${contestant.name}</li>`
      })
    }

    getContestants()
    // function displayContestants(contestant_info) {
    //   debugger;
    //   let details_container = document.getElementById("details");
    //   contestant_info.forEach(contestant => {
    //     details_container.innerText = `<h2>${contestant.name}</h2>`
    //   })
    // }
})
