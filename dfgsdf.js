async function fetchImageUrls() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/gh/ngDuyHung/script@main/imageurls.json');
        const imageUrls = await response.json();
        return imageUrls;
    } catch (error) {
        console.error('Error fetching image URLs:', error);
        return {};
    }
}

async function checkDomainAllowed(currentUrl) {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/gh/ngDuyHung/script@latest/allowed_domains.json?v=' + new Date().getTime());
        const data = await response.json();
        const allowedDomains = data.allowed_domains;

        const isAllowed = allowedDomains.some(domain => currentUrl.startsWith(domain));
        return isAllowed;
    } catch (error) {
        console.error('Error fetching allowed domains:', error);
        return false;
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const currentUrl = window.location.href;

    const isAllowed = await checkDomainAllowed(currentUrl);
    if (!isAllowed) {
        console.warn('Domain not allowed:', currentUrl);
        return;
    }

    const imageUrls = await fetchImageUrls(); // Fetch the image URLs from the external source

    const cardElements = document.querySelectorAll('.card-topup.card');
    cardElements.forEach(function(card) {
        const linkUrl = card.getAttribute('href');
        const cardImage = card.querySelector('.card-image img');

        if (cardImage && imageUrls.hasOwnProperty(linkUrl)) {
            cardImage.setAttribute('src', imageUrls[linkUrl]);
        }
    });    
});
