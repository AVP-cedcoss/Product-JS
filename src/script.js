document.getElementById("add-Product").addEventListener("click",submitForm);    //Add Product Button Event

let prodList = [];  //Global Object Array

// on click Add Product Button
function submitForm()
{
    pullValue();    //Pulling Value from the Input Fields
    clearFields();  //Clearing the Input Fields
    display();  //Display Function
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
    //Accessing Table Element in HTML
    var table = document.getElementById('f-head');
    
    //Tempororary Variable to Add Rows
    var html = "";

    //Clearing the Table
    table.innerHTML = ""

    //Table Header
    table.innerHTML += '<tr>\
            <th>Product ID\</th>\
            <th>Product Name\</th>\
            <th>Product Price\</th>\
        </tr>';

    //Fetching the rows in Product List Array
    for (let item of prodList)
    {
        //Fetching each Object one after another
        out = fetch(item);

        html += '<tr>\
            <td>'+out[0]+'\</td>\
            <td>'+out[1]+'\</td>\
            <td>'+out[2]+'\</td>\
        </tr>';
    }

    //Adding Rows to Table
    table.innerHTML += html;
}
