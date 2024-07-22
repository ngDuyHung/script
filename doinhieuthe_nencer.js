
async function checkDomainAllowed(currentUrl) {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/gh/ngDuyHung/script@main/allowed_domains.json?v=' + new Date().getTime());
        const data = await response.json();
        const allowedDomains = data.allowed_domains;

        return allowedDomains.some(domain => currentUrl.startsWith(domain));
    } catch (error) {
        console.error('Error fetching allowed domains:', error);
        return false;
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const currentUrl = window.location.href;
    const isAllowed = await checkDomainAllowed(currentUrl);
    if (!isAllowed) {
        return;
    }

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
                                                <select name="telco" class="form-control telco" data-row="200">
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
                                                <select name="price" class="form-control charging-amount" id="" data-row="200">
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
                                        <textarea class="form-control" rows="3" name="code"
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
                                if (serial.length < 10 || serial.length > 17 || code.length < 5) {
                                    message = `Se-ri '${serial}' Mã thẻ không đúng định dạng.`;
                                    allValid = false;
                                    break;
                                }
                            }

                            if (allValid) {
                                message = "Để tránh spam thẻ, mặc định chức năng đổi nhiều sẽ tắt, cần bật lại vui lòng liên hệ cskh";
                            }
                        }
                    } else {
                        redirectUrl = `${window.location.origin}/customer/login`;
                        message = ''; // Không cần thông báo nếu chưa đăng nhập
                    }

                    // Lưu thông báo vào sessionStorage và chuyển hướng
                    if (message) {
                        sessionStorage.setItem('notificationMessage', message);
                    }
                    setTimeout(() => {
                        window.location.href = redirectUrl;
                    }, 0);
                });
            }
        });
    }
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
