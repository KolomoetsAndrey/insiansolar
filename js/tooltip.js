document.onmousemove = moveTip;
function moveTip(e) {
  floatTipStyle = document.getElementById("floatTip").style;
  w = 150;

  if (document.all)  { 
    x = event.clientX + document.body.scrollLeft; 
    y = event.clientY + document.body.scrollTop; 

  } else   { 
    x = e.pageX;
    y = e.pageY;
  }

  if ((x + w + 10) < document.body.clientWidth) { 
    floatTipStyle.left = x + 'px';

  } else { 
    floatTipStyle.left = x - w + 'px';
  }
}

function toolTip(msg) {
  floatTipStyle = document.getElementById("floatTip").style;
  if (msg) {
    document.getElementById("floatTip").innerHTML = msg;
    floatTipStyle.display = "block";
  } else { 
    floatTipStyle.display = "none";
  } 
}