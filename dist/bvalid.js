/*
 * Bvalid
 * Author BCrazyDreamer
 * Copyright 2019-Present NepSho
 * Licensed under MIT (https://github.com/nepsho/bvalid/blob/master/LICENSE)
 */

const ___brw_base64 = /^([0-9a-zA-Z+\/]{4})*(([0-9a-zA-Z+\/]{2}==)|([0-9a-zA-Z+\/]{3}=))?$/;
const ___brw_validDomainReg = new RegExp(
  "^" +
    '(?:(?:https?|ftp)://)?' +
    "(?:\\S+(?::\\S*)?@)?" +
    "(?:" +
        "(?:"+
            "(?![-_])(?:[-\\w\\u00a1-\\uffff]{0,62}[a-z0-9\\u00a1-\\uffff]\\.)+"+
        ")"+
        "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" +
    ")" +
    "(?::[0-9]{2,5})?" +
    "(?:[/?#]\\S*)?" +
  "$", "i"
);

const ___brw_validIpUrlReg = new RegExp(
    "^" +
      "(?:(?:(?:https?|ftp):)?\\/\\/)?" +
      "(?:\\S+(?::\\S*)?@)?" +
        "(?:" +
            "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
            "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
            "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
            "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
            "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        ")" +
      "(?::\\d{2,5})?" +
      "(?:[/?#]\\S*)?" +
    "$", "i"
);


const ___brw_validEmailReg = new RegExp(
    "^" +
      "(?:"+
          "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"+
          "\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")"+
          "@"+
      ")"+
      "(?:"+
          "(?:" +
              "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
              "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
              "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
              "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
              "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
              "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
          ")|" +
          "(?:" +
              "\\["+
              "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
              "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
              "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
              "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
              "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
              "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
              "\\]"+
          ")|" +
          "(?:" +
              "(?:"+
                  "(?![-_])(?:[-\\w\\u00a1-\\uffff]{0,62}[a-z0-9\\u00a1-\\uffff]\\.)+"+
              ")"+
              "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" +
          ")" +
      ")"+
    "$", "i"
);

const bvalid = function(){}

const ___brw_isValidData = function(variable){
  if(Object.prototype.toString.call(variable) === "[object Undefined]"){return false}
  if(Object.prototype.toString.call(variable) === "[object Null]"){return false}
  return true;
}

bvalid.prototype.isString = function(variable){
  return Object.prototype.toString.call(variable) === "[object String]";
}

bvalid.prototype.isArray = function(variable){
  return Object.prototype.toString.call(variable) === "[object Array]";
}

bvalid.prototype.isNumber = function(variable){
  return Object.prototype.toString.call(variable) === "[object Number]";
}

bvalid.prototype.isInt = function(variable){
    if(Object.prototype.toString.call(variable) === "[object Number]"){
      return String(variable) !== "Infinity" && (variable % 1) === 0;
    }
    return false;
}

bvalid.prototype.isFloat = function(variable){
  if(Object.prototype.toString.call(variable) === "[object Number]"){
    return String(variable) !== "Infinity" && variable && variable % 1 !== 0;
  }
  return false;
}

bvalid.prototype.isBigInt = function(variable){
  return Object.prototype.toString.call(variable) === "[object BigInt]";
}

bvalid.prototype.isNull= function(variable){
  return Object.prototype.toString.call(variable) === "[object Null]";
}

bvalid.prototype.isUndefined= function(variable){
  return Object.prototype.toString.call(variable) === "[object Undefined]";
}

bvalid.prototype.isBuffer = function(variable){
    if(___brw_isValidData(variable) && variable.constructor.name === 'Buffer') return true;
    return false;
}

bvalid.prototype.isRegex = function(variable){
  return Object.prototype.toString.call(variable) === "[object RegExp]";
}

bvalid.prototype.isObject = function(variable){
  return Object.prototype.toString.call(variable) === "[object Object]";
}

bvalid.prototype.isBoolean = function(variable) {
  return Object.prototype.toString.call(variable) === "[object Boolean]";
}

bvalid.prototype.isFunction = function(variable){
    if(Object.prototype.toString.call(variable) == "[object Function]"){
        try{
          var cls = /^class\s+/.test(variable.toString().trim())
          return !cls;
        }catch(err){return false}
    }
    return false;
}

bvalid.prototype.isClass = function(variable){
  if(Object.prototype.toString.call(variable) === "[object Function]"){
    try{
      var cls = /^class\s+/.test(variable.toString().trim())
      return cls;
    }catch(err){return false}
  }
  return false;
}

bvalid.prototype.isDate = function(variable){
  return Object.prototype.toString.call(variable) === "[object Date]";
}

bvalid.prototype.isError = function(variable){
  return Object.prototype.toString.call(variable) === "[object Error]";
}

bvalid.prototype.isSymbol = function(variable){
  return Object.prototype.toString.call(variable) === "[object Symbol]";
}

bvalid.prototype.isPromise = function(variable){
  return Object.prototype.toString.call(variable) === "[object Promise]";
}

bvalid.prototype.isBase64 = function(variable){
    if(Object.prototype.toString.call(variable) === "[object String]"){
      return ___brw_base64.test(variable);
    }
    return false;
}

bvalid.prototype.isUrl = function(variable){
    if(Object.prototype.toString.call(variable) === "[object String]"){
        if(___brw_validDomainReg.test(variable)) return true;
        if(___brw_validIpUrlReg.test(variable)) return true;
    }
    return false;
}

bvalid.prototype.isPort = function(variable){
    if(!isNaN(variable)){
      variable = Number(variable);
      return (variable >= 1 && variable <= 65535)
    }
    return false;
}

bvalid.prototype.isEmail = function(variable){
    if(Object.prototype.toString.call(variable) === "[object String]"){
      return ___brw_validEmailReg.test(variable);
    }
    return false;
}

bvalid.prototype.isUppercase = function(variable){
  if(Object.prototype.toString.call(variable) === "[object String]"){
    return (/[a-z]/g.test(variable)===false);
  }
  return false;
}

bvalid.prototype.isLowercase = function(variable){
  if(Object.prototype.toString.call(variable) === "[object String]"){
    return (/[A-Z]/g.test(variable)===false);
  }
  return false;
}

bvalid.prototype.isAlphabet = function(variable){
  if(Object.prototype.toString.call(variable) === "[object String]"){
    return /^[a-zA-Z]+$/.test(variable);
  }
  return false;
}

bvalid.prototype.isAlphanumeric = function(variable){
  if(Object.prototype.toString.call(variable) === "[object String]"){
    if(variable.trim().length === 0) return false;
    if(/^[a-zA-Z0-9]+$/.test(variable) &&
      /[a-zA-Z]/.test(variable) &&
      /[0-9]/.test(variable)
    ) return true;
  }
  return false;
}