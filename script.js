document.addEventListener("DOMContentLoaded", function () {
    const seeAllAwardsBtn = document.getElementById("see-all-awards-btn");
    const seeLessAwardsBtn = document.getElementById("see-less-awards-btn");
    const seeAllCertsBtn = document.getElementById("see-all-certs-btn");
    const seeLessCertsBtn = document.getElementById("see-less-certs-btn");
    const awardsDetails = document.getElementById("awards-details");
    const certificationsDetails = document.getElementById("certifications-details");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".close-btn");
    const modalBody = document.getElementById("modal-body");
    const modalImages = document.getElementById("modal-images");
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');
    const searchResultsSection = document.getElementById('search-results');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    const awardsData = [
        {
            id: 1,
            title: "3rd Prize Robotacon HN",
            issuedBy: "Sao Nam Education Center",
            year: "2017",
            images: ["asset/images/Robotacon2017.jpg"],
            topic: "Sumo Robotics",
            scale: "Regional, Ha Noi",
            description: "Constructed and programmed a sumo robot to defeat the others."
        },
        {
            id: 2,
            title: "2nd Prize Robotic Programming Talent",
            issuedBy: "Sao Nam Education Center",
            year: "2018",
            images: ["asset/images/Stem2.jpg"],
            topic: "Robotics Programming",
            scale: "Regional",
            description: "Programmed a robot to navigate complex tasks efficiently."
        },
        {
            id: 3,
            title: "1st Prize Robotacon HN",
            issuedBy: "Sao Nam Education Center",
            year: "2018",
            images: ["asset/images/Robotacon2018.jpg","asset/images/Robotacon2018(1).jpg","asset/images/Robotacon2018(1).png"],
            topic: "Program the robot to follow the available lines, go to the specified points, get the necessary items, and bring them to the finish line as quickly as possible.",
            scale: "Regional, over 20 secondary schools in Ha Noi",
            description: "Sparked passion for robotics programming. Programmed a robot to navigate a course and retrieve items. Introduced to coding and laid the foundation for the robotics journey.",
            link: "https://www.facebook.com/watch/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C&mibextid=Nif5oz&v=802145796655794"
        },
        {
            id: 4,
            title: "1st Prize International Youth Robot Vietnam 2018",
            issuedBy: "Vietnam",
            year: "2018",
            images: ["asset/images/IYRCVN2018.jpg","asset/images/IYRCVN2018(1).jpg","asset/images/IYRCVN2018(2).jpg"],
            topic: "Build a robot or system that involves the 17 Sustainable Development Goals of the United Nations. We chose the goal “Good health and well-being”.",
            scale: "National, over 300 Students were chosen from City-level competition of Ha Noi, Ho Chi Minh, and Da Nang",
            description: "First participation in a national robotic competition. Gained valuable experience as the team leader. Completed two models within a challenging one-month timeframe. Learned how to handle stress and motivate the team in difficult circumstances. Overcame technical issues with the surgical robot before the presentation. Successfully repaired loose parts and fixed codes under time pressure. Demonstrated exceptional model performance and presentation skills. Developed T.I.M.S. (The Intelligence Medical System) comprising a smart bed and surgical robot. Aimed to improve medical services in Vietnam. Showcased leadership and teamwork abilities. Persevered through technical challenges and achieved success.",
        },
        {
            id: 5,
            title: "1st Prize - Science and technology competition for high school students",
            issuedBy: "Trường THCS Giảng Võ",
            year: "2018",
            images: ["asset/images/NCKH.jpg"],
            topic: "Program the robot to follow the available lines, go to the specified points, get the necessary items, and bring them to the finish line as quickly as possible.",
            scale: "Regional"
        },
        {
            id: 6,
            title: "Excellent Award International Youth Robot Competition",
            issuedBy: "International Youth Robot Competition",
            year: "2019",
            images: ["asset/images/IYRC2019.jpg","asset/images/EW-IYRC2019.jpg","asset/images/IYRC2019(1).jpg"],
            topic: "Build a robot or system that involves the 17 Sustainable Development Goals of the United Nations. We chose goal 3: Good health and well-being.",
            scale: "International, 500-800 Students from Laos, Cambodia, Thailand, Vietnam, Malaysia, Indonesia, India, China, Korea, Australia, America",
            description: "Participated in the IYRC contest for the second time. Missed the previous year's competition but determined to address previous weaknesses. Focused on the medical theme for the group creation contest. Developed a home treatment robot using 4 Huna mainboards for movement control. Incorporated a medical storage area and a conveyor system for delivering medicines. Integrated various sensors (pH, temperature, air quality) and components (LCDs, LEDs, buzzers) for environmental monitoring and alerts. Utilized Arduino mainboards for sensor integration. Successfully implemented multiple circuits on the robot's body, surpassing expectations. Gained improvement in both technical skills (design, construction, programming) and soft skills (communication with teammates) as a leader.",
            link: "https://www.facebook.com/SaonamEdu/posts/pfbid0PYqujoaUGbMjFZCbLYM26BUXYL5ercXminRs3GbzaBi1NfY3XK7SbJgp4Nck9ee4l"
        },
        {
            id: 7,
            title: "Finalist-MakeX Robotics Competition 2019",
            issuedBy: "KDI Education, Sở Khoa Học và Công Nghệ TP.HCM",
            year: "2019",
            images: ["asset/images/makex2.jpg", "asset/images/MakeX1.jpg", "asset/images/MakeX.jpg"],
            topic: "Build a robot to solve the given quests",
            scale: "National, over 300 participants from HCM, Da Nang and Ha Noi",
            description: "Programmed a robot and collaborated with allies teams to navigate complex tasks efficiently."
        },
        {
            id: 8,
            title: "2nd Prize International Youth Robot Competition 2020",
            issuedBy: "International Youth Robot Competition",
            year: "2020",
            images: ["asset/images/IYRC2020.png", "asset/images/IYRC2020.jpg"],
            topic: "Build a robot or system that involves the 17 Sustainable Development Goals of the United Nations. We chose goal 3: Good health and well-being.",
            scale: "International, Online students from Laos, Cambodia, Thailand, Vietnam, Malaysia, Indonesia, India, China, Korea",
            description: "Overcoming the challenges of the pandemic, I led my team to participate in the IYRC 2020 through an online format. We focused on refining a surgical robot that I had previously developed.",
            links: [
                { url: "https://thanhnienviet.vn/2020/09/11/cuoc-thi-robotacon-quoc-te-online-2020-hoc-sinh-truong-thcs-giang-vo-doat-giai-bac/", text: "Article" },
                { url: "https://drive.google.com/file/d/1AOUbAn1ShvuIxLWYC1TwfP6NsYYKQJOi/view?usp=sharing", text: "Technical Design" },
                { url: "https://drive.google.com/file/d/1Zc6wo2KM-Zcoqae0PPKqydPXN6PmcFyE/view?usp=sharing", text: "Final Contest Video" }
            ]
        },
        {
            id: 9,
            title: "Top 10 RMIT Amazing Vietnam Student Competition 2021",
            issuedBy: "RMIT and Bao Hoa Hoc Tro",
            year: "2021",
            images: ["asset/images/AZSC.png", "asset/images/AZSC.jpg"],
            topic: "Designing and Video Making",
            scale: "National",
            description: "This is the competition organized by RMIT in 2021, which aims to create ideas to develop sustainable Vietnam tourism. It required creating an article or 1 video of solutions and ideas that could make sustainable tourism for Vietnam.",
            links: [
                { url: "https://www.event.rmit.edu.vn/amazing-vietnam-2021", text: "Article" },
                { url: "https://drive.google.com/file/d/17yjgPGqnUyDhu3P_oL51Dz1mJgFnA8AF/view?usp=sharing", text: "Final Video" }
            ]
        },
        {
            id: 10,
            title: "Semi-Finalist TechGenius By RMIT",
            issuedBy: "RMIT",
            year: "2021",
            images: ["asset/images/TechGenius.png"],
            topic: "Structure and Programming",
            scale: "National",
            description: "This is the competition organized by RMIT in 2021, which aims to create ideas to develop sustainable Vietnam tourism. It required creating an article or 1 video of solutions and ideas that could make sustainable tourism for Vietnam.",
            link: "https://www.rmit.edu.vn/vi/su-kien/tat-ca-cac-su-kien/2021/05-2021/cuoc-thi-sang-kien-cong-nghe-tech-genius"
        },
        {
            id: 11,
            title: "IT and Mechanical Mentoring VEX IQ Robotics Competition Full Volume 2024",
            issuedBy: "STEAM VIETNAM, Vietnam VEX Robotics National Championship, Edison school",
            year: "2024",
            images: ["asset/images/Vex.jpg","asset/images/Vex1.jpg","asset/images/Vex2.jpg","asset/images/Vex3.jpg","asset/images/Vex4.jpg","asset/images/Vex5.jpg","asset/images/Vex6.jpg"],
            topic: "IT and Mechanical Mentoring",
            scale: "International",
            description: "Mentored four teams of 20+ students under an intensive training program preparing for the VEX IQ Competition 2024, using VEXcode IQ and robot kits. Guided and motivated teams with advanced strategies and unique robotic mechanical structure approaches, leading to impressive results: one team in Top 5, one in Top 10, and two others in Top 20 out of 120 competing teams."
        },
        {
            id: 12,
            title: "Rookie of the Semester",
            issuedBy: "Student Ambassador Team (RMIT Student Recruitment Department)",
            year: "2024",
            images: ["asset/images/Sat.jpg"],
            topic: "Certificate of Recognition",
            description: "Recognized as one of the most outstanding Ambassadors and active Contributors (Rookie of the Semester) for delivering exceptional experience and a warm welcome to future students."
        },
        {
            id: 13,
            title: "Participate in IYRC 2017 (Malaysia)",
            issuedBy: "International Youth Robot Competition",
            year: "2017",
            images: ["asset/images/IYRC2017ML.jpg"],
            topic: "Programming",
            scale: "International",
            description: "Participated in the IYRC competition in Malaysia, gaining valuable experience in robotics and programming."
        },
        {
            id: 14,
            title: "Participate in IYRC 2018 (Thailand)",
            issuedBy: "International Youth Robot Competition",
            year: "2018",
            images: ["asset/images/IYRC2018TL.jpg"],
            topic: "Programming",
            scale: "International",
            description: "Participated in the IYRC competition in Thailand, continuing to develop skills in robotics and programming."
        }
    ];

    const allData = [
        
        {
            section: "about",
            title: "About",
            content: "I am currently pursuing a Bachelor of Information Technology with a minor in Enterprise Systems Development at the Royal Melbourne Institute of Technology. My passion lies in programming and web development, where I have honed my skills in various languages and technologies such as Python, JavaScript, and Node.js. Living and studying at Queensland University of Technology in Australia provided me with an invaluable opportunity to immerse myself in a highly international and professional environment, significantly enhancing both my technical competencies and cultural awareness."
        },
        {
            section: "education",
            title: "Education",
            content: "Royal Melbourne Institute of Technology (RMIT) - Bachelor of Information Technology, Minor in Enterprise Systems Development, Expected May 2026 | Current GPA: 3.6. Queensland University of Technology (QLD, Australia) - Bachelor of Engineering (Mechatronics), Jul 2022 - Jun 2023."
        },
        {
            section: "language-skills",
            title: "Language Skills",
            content: "Vietnamese: 4/4 (Fluent), English: 6.5 IELTS, Japanese: 1/4 (Elementary)."
        },
        {
            section: "skills",
            title: "Skills",
            content: "HTML, CSS, JavaScript, NodeJS, MongoDB, MySQL, GIT, PHP, AWS, Python, Arduino, Scratch."
        },
        {
            section: "portfolio",
            title: "Projects",
            content: "HR Management Website, RMIT Team Finding Website, Tracking Weather and Population Website, Tour Booking Website."
        },
        {
            section: "experience",
            title: "Experience",
            content: "IT Support Specialist Intern, Technical Controller Part-time, IT and Mechanical Mentor, Sales Associate."
        },
        {
            section: "contact-loc",
            title: "Contact Me",
            content: "Email: juneng2108@gmail.com, Phone: +84 865 949 604, Address: Ha Noi, Viet Nam."
        }
    ];

    function searchItems(query) {
        console.log("Searching for:", query); // Debugging log
        const results = allData.filter(item => {
            return item.title.toLowerCase().includes(query.toLowerCase()) ||
                   item.content.toLowerCase().includes(query.toLowerCase());
        });
        console.log("Search results:", results); // Debugging log
        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        resultsContainer.innerHTML = ''; // Clear previous results
        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `
                    <h3>${result.title}</h3>
                    <p>${result.content}</p>
                `;
                resultItem.addEventListener('click', function() {
                    document.getElementById(result.section).scrollIntoView({ behavior: 'smooth' });
                    searchResultsSection.style.display = 'none';
                });
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = '<p>No results found</p>';
        }
        searchResultsSection.style.display = 'block'; // Show the search results section
    }

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim();
        console.log("Input event:", query); // Debugging log
        if (query.length > 0) {
            searchItems(query);
        } else {
            searchResultsSection.style.display = 'none'; // Hide results section if query is empty
        }
    });

    // Function to display initial items
    function displayInitialItems() {
        awardsDetails.innerHTML = ""; // Clear existing content
        certificationsDetails.innerHTML = ""; // Clear existing content

        awardsData.slice(0, 3).forEach(award => {
            const awardItem = document.createElement("div");
            awardItem.classList.add("award-cert-item");
            awardItem.innerHTML = `
                <h3>${award.title}</h3>
                <p>Issued by ${award.issuedBy}, ${award.year}</p>
                <a href="#" class="see-more" data-id="${award.id}">See More</a>
            `;
            awardsDetails.appendChild(awardItem);
        });

        awardsData.slice(10, 12).forEach(cert => {
            const certItem = document.createElement("div");
            certItem.classList.add("award-cert-item");
            certItem.innerHTML = `
                <h3>${cert.title}</h3>
                <p>Issued by ${cert.issuedBy}, ${cert.year}</p>
                <a href="#" class="see-more" data-id="${cert.id}">See More</a>
            `;
            certificationsDetails.appendChild(certItem);
        });

        addSeeMoreEventListeners(); // Add event listeners to the new "See More" links
    }

    function displayAllItems() {
        awardsDetails.innerHTML = "";
        certificationsDetails.innerHTML = "";
        
        awardsData.forEach(award => {
            const awardItem = document.createElement("div");
            awardItem.classList.add("award-cert-item");
            awardItem.innerHTML = `
                <h3>${award.title}</h3>
                <p>Issued by ${award.issuedBy}, ${award.year}</p>
                <a href="#" class="see-more" data-id="${award.id}">See More</a>
            `;
            awardsDetails.appendChild(awardItem);
        });

        awardsData.slice(10, 14).forEach(cert => {
            const certItem = document.createElement("div");
            certItem.classList.add("award-cert-item");
            certItem.innerHTML = `
                <h3>${cert.title}</h3>
                <p>Issued by ${cert.issuedBy}, ${cert.year}</p>
                <a href="#" class="see-more" data-id="${cert.id}">See More</a>
            `;
            certificationsDetails.appendChild(certItem);
        });

        addSeeMoreEventListeners(); // Add event listeners to the new "See More" links
    }

    seeAllAwardsBtn.addEventListener("click", function () {
        displayAllItems();
        seeAllAwardsBtn.style.display = "none";
        seeLessAwardsBtn.style.display = "block";
    });

    seeLessAwardsBtn.addEventListener("click", function () {
        displayInitialItems();
        seeAllAwardsBtn.style.display = "block";
        seeLessAwardsBtn.style.display = "none";
    });

    seeAllCertsBtn.addEventListener("click", function () {
        displayAllItems();
        seeAllCertsBtn.style.display = "none";
        seeLessCertsBtn.style.display = "block";
    });

    seeLessCertsBtn.addEventListener("click", function () {
        displayInitialItems();
        seeAllCertsBtn.style.display = "block";
        seeLessCertsBtn.style.display = "none";
    });

    function addSeeMoreEventListeners() {
        const seeMoreLinks = document.querySelectorAll(".see-more");
        seeMoreLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const awardId = this.getAttribute("data-id");
                const award = awardsData.find(a => a.id == awardId);
                if (award) {
                    let imagesHtml = "";
                    award.images.forEach(img => {
                        imagesHtml += `<img src="${img}" alt="${award.title} image">`;
                    });

                    let linksHtml = "";
                    if (award.links) {
                        award.links.forEach(link => {
                            linksHtml += `<p><a href="${link.url}" target="_blank">${link.text}</a></p>`;
                        });
                    }

                    modalBody.innerHTML = `
                        <h2>${award.title}</h2>
                        <p><strong>Issued by:</strong> ${award.issuedBy}</p>
                        <p><strong>Year:</strong> ${award.year}</p>
                        <p><strong>Topic:</strong> ${award.topic}</p>
                        <p><strong>Scale:</strong> ${award.scale}</p>
                        <p>${award.description}</p>
                        ${linksHtml}
                    `;
                    modalImages.innerHTML = imagesHtml;
                    modal.style.display = "block";
                }
            });
        });
    }

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Display initial items and add initial "See More" event listeners
    displayInitialItems();

    // Intersection Observer for scroll animations
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

     // Handle hamburger menu
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
