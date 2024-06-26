
        document.addEventListener("DOMContentLoaded", function () {
            const sections = document.querySelectorAll('.about, .skills, .portfolio, .experience, .education, .contact-me');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
        
            sections.forEach(section => {
                observer.observe(section);
            });
        
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
        
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('expanded');
                if (navLinks.classList.contains('expanded')) {
                    navLinks.style.display = 'flex';
                } else {
                    navLinks.style.display = 'none';
                }
            });
        
            const navLinksItems = document.querySelectorAll('.nav-links ul li a');
            navLinksItems.forEach(item => {
                item.addEventListener('click', function(event) {
                    event.preventDefault();
                    const targetId = item.getAttribute('href').substring(1);
                    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
                    navLinks.classList.remove('expanded');
                    navLinks.style.display = 'none';
                });
            });
        
            const contactButton = document.querySelector('.intro button');
            contactButton.addEventListener('click', function() {
                document.querySelector('#contact-loc').scrollIntoView({ behavior: 'smooth' });
            });
        });
        
