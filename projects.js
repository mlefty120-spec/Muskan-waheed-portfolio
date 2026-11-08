const projectsData = [
    {
        id: "nova",
        title: "NOVA",
        category: "Fashion E-commerce Frontend",
        description: "A modern fashion e-commerce frontend concept with a premium visual identity, product collections, product details, shopping cart and checkout interface.",
        technologies: ["HTML", "CSS", "JavaScript"],
        thumbnail: "images/nova1.jpg",
        screenshots: ["images/nova1.jpg", "images/nova2.jpg"],
        video: "",
        // Yahan exact GitHub repo link hai
        github: "https://github.com/mlefty120-spec/NOVA-Fashion-E-Commerce-Website.", 
        // Yahan aapka exact Live Demo link (dot ke sath) hai
        liveDemo: "https://mlefty120-spec.github.io/NOVA-Fashion-E-Commerce-Website./" 
    },
    {
        id: "dineflow",
        title: "DINEFLOW",
        category: "Restaurant Website",
        description: "A modern restaurant website concept designed to present food categories, menus and restaurant information through an attractive, user-friendly interface.",
        technologies: ["HTML", "CSS", "JavaScript"],
        thumbnail: "images/dineflow1.jpg",
        screenshots: ["images/dineflow1.jpg", "images/dineflow2.jpg"],
        video: "",
        github: "https://github.com/mlefty120-spec/DineFlow-Premium-Restaurant-Website",
        liveDemo: "https://mlefty120-spec.github.io/DineFlow-Premium-Restaurant-Website/" 
    },
    {
        id: "learning-portal",
        title: "Student Learning Portal",
        category: "Educational Web Application",
        description: "A React-based educational portal concept featuring student login, dashboard, courses, and assignments with a clean, modern aesthetic.",
        technologies: ["React", "JavaScript", "CSS"],
        thumbnail: "images/portal1.jpg",
        screenshots: ["images/portal1.jpg", "images/portal2.jpg"],
        video: "",
        github: "", 
        liveDemo: "" 
    }
];

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) {
        console.error('Projects container not found!');
        return;
    }

    container.innerHTML = projectsData.map(project => `
        <div class="project-card reveal active" data-id="${project.id}">
            <img src="${project.thumbnail}" alt="${project.title} Preview" class="project-thumbnail" onerror="this.src='https://placehold.co/600x400/121826/00f0ff?text=${encodeURIComponent(project.title)}'">
            <div class="project-info">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <span class="view-details-btn">View Details →</span>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset.id));
    });
}

const modal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');

function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-tech').innerHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

    const gallery = document.getElementById('modal-gallery');
    gallery.innerHTML = '';
    
    if (project.video) {
        gallery.innerHTML += `<video controls><source src="${project.video}" type="video/mp4"></video>`;
    }
    
    project.screenshots.forEach(src => {
        gallery.innerHTML += `<img src="${src}" alt="${project.title} Screenshot" onerror="this.src='https://placehold.co/800x600/121826/00f0ff?text=Screenshot'">`;
    });

    const actions = document.getElementById('modal-actions');
    actions.innerHTML = '';
    
    if (project.github && project.github.trim() !== "") {
        actions.innerHTML += `<a href="${project.github}" target="_blank" class="btn btn-secondary">GitHub</a>`;
    }
    if (project.liveDemo && project.liveDemo.trim() !== "") {
        actions.innerHTML += `<a href="${project.liveDemo}" target="_blank" class="btn btn-primary">Live Demo</a>`;
    }
    
    if (actions.innerHTML === '') {
        actions.innerHTML = '<p style="color: var(--cool-grey); font-size: 0.9rem;">Links coming soon.</p>';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const videos = modal.querySelectorAll('video');
    videos.forEach(v => v.pause());
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);