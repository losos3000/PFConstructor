dbg('ui.js start');
//
//
const setActive = (event) => {
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
//==========
dbg('ui.js end');