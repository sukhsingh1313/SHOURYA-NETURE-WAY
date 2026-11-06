const GALLERY_DATA = [{"src": "assets/gallery-01.webp", "category": "events", "alt": "Events at Shourya Nature Way"}, {"src": "assets/gallery-04.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-05.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-06.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-07.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-08.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-09.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-10.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-11.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-12.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-13.webp", "category": "food", "alt": "Food at Shourya Nature Way"}, {"src": "assets/gallery-14.webp", "category": "events", "alt": "Events at Shourya Nature Way"}, {"src": "assets/gallery-15.webp", "category": "club", "alt": "Club at Shourya Nature Way"}, {"src": "assets/gallery-16.webp", "category": "events", "alt": "Events at Shourya Nature Way"}, {"src": "assets/gallery-17.webp", "category": "events", "alt": "Events at Shourya Nature Way"}, {"src": "assets/gallery-18.webp", "category": "club", "alt": "Club at Shourya Nature Way"}, {"src": "assets/gallery-19.webp", "category": "club", "alt": "Club at Shourya Nature Way"}, {"src": "assets/gallery-20.webp", "category": "garden", "alt": "Garden at Shourya Nature Way"}, {"src": "assets/gallery-21.webp", "category": "garden", "alt": "Garden at Shourya Nature Way"}, {"src": "assets/gallery-22.webp", "category": "club", "alt": "Club at Shourya Nature Way"}, {"src": "assets/gallery-23.webp", "category": "garden", "alt": "Garden at Shourya Nature Way"}, {"src": "assets/shourya-building-night.webp", "category": "garden", "alt": "Shourya Nature Way glass building and illuminated garden at night"}, {"src": "assets/shourya-building-club-night.webp", "category": "club", "alt": "Shourya Nature Way glass building with illuminated club interior"}, {"src": "assets/shourya-bar-counter.webp", "category": "club", "alt": "Bar counter and lounge interior"}, {"src": "assets/shourya-pool-relaxation.webp", "category": "garden", "alt": "Poolside relaxation loungers"}, {"src": "assets/shourya-club-lights.webp", "category": "club", "alt": "Night club interior with colorful LED lights"}, {"src": "assets/shourya-garden-restaurant.webp", "category": "food", "alt": "Garden of Eat’n restaurant outdoor dining area"}, {"src": "assets/shourya-restaurant-hall.webp", "category": "food", "alt": "Garden of Eat’n indoor restaurant hall"}];
const cfg = window.SNW_CONFIG || {};
const gallery = GALLERY_DATA;
const grid = document.getElementById("galleryGrid");
let visiblePhotos = [];
let currentPhoto = 0;

function renderGallery(filter="all") {
  grid.innerHTML = "";
  visiblePhotos = gallery.filter(p => filter === "all" || p.category === filter);
  visiblePhotos.forEach((photo, index) => {
    const button = document.createElement("button");
    button.className = "gallery-item";
    button.type = "button";
    button.setAttribute("aria-label", "View " + photo.alt);
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = "lazy";
    img.onerror = () => {
      button.remove();
      visiblePhotos = visiblePhotos.filter(p => p !== photo);
    };
    button.appendChild(img);
    button.addEventListener("click", () => {
      const currentIndex = visiblePhotos.indexOf(photo);
      if (currentIndex >= 0) openLightbox(currentIndex);
    });
    grid.appendChild(button);
  });
}
document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  btn.classList.add("active"); renderGallery(btn.dataset.filter);
}));
document.querySelectorAll("[data-filter-link]").forEach(link => link.addEventListener("click", () => {
  const filter = link.dataset.filterLink;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b.dataset.filter === filter));
  renderGallery(filter);
}));

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
function openLightbox(i) { currentPhoto=i; updateLightbox(); lightbox.classList.add("open"); }
function updateLightbox() { const p=visiblePhotos[currentPhoto]; if(p){lightboxImage.src=p.src;lightboxImage.alt=p.alt;} }
function closeLightbox(){lightbox.classList.remove("open");}
function movePhoto(step){currentPhoto=(currentPhoto+step+visiblePhotos.length)%visiblePhotos.length;updateLightbox();}
document.getElementById("lightboxClose").addEventListener("click",closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click",()=>movePhoto(-1));
document.getElementById("lightboxNext").addEventListener("click",()=>movePhoto(1));
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox();if(e.key==="ArrowLeft")movePhoto(-1);if(e.key==="ArrowRight")movePhoto(1);});

const upi = `upi://pay?pa=${encodeURIComponent(cfg.upiId || "shourya.natureway@pnb")}&pn=${encodeURIComponent(cfg.upiName || "SHOURYA NATURE WAY")}&cu=INR`;
document.getElementById("upiButton").href = upi;
document.getElementById("upiLabel").textContent = cfg.upiId || "shourya.natureway@pnb";
document.getElementById("instagramLink").href = cfg.instagram || "https://www.instagram.com/shourya.natureway/";
document.getElementById("mapLink").href = cfg.mapUrl || "https://www.google.com/maps/search/?api=1&query=Shourya+Nature+Way";
if(cfg.address) document.getElementById("addressText").textContent=cfg.address;
const mapFrame = document.getElementById("mapFrame");
if (mapFrame && cfg.mapEmbed) mapFrame.src = cfg.mapEmbed;
if (cfg.phone) document.getElementById("phoneText").textContent = cfg.phone;
if(cfg.phone) document.getElementById("phoneText").textContent=cfg.phone;
if(cfg.whatsapp){
  const number=cfg.whatsapp.replace(/\D/g,"");
  const a=document.getElementById("whatsappLink"); a.href=`https://wa.me/${number}`; a.hidden=false;
  document.getElementById("enquiryButton").href=`https://wa.me/${number}?text=${encodeURIComponent("Hello Shourya Nature Way, I would like to make an enquiry.")}`;
}
const menuFrame = document.getElementById("menuFrame");
document.querySelectorAll("[data-menu-src]").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll("[data-menu-src]").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  menuFrame.src = btn.dataset.menuSrc;
  document.getElementById("menuDownload").href = btn.dataset.menuSrc;
}));
document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.getElementById("menuToggle"), nav=document.getElementById("nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");}));
renderGallery();
