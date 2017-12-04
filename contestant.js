document.addEventListener("DOMContentLoaded", function(){
  function getContestants(){
    fetch('http://localhost:3000/cast_members')
    	.then(res => res.json())
    	.then(contestant_info => displayContestants(contestant_info))
    }

    function displayContestants(contestant_info) {
      let p = document.getElementById(details); //UPDATE 'DETAILS' W NEW HTML
      contestant_info.forEach(function(contestant) {
        p.innerText = `contestant.name`
      })
    }

})
