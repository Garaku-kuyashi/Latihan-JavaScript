const carouselSlide = document.querySelector(".carousel-slide")

const carouselimg = document.querySelectorAll('.carousel-slide img')

const prvebtn = document.querySelector('.prev-btn')
const nextbtn = document.querySelector('.next-btn')

const indi = document.querySelectorAll('.indicator')

let currentindex = 0
const total = carouselimg.length

let autoslide;

function updatecaraousel() {
    carouselSlide.style.transform = `translateX(${-currentindex *100}%)`

    indi.forEach((indicator, index)=>{
        indicator.classList.toggle('indicator-active', index === currentindex)

    })
}

function nextslide() {
    currentindex = (currentindex + 1)% total
    updatecaraousel()
    resetAutoSlide()
}

function prevslide() {
    currentindex = (currentindex - 1 + total)% total
    updatecaraousel()
    resetAutoSlide()
}

function resetAutoSlide() {
    clearInterval(autoslide)

    autoslide = setInterval(nextslide, 5000)
}

nextbtn.addEventListener('click', nextslide)
prvebtn.addEventListener('click', prevslide)

autoslide = setInterval(nextslide, 5000)

indi.addEventListener((indicator, index)=>{
    currentindex = index
})


