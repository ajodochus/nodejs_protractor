var method = Name_util.prototype;

function Name_util(age) {
    this._name = "Julie";
}

method.getName = function () {
    return this._name;
};

module.exports = Name_util;