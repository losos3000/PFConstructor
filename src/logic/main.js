console.log('main.js start');

//JS СКРИПТЫ ДЛЯ ИМПОРТА
const jsModules = [
    'tools',
    'editForm',
    'ui',
    'systemEvents',
    'editEvents',
];
//==========



//ЛОГИРОВНИЕ
const log = (msg, tpe) => {
    msg = tpe=='DEBUG' ? msg : msg??'';
    tpe = tpe??'INFO';

    console.log(`[${tpe}]   `, msg);
};

const err = (msg, code) => {
    msg = msg??'Internal Server Error';
    code = code??'500';
    log(`${code} ${msg}`, 'ERROR');
};

const dbg = (msg) => {
    log(msg, 'DEBUG');
};

const wrn = (msg) => {
    msg = msg??'';
    log(msg, 'WARN');
};
//==========



//ИМПОРТ МОДУЛЕЙ В ПРОЕКТ
const importJSModulesPromise = new Promise((resolve, reject) => {
    let head = document.querySelector('head');

    jsModules.forEach(element => {
        let importPromise = new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.setAttribute('src', `./logic/${element}.js`);
            script.setAttribute('defer', '');
    
            head.append(script);
            resolve(); 
        });
        importPromise.then(
            ()=>{
                log(`Module ${element}.js imported`);
            },
            ()=>{
                err(`Module ${element}.js not imported`);
            });
    });
    resolve();
});

importJSModulesPromise.then(
    () => {
        log('All modules imported');
    },
    () => {
        wrn('Not all modules imported');
    });
//==========
log('main.js end');