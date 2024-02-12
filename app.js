 

const pepsi =  document.querySelector('.pepsi');
const pepsi1 =  document.getElementById('pepsi1');
const pepsi2 =  document.getElementById('pepsi2');
const pepsi3 =  document.getElementById('pepsi3');
const   sec  =  document.querySelector('.sec')

function pepsiBlue () {
    pepsi.src =  
    pepsi1.innerHTML = 'assets/pepsi001.png';
    sec.style.backgroundColor = '#0062be'
    console.log(pepsi1);
   
    
}
 
pepsi1.addEventListener('click', pepsiBlue);


function pepsiWhite () {
    pepsi.src =
    pepsi2.innerHTML = 'assets/pepsi002.png';
    sec.style.backgroundColor =  '#e60c2c'
    
}
 
pepsi2.addEventListener('click', pepsiWhite);


function pepsiBlack () {
    pepsi.src =

    pepsi3.innerHTML = 'assets/pepsi003.png'
    sec.style.backgroundColor =  '#1e1e1e'
}
pepsi3.addEventListener('click', pepsiBlack)


 