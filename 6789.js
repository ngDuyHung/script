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
        return;  // Dừng thực thi script nếu domain không được phép
    }

    // Your script logic here

    const imageUrls = {
        
        'https://doithecao24h.vn/recharge/mua-usdt-dtc24h': 'https://media0.giphy.com/media/euGq9pgXoOVJcVhwRF/giphy.webp?cid=ecf05e47qx8o68m5i5zvnah2ajncj5gm8fp107n0egnbwav6&ep=v1_gifs_search&rid=giphy.webp&ct=g',
        'https://doithecao24h.vn/recharge/nap-so': 'https://i.imgur.com/76Jf1n3.png',
        'https://doithecao24h.vn/recharge/nap-tien-dien-thoai': 'https://cdn-gop.garenanow.com/gop/app/0000/100/067/icon.png',
        'https://doithecao24h.vn/recharge/freefire': 'https://i.imgur.com/GmQMB5W.png'
    };

    const cardElements = document.querySelectorAll('.card-topup.card');
    cardElements.forEach(function(card) {
        const linkUrl = card.getAttribute('href');
        const cardImage = card.querySelector('.card-image img');

        if (cardImage && imageUrls.hasOwnProperty(linkUrl)) {
            cardImage.setAttribute('src', imageUrls[linkUrl]);
        }
    });    
});
