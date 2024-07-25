<div class="tab tab-pane fade" id="nhieuthe">
    <div class="form-m1">
        <form id="form2" action="https://doithecao.vn/multicharging" method="POST">
            <input type="hidden" name="_token" value="emMHNe1IW5VK5T4OT6hMsVa5gThBSd4G1rbE2UgA">
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
                            <select name="price" class="form-control charging-amount" data-row="200" id="form2-price">
                                <option value="">--- Mệnh giá ---</option>
                                <option value="10000" data-index="0">10,000 đ - Thực nhận 8,620 đ</option>
                                <option value="20000" data-index="1">20,000 đ - Thực nhận 17,080 đ</option>
                                <option value="30000" data-index="2">30,000 đ - Thực nhận 25,740 đ</option>
                                <option value="50000" data-index="3">50,000 đ - Thực nhận 42,700 đ</option>
                                <option value="100000" data-index="4">100,000 đ - Thực nhận 85,400 đ</option>
                                <option value="200000" data-index="5">200,000 đ - Thực nhận 170,800 đ</option>
                                <option value="300000" data-index="6">300,000 đ - Thực nhận 256,200 đ</option>
                                <option value="500000" data-index="7">500,000 đ - Thực nhận 431,500 đ</option>
                                <option value="1000000" data-index="8">1,000,000 đ - Thực nhận 863,000 đ</option>
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
                <button type="button" class="btn btn-theme_secondary btn-lg" id="submit-form2">
                    <i class="fas fa-upload"></i> Gửi thẻ cào
                </button>
            </div>
        </form>
    </div>
</div>

<script>
document.getElementById('submit-form2').addEventListener('click', function() {
    const telco = document.getElementById('form2-telco').value;
    const price = document.getElementById('form2-price').value;
    const codes = document.getElementById('form2-code').value.trim().split('\n');
    const form1 = document.querySelector('div.form-m1 form[action="https://doithecao24h.vn/doithecao"]');

    if (telco === '' || price === '' || codes.length === 0 || (codes.length === 1 && codes[0] === '')) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    codes.forEach((codeLine, index) => {
        const [serial, code] = codeLine.split(' ');

        if (!serial || !code) {
            alert('Mã thẻ và mã serial không hợp lệ.');
            return;
        }

        if (index > 0) {
            // Trigger the add row button to add more rows to form1
            document.querySelector('.addRow').click();
        }

        const newRow = form1.querySelectorAll('.row-item')[index];

        newRow.querySelector('select[name="telco[]"]').value = telco;
        newRow.querySelector('select[name="amount[]"]').value = price;
        newRow.querySelector('input[name="serial[]"]').value = serial;
        newRow.querySelector('input[name="code[]"]').value = code;
    });

    // Submit form1 after filling all data
    form1.submit();
});
</script>
