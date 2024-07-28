document.addEventListener('DOMContentLoaded', (event) => {
    // Example code to update character's health and experience
    function updateCharacterStats(health, maxHealth, experience, maxExperience, gems, coins) {
        const healthBar = document.querySelector('.progress-bar.bg-danger');
        const experienceBar = document.querySelector('.progress-bar.bg-warning');
        const gemCount = document.querySelector('.icon-container .fa-gem + span');
        const coinCount = document.querySelector('.icon-container .fa-coins + span');

        healthBar.style.width = `${(health / maxHealth) * 100}%`;
        healthBar.textContent = `${health} / ${maxHealth}`;
        experienceBar.style.width = `${(experience / maxExperience) * 100}%`;
        experienceBar.textContent = `${experience} / ${maxExperience}`;
        gemCount.textContent = gems;
        coinCount.textContent = coins;
    }

    // Example usage:
    updateCharacterStats(45, 50, 10, 25, 5, 20);
});
