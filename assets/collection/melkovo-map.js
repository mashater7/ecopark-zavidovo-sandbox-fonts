(async()=>{const b=Uint8Array.from(atob('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'),c=>c.charCodeAt(0)),s=await new Response(new Blob([b]).stream().pipeThrough(new DecompressionStream('gzip'))).text();window.MELKOVO_MAP_DATA=JSON.parse(s);document.dispatchEvent(new Event('melkovo:data'))})();
;
(function(){function boot(){var root=document.querySelector('#mkMap'),data=window.MELKOVO_MAP_DATA;if(!root||!data||root.__ready)return;root.__ready=1;var IS_MOBILE=(window.innerWidth<=900||((navigator.maxTouchPoints||0)>0&&window.innerWidth<1100));root.classList.toggle('mk-mobile-ui',IS_MOBILE);var ns='http://www.w3.org/2000/svg',svg=root.querySelector('#mkSvg'),scene=root.querySelector('#mkScene'),plotsEl=root.querySelector('#mkPlots'),searchFxEl=root.querySelector('#mkSearchFx'),labelsEl=root.querySelector('#mkLabels'),viewport=root.querySelector('#mkViewport'),tip=root.querySelector('#mkTooltip'),modal=root.querySelector('#mkModal'),search=root.querySelector('#mkSearch'),byId={};var plotCenters=data.plots.map(function(q){return q.c});function labelMetrics(p){var md=1e9;for(var j=0;j<plotCenters.length;j++){var c=plotCenters[j];if(c===p.c)continue;var dx=c[0]-p.c[0],dy=c[1]-p.c[1],d=Math.sqrt(dx*dx+dy*dy);if(d<md)md=d;}if(MQ.matches){var r=Math.max(7.05,Math.min(7.75,md*.40));var fs=Math.max(7.15,Math.min(8.15,md*.43));return{r:r,fs:fs,fit:0};}var r=Math.max(7.35,Math.min(8.15,md*.42));var fs=Math.max(5.9,Math.min(6.45,r*.77));return{r:r,fs:fs,fit:0};}
/* ---- MOBILE PROJECT BOUNDS + TOUCH HIT TEST ---- */
var PROJECT_BOUNDS=(function(){
  var minX=1920,minY=1088,maxX=0,maxY=0;
  data.plots.forEach(function(p){
    p.q.forEach(function(v){
      if(v[0]<minX)minX=v[0];
      if(v[0]>maxX)maxX=v[0];
      if(v[1]<minY)minY=v[1];
      if(v[1]>maxY)maxY=v[1];
    });
  });
  /* Natural context around the settlement:
     roads / forest edge / lake remain visible, but the user cannot lose the site. */
  var padX=110,padY=110;
  return{
    minX:Math.max(0,minX-padX),
    minY:Math.max(0,minY-padY),
    maxX:Math.min(1920,maxX+padX),
    maxY:Math.min(1088,maxY+padY)
  };
})();

function clampProjectBounds(){
  if(!MQ.matches||isOverview())return;

  var b=PROJECT_BOUNDS,
      bw=b.maxX-b.minX,
      bh=b.maxY-b.minY;

  if(state.w<=bw){
    state.x=Math.max(b.minX,Math.min(b.maxX-state.w,state.x));
  }else{
    state.x=(b.minX+b.maxX-state.w)/2;
  }

  if(state.h<=bh){
    state.y=Math.max(b.minY,Math.min(b.maxY-state.h,state.y));
  }else{
    state.y=(b.minY+b.maxY-state.h)/2;
  }

  state.x=Math.max(0,Math.min(1920-state.w,state.x));
  state.y=Math.max(0,Math.min(1088-state.h,state.y));
}

var MOBILE_HIT_DATA=data.plots.map(function(p){
  var minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  p.q.forEach(function(v){
    minX=Math.min(minX,v[0]);minY=Math.min(minY,v[1]);
    maxX=Math.max(maxX,v[0]);maxY=Math.max(maxY,v[1]);
  });
  return{id:String(p.i),q:p.q,minX:minX,minY:minY,maxX:maxX,maxY:maxY};
});

function pointInPolygon(x,y,q){
  var inside=false;
  for(var i=0,j=q.length-1;i<q.length;j=i++){
    var xi=q[i][0],yi=q[i][1],xj=q[j][0],yj=q[j][1];
    var hit=((yi>y)!=(yj>y)) &&
      (x<(xj-xi)*(y-yi)/((yj-yi)||1e-9)+xi);
    if(hit)inside=!inside;
  }
  return inside;
}

function pointSegmentDist2(px,py,x1,y1,x2,y2){
  var vx=x2-x1,vy=y2-y1,wx=px-x1,wy=py-y1,
      vv=vx*vx+vy*vy,t=vv?((wx*vx+wy*vy)/vv):0;
  t=Math.max(0,Math.min(1,t));
  var dx=px-(x1+t*vx),dy=py-(y1+t*vy);
  return dx*dx+dy*dy;
}

function expandedTouchPlot(clientX,clientY){
  if(!MQ.matches)return '';

  var r=viewport.getBoundingClientRect();
  if(!r.width||!r.height)return '';

  var x=state.x+(clientX-r.left)/r.width*state.w,
      y=state.y+(clientY-r.top)/r.height*state.h,

      /* Detail mode: +12 CSS px around the polygon.
         This creates roughly a 24px-wide forgiveness zone without changing visuals.
         Overview gets a smaller tolerance because plots are extremely condensed. */
      cssTolerance=isOverview()?6:12,
      tol=cssTolerance*state.w/r.width,
      tol2=tol*tol,
      best='',
      bestD=Infinity;

  for(var n=0;n<MOBILE_HIT_DATA.length;n++){
    var h=MOBILE_HIT_DATA[n];

    if(x<h.minX-tol||x>h.maxX+tol||y<h.minY-tol||y>h.maxY+tol)continue;

    if(pointInPolygon(x,y,h.q))return h.id;

    var q=h.q,d2=Infinity;
    for(var i=0,j=q.length-1;i<q.length;j=i++){
      var s=pointSegmentDist2(
        x,y,
        q[j][0],q[j][1],
        q[i][0],q[i][1]
      );
      if(s<d2)d2=s;
    }

    if(d2<=tol2&&d2<bestD){
      bestD=d2;
      best=h.id;
    }
  }

  return best;
}
data.plots.forEach(function(p){byId[p.i]=p});var MQ={get matches(){return IS_MOBILE}},HOVER=window.matchMedia('(hover:hover) and (pointer:fine)'),DESKTOP_BASE={x:0,y:205,w:1440,h:816},MIN_W=220,FULL_W=1920,BASE=null,state={x:0,y:0,w:1440,h:816,ratio:816/1440,selected:'',drag:null,moved:false,suppress:0,skipClickUntil:0,beforeFs:null,mode:'detail',detailView:null};function makeBase(){if(!MQ.matches)return{x:DESKTOP_BASE.x,y:DESKTOP_BASE.y,w:DESKTOP_BASE.w,h:DESKTOP_BASE.h};var r=viewport.getBoundingClientRect(),ratio=(r.height||430)/Math.max(r.width||390,1),landscape=window.innerWidth>window.innerHeight,full=root.classList.contains('is-fullscreen'),w=full?(landscape?760:460):(landscape?520:360);var maxW=1088/ratio;w=Math.min(w,maxW,1920);var h=w*ratio,cx=720,cy=610,x=cx-w/2,y=cy-h/2;x=Math.max(0,Math.min(1920-w,x));y=Math.max(0,Math.min(1088-h,y));return{x:x,y:y,w:w,h:h,mobile:true};}function setBase(reset){var b=makeBase();BASE=b;if(reset){state.x=b.x;state.y=b.y;state.w=b.w;state.h=b.h;state.ratio=b.h/b.w;}}setBase(true);function rub(n){return new Intl.NumberFormat('ru-RU').format(Math.round(n))+' ₽'}function dec(n,d){return new Intl.NumberFormat('ru-RU',{maximumFractionDigits:d||1}).format(n)}function meters(n){return '≈ '+dec(n,1)+' м'}
function previewHtml(p){
  return '<div class="mk__preview-top">'
    +'<span class="mk__preview-status">Свободен</span>'
    +'<strong class="mk__preview-title">Участок №'+p.i+'</strong>'
    +'</div>'
    +'<div class="mk__preview-mobile-rich">'
      +'<div class="mk__preview-mobile-item"><span>Площадь</span><b>'+dec(p.a,2)+' сот.</b></div>'
      +'<div class="mk__preview-mobile-item"><span>Стоимость забора</span><b>'+rub(p.f)+'</b></div>'
      +'<div class="mk__preview-mobile-item"><span>Стоимость участка</span><b>По запросу</b></div>'
      +'<div class="mk__preview-mobile-item mk__preview-mobile-total"><span>Итого</span><b>Уточним</b></div>'
    +'</div>'
    +'<div class="mk__preview-grid">'
      +'<span>Площадь</span><b>'+dec(p.a,2)+' сот.</b>'
      +'<span>Длина забора</span><b>'+meters(p.b)+'</b>'
      +'<span>Стоимость забора</span><b>'+rub(p.f)+'</b>'
    +'</div>'
    +'<p class="mk__preview-hint">Нажмите на участок — откроем полную карточку</p>';
}
function showSearchPreview(id){
  var p=byId[id];
  if(!p||!searchPreview)return;
  searchPreview.innerHTML=previewHtml(p);
  searchPreview.classList.add('is-open');
}
function hideSearchPreview(){
  if(searchPreview)searchPreview.classList.remove('is-open');
}
function clearSearchSelection(){
  clearSearchFocus();
  hideSearchPreview();
  var sb=search.closest('.mk__search');
  if(sb){
    sb.classList.remove('is-found');
    sb.classList.remove('is-searching');
  }
}
var searchBoxEl=search.closest('.mk__search'),uiOverlay=root.querySelector('#mkUiOverlay');if(!uiOverlay){uiOverlay=document.createElement('div');uiOverlay.id='mkUiOverlay';uiOverlay.className='mk__ui-overlay';}if(uiOverlay.parentNode!==viewport)viewport.appendChild(uiOverlay);if(searchBoxEl&&searchBoxEl.parentNode!==uiOverlay)uiOverlay.appendChild(searchBoxEl);var searchPreview=root.querySelector('#mkSearchPreview');if(!searchPreview){searchPreview=document.createElement('div');searchPreview.id='mkSearchPreview';searchPreview.className='mk__search-preview';searchPreview.setAttribute('aria-live','polite');uiOverlay.appendChild(searchPreview);}function node(name,attrs){var e=document.createElementNS(ns,name);Object.keys(attrs||{}).forEach(function(k){e.setAttribute(k,attrs[k])});return e}function tipHtml(p){return '<span class="mk__tip-status">Свободен</span><h3>Участок №'+p.i+'</h3><div class="mk__tip-row"><span>Площадь</span><b>'+dec(p.a,2)+' сот.</b></div><div class="mk__tip-row"><span>Стоимость забора</span><b>'+rub(p.f)+'</b></div><div class="mk__tip-row"><span>Длина забора</span><b>'+meters(p.b)+'</b></div><p class="mk__tip-action">Нажмите — откроем подробности →</p>'}function showTip(p,e){if(!HOVER.matches)return;var r=viewport.getBoundingClientRect(),x=e.clientX-r.left+15,y=e.clientY-r.top+15;tip.innerHTML=tipHtml(p);tip.style.display='block';var maxX=r.width-tip.offsetWidth-10,maxY=r.height-tip.offsetHeight-10;tip.style.left=Math.max(10,Math.min(maxX,x))+'px';tip.style.top=Math.max(10,Math.min(maxY,y))+'px'}function hideTip(){tip.style.display='none'}function url(id){var u=new URL(location.href);u.searchParams.set('plot',id);return u}function openPlot(id,historyOn){var p=byId[id];if(!p)return;root.querySelectorAll('.mk__plots polygon.is-selected').forEach(function(e){e.classList.remove('is-selected')});labelsEl.querySelectorAll('.mk__label-group.is-selected').forEach(function(e){e.classList.remove('is-selected')});var poly=root.querySelector('.mk__plots polygon[data-id="'+id+'"]');if(poly)poly.classList.add('is-selected');var selectedLabel=labelsEl.querySelector('.mk__label-group[data-id="'+id+'"]');if(selectedLabel){selectedLabel.classList.add('is-selected');selectedLabel.style.opacity='1';labelsEl.appendChild(selectedLabel)}state.selected=id;search.value=id;root.querySelector('#mkTitle').textContent='Участок №'+id;root.querySelector('#mkArea').textContent=dec(p.a,2)+' сот.';root.querySelector('#mkPerimeter').textContent=meters(p.p);root.querySelector('#mkFenceMeters').textContent=meters(p.b);root.querySelector('#mkFencePrice').textContent=rub(p.f);root.querySelector('#mkTotal').textContent='Цена участка + '+rub(p.f);root.querySelector('#mkPlotField').value='Участок №'+id;root.querySelector('#mkFormText').textContent='Мы свяжемся с вами по участку №'+id+' и расскажем детали покупки и бронирования.';var wa='Здравствуйте! Интересует участок №'+id+' в Мелково.\nПлощадь: '+dec(p.a,2)+' сот.\nСтоимость забора: '+rub(p.f);root.querySelector('#mkWa').href='https://wa.me/74951203878?text='+encodeURIComponent(wa);modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.documentElement.classList.add('mk-lock');document.body.classList.add('mk-lock');if(historyOn!==false)try{var u=url(id);history.replaceState({plot:id},'',u.pathname+u.search+u.hash)}catch(e){}}function close(){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.documentElement.classList.remove('mk-lock');document.body.classList.remove('mk-lock');root.querySelectorAll('.mk__plots polygon.is-selected').forEach(function(e){e.classList.remove('is-selected')});labelsEl.querySelectorAll('.mk__label-group.is-selected').forEach(function(e){e.classList.remove('is-selected')});state.selected='';hideTip();clearSearchSelection();if(MQ.matches)updateLabelVisibility();try{var u=new URL(location.href);u.searchParams.delete('plot');history.replaceState({},'',u.pathname+u.search+u.hash)}catch(e){}}function activatePlotFromPointer(id){if(!id||!byId[id])return;hideTip();if(isOverview()){focusPlot(id);return;}clearSearchSelection();openPlot(id);}data.plots.forEach(function(p){var points=p.q.map(function(v){return v.join(',')}).join(' '),poly=node('polygon',{points:points,'data-id':p.i,tabindex:'0','aria-label':'Участок №'+p.i});poly.addEventListener('pointerenter',function(e){if(Date.now()>state.suppress){poly.classList.add('is-hover');var lg=labelsEl.querySelector('.mk__label-group[data-id="'+p.i+'"]');if(lg){lg.classList.add('is-hover');labelsEl.appendChild(lg)}showTip(p,e)}});poly.addEventListener('pointermove',function(e){if(Date.now()>state.suppress)showTip(p,e)});poly.addEventListener('pointerleave',function(){poly.classList.remove('is-hover');var lg=labelsEl.querySelector('.mk__label-group[data-id="'+p.i+'"]');if(lg)lg.classList.remove('is-hover');hideTip();if(MQ.matches)updateLabelVisibility()});poly.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();activatePlotFromPointer(String(p.i));}});plotsEl.appendChild(poly);var lm=labelMetrics(p),lg=node('g',{'class':'mk__label-group','data-id':p.i,'data-fit':lm.fit||''}),c=node('circle',{cx:p.c[0],cy:p.c[1],r:lm.r,class:'mk__label-bg'}),t=node('text',{x:p.c[0],y:p.c[1]+.2,class:'mk__label','style':'font-size:'+lm.fs+'px'});t.textContent=p.i;lg.appendChild(c);lg.appendChild(t);labelsEl.appendChild(lg)});plotsEl.addEventListener('click',function(e){var poly=e.target&&e.target.closest?e.target.closest('polygon[data-id]'):null;if(!poly||!plotsEl.contains(poly))return;if(e.detail>0){e.preventDefault();e.stopPropagation();}});function updateTouchMode(){if(!MQ.matches)return;svg.style.touchAction='none';viewport.style.touchAction='none';}function isOverview(){return MQ.matches&&state.mode==='overview'}function labelsReady(){return MQ.matches&&!isOverview()&&state.w<=520}function updateLabelVisibility(){if(!MQ.matches)return;var rr=viewport.getBoundingClientRect(),ready=labelsReady();root.classList.toggle('mk-mobile-overview-mode',isOverview());root.classList.toggle('mk-mobile-detail-mode',!isOverview());data.plots.forEach(function(p){var g=labelsEl.querySelector('.mk__label-group[data-id="'+p.i+'"]');if(!g)return;var sx=(p.c[0]-state.x)/state.w*rr.width,sy=(p.c[1]-state.y)/state.h*rr.height,inside=sx>-18&&sy>-18&&sx<rr.width+18&&sy<rr.height+18,selected=String(p.i)===String(state.selected),t=g.querySelector('.mk__label');g.style.opacity=(inside&&(ready||selected))?'1':'0';if(t){if(MQ.matches&&!isOverview()&&String(p.i).length>=3){t.setAttribute('textLength','10.9');t.setAttribute('lengthAdjust','spacingAndGlyphs');}else{t.removeAttribute('textLength');t.removeAttribute('lengthAdjust');}}});}function keepUiOverlayOnTop(){if(uiOverlay&&uiOverlay.parentNode===viewport&&viewport.lastElementChild!==uiOverlay){viewport.appendChild(uiOverlay);}}function apply(fast){var resetBtn=root.querySelector('[data-z="reset"]');if(isOverview()){state.x=0;state.y=0;state.w=1920;state.h=1088;state.ratio=1088/1920;svg.setAttribute('viewBox','0 0 1920 1088');root.classList.add('mk-mobile-overview-mode');root.classList.remove('mk-mobile-detail-mode');if(resetBtn){resetBtn.textContent='Участки';resetBtn.setAttribute('aria-label','Вернуться к участкам');}updateTouchMode();keepUiOverlayOnTop();if(!fast)updateLabelVisibility();return;}var ratio=state.ratio||BASE.h/BASE.w,maxW=Math.min(FULL_W,1088/ratio);state.w=Math.max(MIN_W,Math.min(maxW,state.w));state.h=state.w*ratio;state.x=Math.max(0,Math.min(1920-state.w,state.x));state.y=Math.max(0,Math.min(1088-state.h,state.y));clampProjectBounds();svg.setAttribute('viewBox',[state.x,state.y,state.w,state.h].join(' '));root.classList.remove('mk-mobile-overview-mode');root.classList.toggle('mk-mobile-detail-mode',MQ.matches);if(resetBtn){if(MQ.matches){resetBtn.textContent='Весь';resetBtn.setAttribute('aria-label','Показать весь посёлок');}else resetBtn.textContent=Math.round(BASE.w/state.w*100)+'%';}updateTouchMode();keepUiOverlayOnTop();if(!fast)updateLabelVisibility();}function easeMap(t){t=Math.max(0,Math.min(1,t));var t2=t*t,t3=t2*t,t4=t3*t;return 35*t4-84*t4*t+70*t4*t2-20*t4*t3;}function readAnimatedViewBox(){
  try{
    var a=svg.viewBox&&svg.viewBox.animVal;
    if(a&&a.width>0&&a.height>0){
      return{x:a.x,y:a.y,w:a.width,h:a.height};
    }
  }catch(e){}
  return{x:state.x,y:state.y,w:state.w,h:state.h};
}

