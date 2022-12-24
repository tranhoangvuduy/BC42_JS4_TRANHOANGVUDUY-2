// BT5:  TÍNH NGÀY, THÁNG, NĂM.
// NGÀY HÔM QUA

document.getElementById('btnNgayHomQua').onclick = function () {
    // input:
    let ngay = document.getElementById('date').value;
    let thang = document.getElementById('month').value;
    let nam = document.getElementById('year').value;
    let namNhuan = 0;
    let Yesterday = String(ngay - 1) + "-" + String(thang) + "-" + String(nam);
    // Progress:
    if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0) {
        namNhuan = nam;
    }

    // KIỂM TRA NGÀY ĐẦU THÁNG
    if (ngay == 1 && thang == 5 || thang == 7 || thang == 10 || thang == 12) {
        Yesterday = "30" + "-" + String(thang - 1) + "-" + String(nam);
    } else if (ngay == 1 && thang == 1 || thang == 2 || thang == 4 || thang == 6 || thang == 8 || thang == 9 || thang == 11) {
        Yesterday = "31" + "-" + String(thang - 1) + "-" + String(nam);
    } else if (ngay == 1 && thang == 3 && namNhuan) {
        Yesterday = "29" + "-" + "2" + "-" + String(nam);

    } else {
        Yesterday = "28" + "-" + "2" + "-" + String(nam);
    }
    if (ngay == 1 && thang == 1) {
        Yesterday = "31" + "-" + "12" + "-" + String(nam - 1);
    } else if (ngay != 1) {
        Yesterday = String(ngay - 1) + "-" + String(thang) + "-" + String(nam);
    }
    // Output:
    document.getElementById('ngayThangNam').innerHTML = Yesterday;





}
// NGÀY MAI:

document.getElementById('btnNgayMai').onclick = function () {
    // input:
    let ngay = document.getElementById('date').value;
    let thang = document.getElementById('month').value;
    let nam = document.getElementById('year').value;
    let namNhuan = 0;
    let Tomorrow = String(+ngay + 1) + "-" + String(thang) + "-" + String(nam);
    // Progress:
    if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0) {
        namNhuan = nam;
    }
    // KIỂM TRA NGÀY CUỐI THÁNG
    if (ngay == 31 && thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        Tomorrow = "1" + "-" + String(+thang + 1) + "-" + String(nam);

    } else if (ngay == 30 && thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        Tomorrow = "1" + "-" + String(+thang + 1) + "-" + String(nam);
    } else if (thang == 2) {
        if (ngay == 29 && namNhuan) {
            Tomorrow = "1" + "-" + "3" + "-" + String(nam);


        } else if (ngay == 28) {
            Tomorrow = "1" + "-" + "3" + "-" + String(nam);

        }

    }
    if (ngay == 31 && thang == 12) {
        Tomorrow = "1" + "-" + "1" + "-" + String(+nam + 1);

    } else if (ngay != 28 && ngay != 29 && ngay != 30 && ngay != 31) {
        Tomorrow = String(+ngay + 1) + "-" + String(thang) + "-" + String(nam);

    }

    document.getElementById('ngayThangNam').innerHTML = Tomorrow;

}
// BT6 : TÍNH SỐ NGÀY CỦA THÁNG VÀ NĂM
document.getElementById('btnTinhNgay').onclick = function () {
    // input:
    let ngay = 0;

    let thang = document.getElementById('mot').value;
    let nam = document.getElementById('hai').value;
    let namNhuan = 0;

    // XÉT ĐIỀU KIỆN CỦA NĂM NHUẦN.

    if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0) {
        namNhuan = nam;

    }
    // XÉT THÁNG CÓ 28, 29, 30, 31 NGÀY.

    if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        ngay = 31;
    } else if (thang == 2) {
        if (namNhuan) {
            ngay = 29;
        } else {
            ngay = 28;
        }
    } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        ngay = 30;
    }
    document.getElementById('kqBt6').innerHTML = 'Số ngày là:' + ngay;













}

// BT7:  Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.

