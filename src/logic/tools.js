//КЛАССЫ СИСТЕМНЫХ ФУНКЦИЙ И ИНСТРУМЕНТОВ
//Класс печатной формы
class PrintForm {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = (
            `\n` +
            `   table {\n` +
            `       width: 100%;\n` +
            `       border-collapse: collapse;\n` +
            `   }\n`+
            `\n`+
            `   td {\n` +
            `       border: 1px solid black;\n` +
            `       padding: 5px;\n` +
            `   }\n` +
            `\n` +
            `   #pageBlock {\n` +
            `       box-sizing: border-box;\n` +
            `       width: 700px;\n` +
            `       padding: 25px;\n` +
            `   }\n` +
            `\n` +
            `   .tableText td {\n` +
            `       border: 0px;\n` +
            `   }\n`
        );

        this.body = document.createElement('div');
        this.body.setAttribute('id', 'pageBlock');
        this.body.innerHTML = '\n   ';
    }
};



//Класс инструментов работы с формой
class EditTools {
    constructor() {
        //Поле загрузки файла
        this.inputFile = document.querySelector('#inputFile');

        //Кнопка сохранения файла
        this.saveFileButton = document.querySelector('#saveFileButton');

        //Кнопка очищения формы
        this.clearFormButton = document.querySelector('#clearFormButton');

        //Кнопка обнвления формы
        this.renderFormButton = document.querySelector('#renderFormButton');

        //Кнопка добавления таблицы
        this.addTableButton = document.querySelector('#addTableButton');

        //Кнопка удаления таблицы
        this.deteleTableButton = document.querySelector('#deteleTableButton');

        //
        this.showUICheckbox = document.querySelector('#showUICheckbox');
    }


    //Получение кода печатной формы
    getPrintFormCode () {
        let div = document.createElement('div');

        div.append(printForm.style);
        div.append('\n\n');
        div.append(printForm.body)
        return (div.innerHTML);
    }
};



//Класс системных инструментов
class SystemTools {
    constructor() {
        //Системный контейнер печаной формы
        this.pageBlockContainer = document.getElementById('pageBlockContainer');
    }


    //Обновление блока страницы
    renderForm() {
        if (editTools.showUICheckbox.checked) {
            this.renderFormUI();
        } else {
            this.pageBlockContainer.innerHTML = editTools.getPrintFormCode();
        }
    };

    
    //
    renderFormUI() {
        let div = document.createElement('div');
        div.setAttribute('class', 'UIAddBlock');
        div.setAttribute('ui-index', '-1');

        let buttonTable = document.createElement('button');
        buttonTable.innerText = 'Добавить таблицу';
        buttonTable.setAttribute('class', 'UIAddTable');
        buttonTable.setAttribute('onclick', 'UIAddTable(event.target.parentElement.getAttribute("ui-index"))');

        let buttonText = document.createElement('button');
        buttonText.innerText = 'Добавить текст';
        buttonText.setAttribute('class', 'UIAddText');
        buttonText.setAttribute('onclick', 'UIAddText(event.target.parentElement.getAttribute("ui-index"))');

        div.append(buttonTable.cloneNode(true));
        div.append(buttonText.cloneNode(true));

        let printFormUI = document.createElement('div');
        printFormUI.setAttribute('id', 'pageBlock');

        printFormUI.appendChild(printForm.style.cloneNode(true));
        printFormUI.appendChild(div.cloneNode(true));

        for (let i = 0; i < printForm.body.children.length; i++) {
            let pfChildren = printForm.body.children[i].cloneNode(true);
            pfChildren.setAttribute('onmouseover', 'UIMouseOverOut(event)');
            pfChildren.setAttribute('onmouseout', 'UIMouseOverOut(event)')
            
            printFormUI.appendChild(pfChildren);
            div.setAttribute('ui-index', `${i}`);
            printFormUI.appendChild(div.cloneNode(true));
        }

        this.pageBlockContainer.innerHTML = printFormUI.outerHTML;
    }


    //Парсинг printForm.css в текст
    parsePrintFormStyle() {
        let styleSheetFile = document.styleSheets[2].cssRules;
        let styleSheetText = `<style>`;

        for (let i = 0; i < styleSheetFile.length; i++)
            styleSheetText += `\n${styleSheetFile[i].cssText}`;
        styleSheetText += `\n</style>\n`;
        
        return styleSheetText;
    }


    //Парсинг содержимого загруженного файла
    parsePFFileBody(pfFile) {
        let div = document.createElement('div');
        div.innerHTML = pfFile;

        let divStyle = div.querySelector('style');
        let divPageBlock = div.querySelector('#pageBlock');

        divStyle.remove();
        
        for (let i = 0; i < div.childNodes.length; i++) {
            if (div.childNodes[i].nodeName == '#comment') {
                div.childNodes[i].remove();
            }
        }

        if (divPageBlock){
            divPageBlock.outerHTML = divPageBlock.innerHTML;
        }
        
        return (div.innerHTML);
    }
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