(function(){const e=document.getElementById("next-event"),t=document.getElementById("agenda-full");if(!e&&!t)return;const o="/data/agenda.json";function n(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function s(e){return e.toLocaleDateString("fr-BE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function i(t){const o=n(t.date);e.innerHTML=`
      <div class="next-event-box entry">
        <div class="agenda-date">
          ${s(o)}${t.time?` à ${t.time}`:""}
        </div>
        <div class="agenda-title">
          ${t.slug?`<a href="${t.slug}">${t.title}</a>`:t.title}
          <span class="agenda-location">(${t.location})</span>
        </div>
      </div>
    `}function a(e){const o=e.map(e=>{const t=n(e.date);return`
          <li class="agenda-item">
            <div class="agenda-date">
              ${s(t)}${e.time?` à ${e.time}`:""}
            </div>
            <div class="agenda-title">
              ${e.slug?`<a href="${e.slug}">${e.title}</a>`:e.title}
              <span class="agenda-location">(${e.location})</span>
            </div>
          </li>`}).join("");t.innerHTML=`<ul class="agenda-list">${o}</ul>`}fetch(o).then(e=>e.json()).then(s=>{const r=new Date;r.setHours(0,0,0,0);const o=s.map(e=>({...e,_d:n(e.date)})).filter(e=>e._d>=r).sort((e,t)=>e._d-t._d);e&&(o.length>0?i(o[0]):e.innerHTML="<p>Aucune activité future pour le moment.</p>"),t&&a(o)}).catch(()=>{e&&(e.innerHTML=`<p>Erreur de chargement.</p>`),t&&(t.innerHTML=`<p>Erreur de chargement.</p>`)})})()