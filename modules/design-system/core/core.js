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