function cancelDesktopFlight(commitCurrent){
  state.viewAnimSeq=(state.viewAnimSeq||0)+1;

  var anim=state.desktopFlight;
  if(!anim)return;

  /*
    If search animation is interrupted, keep exactly the currently visible
    native SVG viewBox instead of jumping back to the old state.
  */
  if(commitCurrent){
    var cur=readAnimatedViewBox();

    state.x=cur.x;
    state.y=cur.y;
    state.w=cur.w;
    state.h=cur.h;
    state.ratio=cur.h/cur.w;

    svg.setAttribute(
      'viewBox',
      [state.x,state.y,state.w,state.h].join(' ')
    );
  }

  if(state.desktopFlightTimer){
    clearTimeout(state.desktopFlightTimer);
    state.desktopFlightTimer=0;
  }

  try{anim.endElement()}catch(e){}
  try{anim.remove()}catch(e){}

  state.desktopFlight=null;
}

function animateDesktopToView(target,duration,done){
  /*
    Native SVG camera animation:
    the browser interpolates viewBox itself.
    No JavaScript frame loop and no CSS transform -> viewBox handoff.
  */
  cancelDesktopFlight(true);

  var seq=state.viewAnimSeq,
      dur=Math.max(700,duration||1050),
      from=[
        state.x.toFixed(4),
        state.y.toFixed(4),
        state.w.toFixed(4),
        state.h.toFixed(4)
      ].join(' '),
      to=[
        target.x.toFixed(4),
        target.y.toFixed(4),
        target.w.toFixed(4),
        target.h.toFixed(4)
      ].join(' '),
      anim=document.createElementNS(
        'http://www.w3.org/2000/svg',
        'animate'
      ),
      finished=false;

  anim.setAttribute('attributeName','viewBox');
  anim.setAttribute('attributeType','XML');
  anim.setAttribute('from',from);
  anim.setAttribute('to',to);
  anim.setAttribute('dur',dur+'ms');

  /*
    Native ease-in-out spline.
    Start and end are deliberately soft, closer to map easeTo than flyTo.
  */
  anim.setAttribute('calcMode','spline');
  anim.setAttribute('keyTimes','0;1');
  anim.setAttribute('keySplines','.42 0 .58 1');
  anim.setAttribute('fill','freeze');
  anim.setAttribute('begin','indefinite');

  state.desktopFlight=anim;
  svg.appendChild(anim);

  function finish(){
    if(finished)return;
    finished=true;

    if(seq!==state.viewAnimSeq||state.desktopFlight!==anim){
      try{anim.remove()}catch(e){}
      return;
    }

    if(state.desktopFlightTimer){
      clearTimeout(state.desktopFlightTimer);
      state.desktopFlightTimer=0;
    }

    state.x=target.x;
    state.y=target.y;
    state.w=target.w;
    state.h=target.h;
    if(target.ratio)state.ratio=target.ratio;

    /*
      Commit the exact final viewBox while the frozen SMIL value is active,
      then remove the animation element.
    */
    svg.setAttribute(
      'viewBox',
      [state.x,state.y,state.w,state.h].join(' ')
    );

    try{anim.remove()}catch(e){}
    state.desktopFlight=null;

    apply(false);
    if(done)done();
  }

  anim.addEventListener('endEvent',finish,{once:true});
  state.desktopFlightTimer=setTimeout(finish,dur+100);

  try{
    anim.beginElement();
  }catch(e){
    anim.setAttribute('begin','0s');
  }
}

