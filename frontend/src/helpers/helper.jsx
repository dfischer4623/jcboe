const sentenceCase = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}

const arrayValueExists = (arr, key, value) => {
    return arr.some(function (el) {
        return el[key] === value;
    });
}

const userExists = (arr, form_id) => {
    return arr.some(function (el) {
        return el.form_id === form_id;
    });
}

const pdfExists = (arr, document) => {
    return arr.some(function (el) {
        return el.document === document;
    });
}

const updateNullOfObjectValues = (obj) => {
    return Object.entries(obj).reduce((acc, [key, _]) => {
        acc[key] = null;
        return acc;
    }, {});
}

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

export {
    sentenceCase,
    pdfExists,
    userExists,
    updateNullOfObjectValues,
    a11yProps,
    truncateString
}