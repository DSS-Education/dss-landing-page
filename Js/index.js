const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);

window.onload = () => {
    vam('.loadweb').remove();
    vam('.video1412a1-content').setAttribute('style', 'animation: introwweb 3s linear forwards;')
};

vam('.openmenu').addEventListener('click', () => {
    vam('.header1412a2-nav-mb-wrap').setAttribute('style', 'transform: translateX(0)')
    vam('.bg').setAttribute('style', 'display:block')
})

vam('.clostmenu').addEventListener('click', () => {
    vam('.header1412a2-nav-mb-wrap').setAttribute('style', 'transform: translateX(100%)')
    vam('.bg').setAttribute('style', 'display:none')
})
vam('.bg').addEventListener('click', () => {
    vam('.header1412a2-nav-mb-wrap').setAttribute('style', 'transform: translateX(100%)')
    vam('.bg').setAttribute('style', 'display:none')
})

vam('#c661412b2-iframe_click').addEventListener('click', () => {
    vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
    vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
    var c661412b2Iframe = `<video autoplay loop width="100%" height="600px" style="object-position: top;" playsinline muted
    style="height: 600px !important;object-fit:cover;object-position:center;overflow-clip-margin: content-box;
overflow: clip;" ;>
    <source src="./photo/intro.mp4" type="video/mp4">
</video>`
    vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
    vam('.c661412b2-background_click').addEventListener('click', () => {
        vam('.c661412b2-background_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe').remove()
    })
})

vam('#c661412b2-iframe_click').addEventListener('click', () => {
    vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
    vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
    var c661412b2Iframe = `<video autoplay loop width="100%" height="600px" controls style="object-position: top;" playsinline muted
    style="height: 600px !important;object-fit:cover;object-position:center;overflow-clip-margin: content-box;
overflow: clip;" ;>
    <source src="./photo/intro.mp4" type="video/mp4">
</video>`
    vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
    vam('.c661412b2-background_click').addEventListener('click', () => {
        vam('.c661412b2-background_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe').remove()
    })
})

// vam('.c661412b1button-click').addEventListener('click', () => {
//     vam('.c661412b1-background_click').setAttribute('style', 'display:flex')
//     vam('.c661412b1-iframe_click').setAttribute('style', 'display:flex')
//     var c661412b1Iframe = `<video autoplay loop width="100%" height="600px" controls style="object-position: top;" playsinline muted
//     style="height: 600px !important;object-fit:cover;object-position:center;overflow-clip-margin: content-box;
// overflow: clip;" ;>
//     <source src="./photo/intro.mp4" type="video/mp4">
// </video>`
//     vam('.c661412b1-iframe_click').innerHTML = c661412b1Iframe
//     vam('.c661412b1-background_click').addEventListener('click', () => {
//         vam('.c661412b1-background_click').setAttribute('style', 'display:none')
//         vam('.c661412b1-iframe_click').setAttribute('style', 'display:none')
//         vam('.c661412b1-iframe').remove()
//     })
// })

vam("#formpay").addEventListener("submit", event => {
    // prevent submit
    event.preventDefault();

    // call as API
    const URL = "https://docs.google.com/forms/d/19d-vcbmuIdIyaKEaO-UXYJUj4jsYhcCwspaItD8JliY/formResponse";

    let formData = new URLSearchParams();
    formData.append('entry.444433036', document.querySelector("input[name='entry.444433036']").value);
    formData.append('entry.809420076', document.querySelector("input[name='entry.809420076']").value);
    formData.append('entry.1107779425', document.querySelector("input[name='entry.1107779425']").value);
    formData.append('entry.949156637', document.querySelector("input[name='entry.949156637']").value);
    formData.append('entry.1156773269', document.querySelector("input[name='entry.1156773269']").value);
    fetch(URL + "?" + formData.toString(), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        },
        method: "post"
    });

    alert("Gửi thông tin thành công");
    vam("#formpay").reset();
    document.querySelector('.thongtin .nextt').removeAttribute('disabled')
});

let muagoi = 'https://script.google.com/macros/s/AKfycbwoR48JVVfYWat1sESPGRINjgbFyy20rqoLsUJiE-ZaxJldUw2EdGedBaFOSNQyl6TNSA/exec'
let qrcode = new QRCode("payqr", {
    width: 256,
    height: 256,
});

