const pageBlock = document.getElementById('pageBlock');

const inputFile = document.getElementById('inputFile');
let printForm = "";


const renderForm = () => {
    pageBlock.innerHTML = printForm;
    console.log(pageBlock);
};


class Tools {
    constructor() {
        this.addTableButton = document.getElementById('addTableButton');
        this.deleteTableButton = document.getElementById('deleteTableButton');
        this.saveFileButton=document.getElementById('saveFileButton');
    }
};

let tools = new Tools();


inputFile.addEventListener('change', (event) => {
    const reader = new FileReader();
    const printFormFile = event.target.files;
    console.log("1");

    if (printFormFile.length > 0){
        console.log("2");
        reader.readAsText(printFormFile[0], 'windows-1251');
        console.log("3");
        reader.onload = () => {
            console.log("4");
            printForm = reader.result;
            console.log("5");
            inputFile.remove();
            console.log("6");
            renderForm();
        }
    }
});

tools.addTableButton.addEventListener('click', () => {

    let newTable = `
        <table>
            <tr>
                <td>
                    3
                </td>
                <td>
                    4
                </td>
            </tr>
        </table>
    `;

    printForm += newTable;
    console.log(printForm);
    renderForm();
});

tools.saveFileButton.addEventListener('click', () => {
    let formData = new Blob([printForm], {type: 'text/plain'});
    
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(formData);
    a.download = 'printForm.html';
    a.click();
});
