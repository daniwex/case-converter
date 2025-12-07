String.prototype.toSentenceCase = function () {
    return this
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
};

String.prototype.toProperCase = function () {
    return this
        .toLowerCase()
        .split(' ')
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(' ');
};

String.prototype.isBlankOrEmpty = function () {

    return this.length === 0 || this === "" || this == null;
}


function resolveContent(type) {
    input.value = parseContent(input.value, type);
}

function parseContent(val, type) {
    switch (type) {
        case 'upper-case': return val.toUpperCase();
        case 'lower-case': return val.toLowerCase();
        case 'sentence-case': return val.toSentenceCase();
        case 'proper-case': return val.toProperCase();
        default: return val;
    }
}