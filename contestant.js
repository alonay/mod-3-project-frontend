document.addEventListener("DOMContentLoaded", function(){

  function getContestants(){
    fetch('http://localhost:3000/cast_members')
    	.then(res => res.json())
    	.then(contestant_info => displayContestants(contestant_info))
    }

    function displayContestants(contestant_info) {

      // console.log(contestant_info.filter(contestant_info.eliminated === true))
      var array_contestants = contestant_info.filter(function(el) {
          return el.eliminated === false;
      })

      let list_container = document.getElementById('list_container')



      ////IMAGE LOOP //////
      contestant_info.forEach( (contestant) => {
        let newImg = document.createElement('img')
        newImg.src = contestant.photo
        newImg.className = "images"
        newImg.style = "width: 300px"
        document.body.appendChild(newImg)

        })

        let array_contestants_eliminated = contestant_info.filter(function (element) {
          return element.eliminated === true
          console.log(array_contestants_eliminated)
        })


        /////CONTESTANT CLICKED INFO///////////
        let about = document.getElementById('about')
        newImg.addEventListener("click", (event) => {
          let info = document.createElement('li')
          info.innerText = `${contestant.name} is ${contestant.age} years old and from ${contestant.hometown}.`
          about.appendChild(info)
        })

      })

      /////ELIMINATED LIST /////////
      let selectEliminatedInput = document.getElementById("eliminated_input")
      array_contestants.forEach(castMember => {
        selectEliminatedInput.innerHTML += `<option value="${castMember.id}">${castMember.name}</option>`
      })
    }


  getContestants()
})
