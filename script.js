
const moviename = document.querySelector(".moviename");
const showmovie = document.querySelector("#showmovie");
const multiplemovie = document.querySelector("#multiplemovie");
const userimg = document.querySelector(".userimg");
const login = document.querySelector("#login");
const loginbtn = document.querySelector(".loginbtn");
const searchbtn = document.querySelector("#searchbtn");
const playvideo =document.querySelector("#playvideo");
const playvideobtn = document.querySelector("#playvideobtn");



if (login) {
    login.addEventListener("click", (e) => {
        e.preventDefault();
          // redirect after 1 second
        setTimeout(() => {
            window.location.href = "/index.html";
        }, 1000);

        // show login success message
        document.querySelector(".msg").classList.remove("hidden");
    });
}


if (loginbtn) {
    loginbtn.addEventListener("click", () => {
        window.location.href = "/login.html";
    });
}


if (searchbtn) {
    searchbtn.addEventListener("click", () => {
        console.log("hiiii")
        window.location.href = "/showmovie.html";
    });
}



if (moviename) {
    moviename.addEventListener("keydown", (e) => {
    
        if (e.key === "Enter") {
            showDetailOfMovie();
        }
    });
}



function showDetailOfMovie() {

    let movie = moviename.value.trim();
    if (!movie) return;

    let api = `https://www.omdbapi.com/?t=${movie}&apikey=dd8bef89`;

    console.log("Fetching:", api);

    fetch(api)
        .then(res => res.json())
        .then(data => {

            if (data.Response === "False") {
                showmovie.innerHTML = `
                    <h1 class="text-red-500 text-center text-3xl">Movie Not Found ❌</h1>`;
                return;
            }

            showmovie.innerHTML = `
                <div class="ml-2 md:flex md:justify-center items-center gap-10">
                    <div class="pl-5 overflow-hidden rounded-md w-72 h-96 md:w-[500px] md:h-[610px]">
                        <img src="${data.Poster}" class="w-full h-full object-cover">
                    </div>

                    <div class="pl-4">
                        <h1 class="text-5xl md:text-6xl text-amber-500 font-bold mt-4">${data.Title}</h1>
                        <h2 class="text-lg text-gray-300 mt-1">${data.Plot}</h2>

                        <div class="mt-3">
                            <p class="font-semibold text-gray-400">Genre:</p>
                            <p class="text-lg">${data.Genre}</p>
                        </div>

                        <div class="mt-3">
                            <p class="font-semibold text-gray-400">Released:</p>
                            <p class="text-lg">${data.Released}</p>
                        </div>

                        <div class="mt-3">
                            <p class="font-semibold text-gray-400">Actors:</p>
                            <p class="text-lg">${data.Actors}</p>
                        </div>

                        <div class="mt-3">
                            <p class="font-semibold text-gray-400">Director:</p>
                            <p class="text-lg">${data.Director}</p>
                        </div>

                        <div class="mt-3">
                            <p class="font-semibold text-gray-400">Writer:</p>
                            <p class="text-lg">${data.Writer}</p>
                        </div>
                    </div>
                </div>`;

            if (multiplemovie) multiplemovie.classList.add("hidden");
            moviename.value = "";
        })
        .catch(err => console.log("Error:", err));
}
playvideobtn.addEventListener("click",()=>{
    playvideo.innerHTML =` <video controls autoplay loop  class="w-full h-[90%] object-cover md:ml-3">
            <source src="/play-page/Jumanji.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>`

})
