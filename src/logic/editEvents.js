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
editTools.cellAdLButton.addEventListener('click', () => {
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


//Добавление строки сверху
editTools.rowAddUButton.addEventListener('click', () => {
    addRow(false);
});


//Удаление строки
editTools.rowDelButton.addEventListener('click', () => {
    delRow();
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

    if (ae.nodeName == 'TABLE') {
        dbg(ae.tBodies[0].rows);
    }
});

dbg('events.js end');