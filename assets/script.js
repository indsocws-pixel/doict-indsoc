(function(){const toggle=document.querySelector('[data-menu-toggle]');const menu=document.querySelector('[data-mobile-nav]');if(toggle&&menu){toggle.addEventListener('click',()=>{const opened=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}const countdown=document.querySelector('[data-countdown]');if(!countdown)return;/* Date-only display: beginning of Dec. 29 in UTC, not the official paper cutoff. */const target=Date.parse('2026-12-29T00:00:00Z');function update(){const ms=Math.max(0,target-Date.now());const days=Math.floor(ms/86400000),hours=Math.floor(ms/3600000)%24,minutes=Math.floor(ms/60000)%60,seconds=Math.floor(ms/1000)%60;const n=[days,hours,minutes,seconds];countdown.querySelectorAll('[data-value]').forEach((el,i)=>{el.textContent=String(n[i]).padStart(i===0?3:2,'0');});if(ms===0){const cap=document.querySelector('[data-count-caption]');if(cap)cap.textContent='SUBMISSION DEADLINE DATE · DEC 29, 2026';const note=document.querySelector('.counter-note');if(note)note.textContent='The deadline date has arrived. Check the official submission portal for the exact cutoff.';}}update();setInterval(update,1000);})();
/* Poster publishing: upload the final PDF with this exact filename. No HTML edits required. */
(function () {
  var ready = Array.from(document.querySelectorAll('[data-poster-ready]'));
  if (!ready.length || !/^https?:$/.test(window.location.protocol)) return;
  var url = new URL('assets/DOICT-IndSoc-2027-Official-CFP.pdf', document.baseURI);
  fetch(url.href, { method: 'HEAD', cache: 'no-store' }).then(function (response) {
    if (!response.ok) return;
    ready.forEach(function (element) { element.hidden = false; });
    document.querySelectorAll('[data-poster-pending]').forEach(function (element) { element.hidden = true; });
  }).catch(function () { /* Site remains usable if no poster has been uploaded. */ });
})();
