var mainData = [];
var display = document.getElementById('display');
var nameValue=document.getElementById("nameSearch").value;
var method;

var person = [
    {
        "name": "Weiss Pate",
        "email": "weisspate@liquidoc.com"
    },
    {
        "name": "Dilip",
        "email": "rathoredilip38@gmail.com"
    },
    {
        "name": "Bass William",
        "email": "basswilliam@liquidoc.com"
    },
    {
        "name": "Salinas Bradley",
        "email": "salinasbradley@liquidoc.com"
    },
    {
        "name": "Irsad",
        "email": "irsad@liquidoc.com"
    },
    {
        "name": "Kaufman Dalton",
        "email": "kaufmandalton@liquidoc.com"
    },
    {
        "name": "Watkins Salas",
        "email": "watkinssalas@liquidoc.com"
    },
    {
        "name": "Rodriguez Langley",
        "email": "rodriguezlangley@liquidoc.com"
    },
    {
        "name": "Rogers Clark",
        "email": "rogersclark@liquidoc.com"
    },
    {
        "name": "Jerri Hammond",
        "email": "jerrihammond@liquidoc.com"
    }
];

function fnOnLoad() {
    console.log('On LOad');
    fnDrawTable(mainData);
}

document.mainForm.onclick = function()
{
    fnSearch();
}

function fnSearch () {
    method = document.querySelector('input[name = radio]:checked').value;

    if(method==null)
    {
        alert('method is null');
    }

    nameValue=document.getElementById("nameSearch").value;
    var result={};

    switch(method)
    {
        case "filter":
            //ans=person.filter(checkFilter);
          //  alert('filter:'+nameValue);
            result=person.filter(function checkFilter(age1)
            {
                console.log("Search = "+nameValue);


                if(age1.name.indexOf(nameValue)!=-1){
                    return age1.name;   
                }

            });
            console.log("Filter Result:"+result);
            fnDrawTable(result);

            break;

        case "find":
           // alert('find:'+nameValue);
            var findVal=[];
            result=person.find(function checkFind(objperson_find) {
                console.log("Search = "+nameValue);

                if (objperson_find.name.indexOf(nameValue) != -1) {
                    console.log(objperson_find.name);
                    findVal.push(objperson_find);
                    return objperson_find;
                }

            });
            console.log("Find Result:"+findVal);
            // var res=Object.values(result);
            // console.log("Find Result:"+res);
            fnDrawTable(findVal);

            break;

        case "foreach":
           // alert('foreach:'+nameValue);
            var forEachVal=[];
            result=person.forEach(function checkForeach(item_foreach) {
                if (item_foreach.name.indexOf(nameValue) != -1) {
                    console.log("Foreach value:" + item_foreach.name);

                    forEachVal.push(item_foreach);
                    return item_foreach.name;

                }
            });

            console.log("For Each value Return:"+forEachVal);

            console.log("For Each Results:"+result);
            fnDrawTable(forEachVal);
            break;

        case "map":
           // alert('map:'+nameValue);
            var mapVal=[];
            result=person.map(function checkMap(item_map) {
                if (item_map.name.indexOf(nameValue) != -1) {
                    console.log("Map value:" + item_map.name);

                    mapVal.push(item_map);
                    return item_map.name;

                }
            });
            fnDrawTable(mapVal);
            console.log("Map Results:"+result);

            break;

        case "findindex":
           // alert('findindex:'+nameValue);
            var findIndexVal=[];
            result=person.findIndex(function checkFindIndex(item_findindex) {
                if (item_findindex.name.indexOf(nameValue) != -1) {
                    console.log("FindIndex value:" + item_findindex.name);

                    findIndexVal.push(item_findindex);
                    return item_findindex.name;

                }
            });
            fnDrawTable(findIndexVal);
            console.log("findindex Results:"+result);
            break;

        case "lastindexof":
           // alert('lastIndex:'+nameValue);
            var lastIndexVal=[];
            result=person.name.lastIndexOf(nameValue);   // {
                // if (item_lastindexof.name.indexOf(nameValue) != -1) {
                //     console.log("lastIndex value:" + item_lastindexof.name);
                //
                //     lastIndexVal.push(item_lastindexof);
                //     return item_lastindexof.name;
                // }
           // });
            fnDrawTable(result);
            console.log("Last index Results:"+result);
            break;

        default:
           // alert('Default Case:'+nameValue);
            break;
    }
}

function fnDrawTable(data) {
    var len;

    display.innerHTML="";

    console.log("Draw Table Data:"+data);

    var table = document.createElement('table');

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NAME";
    cell2.innerHTML = "EMAIL";

    table.appendChild(row);

    console.log('Length Data:'+Object.keys(data).length);
    len=Object.keys(data).length;

    // var findObj=Object.values(data);
    // console.log("FInd Object Value : "+findObj);

    // const personArray=Object.values(data);
    // console.log("Person Array : "+personArray.length);
    // console.log("Person Array : "+personArray);

    for (var i = 0; i < len; i++){
        console.log('loop run');
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var text1 = document.createTextNode(data[i]['name']);
        var text2 = document.createTextNode(data[i]['email']);

        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    }
    display.innerHTML = table.outerHTML;
    data={};
}