document.getElementById('btnDocSo').onclick = function () {
    // input:
    let soNguyen = +document.getElementById('layDuLieu').value;
    let ketqua = '';
    let tram = Math.floor(soNguyen / 100);
    let chuc = Math.floor(soNguyen % 100 / 10);
    let donvi = soNguyen % 10;

    // Progress:
    if (soNguyen < 100 || soNguyen > 999) {
        alert('dữ liệu không hợp lệ');

    } else {
        // Hàng trăm
        if (tram == 1) {
            tram = 'một trăm';
        } else if (tram == 2) {
            tram = 'hai trăm';

        } else if (tram == 3) {
            tram = 'ba trăm';

        } else if (tram == 4) {
            tram = 'bốn trăm';

        } else if (tram == 5) {
            tram = 'năm trăm';

        } else if (tram == 6) {
            tram = 'sáu trăm';

        } else if (tram == 7) {
            tram = 'bảy trăm';

        } else if (tram == 8) {
            tram = 'tám trăm';

        } else if (tram == 9) {
            tram = 'chín trăm';

        }
        // Hàng chục
        // if(donvi == 0){
        //     chuc = '';
        // } else
        if (chuc == 0) {
            chuc = 'lẻ';
        } else if (chuc == 1) {
            chuc = 'mười';

        } else if (chuc == 2) {
            chuc = 'hai mươi';

        } else if (chuc == 3) {
            chuc = 'ba mươi';

        } else if (chuc == 4) {
            chuc = 'bốn mươi';

        } else if (chuc == 5) {
            chuc = 'năm mươi';

        } else if (chuc == 6) {
            chuc = 'sáu mươi';

        } else if (chuc == 7) {
            chuc = 'bảy mươi';

        } else if (chuc == 8) {
            chuc = 'tám mươi';

        } else if (chuc == 9) {
            chuc = 'chín mươi';

        }


        // Hàng đơn vị
        if (donvi == 0) {
            donvi = '';
        } else if (donvi == 1) {
            donvi = 'một';

        } else if (donvi == 2) {
            donvi = 'hai';

        } else if (donvi == 3) {
            donvi = 'ba';

        } else if (donvi == 4) {
            donvi = 'bốn';

        } else if (donvi == 5) {
            donvi = 'lăm';

        } else if (donvi == 6) {
            donvi = 'sáu';

        } else if (donvi == 7) {
            donvi = 'bảy';

        } else if (donvi == 8) {
            donvi = 'tám';

        } else if (donvi == 9) {
            donvi = 'chín';

        }




    }


    // Output:

    ketqua = tram + " " + chuc + " " + donvi;
    document.getElementById('kqBt7').innerHTML = ketqua;















}

// BT8: TÌM SINH VIÊN XA TRƯỜNG NHẤT

document.getElementById('btnTim').onclick = function () {
    // Sinh viên 1:
    let name1 = document.getElementById('sinhVien1').value;
    let X1 = +document.getElementById('xX1').value;
    let Y1 = +document.getElementById('yY1').value;

    // Sinh viên 2:
    let name2 = document.getElementById('sinhVien2').value;
    let X2 = +document.getElementById('xX2').value;
    let Y2 = +document.getElementById('yY2').value;

    // Sinh viên 3:
    let name3 = document.getElementById('sinhVien3').value;
    let X3 = +document.getElementById('xX3').value;
    let Y3 = +document.getElementById('yY3').value;

    // Trường học:

    let X4 = +document.getElementById('xX4').value;
    let Y4 = +document.getElementById('yY4').value;

    //  progress

    let d1 = Math.sqrt((X4 - X1) * (X4 - X1) + (Y4 - Y1) * (Y4 - Y1));
    let d2 = Math.sqrt((X4 - X2) * (X4 - X2) + (Y4 - Y2) * (Y4 - Y2));
    let d3 = Math.sqrt((X4 - X3) * (X4 - X3) + (Y4 - Y3) * (Y4 - Y3));
    let ketQua = '';
    //  console.log('d1 =',  d1, 'd2 =',  d2, 'd3 =',  d3)
    if (d1 > d2 && d1 > d3) {
        ketQua = name1;

    } else if (d2 > d1 && d2 > d3) {
        ketQua = name2;

    } else if (d3 > d1 && d3 > d2) {
        ketQua = name3;
    }
    document.getElementById('kqBt8').innerHTML = 'Sinh viên xa trường nhất :' + ketQua;
    console.log('sinh viên xa trường nhất:', ketQua);



}









































// // BT6 : TÍNH SỐ NGÀY CỦA THÁNG VÀ NĂM
// document.getElementById('btnTinhNgay').onclick = function () {
//     // input:
//     let ngay = 0;

//     let thang = document.getElementById('mot').value;
//     let nam = document.getElementById('hai').value;
//     let namNhuan = 0;

//     // XÉT ĐIỀU KIỆN CỦA NĂM NHUẦN.

//     if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0) {
//         namNhuan = nam;

//     }
//     // XÉT THÁNG CÓ 28, 29, 30, 31 NGÀY.

//     if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
//         ngay = 31;
//     } else if (thang == 2) {
//         if (namNhuan) {
//             ngay = 29;
//         } else {
//             ngay = 28;
//         }
//     } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
//         ngay = 30;
//     }
//     document.getElementById('kqBt6').innerHTML = 'Số ngày là:' + ngay;













// }

// // BT7:  Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.

