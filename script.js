document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components
    M.AutoInit();

    // Dynamically load portfolio images
    const gallery = document.querySelector('.gallery');
    const images = [
        'work1.jpg',
        'work2.jpg',
        'work3.jpg',
        // Add more image URLs
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });

    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        M.toast({html: 'Message sent successfully!'});
        this.reset(); // Clear form
    });
});
