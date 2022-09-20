function getProgrammerComic() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then(response => response.json())
        .then((data) => {
            let img = document.createElement("img");
            img.src = data.img;
           document.body.appendChild(img);
            console.log(data);
        })
        .catch((error) => {
         console.log('Ooops!!')
     })   

}
getProgrammerComic();