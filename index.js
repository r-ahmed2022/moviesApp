const main = document.getElementById("movielist");
let apikey = '8dbfc7eb'
const query = document.getElementById("search")
let favorites = null
let movies = JSON.parse(localStorage.getItem("watchList")) || []
window.addToWatch = (data) => {
   let id = Math.floor(Math.random() * 800 ) + 1;
    movies.push(
      {
      movie_id: id,
      movie: data,
      }  
   )
   localStorage.setItem('watchList', JSON.stringify(movies))
   window.location.reload();
}


document.addEventListener('DOMContentLoaded', () => {

document.getElementById("searchbar").addEventListener('submit',  async (e) => {
    e.preventDefault();
    query.value === '' ? M.toast({html: 'Enter Movie name', classes: 'rounded'}) : await fetch(`https://www.omdbapi.com/?apikey=${apikey}&t=${query.value}`)
    .then(response => {
         return response.json() 
        })
    .then(data => {
         favorites = data;
         data.Title === undefined  ?  M.toast({html: JSON.stringify(data.Error)} ) :
          main.innerHTML = `
          <div class="card">
             <div class="poster"><img class="img" src="${data.Poster}" /></div>
             <div id="movie-info">
                <div id="info">
                    <div id="title-div">
                      <h2 id="title">${data.Title}</h2> 
                      <span class="fa fa-star checked rating"></span>
                      <span class="rating">${data.imdbRating} </span>
                    </div>
                    <ul id="rating-etc">
                            <li class="rating-info">${data.Runtime}</li>
                            <li class="rating-info">${data.Genre}</li>
                            <li class="rating-info add">
                                <button type="button" id="watch-btn"
                                 onclick="addToWatch(favorites)"> 
                                    <i class="small material-icons add">add_circle</i>
                                </button>
                           </li>
                    </ul>
                </div>
                <div id="description">
                  <p class="movie-description">${data.Plot}</p>
                </div>
             </div>
          </div>
         `
      query.value = ''
      // return data
    })
    .catch(err => console.log(err))
   
})



})





