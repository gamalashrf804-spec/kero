function loginUser(event){
  event.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  localStorage.setItem("glmName",name);
  localStorage.setItem("glmEmail",email);
  window.location.href="web.html";
}

document.addEventListener("DOMContentLoaded",function(){
  const name=localStorage.getItem("glmName");
  const welcome=document.getElementById("welcomeText");
  if(name && welcome){ welcome.innerHTML=`Welcome, <span style="color:var(--gold)">${name}</span>.<br>Welcome to German Luxury Motors.`; }
  const savedMode=localStorage.getItem("glmMode");
  if(savedMode==="light") document.body.classList.add("light");
  updateModeIcon();
});

function toggleMode(){
  document.body.classList.toggle("light");
  localStorage.setItem("glmMode",document.body.classList.contains("light")?"light":"dark");
  updateModeIcon();
}
function updateModeIcon(){
  const icon=document.getElementById("modeIcon");
  if(icon) icon.className=document.body.classList.contains("light")?"bi bi-sun":"bi bi-moon-stars";
}

function calculate(op){
  const a=parseFloat(document.getElementById("num1").value);
  const b=parseFloat(document.getElementById("num2").value);
  const result=document.getElementById("calcResult");
  if(Number.isNaN(a)||Number.isNaN(b)){result.textContent="Please enter two numbers.";return;}
  if(op==="/"&&b===0){result.textContent="Cannot divide by zero.";return;}
  let answer;
  if(op==="+") answer=a+b;
  if(op==="-") answer=a-b;
  if(op==="*") answer=a*b;
  if(op==="/") answer=a/b;
  result.textContent=`Result = ${answer}`;
}

function checkGrade(){
  const grade=Number(document.getElementById("grade").value);
  const result=document.getElementById("gradeResult");
  if(document.getElementById("grade").value===""){result.textContent="Enter a grade.";return;}
  if(grade<0||grade>100){result.textContent="Grade must be between 0 and 100.";return;}
  if(grade>=90) result.textContent="Excellent — ممتاز";
  else if(grade>=80) result.textContent="Very Good — جيد جدًا";
  else if(grade>=60) result.textContent="Pass — مقبول";
  else result.textContent="Fail — غير مقبول";
}

function checkBrand(){
  const input=document.getElementById("brandSearch");
  const result=document.getElementById("brandResult");
  const value=input.value.trim().toLowerCase();

  if(!value){
    result.innerHTML='<i class="bi bi-exclamation-circle"></i> Please write a car brand.';
    return;
  }

  let brandInfo=null;

  if(value.includes("bmw") || value.includes("بى ام") || value.includes("بي ام") || value.includes("بي إم")){
    brandInfo={brand:"BMW", focus:"Speed & Driving", comfort:"High comfort", choice:"A strong choice for people who want performance with everyday luxury."};
  }else if(value.includes("mercedes") || value.includes("مرسيدس")){
    brandInfo={brand:"Mercedes-Benz", focus:"Luxury & Prestige", comfort:"Excellent comfort", choice:"A strong choice for luxury, comfort and an executive feeling."};
  }else if(value.includes("porsche") || value.includes("بورش")){
    brandInfo={brand:"Porsche", focus:"Sport & Performance", comfort:"Sport-focused comfort", choice:"A strong choice for drivers who love sporty performance and handling."};
  }else if(value.includes("audi") || value.includes("اودي") || value.includes("أودي")){
    brandInfo={brand:"Audi", focus:"Technology & Reliability", comfort:"Premium comfort", choice:"A strong choice for modern technology, comfort and a refined driving experience."};
  }

  if(!brandInfo){
    result.innerHTML='<i class="bi bi-question-circle"></i> Brand not found. Try BMW, Mercedes, Porsche or Audi.';
    return;
  }

  result.innerHTML=`
    <div class="brand-result-title"><span>${brandInfo.brand}</span><i class="bi bi-check-circle-fill"></i></div>
    <div class="brand-result-grid">
      <div><small>Main character</small><strong>${brandInfo.focus}</strong></div>
      <div><small>Comfort</small><strong>${brandInfo.comfort}</strong></div>
      <div><small>Choice</small><strong>${brandInfo.choice}</strong></div>
    </div>`;
  result.classList.remove("brand-result-show");
  void result.offsetWidth;
  result.classList.add("brand-result-show");
}

const showroomCars = [
  {brand:'MERCEDES-BENZ', name:'G 550', details:'443 hp • 4MATIC • Luxury SUV', price:'$153,900', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85'},
  {brand:'MERCEDES-BENZ', name:'AMG GT 43', details:'416 hp • Coupe • AMG', price:'$108,850', image:'https://images.unsplash.com/photo-1618843479619-f3d0a8f9d1d9?auto=format&fit=crop&w=1200&q=85'},
  {brand:'MERCEDES-BENZ', name:'AMG GT 63 S E', details:'831 hp • Hybrid • AMG', price:'$200,500', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85'},
  {brand:'BMW', name:'7 Series', details:'Flagship sedan • Premium interior', price:'$99,800', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85'},
  {brand:'BMW', name:'M5 Sedan', details:'High-performance luxury sedan', price:'$123,300', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85'},
  {brand:'BMW', name:'XM', details:'Performance luxury SUV • Hybrid', price:'$159,600', image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85'},
  {brand:'AUDI', name:'RS e-tron GT', details:'912 hp • Electric • quattro', price:'$170,500', image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85'},
  {brand:'AUDI', name:'RS Q8 performance', details:'V8 • quattro • Luxury SUV', price:'$138,300', image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85'},
  {brand:'AUDI', name:'Q8 55 TFSI', details:'Luxury SUV • quattro', price:'$75,600', image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85'},
  {brand:'PORSCHE', name:'Panamera Turbo S', details:'771 hp • E-Hybrid • AWD', price:'$245,200', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85'},
  {brand:'PORSCHE', name:'911 Turbo S', details:'711 PS • AWD • Performance', price:'$270,300', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85'},
  {brand:'PORSCHE', name:'911 Turbo S Cabriolet', details:'711 PS • AWD • Convertible', price:'$284,300', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85'}
];

function chooseRandomCar(){
  const car=showroomCars[Math.floor(Math.random()*showroomCars.length)];
  const result=document.getElementById('randomCarResult');
  document.getElementById('randomCarImage').src=car.image;
  document.getElementById('randomCarBrand').textContent=car.brand;
  document.getElementById('randomCarName').textContent=car.name;
  document.getElementById('randomCarDetails').textContent=car.details;
  document.getElementById('randomCarPrice').textContent=car.price;
  document.getElementById('randomPlaceholder').style.display='none';
  result.classList.remove('show');
  void result.offsetWidth;
  result.classList.add('show');
}
