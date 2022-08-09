var searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var res = JSON.parse(xhttp.responseText);
        var photoData =res.photos.map(function(photo) {
                return photo;
        });
        var container = document.querySelector('#photo-divs');
        photoData.forEach(function(foto) {
                console.log(foto);
                var photoDiv = document.createElement('div');
                photoDiv.classList.add('photo-div');
                photoDiv.innerHTML = `
                
                <img src=${foto.src.medium}>
                    
            
                `;
                container.appendChild(photoDiv);
            })

            var pics = document.getElementsByTagName("img");

    for (i = 0; i < pics.length; i++) {
        pics[i].addEventListener("load", function() {
            if (this.naturalHeight > this.naturalWidth) {
                this.classList.add("portrait")
            } else {
                this.classList.add("landscape")
            }
        })  
        if (pics[i].complete) {
            if (pics[i].naturalHeight > pics[i].naturalWidth) {
                pics[i].classList.add("portrait")
            } else {
                pics[i].classList.add("landscape")
            }
        }
    }
        }
    };
    var textValue = document.querySelector('#search-bar').value
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f91700001000001ae54770d1fac4d2d97381fda766db609');
    xhttp.send();
//// https://api.pexels.com/v1/
// api key 563492ad6f91700001000001ae54770d1fac4d2d97381fda766db609



}

)

