fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => loadImages(data))


function loadImages(images) {
    const imagesContainer = document.getElementById('images');
    for (const image of images) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${image.id}</h1>
        <h2>${image.title}</h2>
         <img src = "${image.url}"
         alt = "api photos">
          <img src = "${image.thumbnailUrl}"
          alt = "api photos">
        `;
        imagesContainer.appendChild(div);
    }
}