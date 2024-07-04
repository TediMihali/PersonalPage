document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox_toggle');
    const leftItems = document.querySelector('.navbar .left-items');

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    function handleMediaChange(e) {
        if (e.matches) {
            leftItems.style.display = 'flex';

        } else {
            leftItems.style.display = checkbox.checked ? 'flex' : 'none';
        }
    }

    if (checkbox && leftItems) {
        handleMediaChange(mediaQuery);

        mediaQuery.addListener(handleMediaChange);

        checkbox.addEventListener('change', function() {
            if (!mediaQuery.matches) {
                leftItems.style.display = checkbox.checked ? 'flex' : 'none';
            }
        });
    }
});