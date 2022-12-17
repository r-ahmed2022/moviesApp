
const main = document.getElementById("favorites");

const movielist = JSON.parse(localStorage.getItem("watchList"))

window.removeMovie = (id) => {
   const updatedlist = movielist.filter((movie) => {
         return movie.movie_id != id
   })
  localStorage.setItem('watchList', JSON.stringify(updatedlist));
  window.location.reload();
}

movielist.forEach((element) => {
    let id = element.movie_id;
    console.log(id)
    main.innerHTML += `
    <div class="card">
       <div class="poster"><img class="img" src="${element.movie.Poster}" /></div>
       <div id="movie-info">
          <div id="info">
              <div id="title-div">
                <h2 id="title">${element.movie.Title}</h2> 
                <span class="fa fa-star checked rating"></span>
                <span class="rating">${element.movie.imdbRating} </span>
              </div>
              <ul id="rating-etc">
                      <li class="rating-info">${element.movie.Runtime}</li>
                      <li class="rating-info">${element.movie.Genre}</li>
                      <li class="rating-info add">
                          <button type="button" id="watch-btn"
                           onclick="removeMovie(${id})"> 
                              <i class="small material-icons add">do_not_disturb_on</i>
                          </button>
                     </li>
              </ul>
          </div>
          <div id="description">
            <p class="movie-description">${element.movie.Plot}</p>
          </div>
       </div>
    </div>  
   `
});