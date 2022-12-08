export const createDiv = (additionalClasses = []) => {
    const div = document.createElement('div');

    div.classList.add(...additionalClasses);

    return div;
}

export const createParagraph = (paragraphText, additionalClasses = []) => {
    const p = document.createElement('p');

    p.innerText = paragraphText;
    p.classList.add(...additionalClasses);

    return p;
}

export const createBtn = (text, additionalClasses = [] ) => {
    const btn = document.createElement('button');

    btn.innerText = text;
    btn.classList.add(...additionalClasses);

    return btn;
}

export const createSpan = (additionalClasses = []) => {
    const span = document.createElement('span');

    span.classList.add(...additionalClasses);

    return span;
}