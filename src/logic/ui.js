dbg('ui.js start');
//
//
const currentObject = (element)  => {
    switch (element.nodeName) {
        case 'TABLE':
            return element;
            break;
        case 'TBODY':
            return element.parentElement;
            break;
        case 'TR':
            return element.parentElement.parentElement;
            break;
        case 'TD':
            return element;
            break;
        default:
            break;
    }
};

//
const setActive = (event) => {
    if (!event.target.classList.contains('UI')
        && !editTools.showUICheckbox.checked) {
        if (event.target.id == ('constructorBlock')
            && event.target.id == ('pageBlockContainer')
            && event.target.id == ('pageBlock')
        ) {
            systemTools.pageBlockContainer.querySelectorAll('.is_active').forEach((el) => {
                el.classList.remove('is_active');
            });

        } else {

            if (event.target.classList.contains('is_active')){
                event.target.classList.remove('is_active');
            } else {
                systemTools.pageBlockContainer.querySelectorAll('.is_active').forEach((el) => {
                    el.classList.remove('is_active');
                });

                let element = currentObject(event.target);
    
                element.classList.add('is_active');
            }    
        }
    }
};


//
const setHover = (event) => {
    if (!editTools.showUICheckbox.checked) {
        if (event.target.id != ('pageBlockContainer')
            && event.target.id != ('pageBlock')
            && !event.target.classList.contains('UI')
        ) {
            let element = currentObject(event.target);
            element.classList.add('is_hover')
        }
    }
};


//
const removeHover = (event) => {
    event.target.classList.remove('is_hover');
    if (event.target.classList.length == 0) {
        event.target.removeAttribute('class');
    }
};
//==========
dbg('ui.js end');