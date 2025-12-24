// Gentle reveal
const sections = document.querySelectorAll('.section');
sections.forEach(s=>{
  s.style.opacity=0;
  s.style.transform="translateY(30px)";
});

window.addEventListener('scroll',()=>{
  sections.forEach(s=>{
    if(s.getBoundingClientRect().top < window.innerHeight - 100){
      s.style.opacity=1;
      s.style.transform="none";
      s.style.transition="0.8s";
    }
  });
});
