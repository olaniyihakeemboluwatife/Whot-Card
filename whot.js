function flipFunction() {
    const showElement = document.getElementById('show');
    const hideElement = document.getElementById('hide');

    if (showElement.style.display === 'none') {
        showElement.style.display = 'flex'; // Use 'flex' to align contents correctly
        hideElement.style.display = 'none';
    } else {
        showElement.style.display = 'none';
        hideElement.style.display = 'flex'; // Use 'flex' for proper alignment
    }
}