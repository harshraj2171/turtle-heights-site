// Intro animation controller
(function(){
  const intro = document.getElementById('intro');
  const bar = document.getElementById('bar');
  const site = document.getElementById('site');
  const skip = document.getElementById('skipBtn');
  let duration = 4200; // total intro time in ms
  let start = null;

  function step(ts){
    if(!start) start = ts;
    const elapsed = ts - start;
    const pct = Math.min(1, elapsed / duration);
    bar.style.width = (pct * 100) + '%';
    if(elapsed < duration){
      requestAnimationFrame(step);
    } else {
      finishIntro();
    }
  }
  function finishIntro(){
    intro.classList.add('hide');
    setTimeout(()=>{ intro.style.display='none'; site.classList.remove('hidden'); },300);
  }
  skip.addEventListener('click', finishIntro);
  window.addEventListener('load', ()=>{ requestAnimationFrame(step); });
})();