let api = "https://www.omdbapi.com/?t=12th fail&apikey=dd8bef89";
console.log("https://www.omdbapi.com/?t=housefull&plot=full")
console.log(api);

fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log(data);   
    })
    .catch(err => {
        console.log("Error:", err);
    });
