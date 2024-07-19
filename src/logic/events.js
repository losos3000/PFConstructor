//ОБРАБОТКА СОБЫТИЙ
//рендер формы при загрузке страницы
window.onload = () => {
    systemTools.getChache();
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


//Обработка нажатия на элемент
systemTools.pfBlock.addEventListener('click', (event) => {
    if (event.type == 'click'
        && event.target.id != ('pfBlock')
        && event.target.id != ('pageBlockContainer')
        && event.target.id != ('pageBlock')
        && !event.target.classList.contains('UI')
    ) {

        if (event.target.classList.contains('is_active')){
            event.target.classList.remove('is_active');
        }
        else{
            systemTools.pageBlockContainer.querySelectorAll('.is_active').forEach((el) => {
                el.classList.remove('is_active');
            });

            event.target.classList.add('is_active');
        }

    } else {

        systemTools.pageBlockContainer.querySelectorAll('.is_active').forEach((el) => {
            el.classList.remove('is_active');
        });

    }
});


//Обработка наведения на элемент
systemTools.pageBlockContainer.addEventListener('mouseover', (event) => {
    if (event.target.id != ('pageBlockContainer')
        && event.target.id != ('pageBlock')
        && !event.target.classList.contains('UI')
    ) {
        event.target.classList.add('is_hover')
    }
});


//Обработка уведения курсора с элемента
systemTools.pageBlockContainer.addEventListener('mouseout', (event) => {
    event.target.classList.remove('is_hover')
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


//Удаление элемента
editTools.deteleTableButton.addEventListener('click', () => {
    let activeElement = systemTools.pageBlockContainer.querySelector('.is_active');

    if (activeElement){
        systemTools.pageBlockContainer.querySelector('.is_active').remove();
    }

    systemTools.resetPrintForm();
});


//Отображение UI элементов на форме
editTools.showUICheckbox.addEventListener('click', () => {
    systemTools.renderForm();
});


//Обновление кеша
editTools.setCacheButton.addEventListener('click', () => {
    systemTools.setCache();
});


//Удаление кеша
editTools.removeCacheButton.addEventListener('click', () => {
    systemTools.removeCahce();
});


//Обработка наведения курсора
// const UIMouseOverOut = (event) => {
//     if (event.type == 'mouseover'
//         && event.target.id != ('pageBlock')
//         && !event.target.classList.contains('UI')
//     ) {
//         event.target.classList.add('is_hover')
//     } else {
//         event.target.classList.remove('is_hover');
//     }
// }
//==========



//Тестовая кнопка
editTools.testButton.addEventListener('click', () => {
    // window.localStorage.setItem('test', printForm.style.innerHTML);

    // dbg(window.localStorage.getItem('test'));
    systemTools.removeCahce();
});
