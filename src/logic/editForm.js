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
    let activeElement = systemTools.pageBlockContainer.querySelector('.is_active');

    if (activeElement != null) {
        if (activeElement.nodeName == 'TD') {
            activeElement.remove();
            systemTools.renderForm();
        }
    }
};


//Добавление столбца
const addCol = (right) => {
    right = right??true;
    let activeElement = systemTools.pageBlockContainer.querySelector('.is_active');

    if(activeElement != null) {
        if (activeElement.nodeName == 'TD') {
            let section = activeElement.parentElement.parentElement;
            let cellCount = 0;

            for (let i = 0; i <= activeElement.cellIndex; i++) {
                cellCount += activeElement.colSpan;
            }

            rowIteration: for (let row of section.rows) {
                let i = c = 0;

                for (; c < cellCount; i++) {
                    c += row.cells[i].colSpan;

                    if (c > cellCount) {
                        row.cells[i].colSpan++;
                        continue rowIteration;
                    }
                }
                
                if (right) {
                    row.cells[i-1].after(editTools.TD.cloneNode(true));
                } else {
                    row.cells[i-1].before(editTools.TD.cloneNode(true));
                }
            }

            systemTools.renderForm();

        } else if (activeElement.nodeName == 'TABLE') {
            let section = activeElement.tBodies[0];

            for (let row of section.rows) {
                if (right) {
                    row.append(editTools.TD.cloneNode(true));
                } else {
                    row.prepend(editTools.TD.cloneNode(true));
                }
            }

            systemTools.renderForm();
        }
    }
};


//Удаление столбца
const delCol = () => {

};


//Добавление строки
const addRow = (down) => {
    down = down??true;
    let activeElement = systemTools.pageBlockContainer.querySelector('.is_active');

    if (activeElement != null) {
        if (activeElement.nodeName == 'TD') {
            let tr = document.createElement('tr');
            let activeRow = activeElement.parentElement;
            let activeSection = activeRow.parentElement;
            let activeRowIndex = activeRow.rowIndex;
            let cellCount = 0;

            for (cell of activeSection.rows[0].cells) {
                cellCount += cell.colSpan;
            }

            if (down) {
                for (let i = 0; i <= activeRowIndex; i++) {
                    for (cell of activeSection.rows[i].cells) {
                        if (i + cell.rowSpan - 1 > activeRowIndex) {
                            cell.rowSpan++;
                            cellCount -= cell.colSpan;
                        }
                    }
                }

                activeRow.after(tr);

            } else {
                for (let i = 0; i < activeRowIndex; i++) {
                    for (cell of activeSection.rows[i].cells) {
                        if (i + cell.rowSpan - 1 >= activeRowIndex) {
                            cell.rowSpan++;
                            cellCount -= cell.colSpan;
                        }
                    }
                }

                activeRow.before(tr);
            }

            for (let i = 0; i < cellCount; i++) {
                tr.append(editTools.TD.cloneNode(true));
            }
            
            systemTools.renderForm(0);

        } else if (activeElement.nodeName == 'TABLE') {
            let tr = document.createElement('tr');
            let activeSection = activeElement.tBodies[0];
            let cellCount = 0;

            for (cell of activeSection.rows[0].cells) {
                cellCount += cell.colSpan;
            }

            for (let i = 0; i < cellCount; i++) {
                tr.append(editTools.TD.cloneNode(true));
            }

            if (down) {
                activeSection.append(tr.cloneNode(true));
            } else {
                activeSection.prepend(tr.cloneNode(true));
            }

            systemTools.renderForm();
        }
    }
};


//Удаление строки
const delRow = () => {
    
};


//Добавление таблицы
const addTable = (down, element) => {
    element = element??systemTools.pageBlockContainer.querySelector('.is_active');
    down = down??true;

    if (element.nodeName == 'TABLE'
        || element.classList.contains('UI')) {
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let tr = document.createElement('tr');
        let td = document.createElement('td');

        tr.append(td.cloneNode(true));
        tr.append(td.cloneNode(true));
        tr.append(td.cloneNode(true));
        tbody.append(tr.cloneNode(true));
        tbody.append(tr.cloneNode(true));
        tbody.append(tr.cloneNode(true));
        tbody.append(tr.cloneNode(true));
        tbody.append(tr.cloneNode(true));
        tbody.append(tr.cloneNode(true));
        tbody.append(tr.cloneNode(true));
        tbody.append(tr.cloneNode(true));
        tbody.append(tr.cloneNode(true));
        table.append(tbody.cloneNode(true));

        table.tBodies[0].rows[1].cells[1].remove();
        table.tBodies[0].rows[0].cells[1].rowSpan = 2;
        table.tBodies[0].rows[3].cells[1].remove();
        // table.tBodies[0].rows[3].cells[0].colSpan = 2;
        // table.tBodies[0].rows[4].cells[0].remove();
        // table.tBodies[0].rows[4].cells[1].remove();
        // table.tBodies[0].rows[3].cells[0].rowSpan = 2;

        if (down) {
            element.after(table.cloneNode(true));
        } else {
            element.before(table.cloneNode(true));
        }

        systemTools.renderForm();
    }
};


//Удаление таблицы
const delTable = () => {
    let activeElement = systemTools.pageBlockContainer.querySelector('.is_active');

    if (activeElement != null) {
        if (activeElement.nodeName == 'TABLE') {
            activeElement.remove();
            systemTools.renderForm();
        }
    }
}
//==========
dbg('editForm.js end');