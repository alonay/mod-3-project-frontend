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

      let list_container = document.getElementById('list-container')


      ////IMAGE LOOP //////
      contestant_info.forEach( (contestant) => {
        let container = document.createElement('div')
        container.className = "image-container"

        let newImg = document.createElement('img')
        newImg.src = contestant.photo
        newImg.id = contestant.id
        newImg.className = "images"
        newImg.style = "width: 300px"
        container.appendChild(newImg)

        if (contestant.eliminated) {
          container.innerHTML += `
          <img class = "middle eliminated-image" src="http://www.fantasy4reality.com/assets/logos/eliminated_stamp-8e6698d1a0bed8314b145c434f335c910772897f88d7083278dc91aadf8ff34b.png">
          `
        } else {
          container.innerHTML += `
          <img class="middle eliminated-image" id=eliminated-photo-${contestant.id} style="top: 0%;" src="${contestant.photo}">

          `
        }
        list_container.appendChild(container)


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


      /////ELIMINATED LIST /////////
      let selectEliminatedInput = document.getElementById("eliminated_input")
      array_contestants.forEach(castMember => {
        selectEliminatedInput.innerHTML += `<option value="${castMember.id}">${castMember.name}</option>`
      })

      let eliminated_button_submit = document.getElementById('eliminated_button_submit')
      eliminated_button_submit.addEventListener("click", (event) => {
        let eliminated_input = document.getElementById('eliminated_input')

        fetch(`http://localhost:3000/cast_members/${eliminated_input.value}`, {
          method: "PUT",
          headers: {
          'Content-Type': "application/json",
    			'Accept': "application/json"
          },
          body: JSON.stringify({eliminated: true})
        })
          .then(result => result.json())
          .then(json => addStampToPhoto(json))
      })

      function addStampToPhoto(json) {
        let newImage = document.getElementById(`${json.id}`)
        let eliminated_image = document.getElementById(`eliminated-photo-${json.id}`)
        newImage.className = "images eliminated"
        eliminated_image.src = "http://www.fantasy4reality.com/assets/logos/eliminated_stamp-8e6698d1a0bed8314b145c434f335c910772897f88d7083278dc91aadf8ff34b.png"
      }
    }
      getContestants()
    })
