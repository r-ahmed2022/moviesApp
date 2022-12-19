
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
  M.toast({html: 'Movie deleted from WatchList'})
  localStorage.setItem('wishList', JSON.stringify(updatedlist));
  location.reload()
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
   rating.innerHTML = `<span class="fa fa-star checked"> </span>${movie.imdbRating} / 10`
   titlediv.appendChild(rating)
   titlediv.appendChild(rating)
   movieinfo.appendChild(titlediv)
   const ratingetc = document.createElement('ul')
   ratingetc.setAttribute("id", "rating-etc")
   movieinfo.appendChild(ratingetc)
  const movieid = document.createElement('li')
  movieid.classList.add("rating-info")
  movieid.innerHTML = `<b>ID: </b>${movie.Runtime}`
  ratingetc.appendChild(movieid)
  const movietype = document.createElement('li')
  movietype.classList.add("rating-info")
  movietype.innerHTML = `<b>Type:</b> ${movie.Genre}`
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
  span.innerHTML = `Remove`
  watchlist.appendChild(span)
  ratingetc.appendChild(watchlist)
  const director = document.createElement('ul')
  const directorinfo= document.createElement('li')
  directorinfo.classList.add("rating-info")
  directorinfo.innerHTML = `<b>Director: </b>${movie.Director}`
  director.innerHTML = `Date: - <li class="rating-info">${movie.Released}</li>
                        Rated : - <li class="rating-info">${movie.Rated}</li>`
  director.appendChild(directorinfo)
  director.setAttribute("class", "detail")
  movieinfo.appendChild(director)
  const desc = document.createElement('div')
  desc.setAttribute("id", "description")
   const description = document.createElement('p') 
   description.innerHTML = `${movie.Plot}`
   desc.appendChild(description)
   movieinfo.append(desc) 
   main.appendChild(card)
}

movielist.forEach((element) => {
       showWatchList(element);
});