function toggleDarkMode() {
    const lightStylesheet = document.getElementById('lightStylesheet');
    const darkStylesheet = document.getElementById('darkStylesheet');
    const toggleSwitch = document.getElementById('toggle');

    if (toggleSwitch.checked) {
        // Switch to light mode
        lightStylesheet.disabled = false;
        darkStylesheet.disabled = true;
        // Save user preference
        localStorage.setItem('lightMode', 'enabled');
    } else {
        // Switch to dark mode
        lightStylesheet.disabled = true;
        darkStylesheet.disabled = false;
        // Save user preference
        localStorage.setItem('lightMode', 'disabled');
    }
}

// Check the user's preference from previous session
const userPreference = localStorage.getItem('lightMode');

if (userPreference === 'enabled') {
    document.getElementById('lightStylesheet').disabled = false;
    document.getElementById('darkStylesheet').disabled = true;
    document.getElementById('toggle').checked = true;
} else {
    document.getElementById('lightStylesheet').disabled = true;
    document.getElementById('darkStylesheet').disabled = false;
    document.getElementById('toggle').checked = false;
}