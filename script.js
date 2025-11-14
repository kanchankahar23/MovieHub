let moviename = document.querySelector(".moviename");
let showmovie = document.querySelector("#showmovie");

moviename.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let movie = moviename.value.trim(); 
        // console.log(movie);
        let api = `https://www.omdbapi.com/?t=${movie}&apikey=dd8bef89`;
        console.log(api);
        fetch(api)
            .then(res => res.json())
            .then(data => {
             console.log(data)
             showmovie.innerHTML = `
              <div class="ml-2 md:flex md:justify-center items-center gap-10">
            <!-- Poster -->
            <div class="pl-5 overflow-hidden rounded-md w-72 h-96 md:w-[500px] md:h-[610px]">
                <img src=${data.Poster} alt="12th Fail Poster" class="w-full h-full object-cover">
            </div>

            <div class="pl-4">
                <!-- Movie Title -->
                <h1 class="text-5xl md:text-6xl text-amber-500 font-bold mt-4">${data.Title}</h1>

                <!-- Tagline -->
                <h2 class="text-lg text-gray-300 mt-1">
                  ${data.Plot}
                </h2>

                <!-- Genre -->
                <div class="mt-3">
                    <p class="font-semibold text-gray-400">Genre:</p>
                    <p class="text-lg">${data.Genre}</p>
                </div>
                <div class="mt-3">
                    <p class="font-semibold text-gray-400">Released:</p>
                    <p class="text-lg">${data.Released}</p>
                </div>

                <!-- Actors -->
                <div class="mt-3">
                    <p class="font-semibold text-gray-400">Actors:</p>
                    <p class="text-lg">${data.Actors}</p>
                </div>

                <!-- Director -->
                <div class="mt-3">
                    <p class="font-semibold text-gray-400">Director:</p>
                    <p class="text-lg">${data.Director}</p>
                </div>
                <div class="mt-3">
                    <p class="font-semibold text-gray-400">Writer:</p>
                    <p class="text-lg">${data.Writer}</p>
                </div>
            </div>

        </div>
             `
                
            })
            .catch(err => {
                console.log("Error:", err);
            });
    }
});
