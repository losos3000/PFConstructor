dbg('events.js start');
//ОБРАБОТКА СОБЫТИЙ ИНСТРУМЕНТОВ РЕДАКТИРОВАНИЯ
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


// //Удаление элемента
// editTools.cellDelButton.addEventListener('click', () => {
//     delCell();
// });


// //Добавлене таблицы снизу
// editTools.tableAddDButton.addEventListener('click', (event) => {
//     if (document.querySelector('.is_active')?.nodeName == 'TABLE') {
//         dbg(event.target.nextSibling);
//         addTable(event.target.nextElementSibling.getAttribute('ui-index'));
//     } else {
//         addTable();
//     }
// });


// //
// editTools.cellAdLButton.addEventListener('click', () => {
//     addCell(false);
// });


// //
// editTools.cellAddRButton.addEventListener('click', () => {
//     addCell();
// });

// //
// // editTools.addTextButton.addEventListener('click', (event) => {
// //     addText(event.target.parentElement.getAttribute("ui-index"));
// // });
//==========



//Тестовая кнопка
editTools.testButton.addEventListener('click', () => {
    dbg(printForm.bodyUI);
});

dbg('events.js end');