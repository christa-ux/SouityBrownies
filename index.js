document.addEventListener('DOMContentLoaded', function() {
    // navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerContainer').innerHTML = data;
        })
        .catch(error => console.error('Error fetching header:', error));

//footer
        fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerContainer').innerHTML = data;
        })
        .catch(error => console.error('Error fetching footer:', error));
    });