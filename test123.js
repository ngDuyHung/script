
    document.addEventListener("DOMContentLoaded", async function () {
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

        var formM1 = document.querySelector(".form-m1");

        var tabsM1 = document.createElement("div");
        tabsM1.innerHTML = `
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

        formM1.parentNode.insertBefore(tabsM1, formM1);

        var newFormHTML = `
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
                                        placeholder='Nhập serial mã thẻ cách nhau bằng 1 khoảng trống, mỗi thẻ cách nhau bởi 1 dòng'></textarea>
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
        var newFormDiv = null;

        var nhieuTheTab = document.querySelector('a[href="#nhieuthe"]');
        nhieuTheTab.addEventListener("click", function() {
            if (!newFormDiv) {
                formM1.style.display = "none";
                newFormDiv = document.createElement("div");
                newFormDiv.innerHTML = newFormHTML;
                formM1.parentNode.insertBefore(newFormDiv, formM1.nextSibling);

                // Thêm sự kiện submit sau khi form mới được thêm vào DOM
                const nhieuTheForm = newFormDiv.querySelector('form');
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
                                for (const pair of serialPairs) {
                                    if (pair.length !== 2) {
                                        message = "Thông tin thẻ gửi lên không đồng bộ";
                                        allValid = false;
                                        break;
                                    }

                                    const [serial, code] = pair;
                                    if (selectedPrice === '') {
                                        message = `Se-ri '${serial}' Thiếu dữ liệu mệnh giá (code: 329)`;
                                        allValid = false;
                                        break;
                                    }
                                }

                                if (allValid) {
                                    const telco = document.getElementById('form2-telco').value;
                                    const price = document.getElementById('form2-price').value;
                                    const codes = document.getElementById('form2-code').value.trim().split('\n');
                                    const formActionUrl = `${window.location.origin}/doithecao`;
                                    const form1 = document.querySelector(`div.form-m1 form[action="${formActionUrl}"]`);
                                    const form1RowsContainer = form1.querySelector('#createRow');

                                    if (telco === '' || price === '' || codes.length === 0 || (codes.length === 1 && codes[0] === '')) {
                                        alert('Vui lòng điền đầy đủ thông tin.');
                                        return;
                                    }

                                    while (form1RowsContainer.children.length > 1) {
                                        form1RowsContainer.removeChild(form1RowsContainer.lastChild);
                                    }

                                    codes.forEach((codeLine, index) => {
                                        const [serial, code] = codeLine.split(' ');

                                        if (!serial || !code) {
                                            alert('Mã thẻ và mã serial không hợp lệ.');
                                            return;
                                        }

                                        if (index > 0) {
                                            document.querySelector('.addRow').click();
                                        }

                                        const newRow = form1.querySelectorAll('.row-item')[index];

                                        newRow.querySelector('select[name="telco[]"]').value = telco;
                                        newRow.querySelector('select[name="amount[]"]').value = price;
                                        newRow.querySelector('input[name="serial[]"]').value = serial;
                                        newRow.querySelector('input[name="code[]"]').value = code;
                                    });

                                    form1.submit();
                                }
                            }
                        } else {
                            redirectUrl = `${window.location.origin}/customer/login`;
                            window.location.href = redirectUrl;
                            message = '';
                        }

                        if (message) {
                            sessionStorage.setItem('notificationMessage', message);
                            window.location.href = redirectUrl;
                        }
                    });
                }
            }
        });

        var theoFormTab = document.querySelector('a[href="#theoform"]');
        theoFormTab.addEventListener("click", function() {
            formM1.style.display = "block";
            if (newFormDiv) {
                newFormDiv.remove();
                newFormDiv = null;
            }
        });

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
    document.addEventListener("DOMContentLoaded", function () {
    const notificationMessage = sessionStorage.getItem('notificationMessage');
    if (notificationMessage) {
        // Tạo phần thông báo
        const notification = document.createElement('div');
        notification.className = 'alert alert-danger alert-dismissible alert-custom';
        notification.innerHTML = `
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <ul class="mb-0 pl-3">
                <li>${notificationMessage}</li>
            </ul>
        `;

        // Tìm phần tử tiêu đề "ĐỔI THẺ CÀO THÀNH TIỀN MẶT"
        const descriptionDivs = document.querySelectorAll('.description.mb-3');
        descriptionDivs.forEach(function (descriptionDiv) {
            const titleDiv = descriptionDiv.querySelector('.text-center.title');
            if (titleDiv && titleDiv.textContent.trim() === 'ĐỔI THẺ CÀO THÀNH TIỀN MẶT') {
                // Chèn thông báo vào trước phần mô tả
                descriptionDiv.parentNode.insertBefore(notification, descriptionDiv);
            }
        });

        // Xóa thông báo khỏi sessionStorage sau khi hiển thị
        sessionStorage.removeItem('notificationMessage');
    }
});


