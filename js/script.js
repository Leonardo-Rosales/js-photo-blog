
const listPhoto = document.querySelector('.row');
const mainUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=6';

const fullOverlay = document.getElementById('fullOverlay');
const overlayImage = document.getElementById('overlayImage');
const closeOverlayButton = document.getElementById('closeOverlay');

axios
    .get(mainUrl)
    .then((res) => {
        console.log(res);
        photos = res.data; 
        console.log(photos);
        appendPhotos(photos); 
    })
    .catch((err) => {
        console.log(err);
    });

function appendPhotos(photos) {
    let photoCardHTML = '';
    photos.forEach((photo) => { 
        const { url, title } = photo;
        console.log(url);

        photoCardHTML = `
            <div class="col-4">
                <div class="main-card">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <div class="card-img">
                        <img class="thumbnail" src="${url}" alt="">
                    </div>
                    <div class="card-body">
                        <p>${title}</p>
                    </div>
                </div>
            </div>
        `;
        listPhoto.innerHTML += photoCardHTML;
    });

    
     const images = document.querySelectorAll('.thumbnail');
     images.forEach(img => {
         img.addEventListener('click', (event) => {
             overlayImage.src = event.target.src;  
             fullOverlay.style.display = 'flex'; 
         });
     });
 
     
     closeOverlayButton.addEventListener('click', () => {
         fullOverlay.style.display = 'none'; 
     });
}