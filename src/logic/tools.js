dbg('tools.js start');
//КЛАССЫ СИСТЕМНЫХ ФУНКЦИЙ И ИНСТРУМЕНТОВ
//Класс печатной формы
class PrintForm {
    constructor() {
        //Инициализация свойств
        this.name = 'printForm';
        this.bodyUI = document.createElement('div');
        this.body = document.createElement('div');

        //Инициализация формы
        this.body.id = this.bodyUI.id = 'pageBlock';
    }
};



//Класс инструментов работы с формой
class EditTools {
    constructor() {
        //РАБОТА С ФАЙЛАМИ
        //Кнопка загрузки файла
        this.uploadFileButton = document.querySelector('#uploadFileButton');

        //Элемент закгрузки файла
        this.input = document.createElement('input');
        this.input.type = 'file';
        this.input.accept = '.html';

        //Кнопка сохранения файла
        this.saveFileButton = document.querySelector('#saveFileButton');
        //==========



        //РАБОТА С ФОРМОЙ
        //UI чекбокс
        this.showUICheckbox = document.querySelector('#showUICheckbox');

        //Кнопка очищения формы
        this.clearFormButton = document.querySelector('#clearFormButton');

        //Кнопка обновления формы
        this.renderFormButton = document.querySelector('#renderFormButton');
        //==========



        //РАБОТА С ТАБЛИЦЕЙ
        //Кнопка добавления ячейки слева
        this.cellAddLButton = document.querySelector('#cellAddLButton');

        //Кнопка добавления ячейки справа
        this.cellAddRButton = document.querySelector('#cellAddRButton');

        //Кнопка удаления ячейки
        this.cellDelButton = document.querySelector('#cellDelButton');

        //Кнопка добавления столбца слева
        this.colAddLButton = document.querySelector('#colAddLButton');

        //Кнопка добавления столбца справа
        this.colAddRButton = document.querySelector('#colAddRButton');

        //Кнопка удаления столбца
        this.colDelButton = document.querySelector('#colDelButton');

        //Кнопка добавления строки сверху
        this.rowAddUButton = document.querySelector('#rowAddUButton');

        //Кнопка добавления строки снизу
        this.rowAddDButton = document.querySelector('#rowAddDButton');

        //Кнопка удаления строки
        this.rowDelButton = document.querySelector('#rowDelButton');

        //Кнопка добавления таблицы сверху
        this.tableAddUButton = document.querySelector('#tableAddUButton');

        //Кнопка добавления таблицы снизу
        this.tableAddDButton = document.querySelector('#tableAddDButton');

        //Кнопка удаления таблицы
        this.tableDelButton = document.querySelector('#tableDelButton');
        //==========
        
        
        //РАБОТА С ТЕКСТОМ
        //Кнопка добавления текста
        // this.addTextButton = document.createElement('button');
        // this.addTextButton.classList.id = 'addTextButton';
        //==========



        //UI элементы
        //Кнопка добавления таблицы
        this.tableAddDButtonUI = document.createElement('button');
        this.tableAddDButtonUI.classList.add('UI');
        this.tableAddDButtonUI.innerText = '+⊞ Таблица';
        this.tableAddDButtonUI.setAttribute('onclick', 'addTable(true, event.target.parentElement)');

        //Контейнер кнопок
        this.UIContainer = document.createElement('div');
        this.UIContainer.className = 'UIAddBlock';
        this.UIContainer.classList.add('buttonContainer');
        this.UIContainer.classList.add('UI');
        
        this.UIContainer.append(this.tableAddDButtonUI);
        //==========
        
        
        //ПРОЧЕЕ
        //Стандартная ячейка
        this.TD = document.createElement('td');
        this.TD.innerText = '1';
        //Тестовая кнопка
        this.testButton = document.querySelector('#testButton');
    }

    
    //
    renderTools() {

    }
};



