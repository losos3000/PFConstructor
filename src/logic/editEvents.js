dbg('events.js start');
//ОБРАБОТКА СОБЫТИЙ ИНСТРУМЕНТОВ РЕДАКТИРОВАНИЯ
//
// //Кнопка загрузки файла
// editTools.uploadFileButton.addEventListener('click', () => {
//     editTools.input.click();
// });


// //Загрузка файла
// editTools.input.addEventListener('change', (event) => {
//     loadFile(event);
// });





// //Сохранение файла
// editTools.saveFileButton.addEventListener('click', () => {
//     saveFile();
// });


// //Обновление формы
// editTools.renderFormButton.addEventListener('click', () => {
//     systemTools.renderForm();
// });


// //Очистка формы
// editTools.clearFormButton.addEventListener('click', () => {
//     printForm.body.innerHTML = '';
//     systemTools.renderForm();
// });
//==========


//СОБЫТИЯ ИНСТРУМЕНТОВ РАБОТЫ С ТАБЛИЦЕЙ
//Добавление ячейки слева
editTools.cellAddLButton.addEventListener('click', () => {
    addCell(false);
});


//Добавление ячейки справа
editTools.cellAddRButton.addEventListener('click', () => {
    addCell();
});


//Удаление ячейки
editTools.cellDelButton.addEventListener('click', () => {
    delCell();
});


//Добавление столбца слева
editTools.colAddLButton.addEventListener('click', () => {
    addCol(false);
});


//Добавление столбца справа
editTools.colAddRButton.addEventListener('click', () => {
    addCol();
});


//Удаление столбца
editTools.colDelButton.addEventListener('click', () => {
    delCol();
});

//Добавление строки сверху
editTools.rowAddUButton.addEventListener('click', () => {
    addRow(false);
});


//Добавление строки снизу
editTools.rowAddDButton.addEventListener('click', () => {
    addRow();
});


//Удаление строки
editTools.rowDelButton.addEventListener('click', () => {
    delRow();
});


//Добавление таблицы сверху
editTools.tableAddUButton.addEventListener('click', () => {
    addTable(false);
});


//Добавление таблицы снизу
editTools.tableAddDButton.addEventListener('click', () => {
    addTable();
});


//Удаление таблицы
editTools.tableDelButton.addEventListener('click', () => {
    delTable();
});
//==========
//==========



//Тестовая кнопка
editTools.testButton.addEventListener('click', () => {
    let ae = document.querySelector('.is_active');

    if (ae.nodeName == 'TD') {
        let rowIndex = ae.parentElement.rowIndex;

        ae.parentElement.parentElement.insertRow(rowIndex + 1);
        systemTools.renderForm();
    }
});

dbg('events.js end');