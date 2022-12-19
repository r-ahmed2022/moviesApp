
const main = document.getElementById("favorites");
const nomovies = document.getElementById("no-movies")
const movielist = JSON.parse(localStorage.getItem("wishList"))
console.log(movielist)
let apikey = '8dbfc7eb'

if(movielist.length === 0) {
   nomovies.style.visibility = "visible"
   nomovies.style.width = "auto"
   nomovies.style.height = "auto"
  // document.location.replace("index.html")

}

let movie_id;

const goWishList = () => {
   document.location.replace("index.html")
}

const removeMovie = (id) => {
   const updatedlist = movielist.filter((movie) => {
         return movie.imdbID != id
   })
  localStorage.setItem('wishList', JSON.stringify(updatedlist));
  window.location.reload();
}


const showWatchList = (movie) => {
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
  const removemovie = document.createElement('button')
  removemovie.setAttribute("id", "watch-btn")
  removemovie.addEventListener('click', () => {
       removeMovie(movie.imdbID)
  })

  removemovie.innerHTML = `<i class="small material-icons add">do_not_disturb_on</i>`
  moviefavorite.append(removemovie)
  ratingetc.appendChild(moviefavorite)
  const watchlist = document.createElement('li')
  const span = document.createElement('span')
  span.classList.add("add-watch")
  span.innerHTML = `Watchlist`
  watchlist.appendChild(span)
  ratingetc.appendChild(watchlist)
   main.appendChild(card)
}

movielist.forEach((element) => {
       showWatchList(element);
});