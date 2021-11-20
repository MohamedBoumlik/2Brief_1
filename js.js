var array = [];
var table = document.getElementById('table');

function add(){
  get();

  // addRow = table.insertRow(n);
  
  // var cell1= addRow.insertCell(0);
  // var cell2= addRow.insertCell(1);
  // var cell3= addRow.insertCell(2);

  // arrayName[x] = Name  ;
  // arraySubjet[x] = Subject;
  

  // cell1.innerHTML= arrayName[x];
  // cell2.innerHTML= arraySubjet[x];
  // x++;

  // // console.log(array);
  // var arrayJSON = JSON.stringify(arrayName);
  // var arrayJSON = JSON.stringify(arrayName);
  // // console.log(arrayJSON);
  // localStorage.setItem(array, arrayJSON);
  // // var newList = JSON.parse(localStorage['array']);
  // console.log(localStorage);
  // console.log(arrayName + arraySubjet);

  var Name =  document.getElementById('name').value;
  var Subject = document.getElementById('subject').value;
  
  array.push({
    name: Name,
    subject: Subject
  });

  var arrayJSON = JSON.stringify(array);
  localStorage.setItem('StoredArray', arrayJSON);


}

function get(){
  var getData = localStorage.getItem('StoredArray');
  var dataArray = JSON.parse(getData);
  console.log(dataArray);

  var nrows = table.rows.length;

  while(--nrows){
    table.deleteRow(nrows);
  }

  // for (let i = 1; i < nrows; i++) {
  //   table.deleteRow(i);
    
  // }

  for(var i= 0; i<dataArray.length;i++)
  {

    addRow = table.insertRow();
    var cell1= addRow.insertCell();
    var cell2= addRow.insertCell();

    cell1.innerHTML = dataArray[i].name;
    cell2.innerHTML = dataArray[i].subject;

    // console.log(array);
  
  }
}