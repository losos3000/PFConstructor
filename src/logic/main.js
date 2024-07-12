//КЛАССЫ СИСТЕМНЫХ ФУНКЦИЙ И ИНСТРУМЕНТОВ
class EditTools {
    constructor() {
        this.addTableButton = document.getElementById('addTableButton');            //Кнопка добавления табицы
        this.deleteTableButton = document.getElementById('deleteTableButton');      //Кнопка удаления таблицы
        this.saveFileButton = document.getElementById('saveFileButton');            //Кнопка сохранения файла
        this.saveStileButton = document.getElementById('saveStileButton');
    }

};


class SystemTools {
    constructor () {

    }

    
    //Обновление блока страницы
    renderForm (pf, pfs) {
        let pfRender = (
        `<style>
            ${pfs}
        </style>
        
        <div id="pageBlock">
            ${pf}
        </div>`);

        console.log(pfRender);

        pageBlockContainer.innerHTML = pfRender;
    };


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
    parsePrintFormFile(printFormFile) {
        let tmp = document.createElement('div');

        tmp.innerHTML = printFormFile;
        tmp.querySelector('style').remove();

        if (tmp.querySelector('#pageBlock')){
            let tmpChild = tmp.querySelector('#pageBlock').innerHTML;
            tmp.querySelector('#pageBlock').remove();
            tmp.innerHTML = tmpChild;
        }
        
        return String(tmp.innerHTML);
    }
};
//==========



//ГЛОБАЛЬНЫЕ ПЕРМЕННЫЕ
const pageBlockContainer = document.getElementById('pageBlockContainer');     //Элемент страницы
const inputFile = document.getElementById('inputFile');     //Элемент загрузки файла

let editTools = new EditTools();                            //Объект инструментов редактирования
let systemTools = new SystemTools()                         //Объект системных функций

let printForm = "";                                         //Печатная форма
let printFormStyle = (
`table {
    width: 100%;
}

td {
    border: 1px solid black;
}

#pageBlock {
    box-sizing: border-box;
    width: 700px;
    padding: 25px;
}`);
//==========



//ОБРАБОТКА СОБЫТИЙ

//Загрузка файла
inputFile.addEventListener('change', (event) => {
    const reader = new FileReader();
    const printFormFile = event.target.files;

    if (printFormFile.length > 0){
        inputFile.remove();

        reader.readAsText(printFormFile[0], 'windows-1251');
        reader.onload = () => {
            printForm = systemTools.parsePrintFormFile(reader.result);
            systemTools.renderForm(printForm, printFormStyle);
        }
    }
});


//Добавление таблицы
editTools.addTableButton.addEventListener('click', () => {

    let newTable = `
    <table>
        <tr>
            <td>

            </td>
        </tr>
    </table>
    `;

    printForm += newTable;

    systemTools.renderForm(printForm);
});


//Сохранение файла
editTools.saveFileButton.addEventListener('click', () => {
    let printFromSave = `<!-- Created in PFConstructor v0.1 -->
    ${systemTools.parsePrintFormStyle()}
    <div id="pageBlock">
        ${printForm}
    </div>    
    `

    let primtFormData = new Blob([printFromSave], {type: 'text/plain'});
    
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(primtFormData);
    a.download = 'printForm.html';
    a.click();
});


editTools.saveStileButton.addEventListener('click', () => {
    console.log(document.getElementById('styleText').value);
});
//==========