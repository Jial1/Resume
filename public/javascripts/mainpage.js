// JavaScript code for interactive components

// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Function to change font size
function changeFontSize(fontSize) {
    const contentContainer = document.querySelector('body');
    contentContainer.style.fontSize = fontSize + 'px';
}

// JavaScript code for interactive components

// Function to download the resume PDF
function downloadResume() {
    const resumeLink = document.createElement('a');
    resumeLink.href = 'Resume.pdf';
    resumeLink.download = 'Jiali_Resume.pdf';
    resumeLink.click();
}

function sendEmail() {
    window.location.href = 'mailto:evanliujiali@hotmail.com';
}