// document.getElementById('btnDocSo').onclick = function () {
//     // input:
//     let soNguyen = +document.getElementById('layDuLieu').value;
//     let ketqua = '';
//     let tram = Math.floor(soNguyen / 100);
//     let chuc = Math.floor(soNguyen % 100 / 10);
//     let donvi = soNguyen % 10;

//     // Progress:
//     if (soNguyen < 100 || soNguyen > 999) {
//         alert('dữ liệu không hợp lệ');

//     } else {
//         // Hàng trăm
//         if (tram == 1) {
//             tram = 'một trăm';
//         } else if (tram == 2) {
//             tram = 'hai trăm';

//         } else if (tram == 3) {
//             tram = 'ba trăm';

//         } else if (tram == 4) {
//             tram = 'bốn trăm';

//         } else if (tram == 5) {
//             tram = 'năm trăm';

//         } else if (tram == 6) {
//             tram = 'sáu trăm';

//         } else if (tram == 7) {
//             tram = 'bảy trăm';

//         } else if (tram == 8) {
//             tram = 'tám trăm';

//         } else if (tram == 9) {
//             tram = 'chín trăm';

//         }
//         // Hàng chục
//         // if(donvi == 0){
//         //     chuc = '';
//         // } else
//         if (chuc == 0) {
//             chuc = 'lẻ';
//         } else if (chuc == 1) {
//             chuc = 'mười';

//         } else if (chuc == 2) {
//             chuc = 'hai mươi';

//         } else if (chuc == 3) {
//             chuc = 'ba mươi';

//         } else if (chuc == 4) {
//             chuc = 'bốn mươi';

//         } else if (chuc == 5) {
//             chuc = 'năm mươi';

//         } else if (chuc == 6) {
//             chuc = 'sáu mươi';

//         } else if (chuc == 7) {
//             chuc = 'bảy mươi';

//         } else if (chuc == 8) {
//             chuc = 'tám mươi';

//         } else if (chuc == 9) {
//             chuc = 'chín mươi';

//         }


//         // Hàng đơn vị
//         if (donvi == 0) {
//             donvi = '';
//         } else if (donvi == 1) {
//             donvi = 'một';

//         } else if (donvi == 2) {
//             donvi = 'hai';

//         } else if (donvi == 3) {
//             donvi = 'ba';

//         } else if (donvi == 4) {
//             donvi = 'bốn';

//         } else if (donvi == 5) {
//             donvi = 'lăm';

//         } else if (donvi == 6) {
//             donvi = 'sáu';

//         } else if (donvi == 7) {
//             donvi = 'bảy';

//         } else if (donvi == 8) {
//             donvi = 'tám';

//         } else if (donvi == 9) {
//             donvi = 'chín';

//         }




//     }


//     // Output:

//     ketqua = tram + " " + chuc + " " + donvi;
//     document.getElementById('kqBt7').innerHTML = ketqua;















// }

// // BT8: TÌM SINH VIÊN XA TRƯỜNG NHẤT

// document.getElementById('btnTim').onclick = function () {
//     // Sinh viên 1:
//     let name1 = document.getElementById('sinhVien1').value;
//     let X1 = +document.getElementById('xX1').value;
//     let Y1 = +document.getElementById('yY1').value;

//     // Sinh viên 2:
//     let name2 = document.getElementById('sinhVien2').value;
//     let X2 = +document.getElementById('xX2').value;
//     let Y2 = +document.getElementById('yY2').value;

//     // Sinh viên 3:
//     let name3 = document.getElementById('sinhVien3').value;
//     let X3 = +document.getElementById('xX3').value;
//     let Y3 = +document.getElementById('yY3').value;

//     // Trường học:

//     let X4 = +document.getElementById('xX4').value;
//     let Y4 = +document.getElementById('yY4').value;

//     //  progress

//     let d1 = Math.sqrt((X4 - X1) * (X4 - X1) + (Y4 - Y1) * (Y4 - Y1));
//     let d2 = Math.sqrt((X4 - X2) * (X4 - X2) + (Y4 - Y2) * (Y4 - Y2));
//     let d3 = Math.sqrt((X4 - X3) * (X4 - X3) + (Y4 - Y3) * (Y4 - Y3));
//     let ketQua = '';
//     //  console.log('d1 =',  d1, 'd2 =',  d2, 'd3 =',  d3)
//     if (d1 > d2 && d1 > d3) {
//         ketQua = name1;

//     } else if (d2 > d1 && d2 > d3) {
//         ketQua = name2;

//     } else if (d3 > d1 && d3 > d2) {
//         ketQua = name3;
//     }
//     document.getElementById('kqBt8').innerHTML = 'Sinh viên xa trường nhất :' + ketQua;
//     console.log('sinh viên xa trường nhất:', ketQua);



// }


