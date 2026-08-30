// Select all project cards

const projectCards = document.querySelectorAll(".project-card");


// Create an observer

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            // Check if the card is visible

            if (entry.isIntersecting) {

                // Add the show class

                entry.target.classList.add("show");

                // Stop watching this card

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);


// Watch every project card

projectCards.forEach((card) => {

    observer.observe(card);

});