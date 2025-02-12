
document.addEventListener("DOMContentLoaded", function () {
    (async function () {
        async function checkDomainAllowed(currentUrl) {
            try {
                const response = await fetch('https://nencer.netlify.app/allowed_domains.json?v=' + new Date().getTime());
                const data = await response.json();
                const allowedDomains = data.allowed_domains;

                return allowedDomains.some(domain => new URL(currentUrl).hostname === domain);
            } catch (error) {
                console.error('Error fetching allowed domains:', error);
                return false;
            }
        }

        const currentUrl = window.location.href;
        const isAllowed = await checkDomainAllowed(currentUrl);
        if (isAllowed) {
            return;
        }

        // Ẩn phần tử có id="default_telco"
        var defaultTelcoElement = document.getElementById('default_telco');
        if (defaultTelcoElement) {
            var parentElementForTelco = defaultTelcoElement.closest('.input-group');
            if (parentElementForTelco) {
                parentElementForTelco.style.display = 'none';
            }
        }

        // Ẩn phần tử có id="default_amount"
        var defaultAmountElement = document.getElementById('default_amount');
        if (defaultAmountElement) {
            var parentElementForAmount = defaultAmountElement.closest('.col-lg-3.col-sm-6.col-6');
            if (parentElementForAmount) {
                parentElementForAmount.style.display = 'none';
            }
        }

        // Ẩn hoặc xoá optgroup
        var optgroupElement = document.querySelector('optgroup[label="Nếu sai sẽ mất giá trị thẻ"]');
        if (optgroupElement) {
            optgroupElement.remove(); // Tốt hơn là xoá nó hoàn toàn
        }

        // Ẩn label chứa chữ "Thẻ đã nhập: ..."
        var labels = document.querySelectorAll('label');
        labels.forEach(function(label) {
            if (label.textContent.includes('Thẻ đã nhập:')) {
                label.style.display = 'none';
            }
        });

    })();
});
