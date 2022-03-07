/*
    Assignment 05
*/

$(document).ready(function () {
    $('#content-item-list').append("<div class='content-item-wrapper'></div>");
 class Vehicles {
  constructor(id, name, description, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
  }

  printtext(){
    let text = '<div class="content-item-'+ this.id +'"><h2>' + this.name + '</h2><p>' + this.description + '</p><div>' + this.category + '</div></div>'; 
    $('.content-item-wrapper').append(text);
  }
}

let VehiclesList = [
    [1,'Activa','comfortable for small distance travelling ','2-Wheeler'],
    [2,'Auto Rickshaw','easy public transportation  ','3-Wheeler'],
    [3,'Car','Good for family purpose','4-Wheeler'],
    [4,'Truck','Used for tansposrting goods and stuff','Heavy Vehicles'],
    [5,'Honda','Honda is very well known for thier cars.','2-Wheeler']
];
VehiclesList.forEach(updateContentItem);

function updateContentItem(value, index, array) {
if (value[0] !== 'undefined') {
  if (value[1] !== 'undefined' && value[2] !== 'undefined' && value[3] !== 'undefined') {
let item = new Vehicles(value[0],value[1],value[2],value[3]);
    item.printtext();
    }
  }else{
  let item = new Vehicles(0,value[1],value[2],value[3]);
  item.printtext();
  }
}



});


