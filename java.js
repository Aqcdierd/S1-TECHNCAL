var isColorChanged = false;

document.getElementById('changeColorBtn').addEventListener('click', function() {
    toggleColor('header');
    toggleColor('main');
    isColorChanged = !isColorChanged; 
});

function toggleColor(elementId) {
    var element = document.getElementById(elementId);
    
    if (isColorChanged) {
        element.style.backgroundColor = 'green';
    } else {
        element.style.backgroundColor = '';
    }
}
