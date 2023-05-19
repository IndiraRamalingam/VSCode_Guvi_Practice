    //JSON Data
    let DataJSON=[{
          "id": "001",
          "name": "Mark"
        },
        {
          "id": "002",
          "name": "MacDonald"
        },
        {
          "id": "003",
          "name": "Johnson "
        },
        {
          "id": "004",
          "name": "Williams"
        },
        {
          "id": "005",
          "name": "Maria"
        }];
    let arr = [
        { name: 'player1', score: 10, rank: 1},
        { name: 'player2', score: 7, rank: 2 },
        { name: 'player3', score: 3 , rank: 3},
        { name: 'player4', score: 12, rank: 0 }
    ];
        //select the container using ID
        let container=document.getElementById('container');

        //create a table
        let table=document.createElement('table');

        // populate the header and data of the table
        let tableHeaders=Object.keys(DataJSON[0]);

        let tableHeaderRow=document.createElement('tr');

        //Iterate through the values
        //Using Map

        tableHeaders.map(function(i){
          let th=document.createElement(`th`)
          th.textContent=i;
          tableHeaderRow.appendChild(th)
        })

        //Using forEach

        //   tableHeaders.forEach(heading=>{
        //     let th=document.createElement('th')
        //     th.textContent=heading;
        //     tableHeaderRow.appendChild(th)
        //   });

        table.appendChild(tableHeaderRow)

        //Iterate through the JSON and create row and get values of each object and create td and append the values in row
        
        DataJSON.map(function(i){
            let tableRow=document.createElement('tr')
            let rows=Object.values(i);
                rows.map(function(item){
                    let tableData=document.createElement('td')
                    tableData.textContent=item;
                    tableRow.appendChild(tableData)
                })
                table.appendChild(tableRow)
        })

        //Insert the table into the container
        container.appendChild(table);

        //Adding class to table
        container.classList.add('table','table-bordered');
