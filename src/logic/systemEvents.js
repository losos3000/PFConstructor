dbg('events.js start');
//ОБРАБОТКА СИСТЕНЫХ СОБЫТИЙ
//Рендер формы при загрузке страницы
window.onload = () => {
    systemTools.getCache();
    systemTools.renderForm();
};


//Обработка нажатия на элемент
systemTools.constructorBlock.addEventListener('click', (event) => {
    setActive(event);
});


//Обработка наведения на элемент
systemTools.pageBlockContainer.addEventListener('mouseover', (event) => {
    setHover(event);
});


//Обработка уведения курсора с элемента
systemTools.pageBlockContainer.addEventListener('mouseout', (event) => {
    removeHover(event);
});


//Обновление кеша
systemTools.getCacheButton.addEventListener('click', () => {
    systemTools.getCache();
    systemTools.renderForm();
});


//Обновление кеша
systemTools.setCacheButton.addEventListener('click', () => {
    systemTools.setCache();
});


//Удаление кеша
systemTools.removeCacheButton.addEventListener('click', () => {
    systemTools.removeCache();
});


//Отображение UI элементов на форме
editTools.showUICheckbox.addEventListener('click', () => {
    systemTools.renderForm();
});
//==========
dbg('events.js end');