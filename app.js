window.addEventListener('scroll', function(){
    var arrow = document.querySelector(".scrollToTop");
    arrow.classList.toggle("active", window.scrollY  > 300)
})