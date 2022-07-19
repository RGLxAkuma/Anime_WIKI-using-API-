const base_url = "https://api.jikan.moe/v3";

const animeId = location.search.substring(1);

fetch(`https://api.jikan.moe/v3/anime/${animeId}`)
.then(res=>res.json())
.then(getInfo)
.catch(err=>console.log(err.message));


function getInfo(data)
{
    console.log(data);
    const title = document.querySelector('#tlt');
    title.innerHTML = `${data.title}`;
    const image = document.querySelector('#anm_img');
    image.innerHTML = `<img src="${data.image_url}" class="card-img-top">`;
    const syno = document.querySelector('#syn');
    syno.innerHTML = `${data.synopsis}`;
    const typ = document.querySelector('#type');
    typ.innerHTML = "Type - " + `${data.type}`;
    const duration = document.querySelector('#dur');
    duration.innerHTML = "Duration - " + `${data.duration}`;
    const episode = document.querySelector('#ep');
    episode.innerHTML = "Episodes - " + `${data.episodes}`;
    const scor = document.querySelector('#scre');
    scor.innerHTML = "Score - " + `${data.score}`;
    gnr.innerHTML = "Genre - ";
    // gnrs.forEach((x, i) => console.log(x));
    
}



