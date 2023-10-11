const container = document.getElementById('imageContainer');

const imageFiles = [
    'images/HebSpirit01.jpg',
    'images/HebSpirit02.jpg',
    'images/HebSpirit03.jpg',
    'images/HebSpirit04.jpg',
    'images/HebSpirit05.jpg',
    'images/HebSpirit06.jpg',
    'images/HebSpirit07.jpg'
];

// Loop through the image files and create img elements
imageFiles.forEach((file, index) => {
    const img = document.createElement('img');
    img.src = file;
    img.alt = `H-E-B Spirit Award ${index + 1}`;
    img.classList.add('image');
    container.appendChild(img);
});
