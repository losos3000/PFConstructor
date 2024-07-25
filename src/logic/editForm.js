dbg('editForm.js start');
//РАБОТА С ПЕЧАТНОЙ ФОРМОЙ
//РАБОТА С ФАЙЛАМИ
//Загрузка файла ПФ
const loadFile = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file??false){
        reader.readAsText(file, 'windows-1251');
        reader.onload = () => {
            printForm.body.innerHTML = systemTools.parsePFFileBody(reader.result);
            systemTools.renderForm();
        }
    }
};


//Сохранение файла ПФ
const saveFile = () => {
    let pfSave = `<!-- Created in PFConstructor v0.1 -->\n\n${editTools.getPrintFormCode()}`;

    let pfFileName = prompt('Название файла', printForm.name);

    if (pfFileName??false){
        let pfFileData = new Blob([pfSave], {type: 'text/plain'});

        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(pfFileData);
        a.download = `${pfFileName}.html`;
        a.click();
    }
};
//==========


//РАБОТА С ТЕКСТОМ
//
const addText = (index, text) => {
    index = index??printForm.body.children.length - 1;
    text = text??'Текст';

    addTable(index, text, 'text');
};
//==========



//РАБОТА С ТАБЛИЦЕЙ
//Добавление ячейки (по умолчанию справа)
const addCell = (right) => {
    right = right??true;
    let activeElement = systemTools.pageBlockContainer.querySelector('.is_active');
    let td = document.createElement('td');

    if (activeElement != null && activeElement.nodeName == 'TD'){
        if (right) {
            activeElement.after(td.cloneNode(true));
        } else {
            activeElement.before(td.cloneNode(true));
        }

        systemTools.renderForm();
    }
};


//Удаление ячейки
const delCell = () => {
    delTableElement('TD');
};


//Добавление столбца
const addCol = () => {

};


//Удаление столбца
const delCol = () => {

};


//Добавление строки
const addRow = (down) => {
    down = down??true;
    let activeElement = systemTools.pageBlockContainer.querySelector('.is_active');
    let td = document.createElement('td');
    let tr = document.createElement('tr');

    if (activeElement != null) {
        if (activeElement.nodeName == 'TABLE') {
            let trCount = activeElement.tBodies[0].rows.length;
            dbg(trCount);

            if (trCount > 0) {
                if (down) {
                    let tdCount = activeElement.tBodies[0].rows[trCount - 1].cells.length;
                    dbg(tdCount);

                    for (let i = 0; i < tdCount; i++) {
                        tr.append(td.cloneNode(true));
                    }
                } else {
                    let tdCount = activeElement.tBodies[0].rows[0].cells.length;
                    dbg(tdCount);

                    for (let i = 0; i < tdCount; i++) {
                        tr.append(td.cloneNode(true));
                    }
                }
            } else {
                tr.append(td.cloneNode(true));
            }

            if (down) {
                activeElement.tBodies[0].append(tr.cloneNode(true));
            } else {
                activeElement.tBodies[0].prepend(tr.cloneNode(true));
            }
        }

        systemTools.renderForm();
    }
};


//Удаление строки
const delRow = () => {
    delTableElement('TR');
};


//Добавление таблицы
const addTable = (element, text, type) => {
    element = element??systemTools.pageBlockContainer.querySelector('#pageBlock').lastChild;
    text = text??printForm.body.childElementCount;
    type = type??'table'; //table, text

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let td = document.createElement('td');

    switch (type) {
        case 'table':
            break;
        case 'text':
            table.classList.add('noneLine');
            td.innerText = text;
            break;
        default:
            break;
    }

    td.innerText = text;
    tr.append(td.cloneNode(true));
    tr.append(td.cloneNode(true));
    tbody.append(tr);
    table.append(tbody);

    element.after(table);

    systemTools.renderForm();
};


//Удаление таблицы
const delTable = () => {
    delTableElement('TABLE');
}


//Удаление элемента таблицы
const delTableElement = (elementNodeName) => {
    elementNodeName = elementNodeName??'';
    let activeElement = systemTools.pageBlockContainer.querySelector('.is_active');

    if (activeElement != null) {
        if (elementNodeName =='TABLE' && activeElement.nodeName == 'TABLE') {
            activeElement.remove();
            systemTools.renderForm();
        } else if (elementNodeName == 'TD' && activeElement.nodeName == 'TD') {
            activeElement.remove();
            systemTools.renderForm();
        } else if (elementNodeName == 'TR' && activeElement.nodeName == 'TD') {
            activeElement.parentElement.remove();
            systemTools.renderForm();
        }
    }
}
//==========
dbg('editForm.js end');