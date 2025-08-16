document.addEventListener("DOMContentLoaded", function () {
            const contents = document.querySelectorAll(".content");

            function checkScroll() {
                contents.forEach(content => {
                    const contentPosition = content.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 2.5;

                    if (contentPosition < screenPosition) {
                        content.classList.add("show");
                    } else {
                        content.classList.remove("show"); // Remove class when scrolling back up
                    }
                });
            }

            window.addEventListener("scroll", checkScroll);
            checkScroll(); // Run initially in case some elements are already in view

            // Dropdown functionality
            const dropdownToggle = document.getElementById("dropdown-toggle");
            const dropdownMenu = document.querySelector("#lessons-dropdown .dropdown");

            dropdownToggle.addEventListener("click", function (e) {
                e.preventDefault(); // Prevent the link from navigating
                dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", function (e) {
                if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    dropdownMenu.style.display = "none";
                }
            });

            const sections = document.querySelectorAll('.section');
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );
            sections.forEach(section => observer.observe(section));
        });