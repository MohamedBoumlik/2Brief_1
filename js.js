document.getElementById('winner').style.display= 'none';
var data = [];
get();

// -------------------- add -------------------- 

function add(){

  var Name =  document.getElementById('name').value;
  var Subject = document.getElementById('subject').value;
    
  data.push({
    name: Name,
    subject: Subject,
  });

  var dataJSON = JSON.stringify(data);
  localStorage.setItem('StoredData', dataJSON);
  get();
  
}

// -------------------- get -------------------- 

function get(){

  var DATA = localStorage.getItem('StoredData');
  if(DATA != null){
    var DATA2 = JSON.parse(DATA);
  }
  var table = document.getElementById('table');
  table.innerHTML="";
  for(var i = 0; i < DATA2.length; i++){

    var row = `<tr style="text-align: center; vertical-align: middle;">
                  <td >${DATA2[i].name}</td>
                  <td>${DATA2[i].subject}</td>
              </tr>`;

    table.innerHTML = table.innerHTML+row ;
    document.getElementById('name').value = '';
    document.getElementById('subject').value = '';

  }

}

// -------------------- Spinning -------------------- 

var localData = localStorage.getItem('StoredData');
var localData2 = JSON.parse(localData);
let capturedData = [];
capturedData = localData2;

function spin(){

  document.getElementById('winner').style.display= 'block';

  var max = capturedData.length;
  var winnersArray = [];
  
  let rand = Math.floor(Math.random() * max);

  // Adding dates

  winnersArray.push({
    name: capturedData[rand].name,
    subject: capturedData[rand].subject,
  });

  let removed = capturedData.splice(rand,1);

  var date = new Date();
  var table = document.getElementById('tableWin');
  for(let i = 0; i <= winnersArray.length; i++){

    let newDate = date.setDate( date.getDate()+1 );
    table.innerHTML += `<tr style="text-align: center; vertical-align: middle;">
                          <td>${winnersArray[i].name}</td>
                          <td>${winnersArray[i].subject}</td>
                          <td>${newDate.toLocaleDateString()}</td>
                        </tr>`;

  }

}