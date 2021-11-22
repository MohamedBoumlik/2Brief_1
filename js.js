var data = [];
get();

function add(){
  // var refreshedData = ocalStorage.getItem('StoredData');

  var Name =  document.getElementById('name').value;
  var Subject = document.getElementById('subject').value;
    
  data.push({
    name: Name,
    subject: Subject
  });

  var dataJSON = JSON.stringify(data);
  localStorage.setItem('StoredData', dataJSON);
  get();
  
}

function get(){

  var DATA = localStorage.getItem('StoredData');
  var DATA2 = JSON.parse(DATA);

  var table = document.getElementById('table');
  table.innerHTML="";
  for(var i = 0; i < DATA2.length; i++){

    var row = `<tr>
                  <td>${DATA2[i].name}</td>
                  <td>${DATA2[i].subject}</td>
              </tr>`;

    table.innerHTML = table.innerHTML+row ;
    document.getElementById('name').value = '';
    document.getElementById('subject').value = '';

  }

}

function spin(){

  var localData = localStorage.getItem('StoredData');
  var localData2 = JSON.parse(localData);
  var max = localData2.length;
  var win = Math.floor(Math.random() * max)
  console.log(win);


  // randomArray = localData2[Math.floor(Math.random()*localData2.length)];
  // console.log(randomArray);

}
// Math.floor
// Math.random