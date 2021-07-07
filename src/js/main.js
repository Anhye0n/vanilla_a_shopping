let back_image = document.getElementsByClassName('best_site_img')

function img_change() {
    if (back_image[0].src === 'http://localhost:63342/web/vanilla/%EC%87%BC%ED%95%91%EB%AA%B0/src/img/b2.jpg') {
        for (i = 0; i < back_image.length; i++) {
            back_image[i].src = 'src/img/b1.jpg'
        }
    } else if (back_image[0].src === 'http://localhost:63342/web/vanilla/%EC%87%BC%ED%95%91%EB%AA%B0/src/img/b1.jpg') {
        for (i = 0; i < back_image.length; i++) {
            back_image[i].src = 'src/img/b2.jpg'
        }
    }

}

function img_init() {
    setInterval(img_change, 1000)
}

img_init()

let best_site_li = document.getElementsByClassName('best_site_li')
let best_site_li_length = document.getElementsByClassName('best_site_li').length

let best_site_text = document.getElementsByClassName('best_site_text')
let best_site_text_length = document.getElementsByClassName('best_site_text').length

best_count = 0
if (best_count === 0){
    best_site_text[best_count].style.background = '#f5f5f5'
}
function best_site_next(){
    if (best_count > best_site_li_length - 1) {
        best_count = 0
    }

    best_site_li[best_count].style.display = 'none'
    best_site_text[best_count].style.background = ''

    best_count += 1

    if (best_count > best_site_li_length - 1) {
        best_count = 0
    }

    best_site_li[best_count].style.display = 'inline-block'
    best_site_text[best_count].style.background = '#f5f5f5'

}

function best_site_move(real_num){
    best_count = real_num

    for (i = 0; i < best_site_li_length; i++) {
        if (i === real_num) {
            continue
        }
        best_site_li[i].style.cssText = "display: none; ;"
        best_site_text[i].style.background = ""
    }

    best_site_li[best_count].style.cssText = "display: inline-block; ;"
    best_site_text[best_count].style.background = "#f5f5f5"
}

setInterval(best_site_next, 4000)