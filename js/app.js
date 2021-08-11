'use strict';
let form=document.getElementById('form');
let table=document.getElementById('table');
let clear=document.getElementById('clear');

function Donator(name,amount,age) {
    this.name=name;
    this.amount=amount;
    this.age=age;
    Donator.alldonators.push(this);
    
}
Donator.alldonators=[];


// w3schoole 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


form.addEventListener('submit',submtions);
function submtions(event) {
    event.preventDefault();
    let name =event.target.name.value;
    // console.log(name);
    let amount=event.target.amount.value;
    let age= getRndInteger(20,60);

    let newDonator=new Donator(name,amount,age);
    // console.log(Donator.alldonators);

    saveToLocalStorage();
   
   

    
}

function saveToLocalStorage() {
    let stringArray=JSON.stringify(Donator.alldonators);
    localStorage.setItem('Donators',stringArray);
    
}

function render() {
    for (let i = 0; i < Donator.alldonators.length; i++) {
let tr=document.createElement('tr');
let tdname=document.createElement('td');
let tdamount=document.createElement('td');
let tdage=document.createElement('td');


table.appendChild(tr);
tr.appendChild(tdname);
tr.appendChild(tdamount);
tr.appendChild(tdage);

tdname.textContent=Donator.alldonators[i].name;
tdamount.textContent=Donator.alldonators[i].amount;
tdage.textContent=Donator.alldonators[i].age;

    }   
}


clear.addEventListener('click',clearAll);

function clearAll(event) {
    localStorage.removeItem('Donators');
    location.reload();
   
}









function getStoreData() {
    
    let data=JSON.parse(localStorage.getItem('Donators'));

    if(data!==null){
        for (let i = 0; i < data.length; i++) {
            
           Donator.alldonators=data;
           render();
           
        }
       
    }
  
console.log('this',data);
}

getStoreData();





