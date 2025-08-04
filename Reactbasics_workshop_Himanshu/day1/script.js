// Projects data
const projects = [
    {
        title: "GO1% Automation via Cypress",
        description: "End-to-end test automation framework for GO1% platform using Cypress with 100% test coverage and CI/CD integration",
        technologies: ["Cypress", "JavaScript", "GitHub Actions", "TestLink"]
    },
    {
        title: "Loblaws Digital",
        description: "Loblaw platform team has been working on migrating their Hybris e-commerce application to the new platform which is based on the microservices architecture.",
        technologies: ["Postman", "k6", "JavaScript", "GitLab", "Grafana", "Jira"]
    },
    {
        title: "Duck Creek Technologies",
        description: "Duck Creek Technologies provides a comprehensive insurance software platform with integrated modules for policy administration, billing, claims management, and rating. Built on modern frameworks and cloud architecture, Duck Creek enables insurers to improve operational efficiency, customer satisfaction, and adaptability to market changes.",
        technologies: ["JMeter", "Azure CLI", "GitHub Actions", "Azure Load Test", "ADO"]
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const contactForm = document.getElementById('contact-form');
    const projectsContainer = document.getElementById('projects-container');
    const experienceBtn = document.getElementById('experience-btn');
    const experienceOutput = document.getElementById('experience-output');

    // Check if elements exist
    if (!themeToggle || !projectsContainer) {
        console.error("Essential elements not found!");
        return;
    }

    // Dark/Light Mode Toggle
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = 'Toggle Light Mode';
    }

    // Render Projects
    function renderProjects() {
        projectsContainer.innerHTML = projects.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="technologies"><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
            </div>
        `).join('');

        // Animate project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
        });
    }

    // Calculate Experience
    if (experienceBtn) {
        experienceBtn.addEventListener('click', function() {
            const startYear = 2021;
            const currentYear = new Date().getFullYear();
            const yearsExperience = currentYear - startYear;
            
            experienceOutput.textContent = `I have ${yearsExperience} year${yearsExperience !== 1 ? 's' : ''} of professional experience since ${startYear}.`;
            
            experienceOutput.style.opacity = '0';
            setTimeout(() => {
                experienceOutput.style.transition = 'opacity 0.5s ease';
                experienceOutput.style.opacity = '1';
            }, 10);
        });
    }

    // Form Validation
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const formSuccess = document.getElementById('form-success');
            
            // Reset errors and success
            nameError.textContent = '';
            emailError.textContent = '';
            formSuccess.textContent = '';
            
            let isValid = true;
            
            if (!name) {
                nameError.textContent = 'Name is required';
                isValid = false;
            }
            
            if (!email) {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            if (isValid) {
                formSuccess.textContent = 'Thank you for your message! I will get back to you soon.';
                contactForm.reset();
                
                setTimeout(() => {
                    formSuccess.textContent = '';
                }, 5000);
            }
        });
    }

    // Initial render
    renderProjects();
});