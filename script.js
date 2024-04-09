// Function to fetch and update the role strings from a PHP file
async function updateRole() {
    try {
        const response = await fetch('roles.php');
        const role = await response.json(); // Assuming the PHP file returns JSON
        initializeTyped(role); // Initialize Typed.js with the fetched role
    } catch (error) {
        console.error('Error fetching role:', error);
    }
}

// Function to initialize Typed.js for the role placeholder
function initializeTyped(role) {
    var typed = new Typed(".auto-type", {
        strings: role, // Use the fetched role strings
        startDelay: 1000,
        typeSpeed: 50,
        backSpeed: 50,
        cursorChar: '\u25ae',
        loop: true,
        autoInsertCss: true,
        smartBackspace: true,
    });
}

// Update role initially
updateRole();