function animateView(target,duration,done){state.viewAnimSeq=(state.viewAnimSeq||0)+1;var seq=state.viewAnimSeq,start=performance.now(),dur=duration||1050,scx=state.x+state.w/2,scy=state.y+state.h/2,tcx=target.x+target.w/2,tcy=target.y+target.h/2,lw0=Math.log(Math.max(1,state.w)),lw1=Math.log(Math.max(1,target.w)),lr0=Math.log(Math.max(.1,state.h/state.w)),lr1=Math.log(Math.max(.1,target.h/target.w));function frame(now){if(seq!==state.viewAnimSeq)return;var raw=Math.min(1,(now-start)/dur),e=easeMap(raw),cx=scx+(tcx-scx)*e,cy=scy+(tcy-scy)*e,w=Math.exp(lw0+(lw1-lw0)*e),ratio=Math.exp(lr0+(lr1-lr0)*e),h=w*ratio;state.w=w;state.h=h;state.x=cx-w/2;state.y=cy-h/2;state.x=Math.max(0,Math.min(1920-state.w,state.x));state.y=Math.max(0,Math.min(1088-state.h,state.y));svg.setAttribute('viewBox',[state.x,state.y,state.w,state.h].join(' '));if(raw<1){requestAnimationFrame(frame);}else{state.x=target.x;state.y=target.y;state.w=target.w;state.h=target.h;if(target.ratio)state.ratio=target.ratio;svg.setAttribute('viewBox',[state.x,state.y,state.w,state.h].join(' '));apply(false);if(done)done();}}requestAnimationFrame(frame);}function detailTarget(cx,cy,w){var r=viewport.getBoundingClientRect(),ratio=(r.height||430)/Math.max(r.width||390,1);w=w||360;var maxW=1088/ratio;w=Math.min(w,maxW);var h=w*ratio,x=cx-w/2,y=cy-h/2;x=Math.max(0,Math.min(1920-w,x));y=Math.max(0,Math.min(1088-h,y));if(MQ.matches){var b=PROJECT_BOUNDS,bw=b.maxX-b.minX,bh=b.maxY-b.minY;if(w<=bw)x=Math.max(b.minX,Math.min(b.maxX-w,x));else x=(b.minX+b.maxX-w)/2;if(h<=bh)y=Math.max(b.minY,Math.min(b.maxY-h,y));else y=(b.minY+b.maxY-h)/2;x=Math.max(0,Math.min(1920-w,x));y=Math.max(0,Math.min(1088-h,y));}return{x:x,y:y,w:w,h:h,ratio:ratio};}function showOverview(){if(!MQ.matches)return;state.detailView={x:state.x,y:state.y,w:state.w,h:state.h,ratio:state.ratio};state.mode='overview';root.classList.add('mk-mobile-overview-mode');updateLabelVisibility();setTimeout(function(){animateView({x:0,y:0,w:1920,h:1088,ratio:1088/1920},300)},20);}function showDetail(cx,cy,w,done){if(!MQ.matches){if(done)done();return;}state.mode='detail';root.classList.remove('mk-mobile-overview-mode');root.classList.add('mk-mobile-detail-mode');setTimeout(function(){var target;if(cx!=null&&cy!=null)target=detailTarget(cx,cy,w||300);else if(state.detailView){var d=state.detailView,tcx=d.x+d.w/2,tcy=d.y+d.h/2;target=detailTarget(tcx,tcy,Math.min(d.w,420));}else{var b=makeBase();target={x:b.x,y:b.y,w:b.w,h:b.h,ratio:b.h/b.w};}animateView(target,320,function(){state.detailView=null;if(done)done()});},30);}function clearSearchFx(){
  if(searchFxEl)searchFxEl.replaceChildren();
}
function clearSearchFocus(){
  plotsEl.querySelectorAll('polygon.is-search-focus').forEach(function(el){
    el.classList.remove('is-search-focus');
  });
  labelsEl.querySelectorAll('.mk__label-group.is-search-focus').forEach(function(el){
    el.classList.remove('is-search-focus');
  });
  clearSearchFx();
}
function svgAnim(parent,attributeName,values,dur){
  var a=node('animate',{
    attributeName:attributeName,
    values:values,
    dur:dur,
    repeatCount:'indefinite'
  });
  parent.appendChild(a);
  return a;
}
function renderSearchFx(id){
  if(!searchFxEl)return;
  searchFxEl.replaceChildren();

  var p=byId[id];
  if(!p)return;

  var points=p.q.map(function(v){return v.join(',')}).join(' ');

  /* Layer 1: translucent pulse over exact parcel geometry */
  var pulse=node('polygon',{
    points:points,
    fill:'#42b8ec',
    'fill-opacity':'.10',
    stroke:'#ffffff',
    'stroke-opacity':'.86',
    'stroke-width':'1.4',
    'vector-effect':'non-scaling-stroke'
  });
  svgAnim(pulse,'fill-opacity','.08;.34;.08','1.20s');
  svgAnim(pulse,'stroke-opacity','.62;1;.62','1.20s');
  svgAnim(pulse,'stroke-width','1.2;3.0;1.2','1.20s');
  searchFxEl.appendChild(pulse);

  /* Layer 2: expanding contour — makes the search unmistakable */
  var ring=node('polygon',{
    points:points,
    fill:'none',
    stroke:'#42b8ec',
    'stroke-opacity':'.20',
    'stroke-width':'1.1',
    'vector-effect':'non-scaling-stroke'
  });
  svgAnim(ring,'stroke-opacity','.18;.92;.18','1.20s');
  svgAnim(ring,'stroke-width','1.0;4.2;1.0','1.20s');
  searchFxEl.appendChild(ring);

  /* Layer 3: pulse around the number */
  var circle=node('circle',{
    cx:p.c[0],
    cy:p.c[1],
    r:'8.2',
    fill:'none',
    stroke:'#ffffff',
    'stroke-opacity':'.25',
    'stroke-width':'1.0',
    'vector-effect':'non-scaling-stroke'
  });
  svgAnim(circle,'r','8.2;12.8;8.2','1.20s');
  svgAnim(circle,'stroke-opacity','.22;.96;.22','1.20s');
  svgAnim(circle,'stroke-width','.9;2.2;.9','1.20s');
  searchFxEl.appendChild(circle);
}
function setSearchFocus(id,withFx){clearSearchFocus();var poly=plotsEl.querySelector('polygon[data-id="'+id+'"]'),lg=labelsEl.querySelector('.mk__label-group[data-id="'+id+'"]');if(poly)poly.classList.add('is-search-focus');if(lg){lg.classList.add('is-search-focus');lg.style.opacity='1';labelsEl.appendChild(lg);}if(withFx!==false)renderSearchFx(id);}function searchVisualTarget(id){var p=byId[id];if(!p)return null;var r=viewport.getBoundingClientRect(),ratio=(r.height||430)/Math.max(r.width||390,1),desktop250=DESKTOP_BASE.w/2.5,w=MQ.matches?Math.max(MIN_W,Math.min(280,state.w)):desktop250,maxW=1088/ratio;w=Math.min(w,maxW);var h=w*ratio,visualY=MQ.matches?.40:.50,x=p.c[0]-w*.50,y=p.c[1]-h*visualY;x=Math.max(0,Math.min(1920-w,x));y=Math.max(0,Math.min(1088-h,y));if(MQ.matches){var b=PROJECT_BOUNDS,bw=b.maxX-b.minX,bh=b.maxY-b.minY;if(w<=bw)x=Math.max(b.minX,Math.min(b.maxX-w,x));else x=(b.minX+b.maxX-w)/2;if(h<=bh)y=Math.max(b.minY,Math.min(b.maxY-h,y));else y=(b.minY+b.maxY-h)/2;x=Math.max(0,Math.min(1920-w,x));y=Math.max(0,Math.min(1088-h,y));}return{x:x,y:y,w:w,h:h,ratio:ratio};}function focusPlot(id){var p=byId[id];if(!p)return;showSearchPreview(id);setSearchFocus(id,false);if(MQ.matches){state.mode='detail';root.classList.remove('mk-mobile-overview-mode');root.classList.add('mk-mobile-detail-mode');}var target=searchVisualTarget(id)||detailTarget(p.c[0],p.c[1],MQ.matches?280:DESKTOP_BASE.w/2.5);function arrived(){var lg=labelsEl.querySelector('.mk__label-group[data-id="'+id+'"]');if(lg){lg.style.opacity='1';labelsEl.appendChild(lg);}setSearchFocus(id,true);showSearchPreview(id);}if(MQ.matches){animateView(target,980,arrived);}else{animateDesktopToView(target,1050,arrived);}}function zoom(factor,cx,cy){cancelDesktopFlight(true);if(isOverview()){showDetail();return;}var r=viewport.getBoundingClientRect(),mx=cx==null?r.left+r.width/2:cx,my=cy==null?r.top+r.height/2:cy,px=state.x+(mx-r.left)/r.width*state.w,py=state.y+(my-r.top)/r.height*state.h,ratio=state.ratio||BASE.h/BASE.w,maxW=Math.min(FULL_W,1088/ratio),nw=Math.max(MIN_W,Math.min(maxW,state.w*factor)),nh=nw*ratio,rx=(mx-r.left)/r.width,ry=(my-r.top)/r.height;state.x=px-rx*nw;state.y=py-ry*nh;state.w=nw;state.h=nh;apply(false);}root.querySelector('[data-z="in"]').onclick=function(){zoom(MQ.matches?.86:.72)};root.querySelector('[data-z="out"]').onclick=function(){zoom(MQ.matches?1.16:1.38)};root.querySelector('[data-z="reset"]').onclick=function(){if(MQ.matches){if(isOverview())showDetail();else showOverview();}else{state.mode='detail';root.classList.add('mk-mobile-detail-mode');root.classList.remove('mk-mobile-overview-mode');setBase(true);apply(false);}};
var activePointers=new Map(),gesture=null,rafPending=false;

