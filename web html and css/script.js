document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    if (sidebar.style.width === '200px') {
        sidebar.style.width = '0';
        content.classList.remove('blur');
    } else {
        sidebar.style.width = '200px';
        content.classList.add('blur');
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebar.style.width = '0';
    content.classList.remove('blur');
});

function showProjectDetails(project) {
    const projectDetails = document.getElementById('project-details');
    const title = project.querySelector('h3').textContent;
    const description = project.querySelector('p').textContent;

    projectDetails.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="#" class="close-details" onclick="closeProjectDetails()">Close</a>
    `;

    projectDetails.style.animation = 'slideIn 0.5s forwards';
}

function hideProjectDetails() {
    const projectDetails = document.getElementById('project-details');
    projectDetails.style.animation = 'slideOut 0.5s forwards';
}

function closeProjectDetails() {
    const projectDetails = document.getElementById('project-details');
    projectDetails.style.animation = 'slideOut 0.5s forwards';
}
