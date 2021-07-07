let slide = document.getElementsByClassName('image_slide')
let circle = document.getElementsByClassName('circle')
let slide_length = document.getElementsByClassName('image_slide').length

console.log(slide_length)

let next_btn = document.getElementsByClassName('slide_btn_next')
let prev_btn = document.getElementsByClassName('slide_btn_prev')
let click_count = 0

function image_prev() {
    /*console.log('-----------------------------')
    console.log('prev_befor : ', click_count)*/
    // slide[click_count].style.display = "none"
    slide[click_count].style.cssText = "display: none; ;"
    circle[click_count].style.background = "rgba(255, 255, 255, 0.8)"

    click_count -= 1
    if (click_count < 0) {
        click_count = slide_length-1
    }
    // slide[click_count].style.display = "inline-block"
    slide[click_count].style.cssText = "display: inline-block; ;"
    circle[click_count].style.background = "rgba(48,229,255,0.6)"

    /*console.log('prev_after : ', click_count)
    console.log('-----------------------------')*/

}

function image_next() {
    if (click_count > slide_length - 1) {
        click_count = 0
    }
    /*console.log('-----------------------------')
    console.log('next_before : ', click_count)*/

    // slide[click_count].style.display = "none"
    slide[click_count].style.cssText = "display: none; ;"
    circle[click_count].style.background = "rgba(255, 255, 255, 0.8)"

    click_count += 1
    if (click_count > slide_length - 1) {
        click_count = 0
    }
    // slide[click_count].style.display = "inline-block"
    slide[click_count].style.cssText = "display: inline-block; ;"
    circle[click_count].style.background = "rgba(48,229,255,0.6)"

    /*console.log('next_after : ', click_count)
    console.log('-----------------------------')*/
}

function circle_click(real_num) {
    click_count = real_num

    for (i = 0; i < slide_length; i++) {
        if (i === real_num) {
            continue
        }
        slide[i].style.cssText = "display: none; ;"
        circle[i].style.background = "rgba(255, 255, 255, 0.8)"
    }

    slide[click_count].style.cssText = "display: inline-block; ;"
    circle[click_count].style.background = "rgba(48,229,255,0.6)"

}

// 3초마다 다음으로 넘기는거 실행
function init() {
    setInterval(image_next, 3000)
}

init()