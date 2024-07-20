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

    if (activeElement.nodeName == 'TD'){
        dbg(2);
        if (right) {
            activeElement.after(td.cloneNode(true));
        } else {
            activeElement.before(td.cloneNode(true));
        }
    }
    dbg(document.querySelector('#pageBlock'));
    systemTools.renderForm();
};


//Удаление ячейки
const delCell = () => {
    let activeElement = systemTools.pageBlockContainer.querySelector('.is_active');

    if (activeElement && activeElement.nodeName == 'TD'){
        systemTools.pageBlockContainer.querySelector('.is_active').remove();
    }

    systemTools.resetPrintForm();
};


//Добавление столбца
const addCol = () => {

};


//Удаление столбца
const delCol = () => {

};


//Добавление строки
const addRow = () => {

};


//Удаление строки
const delRow = () => {

};


//Добавление таблицы
const addTable = (index, text, type) => {
    index = index??printForm.body.children.length - 1;
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

    if (index == -1){
        printForm.body.prepend(table.cloneNode(true));
    } else {
        printForm.body.children[index].after(table.cloneNode(true));
    }

    systemTools.renderForm();
};
//==========
dbg('editForm.js end');