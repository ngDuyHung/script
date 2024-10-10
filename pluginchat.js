
const styleContent = ` 


    @keyframes zoom {
        0% {
            transform: scale(.5);
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        to {
            opacity: 0;
            transform: scale(1);
        }
    }

    @keyframes lucidgentelegram {

        0%,
        to {
            transform: rotate(-25deg);
        }

        50% {
            transform: rotate(25deg);
        }
    }

    .jscroll-to-top {
        bottom: 100px;
    }

    .pluginchat-telegram-ben-trong-nut svg path {
        fill: #fff;
    }

    .pluginchat-telegram-vi-tri-nut {
        position: fixed;
        bottom: 24px;
        right: 20px;
        z-index: 999;
    }

    .pluginchat-telegram-nen-nut,
    .pluginchat-telegram-mess {
        box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16);
         box-shadow: 0 0 10px var(--primary-color);
    }

    .pluginchat-telegram-nen-nut {
        width: 50px;
        height: 50px;
        text-align: center;
        color: #fff;
         background: url('https://doithe1s.vn/storage/userfiles/images/zalo.png') no-repeat center center; /* Thay đổi ở đây */
    background-size: contain; /* Để hình ảnh phủ toàn bộ nút */
        border-radius: 50%;
        border: 2px solid var(--primary-color); /* Thay đổi màu viền ở đây */
        box-shadow: 0 0 10px #C0C0C0;
        position: relative;
        cursor: pointer;
          display: flex; /* Để căn giữa biểu tượng */
    align-items: center; /* Căn giữa theo chiều dọc */
    justify-content: center; /* Căn giữa theo chiều ngang */
    transition: background 0.5s ease; /* Hiệu ứng chuyển tiếp cho nền */
    }

.pluginchat-telegram-nen-nut i {
    transition: transform 0.5s ease; /* Hiệu ứng chuyển tiếp cho biểu tượng */
}

    .pluginchat-telegram-nen-nut::after,
    .pluginchat-telegram-nen-nut::before {
        content: "";
        position: absolute;
        border: 1px solid #fff;
        background: var(--primary-color);/* màu phát quang */ 
        z-index: -1;
        left: -20px;
        right: -20px;
        top: -20px;
        bottom: -20px;
        border-radius: 50%;
        animation: zoom 1.9s linear infinite;
    }

    .pluginchat-telegram-nen-nut::after {
        animation-delay: .4s;
    }

    .pluginchat-telegram-ben-trong-nut,
    .pluginchat-telegram-ben-trong-nut i {
        transition: all 1s;
    }

  

    .pluginchat-telegram-ben-trong-nut i {
        animation: lucidgentelegram 1s linear infinite;
    }

    .pluginchat-telegram-nen-nut:hover .pluginchat-telegram-ben-trong-nut,
    .pluginchat-telegram-text {
        opacity: 0;
    }

    .pluginchat-telegram-nen-nut:hover i {
        transform: scale(.5);
        transition: all .5s ease-in;
    }

    .pluginchat-telegram-text a {
        text-decoration: none;
        color: #fff;
    }

    .pluginchat-telegram-text {
        position: absolute;
        top: 6px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        transform: scaleX(-1);
        transition: all .5s;
        line-height: 1.5;
         color: #3333ff; /* Màu chữ mới */
    text-shadow: 0 0 5px #3333ff, 0 0 10px #3333ff, 0 0 15px #3333ff; /* Hiệu ứng phát quang */
    }

    .pluginchat-telegram-nen-nut:hover .pluginchat-telegram-text {
        transform: scaleX(1);
        opacity: 1;
        
    }

    .pluginchat-telegram-mess {
        position: fixed;
        bottom: 29px;
        right: 58px;
        z-index: 99;
        background: #fff; /* màu nên text ngoài*/
        padding: 7px 25px 7px 15px;
        color: #3a9140;
        border-radius: 50px 0 0 50px;
        font-weight: 700;
        font-size: 15px;
    }

    .pluginchat-telegram-mess span {
        color: #000000 !important; /* màu chữ lh ht*/
    }

    span#pluginchat-telegram-tracking {
        font-family: Roboto;
        line-height: 1.5;
    }

    .pluginchat-telegram-text {
        font-family: Roboto;
    }

    /* New styles for the additional buttons */
    .contact-option-pluginchatt {
        display: none;
        flex-direction: column;
        gap: 10px;
        position: fixed;
        bottom: 80px;
        /* Position above the main button */
        right: 20px;
        z-index: 999;
        margin-bottom: 10px;
    }

    .contact-option-pluginchat {
        display: flex;
        align-items: center;
        background: #fff;
        
        color: #000000; /* màu chữ khi nhấn vào trong nút*/
        padding: 5px 15px;
        border-radius: 50px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16);
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s;
        box-shadow: 0 0 10px var(--primary-color);
    }

    .contact-option-pluginchat:hover {
        background: #f0f0f0;
        
    }

    .contact-option-pluginchat i {
        margin-right: 10px;
        
    }

    @keyframes rotateShake {

        0%,
        100% {
            transform: rotate(0deg);
        }

        10%,
        30% {
            transform: rotate(-10deg);
        }

        20%,
        40% {
            transform: rotate(10deg);
        }
    }

    .contact-option-pluginchat img {
        display: inline-block;
        animation: rotateShake 0.7s ease-in-out infinite, borderPulse 2s infinite;
        transition: transform 0.3s ease-in-out;
    }

    @keyframes borderPulse {
        0% {
            box-shadow: 0 0 5px #0066ff;
        }

        50% {
            box-shadow: 0 0 20px #0066ff;
        }

        100% {
            box-shadow: 0 0 5px #0066ff;
        }
    }

    .contact-option-pluginchat img {
        border-radius: 50%;
        border: 1px solid #0066ff;
    }
    
    `;

  // Tạo thẻ <style> và thêm CSS vào trang
const styleElement = document.createElement('style');
styleElement.textContent = styleContent;
document.head.appendChild(styleElement);

  function toggleOptions() {
        const options = document.getElementById('contactOptions');
        options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
    }
    


    const images = [
        'https://i.imgur.com/hxLmCcD.jpeg', // Đường dẫn hình ảnh 1
        'https://i.imgur.com/XE60rrO.png', // Đường dẫn hình ảnh 2
        'https://i.imgur.com/aeeTsjp.png'  // Đường dẫn hình ảnh 3
    ];

    let currentIndex = 0;

    function changeImage() {
        const button = document.getElementById('dynamicButton');
        button.style.backgroundImage = `url('${images[currentIndex]}')`;
        
        currentIndex = (currentIndex + 1) % images.length; // Chuyển đổi chỉ số
    }

    // Thay đổi hình ảnh mỗi 1 giây
    setInterval(changeImage, 1000);
    
    // Gọi hàm một lần để đặt hình ảnh ban đầu
    changeImage();