function scheduleApply(){
  if(rafPending)return;
  rafPending=true;
  requestAnimationFrame(function(){
    rafPending=false;
    apply(true);
  });
}
function pointerList(){return Array.from(activePointers.values())}
function beginSingle(p){
  gesture={type:'drag',id:p.id,lastX:p.x,lastY:p.y,startX:p.x,startY:p.y,moved:false,tapPlot:p.plot||''};
}
function beginPinch(){
  var a=pointerList();if(a.length<2)return;
  var p1=a[0],p2=a[1],dx=p2.x-p1.x,dy=p2.y-p1.y;
  gesture={type:'pinch',lastDist:Math.max(12,Math.hypot(dx,dy)),moved:true};
  state.moved=true;state.skipClickUntil=Date.now()+350;
}

svg.addEventListener('pointerdown',function(e){
  if(e.pointerType==='mouse'&&e.button!==0)return;
  cancelDesktopFlight(true);
  var poly=e.target&&e.target.closest?e.target.closest('polygon[data-id]'):null;
  activePointers.set(e.pointerId,{id:e.pointerId,x:e.clientX,y:e.clientY,plot:poly?poly.getAttribute('data-id'):''});
  try{svg.setPointerCapture(e.pointerId)}catch(x){}
  if(activePointers.size===1)beginSingle(activePointers.get(e.pointerId));
  else if(activePointers.size===2)beginPinch();
  if(e.pointerType==='touch'&&e.cancelable)e.preventDefault();
},{passive:false});

