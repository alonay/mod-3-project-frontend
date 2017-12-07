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
        newImg.id = contestant.id
        newImg.className = "images"
        newImg.style = "width: 300px"
        document.body.appendChild(newImg)



        /////CONTESTANT CLICKED INFO///////////

        let about = document.getElementById('about')
        newImg.addEventListener("click", (event) => {
          let info = document.createElement('li')
          info.innerText = `${contestant.name} is ${contestant.age} years old and from ${contestant.hometown}.`
          about.appendChild(info)
        })
        })

        let array_contestants_eliminated = contestant_info.filter(function (element) {
          return element.eliminated === true;
        })

        let image_elements = document.querySelectorAll("img.images")
        image_elements.forEach(element => {
          let found = array_contestants_eliminated.find(contestant => contestant.id === parseInt(element.id))
          if (found) {
            element.className = "images eliminated"
          }
        })
        // array_contestants_eliminated.forEach( (eliminated_cont) => {
        //   eliminated_cont.className = "images eliminate"
        // })

      /////ELIMINATED LIST /////////
      let selectEliminatedInput = document.getElementById("eliminated_input")
      array_contestants.forEach(castMember => {
        selectEliminatedInput.innerHTML += `<option value="${castMember.id}">${castMember.name}</option>`
      })
    }
      getContestants()
    })
