const $ = function (element) {
    return document.querySelector(element)
}


const $a = function (element) {
    return document.querySelectorAll(element)
}



// dynamic element

const createElement = function (tagname, classname, content) {
    const newElement = document.createElement(tagname);

    if (classname) {
        newElement.setAttribute('class', classname);
    }
    if (content) {
        newElement.innerHTML = `${content}`;
    }
    return newElement
}