/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let main = document.querySelector(".resultlist")
let search = document.querySelector(".searchBar")
let url = "https://itunes.apple.com/search?term="
// 2. Create your `submit` event for getting the user's search term
search.addEventListener('keyup', function(e){
// 3. Create your `fetch` request that is called after a submission
	let term = search.value

	fetch(url+term)
		.then(
	   
	      function(response) {
	        if (response.status !== 200) {
	          console.log(response.status)
	          return
	        }
// 4. Create a way to append the fetch results to your page

			response.json().then(function(data) {
				let htmlstr = ``
				console.log(data)
// 5. Create a way to listen for a click that will play the song in the audio play
			



			})
			}
		)



})