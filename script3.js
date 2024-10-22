window.onload = function() {
    const counters = document.querySelectorAll('.counter-value');
    const speed = 500; // Speed of the counting animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20); // Repeat until target is reached
            } else {
                counter.innerText = target; // Final value
            }
        };

        updateCount();
    });
};