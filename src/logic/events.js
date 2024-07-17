//ОБРАБОТКА СОБЫТИЙ
//рендер формы при загрузке страницы
window.onload = () => {
    // systemTools.renderForm();
    systemTools.renderFormUI();
};


//Загрузка файла
editTools.inputFile.addEventListener('change', (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file??false){
        reader.readAsText(file, 'windows-1251');
        reader.onload = () => {
            printForm.body.innerHTML = systemTools.parsePFFileBody(reader.result);
            systemTools.renderForm();
        }
    }
});


//Добавление таблицы
editTools.addTableButton.addEventListener('click', () => {


    let table = document.createElement('table');
    table.innerHTML = (`
        <tbody>
            <tr>
                <td>
                    ${printForm.body.children.length + 1}
                </td>
            </tr>
        </tbody>
    `);

    printForm.body.append(table)
    printForm.body.append('\n   ');
    systemTools.renderForm();
});


//Сохранение файла
editTools.saveFileButton.addEventListener('click', () => {
    let pfSave = `<!-- Created in PFConstructor v0.1 -->\n\n${editTools.getPrintFormCode()}`;

    let pfFileName = prompt('Название файла', 'printForm');

    if (pfFileName??false){
        let pfFileData = new Blob([pfSave], {type: 'text/plain'});

        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(pfFileData);
        a.download = `${pfFileName}.html`;
        a.click();
    }
});


//Обновление формы
editTools.renderFormButton.addEventListener('click', () => {
    systemTools.renderForm();
});


//Очистка формы
editTools.clearFormButton.addEventListener('click', () => {
    printForm.body.innerHTML = '';
    systemTools.renderForm();
});


//Удаление последней таблицы
editTools.deteleTableButton.addEventListener('click', () => {
    if (printForm.body.childElementCount > 0){
        printForm.body.children[printForm.body.childElementCount - 1].remove();
        systemTools.renderForm();
    }
});


//
editTools.showUICheckbox.addEventListener('click', () => {
    systemTools.renderForm();
});
//==========

document.querySelector('#testButton').addEventListener('click', () => {
    log(document.querySelector('#pageBlock'));
});


//
const UIAddTable = (index) => {
    let table = document.createElement('table');
    table.innerHTML = (`
        <tbody>
            <tr>
                <td>
                    ${printForm.body.children.length + 1}
                </td>
            </tr>
        </tbody>
    `);

    if (index == -1){
        printForm.body.prepend(table.cloneNode(true));
    } else {
        printForm.body.children[index].after(table.cloneNode(true));
    }

    systemTools.renderForm();
}


//
const UIAddText = (index) => {
    let table = document.createElement('table');
    // table.setAttribute('class', 'tableText');
    table.classList.add('tableText');
    table.innerHTML = (`
        <tbody>
            <tr>
                <td>
                    Текст текст текст
                </td>
            </tr>
        </tbody>
    `);

    if (index == -1){
        printForm.body.prepend(table.cloneNode(true));
    } else {
        printForm.body.children[index].after(table.cloneNode(true));
    }

    systemTools.renderForm();
}


//
const UIMouseOverOut = (event) => {
    // if (!isOutside(event, this))
    //     return;

    // let button = document.createElement('button');
    // button.setAttribute('class', 'UIElement');
    // button.setAttribute('onclick', 'log("hello")');
    // button.innerText = 'X';
    

    if (event.type == 'mouseout') {
        // event.currentTarget.querySelectorAll('.UIElement').forEach(el => {
        //     el.remove();
        // })
        event.currentTarget.classList.remove('is_hover')
    } else {
        event.currentTarget.classList.add('is_hover');
        // event.currentTarget.prepend(button);
    }
}