'use strict'

let container = document.getElementById('container');
let order = document.getElementById('myform');
let table = document.createElement('table');
container.appendChild(table);
let orderpresent = [];
let imgsname = ['present1.jpg', 'present2.jpg', 'present4.png', 'present5.png', 'present6.jpg'];


function Present(username, quantity, forwhom, pay, img) {
    this.username = username;
    this.quantity = quantity;
    this.forwhom = forwhom;
    this.pay = pay;
    this.img = 'img/' + img;

    orderpresent.push(this);
}

 function render() {
     console.log(imgsname);
    let trhead = document.createElement('tr');
    container.appendChild(trhead);
    let thhead = document.createElement('th');
    thhead.appendChild(trhead);
    thhead.textContent = 'User Name';

    thhead = document.createElement('th');
    thhead.appendChild(trhead);
    thhead.textContent = 'Quantity';

    thhead = document.createElement('th');
    thhead.appendChild(trhead);
    thhead.textContent = 'For whom';

    thhead = document.createElement('th');
    thhead.appendChild(trhead);
    thhead.textContent = 'payment method';

    thhead = document.createElement('th');
    thhead.appendChild(trhead);
    thhead.textContent = 'present';

    for (let index = 0; index < orderpresent.length; index++) {

        let trbody = document.createElement('tr');
        table.appendChild(trbody);

        let tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent = orderpresent[index].username;

        tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent = orderpresent[index].quantity;

        tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent = orderpresent[index].forwhom;

        tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent = orderpresent[index].pay;

        tdbody = document.createElement('td');
        trbody.appendChild(tdbody);
        let imgcontainer = document.createElement('img');
        tdbody.appendChild(imgcontainer);
        imgcontainer.setAttribute('src', orderpresent[index].img);

       


    }


}
order.addEventListener('submit', handeclick);
function handeclick(event) {
    
    event.preventDefault();
    let username = document.getElementById('username').value;
    let quantity = document.getElementById('quantity').value;
    let forwhom = document.getElementById('forwhom').value;
    let pay;
    if (document.getElementById('cash').checked) {
        pay = 'cash';
    }
    else if (document.getElementById('card').checked) 
    { pay = 'card'; }
    let img = randomimg();

    new Present(username, quantity, forwhom, pay, imgsname[img]);
    render();
    console.log(orderpresent)
    setting();
}
function randomimg() {
    return Math.floor(Math.random() * imgsname.length);
}
function setting(){
    let data = JSON.stringify(orderpresent);
    localStorage.setItem('data',data);
}
function getting(){
    let getitem = localStorage.getItem('data');
    let obj =JSON.parse(getitem);

    if(obj){
        orderpresent=obj;
    }
    render();
}
getting()