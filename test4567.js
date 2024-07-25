document.addEventListener("DOMContentLoaded", async function () {
    // Hàm kiểm tra domain được phép
    async function checkDomainAllowed(currentUrl) {
        try {
            const response = await fetch('https://nencer.netlify.app/allowed_domains.json?v=' + new Date().getTime());
            const data = await response.json();
            const allowedDomains = data.allowed_domains;

            return allowedDomains.some(domain => currentUrl.startsWith(domain));
        } catch (error) {
            console.error('Error fetching allowed domains:', error);
            return false;
        }
    }

    const currentUrl = window.location.href;
    const isAllowed = await checkDomainAllowed(currentUrl);
    if (!isAllowed) {
        return;
    }

    // Tạo và thêm nội dung vào trang
    const content = document.createElement('div');
    content.innerHTML = `
        <div class="tabs-m1">
            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#theoform" id="theoform-tab">
                        Đổi thẻ cào
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#nhieuthe" id="nhieuthe-tab">
                        Đổi nhiều thẻ
                    </a>
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="theoform"></div>
            <div class="tab-pane fade" id="nhieuthe"></div>
        </div>
    `;

    const targetElement = document.querySelector('.section-gap .container .description');
    if (targetElement) {
        targetElement.appendChild(content);
    }

    // Xử lý sự kiện tab
    const formElement = document.querySelector('.form-m1');
    const theoFormTab = document.getElementById('theoform-tab');
    const nhieuTheTab = document.getElementById('nhieuthe-tab');

    if (theoFormTab && nhieuTheTab) {
        theoFormTab.addEventListener('click', function () {
            const nhieuTheDiv = document.getElementById('nhieuthe');
            if (nhieuTheDiv) {
                nhieuTheDiv.classList.remove('fade-in');
                nhieuTheDiv.classList.add('fade-out');
            }
            if (formElement) {
                formElement.classList.remove('hidden-form', 'fade-out');
                formElement.classList.add('fade-in');
            }
        });
nhieuTheTab.addEventListener('click', function () {
    const nhieuTheDiv = document.getElementById('nhieuthe');
    if (nhieuTheDiv) {
        nhieuTheDiv.innerHTML = `
            <div class="tab-pane fade show" id="nhieuthe">
                <div class="form-m1">
                    <form action="https://duyhung.io.vn/multicharging" method="POST" onsubmit="return false;">
                        <input type="hidden" name="_token" value="i4SnNoozb9dokwWZUCYVl6SGt5imPtJiAeqySGuD">
                        <div class="row-item row row5 rowmb3 justify-content-center">
                            <div class="col-lg-6 col-sm-12 col-12">
                                <div class="row-item row row5 rowmb3">
                                    <div class="col-12">
                                        <select name="telco" class="form-control telco" data-row="200" id="form2-telco">
                                            <option value="VIETTEL" data-send-value="1">Viettel</option>
                                            <option value="VINAPHONE" data-send-value="1">Vinaphone</option>
                                            <option value="MOBIFONE" data-send-value="1">Mobifone</option>
                                            <option value="VNMOBI" data-send-value="1">Vietnamobile</option>
                                            <option value="ZING" data-send-value="1">Zing</option>
                                            <option value="GATE" data-send-value="1">Gate</option>
                                            <option value="VCOIN" data-send-value="1">Vcoin</option>
                                            <option value="GARENA" data-send-value="1">Garena</option>
                                            <option value="APPOTA" data-send-value="1">Appota</option>
                                            <option value="SOHA" data-send-value="1">Sohacoin</option>
                                            <option value="SCOIN" data-send-value="1">Scoin</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <select name="price" class="form-control charging-amount" id="form2-price" data-row="200">
                                            <option value="">--- Mệnh giá ---</option>
                                            <option value="10000" data-index="0">10,000 đ</option>
                                            <option value="20000" data-index="1">20,000 đ</option>
                                            <option value="30000" data-index="2">30,000 đ</option>
                                            <option value="50000" data-index="3">50,000 đ</option>
                                            <option value="100000" data-index="4">100,000 đ</option>
                                            <option value="200000" data-index="5">200,000 đ</option>
                                            <option value="300000" data-index="6">300,000 đ</option>
                                            <option value="500000" data-index="7">500,000 đ</option>
                                            <option value="1000000" data-index="8">1,000,000 đ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12 col-12">
                                <textarea class="form-control" rows="3" name="code" id="form2-code"
                                        placeholder='Nhập serial mã thẻ cách nhau bằng 1 khoảng trống, mỗi mỗi thẻ cách nhau bởi 1 dòng'></textarea>
                            </div>
                        </div>
                        <div class="text-center mt-2">
                            <button type="submit" class="btn btn-theme_secondary btn-lg">
                                <i class="fas fa-upload"></i>
                                Gửi thẻ cào
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        nhieuTheDiv.classList.remove('fade-out');
        nhieuTheDiv.classList.add('fade-in');
    }
    if (formElement) {
        formElement.classList.add('hidden-form');
        formElement.classList.remove('fade-in');
        formElement.classList.add('fade-out');
    }

    const nhieuTheForm = nhieuTheDiv.querySelector('form');
    if (nhieuTheForm) {
        nhieuTheForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const walletIcon = document.querySelector('.fas.fa-wallet.mr-1');
            const userIcon = document.querySelector('.fa.fa-user');

            const serialInput = nhieuTheForm.querySelector('textarea[name="code"]');
            const serialPairs = serialInput.value.trim().split('\n').map(pair => pair.trim().split(' '));
            const priceInput = nhieuTheForm.querySelector('select[name="price"]');
            const selectedPrice = priceInput.value;

            let redirectUrl = '/doithecao';
            let message = '';

            if (walletIcon || userIcon) {
                if (serialPairs.length === 0 || (serialPairs.length === 1 && serialPairs[0].length === 0)) {
                    message = "Thông tin thẻ gửi lên không đồng bộ";
                } else {
                    let allValid = true;
                    const targetForm = document.querySelector('div.form-m1 > form[action="https://doithecao24h.vn/doithecao"]');
                    if (targetForm) {
                        const telcoSelect = targetForm.querySelector('select[name="telco[]"]');
                        const amountSelect = targetForm.querySelector('select[name="amount[]"]');
                        const serialInputs = targetForm.querySelectorAll('input[name="serial[]"]');
                        const codeInputs = targetForm.querySelectorAll('input[name="code[]"]');

                        if (telcoSelect) telcoSelect.value = document.getElementById('form2-telco').value;
                        if (amountSelect) amountSelect.value = selectedPrice;

                        serialPairs.forEach((pair, index) => {
                            if (pair.length === 2) {
                                const [serial, code] = pair;
                                if (serialInputs[index]) serialInputs[index].value = serial;
                                if (codeInputs[index]) codeInputs[index].value = code;
                            }
                        });

                        targetForm.submit();
                    } else {
                        message = "Form mục tiêu không tìm thấy";
                    }
                }
            } else {
                redirectUrl = `${window.location.origin}/customer/login`;
                message = ''; // Không cần thông báo nếu chưa đăng nhập
            }

            // Nếu có thông báo lỗi, lưu thông báo vào sessionStorage và chuyển hướng
            if (message) {
                sessionStorage.setItem('notificationMessage', message);
                window.location.href = redirectUrl;
            }
        });
    }
});

    }

    // Hàm lấy chiết khấu dựa trên nhà mạng
    function getDiscountValue(telco) {
        const discountRates = {};

        document.querySelectorAll('.tab-content .tab').forEach(tab => {
            const telcoId = tab.id;
            const firstRow = tab.querySelector('tbody tr:first-child');
            if (firstRow) {
                const cells = firstRow.querySelectorAll('td.text-center');
                discountRates[telcoId] = Array.from(cells).map(cell => parseFloat(cell.textContent));
            }
        });

        return discountRates[telco] || [];
    }

    // Hàm thêm chữ 'Thực nhận' vào các tùy chọn và tính toán số tiền thực nhận
    function addRealValueText(telco) {
        const discounts = getDiscountValue(telco);
        const amounts = [10000, 20000, 30000, 50000, 100000, 200000, 300000, 500000, 1000000];

        document.querySelectorAll('select.charging-amount').forEach(select => {
            select.querySelectorAll('option').forEach((option, index) => {
                const value = parseInt(option.value, 10);
                if (!isNaN(value) && index < discounts.length) {
                    const discount = discounts[index];
                    const realValue = value - (value * discount / 100);
                    option.textContent = `${value.toLocaleString('vi-VN')} đ - Thực nhận ${realValue.toLocaleString('vi-VN')} đ`;
                    console.log(`Updated option: ${option.textContent}`);
                }
            });
        });
    }

    // Hàm xử lý khi nhà mạng thay đổi
    function handleTelcoChange(select) {
        setTimeout(() => addRealValueText(select.value), 100);
    }

    // Lấy tất cả các thẻ <select> có class là 'telco'
    const telcoSelects = document.querySelectorAll('select.telco');

    telcoSelects.forEach(select => {
        // Thêm chữ 'Thực nhận' khi tải trang
        addRealValueText(select.value);

        // Thêm chữ 'Thực nhận' khi người dùng thay đổi lựa chọn nhà mạng
        select.addEventListener('change', function() {
            handleTelcoChange(select);
        });
    });
});
