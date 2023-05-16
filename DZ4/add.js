const arr = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo'];

const grouped = arr.reduce((acc, cur) => {
    const type = typeof cur;
    if (type !== 'object') {
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(cur);
    }
    return acc;
}, {});

const sortedArrays = Object.values(grouped).sort((a, b) => b.length - a.length);

console.log(sortedArrays);