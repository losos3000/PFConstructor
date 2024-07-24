dbg('ui.js start');
//
//
const setActive = (event) => {
    if (!event.target.classList.contains('UI')) {
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
    
                event.target.classList.add('is_active');
            }    
        }
    }
};


//
const setHover = (event) => {
    if (event.target.id != ('pageBlockContainer')
        && event.target.id != ('pageBlock')
        && !event.target.classList.contains('UI')
    ) {
        event.target.classList.add('is_hover')
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