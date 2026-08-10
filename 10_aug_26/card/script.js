const courses = [
    {
        title: "HTML Basics",
        category: "Web Development",
        level: "Beginner",
        duration: "4 Weeks",
        price: "₹999",
        shortDescription: "Learn HTML from scratch.",
        fullDescription:
            "Learn HTML tags, forms, tables, images, links and semantic elements by building real web pages.",
        topics: [
            "HTML Structure",
            "Headings",
            "Paragraphs",
            "Links",
            "Images",
            "Forms"
        ]
    },
    {
        title: "CSS Fundamentals",
        category: "Web Development",
        level: "Beginner",
        duration: "5 Weeks",
        price: "₹1299",
        shortDescription: "Style beautiful websites.",
        fullDescription:
            "Learn colors, fonts, Flexbox, Grid, animations and responsive layouts.",
        topics: [
            "Selectors",
            "Box Model",
            "Flexbox",
            "Grid",
            "Media Queries"
        ]
    },
    {
        title: "JavaScript DOM",
        category: "Programming",
        level: "Intermediate",
        duration: "6 Weeks",
        price: "₹1499",
        shortDescription: "Create interactive web pages.",
        fullDescription:
            "Learn DOM Manipulation, Events, Forms and build dynamic UI components.",
        topics: [
            "DOM",
            "Events",
            "Forms",
            "Modals",
            "Tabs",
            "Dropdowns"
        ]
    }
];

const courseContainer = document.getElementById("courseContainer");
const courseModal = document.getElementById("courseModal");

const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalLevel = document.getElementById("modalLevel");
const modalDuration = document.getElementById("modalDuration");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalTopics = document.getElementById("modalTopics");

const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

// Function to show modal
function showModal(course) {
    modalTitle.textContent = course.title;
    modalCategory.textContent = "Category : " + course.category;
    modalLevel.textContent = "Level : " + course.level;
    modalDuration.textContent = "Duration : " + course.duration;
    modalPrice.textContent = "Price : " + course.price;
    modalDescription.textContent = course.fullDescription;

    let topics = "";

    course.topics.forEach(function (topic) {
        topics += `<li>${topic}</li>`;
    });

    modalTopics.innerHTML = topics;
    courseModal.style.display = "flex";
}


// Function to close modal
function closeModal() {
    courseModal.style.display = "none";
}


// Function to create one card
function createCard(course) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${course.title}</h2>
        <p class="category">${course.category}</p>
        <p>${course.shortDescription}</p>
        <p>Duration : ${course.duration}</p>
        <p class="price">${course.price}</p>
    `;

    card.addEventListener("click", function () {
        showModal(course);
    });

    courseContainer.appendChild(card);
}


function renderCourses() {
    courses.forEach(function (course) {
        createCard(course);
    });

}


renderCourses();


closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);