svg.addEventListener('pointermove',function(e){
  var p=activePointers.get(e.pointerId);if(!p)return;
  p.x=e.clientX;p.y=e.clientY;activePointers.set(e.pointerId,p);
  if(e.pointerType==='touch'&&e.cancelable)e.preventDefault();

  var list=pointerList();
  if(list.length>=2){
    if(!gesture||gesture.type!=='pinch')beginPinch();
    var p1=list[0],p2=list[1],dx=p2.x-p1.x,dy=p2.y-p1.y,
        dist=Math.max(12,Math.hypot(dx,dy)),
        cx=(p1.x+p2.x)/2,cy=(p1.y+p2.y)/2;
    if(gesture.lastDist){
      var factor=gesture.lastDist/dist,r=viewport.getBoundingClientRect(),
          px=state.x+(cx-r.left)/r.width*state.w,
          py=state.y+(cy-r.top)/r.height*state.h,
          ratio=state.ratio||BASE.h/BASE.w,
          maxW=Math.min(FULL_W,1088/ratio),
          nw=Math.max(MIN_W,Math.min(maxW,state.w*factor)),
          nh=nw*ratio,rx=(cx-r.left)/r.width,ry=(cy-r.top)/r.height;
      state.x=px-rx*nw;state.y=py-ry*nh;state.w=nw;state.h=nh;
      scheduleApply();
    }
    gesture.lastDist=dist;state.moved=true;return;
  }

  if(!gesture||gesture.type!=='drag')beginSingle(p);
  var dx=e.clientX-gesture.lastX,dy=e.clientY-gesture.lastY;
  if(!gesture.moved&&Math.hypot(e.clientX-gesture.startX,e.clientY-gesture.startY)>8){
    gesture.moved=true;state.moved=true;
  }
  if(gesture.moved){
    var r=svg.getBoundingClientRect();
    state.x-=dx*state.w/r.width;
    state.y-=dy*state.h/r.height;
    gesture.lastX=e.clientX;gesture.lastY=e.clientY;
    scheduleApply();
  }
},{passive:false});

