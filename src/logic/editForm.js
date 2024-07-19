//РАБОТА С ПЕЧАТНОЙ ФОРМОЙ
//Добавление таблицы
const UIAddTable = (index) => {
    index = index??printForm.body.children.length - 1;

    let table = document.createElement('table');
    table.innerHTML = (`
        <tbody>
            <tr>
                <td>
                    ${printForm.body.children.length + 1}
                </td>
                <td>
                    ${printForm.body.children.length + 1}
                </td>
            </tr>
            <tr>
                <td>
                    ${printForm.body.children.length + 1}
                </td>
            </tr>
        </tbody>
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


//Добавление блока текста
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
//==========