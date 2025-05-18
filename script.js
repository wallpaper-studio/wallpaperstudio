document.getElementById('searchButton').addEventListener('click', function() {
    var query = document.getElementById('searchBar').value;
    var result = document.getElementById('result');

    // Simulating a search
    if (query.toLowerCase() === 'onyx') {
        result.innerHTML = `
            <h3>Onyx Wallpaper</h3>
            <p>Price: $20</p>
            <a href="onyx.pdf" target="_blank">Download PDF</a>
        `;
    } else {
        result.innerHTML = "<p>No wallpaper found!</p>";
    }
});
