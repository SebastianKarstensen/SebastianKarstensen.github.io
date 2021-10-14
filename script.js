const scrollSpy = new mdb.ScrollSpy(document.body, {
  target: '#navigation-bar',
  offset: 25
});

let portfolioDOM = document.getElementById("portfolio-modal");
const portfolioModal = new mdb.Modal(portfolioDOM, {});
let portfolioModalTitle = portfolioDOM.querySelector(".modal-title");
let portfolioModalCarousel = portfolioDOM.querySelector("#portfolio-carousel .carousel-inner");
let portfolioModalDescription = portfolioDOM.querySelector(".modal-body .portfolio-description");
let portfolioModalFooter = portfolioDOM.querySelector(".modal-footer");

function showPortfolio() {
    portfolioData.forEach((portfolioItem) => {
        let portfolioElement = createPortfolioElement(portfolioItem);
        let portfolioSection = document.getElementById("portfolio-section");
        let targetSection = portfolioSection.querySelector(`.row[data-portfolio-category='${portfolioItem.category.key}']`);
        targetSection.appendChild(portfolioElement);
    });
}

function createPortfolioElement(portfolioData) {
    let title = portfolioData.title;
    let description = portfolioData.description;
    let image = portfolioData.id + "/" + portfolioData.id + "-0.jpg";
    let portfolioSkills = portfolioData.skills;

    let element = document.createElement("div");
    element.classList.add("col-md-3", "portfolio-item");
    element.innerHTML =
    `
    <div class="card bg-dark" onclick="openPortfolioItem('${portfolioData.id}')">
        <img src="./img/portfolio/${image}" class="card-img"/>
        <div class="mask">
            <h6 class="card-title">${title}</h6>
            <div>
                ${portfolioSkills.map(skillsTitle =>
                    `<span class="badge ${skillsData.get(skillsTitle).category.background} me-1">${skillsTitle}</span>`
                ).join('')}
            </div>
        </div>
    </div>
    `;
    return element;
}

function showSkills() {
    skillsData.forEach(skill => {
        let skillElement = createSkillElement(skill);
        let skillsSection = document.getElementById("skills");
        let skillCategorySection = skillsSection.querySelector(`[data-skill-category='${skill.category.key}']`);
        skillCategorySection.appendChild(skillElement);
    });
}

function createSkillElement(skillData) {
    let title = skillData.title;
    let skillLink = skillData.link;
    let skillLevel = skillData.skillLevel;
    let category = skillData.category;

    let indicators = new Array(5).fill(false);
    for (var i = 0; i < skillLevel; i++) {
        indicators[i] = true;
    }

    let element = document.createElement("div");
    element.classList.add("col-md-3");
    element.innerHTML =
    `
    <div class="skill ${category.background}">
        <div class="skill-info">
            <div>
                <span>${title}</span>
                <a href="${skillLink}">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
            <ul class="list-group list-group-horizontal skill-indicator">
                ${indicators.map(isActive =>
                    `<li class="list-group-item ${isActive ? 'bg-light' : 'bg-indicator-off'}"></li>`
                ).join('')}
            </ul>
            <small>
                ${skillLevelInfo[skillLevel].title}
                <i class="fas fa-info-circle" data-mdb-toggle="tooltip" data-mdb-placement="right" title="${skillLevelInfo[skillLevel].description}"></i>
            </small>
        </div>
    </div>
    `;
    return element;
}

function initializeTooltips() {
    var allTooltips = [].slice.call(document.querySelectorAll('[data-mdb-toggle="tooltip"]'))
    allTooltips.map(function (tooltipTriggerEl) {
        new mdb.Tooltip(tooltipTriggerEl)
    })
}

function openPortfolioItem(portfolioId) {
    let selectedPortfolioItem = portfolioData.get(portfolioId);

    portfolioModalTitle.innerHTML = selectedPortfolioItem.title;
    portfolioModalCarousel.innerHTML = generateInnerCarousel(selectedPortfolioItem);
    portfolioModalDescription.innerHTML = generatePortfolioDescription(selectedPortfolioItem);
    portfolioModalFooter.innerHTML = generatePortfolioModalFooter(selectedPortfolioItem);
    portfolioModal.show();
}

function generateInnerCarousel(portfolioItem) {
    let carousel = "";
    let isFirstImage = true;

    for (var imageIndex = 1; imageIndex <= portfolioItem.images; imageIndex++) {
        let imagePath = "./img/portfolio/" + portfolioItem.id + "/" + portfolioItem.id + "-" + imageIndex + ".jpg";
        carousel += generateCarouselImage(isFirstImage, imagePath);
        if (isFirstImage) {
            isFirstImage = false;
        }
    }

    return carousel;
}

function generateCarouselImage(isActive, imagePath) {
    let carouselImage =
    `
    <div class="carousel-item ${isActive ? 'active' : ''}">
        <img src="${imagePath}"/>
    </div>
    `;

    return carouselImage;
}

function generatePortfolioDescription(portfolioItem) {
    let descriptionElement = `<p>${portfolioItem.description}</p>`;

    let additionalInfo = portfolioItem["additionalInfo"];
    if (additionalInfo !== undefined && additionalInfo.message !== undefined) {
        descriptionElement += `<p>${additionalInfo.message}</p>`;
    }

    return descriptionElement;
}

function generatePortfolioModalFooter(portfolioItem) {
    let additionalInfo = portfolioItem["additionalInfo"];
    if (additionalInfo !== undefined && additionalInfo.link !== undefined) {
        return `<a class="btn bg-custom text-white" href="${additionalInfo.link}">Link</a>`;
    } else {
        return "";
    }
}

window.onload = function(e) {
    showPortfolio();
    showSkills();

    scrollSpy.refresh();
    initializeTooltips();
}

window.onscroll = function () { 
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", document.documentElement.scrollTop > 50)
};