//Класс системных инструментов
class SystemTools {
    constructor() {
        //
        //
        this.constructorBlock = document.getElementById('constructorBlock');

        //Системный контейнер печаной формы
        this.pageBlockContainer = document.getElementById('pageBlockContainer');
        //==========



        //РАБОТА С КЕШЕМ
        //Кнопка получения кеша
        this.getCacheButton = document.querySelector('#getCacheButton');

        //Кнопка обновления кеша
        this.setCacheButton = document.querySelector('#setCacheButton');

        //Кнопка удаления кеша
        this.removeCacheButton = document.querySelector('#removeCacheButton');
        //==========
    }


    //Сохранение 
    setCache() {
        window.localStorage.setItem('printForm', printForm.body.innerHTML);
    }


    //
    getCache() {
        let pageBlock = this.pageBlockContainer.querySelector('#pageBlock');
        pageBlock.innerHTML = window.localStorage.getItem('printForm');
    }


    //
    removeCache() {
        window.localStorage.removeItem('printForm');
    }


    //
    getPFBody() {
        let pageBlock = this.pageBlockContainer.querySelector('#pageBlock');

        pageBlock = pageBlock??document.createElement('div');
        pageBlock.id = 'pageBlock';

        for (let el of this.pageBlockContainer.querySelectorAll('style')) {
            el.remove();
        }

        for (let el of pageBlock.querySelectorAll('.UIAddBlock')) {
            el.remove();
        }
        
        printForm.bodyUI.innerHTML = pageBlock.innerHTML;
        
        pageBlock.querySelectorAll('.is_active').forEach((el) => {
            el.classList.remove('is_active');
        });

        printForm.body.innerHTML = pageBlock.innerHTML;
    }
    

    //Обновление блока конструктора
    renderForm() {

        this.getPFBody();

        this.setCache();

        if (!editTools.showUICheckbox.checked) {
            this.renderUI();
        } else {
            this.pageBlockContainer.innerHTML = printForm.body.outerHTML;
        }
    };

    
    //Рендер интерфейса
    renderUI() {
        let pageBlock = this.pageBlockContainer.querySelector('#pageBlock');
        pageBlock.innerHTML = '';

        let style = document.createElement('style');
        style.innerHTML = (
`       table {
            border: 1px dashed black;
            padding: 10px;
            border-collapse: separate;
        }`);

        pageBlock.append(editTools.UIContainer.cloneNode(true));
        for (let el of printForm.bodyUI.children) {
            pageBlock.append(el.cloneNode(true));
            pageBlock.append(editTools.UIContainer.cloneNode(true));
        }

        this.pageBlockContainer.prepend(style);
    }


    // //Парсинг printForm.css в текст
    // parsePrintFormStyle() {
    //     let styleSheetFile = document.styleSheets[2].cssRules;
    //     let styleSheetText = `<style>`;

    //     for (let i = 0; i < styleSheetFile.length; i++)
    //         styleSheetText += `\n${styleSheetFile[i].cssText}`;
    //     styleSheetText += `\n</style>\n`;
        
    //     return styleSheetText;
    // }


    // //Парсинг содержимого загруженного файла
    // parsePFFileBody(pfFile) {
    //     let div = document.createElement('div');
    //     div.innerHTML = pfFile;

    //     let divStyle = div.querySelector('style');
    //     let divPageBlock = div.querySelector('#pageBlock');

    //     divStyle.remove();
        
    //     for (let i = 0; i < div.childNodes.length; i++) {
    //         if (div.childNodes[i].nodeName == '#comment') {
    //             div.childNodes[i].remove();
    //         }
    //     }

    //     if (divPageBlock){
    //         divPageBlock.outerHTML = divPageBlock.innerHTML;
    //     }
        
    //     return (div.innerHTML);
    // }

};
//==========



//ГЛОБАЛЬНЫЕ ОБЪЕКТЫ ИНСТРУМЕНТОВ
//Объект печатной формы
var printForm = new PrintForm();

//Объект инструментов редактирования
var editTools = new EditTools();

//Объект системных функций
var systemTools = new SystemTools();
//==========
dbg('tools.js end');