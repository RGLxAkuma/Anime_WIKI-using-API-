const base_url = "https://api.jikan.moe/v4";

const animeId = location.search.substring(1);

fetch(`https://api.jikan.moe/v4/anime/${animeId}`)
.then(res=>res.json())
.then(getInfo)
.catch(err=>console.log(err.message));


function getInfo(data)
{
    console.log(data);
    const title = document.querySelector('#tlt');
    title.innerHTML = `${data.data.title}`;
    const image = document.querySelector('#anm_img');
    image.innerHTML = `<img src="${data.data.images.jpg.image_url}" class="card-img-top">`;
    const syno = document.querySelector('#syn');
    syno.innerHTML = "SYNOPSIS - "+`${data.data.synopsis}`;
    const typ = document.querySelector('#type');
    typ.innerHTML = "TYPE - " + `${data.data.type}`;
    const duration = document.querySelector('#dur');
    duration.innerHTML = "DURATION - " + `${data.data.duration}`;
    const episode = document.querySelector('#ep');
    episode.innerHTML = "EPISODES - " + `${data.data.episodes}`;
    const scor = document.querySelector('#scre');
    scor.innerHTML = "SCORE - " + `${data.data.score}`;
    const gnrs = `${data.data.genres.length}`;
    const genre = document.querySelector('#gnr');
    genre.innerHTML = "GENRE - ";
    for(let i=0;i<gnrs;i++)
    {
        if(i==gnrs-1)
        {
            genre.innerHTML += `${data.data.genres[i].name}` + '.';
        }
        else
        {
            genre.innerHTML += `${data.data.genres[i].name}` + ', ';
        }
        
    }
    const status = document.querySelector('#status');
    status.innerHTML = "STATUS - " + `${data.data.status}`;
    const animeUrl = document.querySelector('#anime_url');
    animeUrl.innerHTML = "LINK - " + `<a href="${data.data.url}" target="_blank">${data.data.url}</a>`;
    const std = `${data.data.studios.length}`;
    console.log(std);
    const studio = document.querySelector('#studio');
    studio.innerHTML = "STUDIO - ";
    for(let i=0;i<std;i++)
    {
        if(i==std-1)
        {
            studio.innerHTML += `${data.data.studios[i].name}` + '.';
        }
        else
        {
           studio.innerHTML += `${data.data.studios[i].name}` + ', ';
        }
        
    }
}



