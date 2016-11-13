var document = {
    _cookies: [],
    set cookie(val) {
        document._cookies = document._cookies.filter(function(item) {
            return item.split('=')[0] != val.split('=')[0];
        });
        document._cookies.push(val);
    },
    get cookie() {
        return document._cookies.join('; ');
    }
};

document.cookie = 'name=zr';
document.cookie = 'age=8';
document.cookie = 'sex=male';
console.log(document.cookie);

document.cookie = 'name=od';
console.log(document.cookie);