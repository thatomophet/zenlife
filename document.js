document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Toggle section visibility
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections by default
    });

    const showSection = function(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none'; // Hide all sections
        });
        document.getElementById(sectionId).style.display = 'block'; // Show the specified section
    };

    // Show home section by default
    showSection('home');

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        if (!isValidEmail(emailValue)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
        } else {
            // Perform form submission or other action
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    const isValidEmail = function(email) {
        // Basic email validation using a regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Form Validation for Activity
    const activityForm = document.getElementById('activity-form');

    activityForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get input value
        const activityInput = document.getElementById('activity-input').value;

        // Validate input
        if (activityInput === '') {
            alert('Please enter activity data.');
            return;
        }

        // Process data (e.g., save to database, display on chart)
        visualizeData(activityInput);
    });

    // Data Visualization
    function visualizeData(activityData) {
        // Example: Create a bar chart to visualize activity data
        const chartContainer = document.getElementById('chart-container');
        const chartData = [parseInt(activityData)]; // Convert activity data to integer

        // Clear previous chart
        chartContainer.innerHTML = '';

        // Create bar chart
        const chart = document.createElement('canvas');
        chart.setAttribute('id', 'activity-chart');
        chartContainer.appendChild(chart);

        const ctx = chart.getContext('2d');
        const labels = ['Activity'];

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Activity Level',
                    data: chartData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
});
