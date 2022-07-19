const base_url = "https://api.jikan.moe/v3";


function searchAnime(event)
{
    event.preventDefault();
    const form = new FormData(this);
    const query = form.get("search");

    // console.log(query);

    fetch(`${base_url}/search/anime?q=${query}&page=1`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.log(err.message));
}

function updateDom(data){

    const searchResult = document.getElementById('search-results');
    const animeByCat = data.results
    .reduce((acc , anime)=>{
        const {type} = anime;
        if(acc[type]===undefined) acc[type] = [];
        acc[type].push(anime);
        return acc;
    },{});

    searchResult.innerHTML = Object.keys(animeByCat).map(key=>{

        const animeHtml = animeByCat[key]
        .sort((a,b)=>a.episodes-b.episodes)
        .map(anime=>{
            return `
            <div class="card" style="width: 18rem;">
            <img src="${anime.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${anime.title}</h5>
                <p class="card-text">${anime.synopsis}</p>
            </div>
            <div class="card-body">
            <a href="${anime.url}" class="btn btn-primary">Find Out More</a>
            </div>
            </div>
            `
    }).join("");

        return `<seaction>
                <h3>${key.toUpperCase()}</h3>
                <div class="ind-row">${animeHtml}</div>
                </section>
        `

    }).join("");
    
    
}

function pageLoad(){

    const form = document.getElementById('search_form');
    form.addEventListener("submit" , searchAnime );


}

window.addEventListener("load" , pageLoad);