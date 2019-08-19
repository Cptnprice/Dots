var coords = [];
const l = [];

function MouseClickCoords(e){
  var mouseX = parseInt(e.clientX);
  var mouseY = parseInt(e.clientY);
  if (mouseX > 200 || mouseY > 200){
    coords.push([mouseX,mouseY]);
  }
}

document.body.addEventListener('click',MouseClickCoords,false);

function createelement(){
  for (let i = 0; i < coords.length; i++){
    let div1 = document.createElement("div");
    div1.id = i.toString();
    div1.style.position = "absolute";
    div1.style.width = "50px";
    div1.style.height = "50px";
    div1.style.left = (coords[i][0] - 25).toString() + "px";
    div1.style.top = (coords[i][1] - 25).toString() + "px";
    div1.style.background = "blue";
    div1.style.borderRadius = "50%";
    div1.style.zIndex = "1";
    document.body.appendChild(div1);
  }
}

document.body.addEventListener('click',createelement,false);

function connect(){
  for (let i = 0; i < coords.length - 1; i++){
      if (l.includes(i) && l.includes(i+1)){
        continue;
      }
      else{
        let b = document.getElementById(i.toString())
        b.style.background = "black";
        x1 = coords[i][0];
        y1 = coords[i][1];
        x2 = coords[i+1][0];
        y2 = coords[i+1][1];
        let distance = Math.sqrt(((x2 - x1)**2 + (y2 - y1)**2));
        let i1 = Math.abs(y2 - y1);
        let a = Math.asin(i1 / distance) * (180 / Math.PI);
        let div1 = document.createElement("div");
        div1.style.position = "absolute";
        div1.style.height = "1px";
        div1.style.width = "200px";
        let t = 0;
        div1.style.left = coords[i][0].toString() + "px";
        div1.style.top = coords[i][1].toString() + "px";
        div1.style.background = "black";
        document.body.appendChild(div1);
        if (x1 <= x2 && y1 > y2){
          div1.style.transform = `rotate(-${a}deg)`;
        }
        else if(x1 <= x2 && y1 <= y2){
          div1.style.transform = `rotate(${a}deg)`;
        }
        else if(x1 > x2 && y1 >= y2){
          div1.style.transform = `rotate(-${180 - a}deg)`;
        }
        else if(x1 > x2 && y1 < y2){
          div1.style.transform = `rotate(${180 - a}deg)`;
        }
        div1.style.transformOrigin = "0% 0% 0";
        div1.style.zIndex = "-1";
        let id = setInterval(func,10);
        function func(){
          if (t >= distance){
            clearInterval(id);
          }
          else{
            t = t + 10;
            div1.style.width = t.toString() + "px";
          }
        }
        l.push(i);
        l.push(i+1);
        console.log(i,i+1);
      }
  }
}
