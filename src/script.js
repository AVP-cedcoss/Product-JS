document.getElementById("add-Product").addEventListener("click",submitForm); // Add Product Button Event

let prodList = [];

// on click Add Product Button
function submitForm()
{
    // Value Fetch
    var pId = document.getElementById("pid").value;
    var pName = document.getElementById("pname").value;
    var pPrice = document.getElementById("pprice").value;

    //Clearing the Input Field
    document.getElementById("pid").value = '';
    document.getElementById("pname").value = '';
    document.getElementById("pprice").value = '';
    
    pushData(pId, pName, pPrice);
    display();
}

function pushData(pId, pName, pPrice)
{
    let prod = {
        "PID": pId,
        "PName": pName,
        "PPrice": pPrice
    };
    prodList.push(prod);
}

function display()
{
    let out = "";
    for (let item of prodList)
    {

        out = item.PID;
        addElement(out);
        out = item.PName;
        addElement(out);
        out = item.PPrice;
        addElement(out);
    }
    // console.log(out);
}

//Add Element
function addElement(out)
{
    var p = document.createElement("p");
    var text = document.createTextNode(out);
    p.appendChild(text);
    var ele = document.getElementById("f-output");
    ele.appendChild(p);
}