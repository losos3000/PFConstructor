//ОБРАБОТКА СОБЫТИЙ
//рендер формы при загрузке страницы
window.onload = () => {
    systemTools.renderForm();
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
//==========