

// Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listener to the button
mybutton.addEventListener("click", topFunction);


const loadMoreButton = document.getElementById('loadMoreTestimonials');
const testimonialsContainer = document.getElementById('testimonials');

loadMoreButton.addEventListener('click', () => {
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');
    newTestimonial.innerHTML = `
            <p class="quote">"This is a dynamically loaded testimonial. Great service and products!"</p>
            <p class="author">- shushain</p>
        `;

    testimonialsContainer.insertBefore(newTestimonial, loadMoreButton);
});

// for product button
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}








