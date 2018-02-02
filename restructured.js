document.addEventListener("DOMContentLoaded", function(){

  function getContestants(){
    fetch('http://localhost:3000/cast_members')
    	.then(res => res.json())
    	.then(contestant_info => displayContestants(contestant_info))
    }

    function displayContestants(contestant_info) {
// contestant_info = [contestant_info[0]]

      console.log(contestant_info)
      var array_contestants = contestant_info.filter(function(el) {
          return el.eliminated === false;
      })

      let list_container = document.getElementById('list_container')
      let cast_list = document.getElementById('cast_list')



      ////IMAGE LOOP //////
      contestant_info.forEach( (contestant) => {
        let image_div = document.createElement('div')
        image_div.dataset.id = contestant.id
        image_div.className = "images"
        image_div.style = "width: 300px"
        let newImg = document.createElement('img')
        newImg.src = contestant.photo
        // newImg.id = contestant.id
        image_div.appendChild(newImg)
        let overlay = document.createElement('div')
        overlay.className = "eliminated_overlay"
        image_div.appendChild(overlay)
        cast_list.appendChild(image_div)



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

        let image_elements = document.querySelectorAll("div.images")
        image_elements.forEach(element => {
          let found = array_contestants_eliminated.find(contestant => contestant.id === parseInt(element.dataset.id))
          if (found) {
            element.className = "images eliminated"
            let eliminated_div = document.createElement('div')
            eliminated_div.height = "300px";
            eliminated_div.width = "300px";
            eliminated_div.style.backgroundColor = "red"
            eliminated_div.style.position = "absolute"
            eliminated_div.style.top = "0"
            eliminated_div.style.left = "0"
            cast_list.appendChild(eliminated_div)

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
