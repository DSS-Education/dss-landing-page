const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);

window.onload = () => {
    vam('.loadweb').remove();
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

vam('.c661412b1button-click').addEventListener('click', () => {
    vam('.c661412b1-background_click').setAttribute('style', 'display:flex')
    vam('.c661412b1-iframe_click').setAttribute('style', 'display:flex')
    var c661412b1Iframe = `<video autoplay loop width="100%" height="600px" controls style="object-position: top;" playsinline muted
    style="height: 600px !important;object-fit:cover;object-position:center;overflow-clip-margin: content-box;
overflow: clip;" ;>
    <source src="./photo/intro.mp4" type="video/mp4">
</video>`
    vam('.c661412b1-iframe_click').innerHTML = c661412b1Iframe
    vam('.c661412b1-background_click').addEventListener('click', () => {
        vam('.c661412b1-background_click').setAttribute('style', 'display:none')
        vam('.c661412b1-iframe_click').setAttribute('style', 'display:none')
        vam('.c661412b1-iframe').remove()
    })
})

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
        method: "post",
        "mode": "cors"
    });

    alert("Gửi thông tin thành công");
    vam("#formpay").reset();
    document.querySelector('.thongtin .nextt').removeAttribute('disabled')
});

let muagoi = 'https://script.google.com/macros/s/AKfycbwoR48JVVfYWat1sESPGRINjgbFyy20rqoLsUJiE-ZaxJldUw2EdGedBaFOSNQyl6TNSA/exec'

vams('.payclick').forEach((t) => {
    t.onclick = () => {
        let g = t.getAttribute('index')
        let f = '';
        if (g = 0) {
            f = 'Gói Basic'
        } else if (g = 1) {
            f = 'Gói Plus'
        } else if (g = 2) {
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
                vam('input[name="goi"]').value = f
                console.log(vam('input[name="goi"]').value);
                var inputValues = $(".muagoiclass input")
                    .map(function () {
                        var input = $(this);
                        return input.attr("name") + "=" + encodeURIComponent(input.val());
                    })
                    .get();
                var queryString = inputValues.join("&");
                $.ajax({
                    type: "GET",
                    url: muagoi + "?" + queryString,
                    success: function (response) {
                        var contentlist = vams('#Box_1412c .content')[1];
                        var dotlist = vams('#Box_1412c .dot')[1];
                        var line = vams('#Box_1412c .line>p')[0];
                        vam("#Box_1412c .content.acc").classList.remove('acc')
                        contentlist.classList.add('acc')
                        dotlist.classList.add('acc')
                        line.setAttribute('style', 'display:block')
                    },
                    error: function (error) {
                        console.log('lỗi');
                    },
                });

            } else {
                alert('Vui lòng kiểm tra lại thông tin, thông tin không được để trống')
            }
        }
    }
})


vam("#dkform").addEventListener("submit", event => {
    // prevent submit
    event.preventDefault();

    // call as API
    const URL = "https://docs.google.com/forms/d/1yPiTQ5wou6Y3VxV5_Bex9C7bRVVIUvY_Jp7RaktKgyg/formResponse";

    let formData = new URLSearchParams();
    formData.append('entry.214186861', document.querySelector("input[name='entry.214186861']").value);
    formData.append('entry.1144448489', document.querySelector("input[name='entry.1144448489']").value);
    formData.append('entry.178791406', document.querySelector("input[name='entry.178791406']").value);
    formData.append('entry.871869972', document.querySelector("input[name='entry.871869972']").value);
    fetch(URL + "?" + formData.toString(), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        },
        method: "post",
        "mode": "cors"
    });

    vam('.tbsuc').setAttribute('style', 'transform:translateX(0)')
    vam("#dkform").reset();
    setTimeout(() => {
        vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
    }, 3000);

});

vam('.bi-x').addEventListener('click', () => {
    vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
})