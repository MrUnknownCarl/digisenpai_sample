let SHEET_ID ='1MYUl7GENBhUYva3_VQI-ZERgSgiOxiNsrTUNe9ekUMA'
let SHEET_TITLE = 'Javascript';
let SHEET_RANGE = '1:1001'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID +'/gviz/tq?sheet=' +SHEET_TITLE +'&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    
    let person_name_title = document.getElementById('person_name_title');
    let data_sample_title = document.getElementById('data_sample_title');
    let person_name = document.getElementById('person_name');
    let data_sample = document.getElementById('data_sample');
    let Grid2 = document.getElementById('Grid2');
    let length = data.table.rows.length;
    
    person_name_title.innerHTML = data.table.rows[0].c[0].v;
    data_sample_title.innerHTML = data.table.rows[0].c[1].v;
    let selectOptionPerson = document.createElement('select');
    person_name.append(selectOptionPerson);

    
    for(let i = 1; i<length; i++){

        

        let newboxperson = document.createElement('option');
        newboxperson.id = ("box" +i);
        newboxperson.className = "Some_Style";
        selectOptionPerson.append(newboxperson);
        newboxperson.innerHTML = data.table.rows[i].c[0].v;

        let newboxdata = document.createElement('div');
        let space = document.createElement('td');
        let space2 = document.createElement('td');

        newboxdata.id = ("box" +i);
        newboxdata.className = "Some_Style";
        data_sample.append(newboxdata);
        data_sample.append(space);
        data_sample.append(space2);

        newboxdata.innerHTML = data.table.rows[i].c[1].v;


    }

})