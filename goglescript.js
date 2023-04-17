// GogleScript - edición española
// El marco convierte JS en GogleScript
// Solo se definen 21 funciones

// comenzar


console.log('Desarrollado por GogleScript - versión 23.04.17 - es-es');

function log_info(input) {
    console.log(input);
}

function log_warn(input) {
    console.warn(input);
}

function log_err(input) {
    console.error(input);
}

function css(code) {
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
        // IE
        style.styleSheet.cssText = code;
    } else {
        // Other browsers
        style.innerHTML = code;
    }

    document.getElementsByTagName("head")[0].appendChild(style);
}

function make_post(url) {
    try {


        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", url, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }
    catch (e) {
        console.log('Hubo un error al realizar la solicitud POST');
    }
}

function load_jq() {
    try {
        var script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
        document.getElementsByTagName('head')[0].appendChild(script);
        console.log("jQuery se ha cargado correctamente.");
    }
    catch (e) {
        console.log('jQuery no se pudo cargar.');
    }
}

function parse_json(json) {
    try {


        JSON.parse(json);
    }
    catch (e) {
        if (e instanceof SyntaxError) {
            console.log("Se produjo un error de sintaxis al analizar el JSON.");
        } else {
            console.log("Un error desconocido ocurrió.");
        }
    }
}

function trydl(uri, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}

function downloader(data, type, name) {
    let blob = new Blob([data], { type });
    let url = window.URL.createObjectURL(blob);
    trydl(url, name);
    window.URL.revokeObjectURL(url);
}

function throw_error(input) {
    throw new Error(input);
}

function multiply(m1, m2) {
    console.log(m1 * m2);
}

function divide(d1, d2) {
    console.log(d1 / d2);
}

function add(a1, a2) {
    console.log(a1 + a2);
}

function subtract(s1, s2) {
    console.log(s1 - s2);
}

function log_traceback() {
    console.trace();
}

function split_text(text, number) {
    let string = text;
    const array = string.split(" ", number);

    document.getElementById("goglescript-output").innerHTML = array;
}

function html(code) {
    document.write(code);
}

function throw_reference_error(input) {
    throw new ReferenceError(input);
}

function throw_type_error(input) {
    throw new TypeError(input);
}

function throw_syntax_error(input) {
    throw new SyntaxError(input);
}

function throw_range_error(input) {
    throw new RangeError(input);
}

// fin