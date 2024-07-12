class EditTools {
    constructor() {
        this.addTableButton = document.getElementById('addTableButton');
        this.deleteTableButton = document.getElementById('deleteTableButton');
        this.saveFileButton=document.getElementById('saveFileButton');
    }

};


class SystemTools {
    constructor () {

    }


    renderForm (printForm) {
        pageBlock.innerHTML = printForm;
    };


    printFromStyle() {
        let styleSheetFile = document.styleSheets[2].cssRules;
        let styleSheetText = `<style>`;

        for (let i = 0; i < styleSheetFile.length; i++)
            styleSheetText += `\n${styleSheetFile[i].cssText}`;
        styleSheetText += `\n</style>\n`;
        
        return styleSheetText;
    }
}