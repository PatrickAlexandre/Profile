document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // Set initial theme based on user's preference or default to light theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.add('light-theme');
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
