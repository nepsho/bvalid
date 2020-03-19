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

const ___brw_isValidData = function(_v){
  if(Object.prototype.toString.call(_v) === "[object Undefined]"){return false}
  if(Object.prototype.toString.call(_v) === "[object Null]"){return false}
  return true;
}

bvalid.prototype.isString = function(_v){
  return Object.prototype.toString.call(_v) === "[object String]";
}

bvalid.prototype.isArray = function(_v){
  return Object.prototype.toString.call(_v) === "[object Array]";
}

bvalid.prototype.isNumber = function(_v){
  return Object.prototype.toString.call(_v) === "[object Number]";
}

bvalid.prototype.isInt = function(_v){
    if(Object.prototype.toString.call(_v) === "[object Number]"){
      return String(_v) !== "Infinity" && (_v % 1) === 0;
    }
    return false;
}

bvalid.prototype.isFloat = function(_v){
  if(Object.prototype.toString.call(_v) === "[object Number]"){
    return String(_v) !== "Infinity" && _v && _v % 1 !== 0;
  }
  return false;
}

bvalid.prototype.isBigInt = function(_v){
  return Object.prototype.toString.call(_v) === "[object BigInt]";
}

bvalid.prototype.isNull= function(_v){
  return Object.prototype.toString.call(_v) === "[object Null]";
}

bvalid.prototype.isUndefined= function(_v){
  return Object.prototype.toString.call(_v) === "[object Undefined]";
}

bvalid.prototype.isBuffer = function(_v){
    if(___brw_isValidData(_v) && _v.constructor.name === 'Buffer') return true;
    return false;
}

bvalid.prototype.isRegex = function(_v){
  return Object.prototype.toString.call(_v) === "[object RegExp]";
}

bvalid.prototype.isObject = function(_v){
  return Object.prototype.toString.call(_v) === "[object Object]";
}

bvalid.prototype.isBoolean = function(_v) {
  return Object.prototype.toString.call(_v) === "[object Boolean]";
}

bvalid.prototype.isFunction = function(_v){
    if(Object.prototype.toString.call(_v) == "[object Function]"){
        try{
          var cls = /^class\s+/.test(_v.toString().trim())
          return !cls;
        }catch(err){return false}
    }
    return false;
}

bvalid.prototype.isClass = function(_v){
  if(Object.prototype.toString.call(_v) === "[object Function]"){
    try{
      var cls = /^class\s+/.test(_v.toString().trim())
      return cls;
    }catch(err){return false}
  }
  return false;
}

bvalid.prototype.isDate = function(_v){
  return Object.prototype.toString.call(_v) === "[object Date]";
}

bvalid.prototype.isError = function(_v){
  return Object.prototype.toString.call(_v) === "[object Error]";
}

bvalid.prototype.isSymbol = function(_v){
  return Object.prototype.toString.call(_v) === "[object Symbol]";
}

bvalid.prototype.isPromise = function(_v){
  return Object.prototype.toString.call(_v) === "[object Promise]";
}

bvalid.prototype.isBase64 = function(_v){
    if(Object.prototype.toString.call(_v) === "[object String]"){
      return ___brw_base64.test(_v);
    }
    return false;
}

bvalid.prototype.isUrl = function(_v){
    if(Object.prototype.toString.call(_v) === "[object String]"){
        if(___brw_validDomainReg.test(_v)) return true;
        if(___brw_validIpUrlReg.test(_v)) return true;
    }
    return false;
}

bvalid.prototype.isPort = function(_v){
    if(!isNaN(_v)){
      _v = Number(_v);
      return (_v >= 1 && _v <= 65535)
    }
    return false;
}

bvalid.prototype.isEmail = function(_v){
    if(Object.prototype.toString.call(_v) === "[object String]"){
      return ___brw_validEmailReg.test(_v);
    }
    return false;
}

bvalid.prototype.isUppercase = function(_v){
  if(Object.prototype.toString.call(_v) === "[object String]"){
    return (/^[A-Z]+$/.test(_v)===true);
  }
  return false;
}

bvalid.prototype.isLowercase = function(_v){
  if(Object.prototype.toString.call(_v) === "[object String]"){
    return (/^[a-z]+$/.test(_v)===true);
  }
  return false;
}

bvalid.prototype.isAlphabet = function(_v){
  if(Object.prototype.toString.call(_v) === "[object String]"){
    return /^[a-zA-Z]+$/.test(_v);
  }
  return false;
}

bvalid.prototype.isAlphanumeric = function(_v){
  if(Object.prototype.toString.call(_v) === "[object String]"){
    if(_v.trim().length === 0) return false;
    if(/^[a-zA-Z0-9]+$/.test(_v) &&
      /[a-zA-Z]/.test(_v) &&
      /[0-9]/.test(_v)
    ) return true;
  }
  return false;
}