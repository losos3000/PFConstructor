dbg('events.js start');
//ОБРАБОТКА СИСТЕНЫХ СОБЫТИЙ
//Рендер формы при загрузке страницы
window.onload = () => {
    // systemTools.getChache();
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
//==========
dbg('events.js end');