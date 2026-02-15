// ================================
// BUTTON LINK
// ================================
function handleButtonClick(event){
    const link = event.currentTarget.getAttribute("data-link");
    if(link) window.open(link, "_blank");
}

// ================================
// SCROLL ANIMASI 2 ARAH (ke atas/hilang, ke bawah muncul)
// ================================
document.addEventListener("DOMContentLoaded", function(){
    // tombol link
    document.querySelectorAll(".social-btn, .view-btn").forEach(btn => btn.addEventListener("click", handleButtonClick));

    // scroll animation
    const elements = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            } else {
                // hilang saat scroll ke atas
                entry.target.classList.remove("show");
            }
        });
    }, { threshold:0.2 });
    elements.forEach(el => observer.observe(el));
});

// ================================
// PARALLAX VIDEO (opsional)
// ================================
window.addEventListener("scroll", function(){
    const cover = document.querySelector(".cover-video");
    if(cover){
        const offset = window.scrollY * 0.25;
        cover.style.transform = `translateY(${offset}px)`;
    }
});