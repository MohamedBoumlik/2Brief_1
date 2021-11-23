var data = [];
get();
document.getElementById('winner').style.display= 'none';
function add(){

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

  var localData = localStorage.getItem('StoredData');
  var localData2 = JSON.parse(localData);
  let capturedData = [];
  capturedData = localData2;

function spin(){

  document.getElementById('winner').style.display= 'block';

  var max = capturedData.length;
  var winnersArray = [];
  
  let rand = Math.floor(Math.random() * max);

  winnersArray.push({
    name: capturedData[rand].name,
    subject: capturedData[rand].subject
  });

  let removed = capturedData.splice(rand,1);
  console.warn(removed);

  console.log(capturedData);
  
  var table = document.getElementById('tableWin');
  for(let i = 0; i <= winnersArray.length; i++){
    table.innerHTML += `<tr>
                          <td>${winnersArray[i].name}</td>
                          <td>${winnersArray[i].subject}</td>
                        </tr>`;

  }
 

}