 <style>
/* Ẩn tất cả các hàng trong bảng */
table.table-module tbody tr {
    display: none;
}
/* Hiển thị hàng thông báo */
table.table-module tbody tr.notification-row {
    display: table-row;
}
/* Hiển thị hàng thông báo */
table.table-module tbody tr.text-danger {
    display: table-row;
}
}
</style>

<style>
    @keyframes  doithecao24hvn {
        0%, 100% {
            opacity: 1; 
        }
        50% {
            opacity: 0; 
        }
    }

    .doithecao24hvn {
        animation: doithecao24hvn 0.5s infinite; 
    }
</style>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("table.table-module tbody").forEach(tbody => {
            let anyRowsVisible = false;

            // Duyệt qua tất cả các hàng trong bảng
            tbody.querySelectorAll("tr").forEach(row => {
                let firstCell = row.querySelector("td:first-child");
                if (firstCell && firstCell.classList.contains("text-danger")) {
                    row.style.display = "table-row"; // Hiển thị dòng có chữ màu đỏ
                    anyRowsVisible = true;
                }
            });

            // Nếu không có hàng nào được hiển thị, chèn dòng thông báo
            if (!anyRowsVisible) {
                const newRowHTML = `
                    <tr class="notification-row">
                        <td colspan="10">
                            <div class="text-xs-nowrap text-center font-weight-bold text-danger doithecao24hvn">Vui lòng đăng nhập để xem chiết khấu</div>
                        </td>
                    </tr>
                `;
                tbody.insertAdjacentHTML('beforeend', newRowHTML);

                // Hiển thị hàng thông báo
                tbody.querySelector('tr.notification-row').style.display = "table-row";
            }
        });
    });
</script>
