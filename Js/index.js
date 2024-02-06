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
    var c661412b2Iframe = `<iframe  class="c661412b2-iframe" src="https://www.youtube.com/embed/2rq6Vph2Sfc?si=xLhapCgHCTZxgnuT" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
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
    var c661412b2Iframe = `<iframe  class="c661412b2-iframe" src="https://www.youtube.com/embed/Lx-E2F1ejCA?si=I-kSBhKVM2oUl_o3" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
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
    var c661412b1Iframe = `<iframe  class="c661412b1-iframe" src="https://www.youtube.com/embed/Lx-E2F1ejCA?si=I-kSBhKVM2oUl_o3" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
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
    fetch(URL + "?" + formData.toString(), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        },
        method: "post",
        "mode": "cors"
    });

    alert("Gửi thông tin thành công");
    document.querySelector('.thongtin .nextt').removeAttribute('disabled')
});

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
    setTimeout(()=>{
        vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
    }, 3000);

});

vam('.bi-x').addEventListener('click', () => {
    vam('.tbsuc').setAttribute('style', 'transform:translateX(200%)')
})