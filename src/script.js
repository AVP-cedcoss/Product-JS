document.getElementById("add-Product").addEventListener("click",submitForm);    //Add Product Button Event

let prodList = [];  //Global Object Array

// on click Add Product Button
function submitForm()
{
    pullValue();    //Pulling Value from the Input Fields
    clearFields();  //Clearing the Input Fields
    display2();  //Display Function
}

//Pull Value from the Form
function pullValue()
{
    var pId = document.getElementById("pid").value;
    var pName = document.getElementById("pname").value;
    var pPrice = document.getElementById("pprice").value;
    
    //Pushing the Data to the Object Array
    pushData(pId, pName, pPrice);
}

//Clear Input Fields
function clearFields()
{
     document.getElementById("pid").value = '';
     document.getElementById("pname").value = '';
     document.getElementById("pprice").value = '';
}

//Adding data to the Object Array
function pushData(pId, pName, pPrice)
{
    //Checking if the Product ID already Exists in the Array
    for (var x = 0; x < prodList.length; x++)
    {
        if (prodList[x].PID == pId)
        {
            //If Exists in the Array. Alert the User and return.
            alert("Product ID already in the List.");
            return;
        }
    }

    //If Doesn't Exist then push onto the Array
    let prod = {
        "PID": pId,
        "PName": pName,
        "PPrice": pPrice
    };

    // Pushing to the Object Array
    prodList.push(prod);
}

//Fetch Data from Object Array
function fetch(item)
{
    // Temp Array to store and return the Data for Individual Objects
    var out = [];
    out.push(item.PID);
    out.push(item.PName);
    out.push(item.PPrice);
    return out;
}

//Display Function
function display()
{
    // For Each loop iterating through Object Array
    for (let item of prodList)
    {
        //Calling the Fetch Funtion to fetch the Data for individual Element
        let out = fetch(item);

        //Creating Row
        var tr = document.createElement("tr");

        //Creating Cells
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        //Adding Data to the Table cell
        td1.innerHTML = out[0];
        td2.innerHTML = out[1];
        td3.innerHTML = out[2];

        //Adding Cells to the Row
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        //Accessing the Table by ID
        var table = document.getElementById("f-head");

        //Adding the row with Cells to the Parent Table
        table.appendChild(tr);
    }
}

function display2()
{
    var footerDiv = document.getElementById("footer");
    var table = document.createElement('table');
    table.setAttribute('id', 'f-head');
    var tbody = document.createElement('tbody');
    var html = "";
    //for (var i = 0; i < prodList.length; i++)
    for (let item of prodList)
    {
        out = fetch(item);
        html += '<tr>\
            <th>Product ID\</th>\
            <th>Product Name\</th>\
            <th>Product Price\</th>\
        </tr>';

        table.appendChild(html);
        // html += '<tr>\
        //     <td>'+out[0]+'\</td>\
        //     <td>'+out[1]+'\</td>\
        //     <td>'+out[2]+'\</td>\
        // </tr>';

        //Creating Row
        var tr = document.createElement("tr");

        //Creating Cells
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        //Adding Data to the Table cell
        td1.innerHTML = out[0];
        td2.innerHTML = out[1];
        td3.innerHTML = out[2];

        //Adding Cells to the Row
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    // tbody.appendChild(tr);
    // table.appendChild(tbody);

    // var footer = document.getElementById("footer");
    footerDiv.appendChild(table);
    // document.body.appendChild(footerDiv);
    // For Each loop iterating through Object Array
    // for (let item of prodList)
    // {
    //     //Calling the Fetch Funtion to fetch the Data for individual Element
    //     let out = fetch(item);

    // }
}
