$(document).ready(readyNow);

class Employees {
    constructor(name, lastName, id, title, annualSalary){
        this.name = name;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;

    }// end of constructor
} // end of employees class

let data = [];



function readyNow(){
$('#submit').on('click', collectName);
}// end of readyNow

function collectName(){

const emp = new Employees(
$('#name').val(),
$('#lastname').val(),
$('#id').val(),
$('#title').val(),
$('#salary').val(),
);//end of collecting information
data.push(emp);// end of pushing info into array
$('#name').val('');
$('#lastname').val('');
$('#id').val('');
$('#title').val('');
$('#salary').val('');
updateData( data );
}// end of collect name

function updateData(array){

    let el = $( '#itemList' );
    el.empty();
    let totalCost = 0;
    for( let peeps of array ){
        let empNames = 
        `<tr id="${peeps.id}">
         <td>${peeps.name}</td>,
         <td>${peeps.lastName}</td>, 
         <td>${peeps.id}</td>,
         <td>${peeps.title}</td>,
         <td>${peeps.annualSalary}</td>
         <td><button id="${peeps.id}">delete</button></td>
         </tr>`;
         el.append( empNames );
         totalCost += Number(peeps.annualSalary);
         $(`#${peeps.id}`).on('click', function(){
         $(`#${peeps.id}`).remove();
        }) 
    }// end of for loop
    calculateCost(totalCost);
}// end of updateData function

function calculateCost(cost){
    
    let costTotal = cost / 12;
    let anualTotal = $('#cost');
    anualTotal.empty();
    anualTotal.append('<h3>Mothly total: ' + ' $ ' + Number(costTotal.toFixed(2)) + '</h3>'); 
    if(costTotal > 20000 ){
     anualTotal.css('background-color', 'red'); 
    }
} // end of calculateCost function


    
    
    
    










