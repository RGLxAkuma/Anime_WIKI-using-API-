const base_url = "https://api.jikan.moe/v4";


function searchAnime(event)
{
    event.preventDefault();
    const form = new FormData(this);
    const query = form.get("search");

    // console.log(query);

   

    fetch(`${base_url}/anime?q=${query}&page=1`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.log(err.message));
}

function updateDom(data){

    const searchResult = document.getElementById('search-results');
    // console.log(data);
    const animeByCat = data.data
    .reduce((acc , anime)=>{
        const {type} = anime;
        if(acc[type]===undefined) acc[type] = [];
        acc[type].push(anime);
        return acc;
    },{});

    // console.log(animeByCat);

    searchResult.innerHTML = Object.keys(animeByCat).map(key=>{

        const animeHtml = animeByCat[key]
        .sort((a,b)=>a.episodes-b.episodes)
        .map(anime=>{
            return `
            <div class="card" style="width: 18rem;">
            <img src="${anime.images.jpg.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${anime.title}</h5>
                <p class="card-text" id="syno" maxlength="10">${anime.synopsis}</p>
            </div>
            <div class="card-body1">
            <a href="page.html?${anime.mal_id}" class="btn btn-primary">Find Out More</a>
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