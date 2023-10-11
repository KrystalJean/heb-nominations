const container = document.getElementById('imageContainer');

// Fetch the list of image files dynamically
fetch('./images/')
    .then(response => response.text())
    .then(text => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(text, 'text/html');
        const links = Array.from(htmlDoc.querySelectorAll('a'));
        const imageFiles = links
            .filter(link => link.href.match(/\.(jpe?g|png|gif)$/i))
            .map(link => link.href);

        // Loop through the image files and create img elements
        imageFiles.forEach((file, index) => {
            const img = document.createElement('img');
            img.src = file;
            img.alt = `H-E-B Spirit Award ${index + 1}`;
            img.classList.add('image');
            container.appendChild(img);
        });
    })
    .catch(error => console.error('Error fetching images:', error));