//表单验证
function validate(infoArea) {     //函数validate()的值返回的是true或false  ；参数infoArea表示表单模块
    var infoList = $(infoArea).find('input[dataType],select[dataType],textarea[dataType]');
    var flag = true;
    var dataT, dataVal, unVal, dataF;
    var tel, email, identyNum;
    for (var i = 0; i < infoList.length; i++) {
        dataT = $(infoList[i]).attr('dataType');
        dataVal = $(infoList[i]).val();
        dataF = $(infoList[i]).attr('dataFont');
        switch (dataT) {
            case '*':
                if (!dataVal) {
                    flag = false;
                    content = dataF + '不能为空';
                    layer(content);
                    return flag;
                }
                break;
            case 'tel':
                if (!dataVal) {
                    flag = false;
                    content = dataF + '不能为空';
                    layer(content);
                    return flag;
                } else if (!RegVerify("tel", dataVal)) {
                    flag = false;
                    content = dataF + '格式错误';
                    layer(content);
                    return flag;
                }
                break;
            case 'email':
                if (!dataVal) {
                    flag = false;
                    content = dataF + '不能为空';
                    layer(content);
                    return flag;
                } else if (!RegVerify("email", dataVal)) {
                    flag = false;
                    content = dataF + '格式错误';
                    layer(content);
                    return flag;
                }
                break;
            case 'identyNum':
                if (!dataVal) {
                    flag = false;
                    content = dataF + '不能为空';
                    layer(content);
                    return flag;
                } else if (!RegVerify("identyNum", dataVal)) {
                    flag = false;
                    content = dataF + '格式错误';
                    layer(content);
                    return flag;
                }
                break;
        }
    }
    return flag;
};

// 正则验证
// @param {验证key名称} key 
// @param {验证值} value
// @returns {返回true/fase}
function RegVerify(key, value) {
    var reg = '';
    switch (key) {
        case 'tel':
            reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            break;
        case 'email':
            reg = /[_a-z\d\-\./]+@[_a-z\d\-]+(\.[_a-z\d\-]+)*(\.(info|biz|com|edu|gov|net|am|bz|cn|cx|hk|jp|tw|vc|vn))$/;
            break;
        case 'identyNum':
            reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
            break;
    }
    var re = new RegExp(reg);
    return re.test(value);
}