vams('.payclick').forEach((t) => {
    t.onclick = () => {
        let g = t.getAttribute('index')
        let f = '';
        if (g = 1) {
            f = 'Gói Basic'
        } else if (g = 2) {
            f = 'Gói Plus'
        } else if (g = 3) {
            f = 'Gói Pro'
        }
        vam('.nextt').onclick = () => {
            let i = 0
            vams('.muagoiclass input').forEach((t) => {
                if (t.value == '') {
                    i++
                }
            })
            if (i <= 0) {
                fetch("https://dss-api.s4h.edu.vn/payment/create", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "fullName": vam('.muagoiclass input[name="name"]').value,
                        "phone": vam('.muagoiclass input[name="phone"]').value,
                        "email": vam('.muagoiclass input[name="email"]').value,
                        "location": vam('.muagoiclass input[name="address"]').value,
                        "packageId": g
                    })
                }).then(res => res.json()).then(data => {
                    // navigation
                    var contentlist = vams('#Box_1412c .content')[1];
                    var dotlist = vams('#Box_1412c .dot')[1];
                    var line = vams('#Box_1412c .line>p')[0];
                    contentlist.classList.add('acc')
                    dotlist.classList.add('acc')
                    line.setAttribute('style', 'display:block')

                    qrcode.makeCode(data.qrCode);
                    vam('#payqr').setAttribute('style', 'display:block;')
                    vam('#payAccountName').innerHTML = data.accountName
                    vam('#payAccountNumber').innerHTML = data.accountNumber
                    vam('#payAmount').innerHTML = data.amount
                    vam('#payUrl').setAttribute('href', data.checkoutUrl);

                    vam("#Box_1412c .content.acc").classList.remove('acc')
                    vam('#Box_1412c .content.pay').classList.add('acc');

                    vam('#payqr > canvas').setAttribute('style', 'display:block; margin: 0 auto')
                    vam('#payqr > img').setAttribute('style', 'display:none')

                    let isChecking = false;
                    let interval = setInterval(async () => {
                        if (isChecking) return;
                        isChecking = true;

                        await fetch(`https://dss-api.s4h.edu.vn/payment/check?orderCode=${data.orderCode}`).then(res => res.json()).then(data => {
                            if (data.status === 'PAID') {
                                vam('.tbsuc h1').innerText = 'Thanh toán thành công'
                                vam('.tbsuc p').innerText = 'thông tin tài khoản đăng nhập đã được gửi đến email của bạn'
                                if (vam('.bi-exclamation-circle-fill') != null) {
                                    vam('.bi-exclamation-circle-fill').classList.remove('bi-exclamation-circle-fill')
                                    vam('#icon').classList.add('bi-check-circle-fill')
                                }
                                vam('.tbsuc').setAttribute('style', 'transform:translateX(0)')
                                setTimeout(() => {
                                    vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
                                }, 3000);
                                vam('.bi-x').addEventListener('click', () => {
                                    vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
                                })
                                clearInterval(interval);
                            } else if (data.status === 'CANCELLED') {
                                vam('.tbsuc h1').innerText = 'Thanh toán thất bại'
                                vam('.tbsuc p').innerText = 'Đơn hàng của bạn đã bị hủy bỏ, vui lòng thử lại'
                                if (vam('.bi-check-circle-fill') != null) {
                                    vam('.bi-check-circle-fill').classList.remove('bi-check-circle-fill')
                                    vam('#icon').classList.add('bi-exclamation-circle-fill')
                                }
                                vam('.tbsuc').setAttribute('style', 'transform:translateX(0)')
                                setTimeout(() => {
                                    vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
                                }, 3000);
                                vam('.bi-x').addEventListener('click', () => {
                                    vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
                                })
                            }
                        }).catch(err => {
                            console.log(err)
                        })

                        isChecking = false;
                    }, 1000);

                    vam(".back").onclick = () => {
                        vam("#Box_1412c .content.pay").classList.remove('acc')
                        vam("#Box_1412c .content.acc").classList.add('acc')
                        vam('#payqr').setAttribute('style', 'display:none;')
                        vam('#payqr > canvas').setAttribute('style', 'display:none')
                        vam('#payqr > img').setAttribute('style', 'display:none')
                        clearInterval(interval);
                    }
                }).catch(err => {
                    console.log(err)
                })

            } else {
                alert('Vui lòng kiểm tra lại, thông tin không được để trống')
            }
        }
    }
})


vam('.bi-x').addEventListener('click', () => {
    vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
})

vam('.dssdad').onclick = () => {
    let Name = vam('#dkform input[name="name"]').value
    let Email = vam('#dkform input[name="email"]').value
    let Phone = vam('#dkform input[name="phone"]').value
    let Address = vam('#dkform input[name="address"]').value
    Name = Name.split(' ')
    let firstName = Name[Name.length - 1]
    let lastName = Name[0]
    fetch("https://dss-api.s4h.edu.vn/public/createDemoUser", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "firstName": firstName,
            "lastName": lastName,
            "email": Email,
            "password": "ieltshacker",
            "phone": Phone,
            "address": Address,
        })
    }).then(res => res.json()).then(data => {
        vam('.tbsuc h1').innerText = 'Đăng ký thành công'
        vam('.tbsuc p').innerText = 'Thông tin tài khoản đăng nhập đã được gửi đến email của bạn'
        if (vam('.bi-exclamation-circle-fill') != null) {
            vam('.bi-exclamation-circle-fill').classList.remove('bi-exclamation-circle-fill')
            vam('#icon').classList.add('bi-check-circle-fill')
        }
        vam('.tbsuc').setAttribute('style', 'transform:translateX(0)')
        setTimeout(() => {
            vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
        }, 3000);
        vam('.bi-x').addEventListener('click', () => {
            vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
        })
    }).catch(err => {
        alert('Lỗi')
    })
}
