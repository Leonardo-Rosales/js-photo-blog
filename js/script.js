
const listPhoto = document.querySelector('.row');
const mainUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=6';
let photos = []; 

axios
    .get(mainUrl)
    .then((res) => {
        console.log(res);
        photos = res.data; 
        console.log(photos);
        appendPhotos(); 
    })
    .catch((err) => {
        console.log(err);
    });

function appendPhotos() {
    photos.forEach((photo) => { 
        const { url, title } = photo;
        console.log(url);

        const photoCardHTML = `
            <div class="col-4">
                <div class="main-card">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <div class="card-img">
                        <img src="${url}" alt="">
                    </div>
                    <div class="card-body">
                        <p>${title}</p>
                    </div>
                </div>
            </div>
        `;
        listPhoto.innerHTML += photoCardHTML;
    });
}