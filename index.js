const main = document.getElementById("movielist");
let apikey = '8dbfc7eb'
const query = document.getElementById("search")
let favorites = null;
let movies = JSON.parse(localStorage.getItem("wishList")) || []
window.addToWatch = (data) => {
      
}

const addMovie = (movie) => {
   const card = document.createElement('div')
   card.classList.add("card")
   const poster = document.createElement('div')
   poster.classList.add("poster")
   const img = document.createElement('img')
   img.classList.add("img")
   img.setAttribute("src", `${movie.Poster}` )
   poster.appendChild(img)
   poster.appendChild(img)
   card.appendChild(poster);
   const movieinfo = document.createElement('div')
   movieinfo.setAttribute("id","movie-info")
   card.appendChild(movieinfo)
   const titlediv = document.createElement('div')
   titlediv.setAttribute("id", "title-div")
   const title = document.createElement('h2')
   title.setAttribute("id", "title")
   title.innerHTML = `${movie.Title}`
   titlediv.appendChild(title)
   const rating = document.createElement('span')
   rating.setAttribute("id", "rating")
   rating.innerHTML = `${movie.Year}`
   titlediv.appendChild(rating)
   movieinfo.appendChild(titlediv)
   const ratingetc = document.createElement('ul')
   ratingetc.setAttribute("id", "rating-etc")
   movieinfo.appendChild(ratingetc)
  const movieid = document.createElement('li')
  movieid.classList.add("rating-info")
  movieid.innerHTML = `<b>ID: </b>${movie.imdbID}`
  ratingetc.appendChild(movieid)
  const movietype = document.createElement('li')
  movietype.classList.add("rating-info")
  movietype.innerHTML = `<b>Type:</b> ${movie.Type}`
  ratingetc.appendChild(movietype)
  const moviefavorite = document.createElement('li')
  moviefavorite.classList.add("rating-info")
  moviefavorite.classList.add("add")
  const addmovie = document.createElement('button')
  addmovie.setAttribute("id", "watch-btn")
  addmovie.addEventListener('click', async () => {
   await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${movie.imdbID}`)
   .then(response => response.json())
   .then(data => {
       movies.push(data)
       localStorage.setItem('wishList', JSON.stringify(movies))
       M.toast({html: 'Movie added to Watchlist'} )
   })
   .catch(err => console.log(err))
  })
  addmovie.innerHTML = `<i class="small material-icons add">add_circle</i>`
  moviefavorite.append(addmovie)
  ratingetc.appendChild(moviefavorite)
  const watchlist = document.createElement('li')
  const span = document.createElement('span')
  span.classList.add("add-watch")
  span.innerHTML = `Watchlist`
  watchlist.appendChild(span)
  ratingetc.appendChild(watchlist)
   main.appendChild(card)
}


document.getElementById("searchbar").addEventListener('submit',  async (e) => {
    e.preventDefault();
    main.innerHTML = ''
    query.value === '' ? M.toast({html: 'Enter Movie name', classes: 'rounded'}) : 
    await fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${query.value}`)
    .then(response => {
         return response.json() 
        })
    .then(data => {
              data.Error  ?  M.toast({html: JSON.stringify(data.Error)} ) :
             data.Search.map((movie) => { 
            addMovie(movie)         
              })
            

      query.value = ''
        
   
    }).catch(err => console.log(err))
   
   
})


