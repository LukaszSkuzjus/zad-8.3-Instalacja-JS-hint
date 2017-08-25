var createTableBtn=document.getElementById("createTableBtn");
var table =document.getElementById("myTable");

function createTable()
{
  var numberOfRows=(document.getElementById("numberOfRowsInput").value);
  var numberOfColumns=(document.getElementById("numberOfColumnsInput").value);
  //console.log(numberOfRows);
  //console.log(numberOfColumns);
  var rows=[];
  var cells=[];
  var newRow;
  var newCell;
  for(var i=0;i<numberOfRows;++i)
    {
      //newRow=document.createElement("tr");
      newRow=table.insertRow(i);
      //console.log(newRow);
      for(var j=0;j<numberOfColumns;++j)
        {
          newCell=newRow.insertCell(j);
          //console.log(newCell);
          cells.push(newCell);
          //document.write(cells);
          //alert(cells);
          cells[j].innerHTML="Row-"+(i+1)+" Column-"+(j+1);
          //console.log(j);
        }
      cells=[];
      rows.push(newRow);
      //table.appendChild(rows[i]);
    }
}
createTableBtn.addEventListener("click",createTable);