function finishPointer(e,cancelled){
  var tapPlot=gesture&&gesture.type==='drag'?gesture.tapPlot:'',
      wasMoved=!!(gesture&&gesture.moved);

  /* Touch gets the enlarged invisible hit area if the exact polygon
     was missed by a few pixels. */
  if(!wasMoved&&!cancelled&&e.pointerType==='touch'&&!tapPlot){
    tapPlot=expandedTouchPlot(e.clientX,e.clientY);
  }

  activePointers.delete(e.pointerId);

  try{
    if(svg.hasPointerCapture&&svg.hasPointerCapture(e.pointerId)){
      svg.releasePointerCapture(e.pointerId);
    }
  }catch(x){}

  if(e.pointerType==='touch'&&e.cancelable)e.preventDefault();

  if(activePointers.size>=2){
    beginPinch();
    return;
  }

  if(activePointers.size===1){
    beginSingle(pointerList()[0]);
    state.skipClickUntil=Date.now()+120;
    apply(false);
    return;
  }

  if(wasMoved||state.moved){
    state.suppress=Date.now()+90;
    state.skipClickUntil=Date.now()+120;
  }else if(!cancelled&&tapPlot){
    /*
      ONE activation path for mouse + pen + touch.
      No delayed click, no 280/320 ms global blocking.
    */
    if(e.cancelable)e.preventDefault();
    e.stopPropagation();
    activatePlotFromPointer(tapPlot);
  }else if(!cancelled&&!wasMoved&&!tapPlot){clearSearchSelection();hideTip();}

  gesture=null;
  state.moved=false;
  apply(false);
}
svg.addEventListener('pointerup',function(e){
  finishPointer(e,false);
},{passive:false});
svg.addEventListener('pointercancel',function(e){
  finishPointer(e,true);
},{passive:false});
svg.addEventListener('wheel',function(e){if(!(e.ctrlKey||e.metaKey))return;e.preventDefault();zoom(e.deltaY<0?.82:1.22,e.clientX,e.clientY)},{passive:false});function find(opts){opts=opts||{};var raw=String(search.value||'').trim(),id=raw?String(parseInt(raw,10)||''):'',searchBox=search.closest('.mk__search');if(searchBox){searchBox.classList.remove('is-invalid');searchBox.classList.remove('is-searching');searchBox.classList.remove('is-found');}clearSearchFocus();hideSearchPreview();if(!raw)return;if(!byId[id]){if(opts.explicit&&searchBox){searchBox.classList.add('is-invalid');setTimeout(function(){searchBox.classList.remove('is-invalid')},900);}return;}if(searchBox){searchBox.classList.add('is-searching');searchBox.classList.add('is-found');}focusPlot(id);setTimeout(function(){if(searchBox)searchBox.classList.remove('is-searching')},MQ.matches?560:240);}var searchTimer=0;search.addEventListener('input',function(){clearTimeout(searchTimer);searchTimer=setTimeout(function(){find({explicit:false})},260)});search.addEventListener('change',function(){find({explicit:false})});search.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();clearTimeout(searchTimer);find({explicit:true});if(MQ.matches)search.blur();}});search.addEventListener('focus',function(){if(MQ.matches&&search.value){setTimeout(function(){try{search.select()}catch(e){}},40)}});root.querySelectorAll('[data-close]').forEach(function(e){e.addEventListener('click',close)});document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(root.classList.contains('is-fullscreen'))toggleFs();else if(modal.classList.contains('is-open'))close()}});root.querySelector('#mkLeadBtn').onclick=function(){var x=root.querySelector('#mkName');x.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(function(){x.focus()},250)};root.querySelector('#mkShare').onclick=function(){if(!state.selected)return;var u=url(state.selected).toString(),payload={title:'Участок №'+state.selected+' — Мелково',text:'Посмотрите участок №'+state.selected+' в Мелково',url:u},btn=this;function ok(){var old=btn.textContent;btn.textContent='Ссылка скопирована';setTimeout(function(){btn.textContent=old},1400)}if(navigator.share)navigator.share(payload).catch(function(){});else if(navigator.clipboard)navigator.clipboard.writeText(u).then(ok)};function toggleFs(){var entering=!root.classList.contains('is-fullscreen');if(entering)state.beforeFs={x:state.x,y:state.y,w:state.w,h:state.h,ratio:state.ratio,base:BASE};root.classList.toggle('is-fullscreen');var on=root.classList.contains('is-fullscreen');document.documentElement.classList.toggle('mk-lock',on);document.body.classList.toggle('mk-lock',on);root.querySelector('#mkFullscreen').innerHTML=on?'←&nbsp; Вернуться':'⛶&nbsp; На весь экран';setTimeout(function(){if(MQ.matches){if(on){setBase(true);}else if(state.beforeFs){var b=state.beforeFs;BASE=b.base||makeBase();state.x=b.x;state.y=b.y;state.w=b.w;state.h=b.h;state.ratio=b.ratio;state.beforeFs=null;}}apply(false);},80)}root.querySelector('#mkFullscreen').onclick=toggleFs;root.querySelector('#mkForm').addEventListener('submit',function(e){e.preventDefault();var name=root.querySelector('#mkName').value.trim(),phone=root.querySelector('#mkPhone').value.trim(),p=byId[state.selected];if(!name){alert('Пожалуйста, укажите ваше имя.');return}if(!phone){alert('Пожалуйста, укажите телефон.');return}var btn=this.querySelector('.mk__submit'),old=btn.textContent;btn.disabled=true;btn.textContent='Отправляем...';fetch('https://functions.yandexcloud.net/d4errl5ialp5qahcfjlp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({project:'Мелково',source:'Интерактивная карта участков',page:location.href,created_at:new Date().toLocaleString('ru-RU'),plot_id:state.selected,plot_status:'Свободен',plot_area:dec(p.a,2)+' сот.',fence_price:rub(p.f),name:name,phone:phone,comment:root.querySelector('#mkComment').value.trim()})}).then(function(r){if(!r.ok)throw 1;return r.json()}).then(function(){root.querySelector('#mkSuccess').style.display='block';btn.textContent='Отправлено'}).catch(function(){alert('Не удалось отправить заявку. Попробуйте позже или позвоните нам.');btn.disabled=false;btn.textContent=old})});var resizeTimer=0,lastInnerW=window.innerWidth;function responsiveReset(){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){setBase(true);apply(false);},140)}window.addEventListener('orientationchange',responsiveReset,{passive:true});window.addEventListener('resize',function(){if(!MQ.matches)return;if(Math.abs(window.innerWidth-lastInnerW)>70){lastInnerW=window.innerWidth;responsiveReset();}},{passive:true});setBase(true);apply(false);var start=new URL(location.href).searchParams.get('plot');if(start&&byId[start])setTimeout(function(){if(MQ.matches){focusPlot(start);setTimeout(function(){openPlot(start,false)},620);}else openPlot(start,false)},180)}if(window.MELKOVO_MAP_DATA)boot();else document.addEventListener('melkovo:data',boot,{once:true})})();
;

(function(){
  /*
   * HARD BACKGROUND FIX
   * This intentionally overrides any older Tilda/HTML block that tries
   * to restore the previous MELKOVO_FORCE_NEW_CD.jpg background.
   */
  var BG_URL =
    'https://static.tildacdn.com/tild3335-6362-4938-b235-303561663831/melkovo_tilda_base.jpg?v=20260903-2033';

  function applyToImage(bg){
    if (!bg) return;

    if (bg.getAttribute('href') !== BG_URL) {
      bg.setAttribute('href', BG_URL);
    }

    try {
      var oldXlink = bg.getAttributeNS(
        'http://www.w3.org/1999/xlink',
        'href'
      );
      if (oldXlink !== BG_URL) {
        bg.setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'xlink:href',
          BG_URL
        );
      }
    } catch (e) {}
  }

  function forceMelkovoBackground(){
    /*
     * querySelectorAll is deliberate:
     * if Tilda accidentally contains two old/new map HTML blocks,
     * ALL map background images are forced to the correct file.
     */
    document
      .querySelectorAll('#mkMap .mk__bg, #mkSvg .mk__bg')
      .forEach(applyToImage);
  }

  function startBackgroundGuard(){
    forceMelkovoBackground();

    /*
     * Watch for an old script changing href after our code has loaded.
     * The value is only rewritten when it is actually wrong, so this
     * does not cause an observer loop.
     */
    var observer = new MutationObserver(function(mutations){
      var needFix = false;

      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];

        if (m.type === 'attributes') {
          var target = m.target;
          if (
            target &&
            target.classList &&
            target.classList.contains('mk__bg')
          ) {
            needFix = true;
            break;
          }
        }

        if (m.type === 'childList' && m.addedNodes.length) {
          needFix = true;
          break;
        }
      }

      if (needFix) forceMelkovoBackground();
    });

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true
    });

    /*
     * Tilda may initialize custom HTML blocks a little later.
     * Repeat several times to defeat delayed legacy scripts.
     */
    setTimeout(forceMelkovoBackground, 50);
    setTimeout(forceMelkovoBackground, 300);
    setTimeout(forceMelkovoBackground, 1000);
    setTimeout(forceMelkovoBackground, 2500);
    setTimeout(forceMelkovoBackground, 5000);

    window.addEventListener('pageshow', function(){
      forceMelkovoBackground();
      setTimeout(forceMelkovoBackground, 250);
    });

    console.info('[MELKOVO] forced background:', BG_URL);
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      startBackgroundGuard,
      { once: true }
    );
  } else {
    startBackgroundGuard();
  }
})();
