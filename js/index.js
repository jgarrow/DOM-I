const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('nav a');

navItems.forEach( (item, index) => {
  item.textContent = siteContent["nav"][`nav-item-${index+1}`];
  item.style.color = "green";
});

let nav = document.querySelector('nav');

let blogNavItem = document.createElement("A");
blogNavItem.textContent = "Blog";
nav.prepend(blogNavItem);
blogNavItem.style.color = "green";

let testimonialNavItem = document.createElement("A");
testimonialNavItem.textContent = "Testimonials";
nav.appendChild(testimonialNavItem);
testimonialNavItem.style.color = "green";

let codeSnippet = document.querySelector("#cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);

let codeSnippetMiddle = document.querySelector('#middle-img');
codeSnippetMiddle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// let headlineBox = document.querySelector(".cta-text");
// headlineBox.style.width = '20%';
let headlineContainer = document.createElement('div');
let headline = document.querySelector('.cta-text h1');
headline.textContent = siteContent['cta']['h1'];
// headlineContainer.appendChild(headline);
// headlineBox.prepend(headlineContainer);
// headlineContainer.style.width = '20%';
// headlineContainer.style.display = 'flex';
// headlineContainer.style.justifyContent = 'center';
// headlineContainer.style.alignItems = 'center';
headline.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");

let button = document.querySelector(".cta button");
button.textContent = siteContent["cta"]["button"];

let featuresHeader = document.querySelectorAll(".top-content h4")[0];
featuresHeader.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelectorAll(".top-content p")[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutHeader = document.querySelectorAll(".top-content h4")[1];
aboutHeader.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelectorAll(".top-content p")[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

let servicesHeader = document.querySelectorAll(".bottom-content h4")[0];
servicesHeader.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = document.querySelectorAll(".bottom-content p")[0];
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productHeader = document.querySelectorAll(".bottom-content h4")[1];
productHeader.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelectorAll(".bottom-content p")[1];
productContent.textContent = siteContent["main-content"]["product-content"];

let visionHeader = document.querySelectorAll(".bottom-content h4")[2];
visionHeader.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelectorAll(".bottom-content p")[2];
visionContent.textContent = siteContent["main-content"]["vision-content"];

let contactBox = document.querySelector('.contact');
contactBox.style.width = '20%';

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelectorAll(".contact p")[0];
contactAddress.textContent = siteContent["contact"]["address"];

let contactPhone = document.querySelectorAll(".contact p")[1];
contactPhone.textContent = siteContent["contact"]["phone"];

let contactEmail = document.querySelectorAll(".contact p")[2];
contactEmail.textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];



