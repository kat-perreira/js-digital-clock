
let d,h,m,s,animate;

function init(){
  d=new Date();
  h=d.getHours();
  m=d.getMinutes();
  s=d.getSeconds();
  clock();
}

function clock(){
  s += 1;
  if(s == 60){
    s = 0;
    m += 1;
    if(m == 60){
      m = 0;
      h += 1;
      if(h == 24){
        h = 0;
      }
    }

    h = ((h + 11) % 12 + 1)
  }
  // h = ((h + 11) % 12 + 1)

    $('sec',s);
    $('min',m);
    $('hr',h);
    animate=setTimeout(clock,1000);
  }

  function $(id,val){
    if(val<10){
      val='0'+val;
    }
    document.getElementById(id).innerHTML=val;

  }

  window.onload=init;
