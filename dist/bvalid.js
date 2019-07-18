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
  if(
    Object.prototype.toString.call(variable) == "[object Undefined]" ||
    typeof variable === "undefined"
  )
  {
      return false
  }
  if(
    Object.prototype.toString.call(variable) == "[object Null]" ||
    (
        (typeof variable === "object") && (variable === null)
    )
  )
  {
      return false;
  }
  return true;
}

bvalid.prototype.isString = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object String]" ||
      (
        ___brw_isValidData(variable) && (typeof variable === "string") &&
        (variable.constructor.name === 'String')
      )
    ) return true;
    return false;
}

bvalid.prototype.isArray = function(variable){
    if(
      ___brw_isValidData(variable) && variable.constructor.name === 'Array' ||
      Object.prototype.toString.call(variable) == "[object Array]"
    ) return true;
    return false;
}

bvalid.prototype.isNumber = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Number]" ||
      (
        ___brw_isValidData(variable) && (typeof variable === "number") && (variable.constructor.name === 'Number')
      )
    ) return true;
    return false;
}

bvalid.prototype.isInt = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Number]" ||
      (
        ___brw_isValidData(variable) && (typeof variable === "number") && (variable.constructor.name === 'Number')
      )
    ){
      if(String(variable) === "Infinity") return false;
      return (variable % 1) === 0;
    }
    return false;
}

bvalid.prototype.isFloat = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Number]" ||
      (
        ___brw_isValidData(variable) && (typeof variable === "number") && (variable.constructor.name === 'Number')
      )
    ){
      if(String(variable) === "Infinity") return false;
      return variable === variable && variable % 1 !== 0;
    }
    return false;
}

bvalid.prototype.isBigInt = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object BigInt]" ||
      (
        ___brw_isValidData(variable) && variable.constructor.name === 'BigInt'
      )
    ) return true;
    return false;
}

bvalid.prototype.isNull= function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Null]" ||
      variable === null
    ) return true;
    return false;
}

bvalid.prototype.isUndefined= function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Undefined]" ||
      variable === undefined
    ) return true;
    return false;
}

bvalid.prototype.isBuffer = function(variable){
    if(___brw_isValidData(variable) && variable.constructor.name === 'Buffer') return true;
    return false;
}

bvalid.prototype.isRegex = function(variable){
    if(
        Object.prototype.toString.call(variable) == "[object RegExp]" ||
        (
          ___brw_isValidData(variable) && variable.constructor.name === 'RegExp'
        )
    ) return true;
    return false;
}

bvalid.prototype.isObject = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Object]" ||
      (
        ___brw_isValidData(variable) && variable.constructor.name === 'Object'
      )
    ) return true;
    return false;
}

bvalid.prototype.isBoolean = function(variable) {
    if(
      Object.prototype.toString.call(variable) == "[object Boolean]" ||
      (
        (variable === true || variable === false) && variable.constructor.name === 'Boolean'
      )
    ) return true;
    return false;
}

bvalid.prototype.isFunction = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Function]" ||
      (
        ___brw_isValidData(variable) && variable.constructor.name === 'Function'
      )
    ){
        try{
          var cls = /^class\s+/.test(variable.toString().trim())
          if(cls){return false}
          return true;
        }catch(err){return false}
    }
    return false;
}

bvalid.prototype.isClass = function(variable){
    if(___brw_isValidData(variable) && variable.constructor.name === 'Function'){
        try{
          var cls = /^class\s+/.test(variable.toString().trim())
          if(cls){return true}
          return false;
        }catch(err){return false}
    }
    return false;
}

bvalid.prototype.isDate = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Date]" ||
      (
        ___brw_isValidData(variable) && variable.constructor.name === 'Date'
      )
    ) return true;
    return false;
}

bvalid.prototype.isError = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Error]" ||
      (
        ___brw_isValidData(variable) && variable.constructor.name === 'Error'
      )
    ) return true;
    return false;
}

bvalid.prototype.isSymbol = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Symbol]" ||
      (
        ___brw_isValidData(variable) && variable.constructor.name === 'Symbol'
      )
    ) return true;
    return false;
}

bvalid.prototype.isPromise = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Promise]" ||
      (
        ___brw_isValidData(variable) && variable.constructor.name === 'Promise'
      )
    ) return true;
    return false;
}

bvalid.prototype.isBase64 = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object String]" ||
      (
        ___brw_isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')
      )
    ){
      return ___brw_base64.test(variable);
    }
    return false;
}

bvalid.prototype.isUrl = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object String]" ||
      (
        ___brw_isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')
      )
    ){
        if(___brw_validDomainReg.test(variable)) return true;
        if(___brw_validIpUrlReg.test(variable)) return true;
    }
    return false;
}

bvalid.prototype.isPort = function(variable){
    if(___brw_isValidData(variable) && isNaN(variable) === false){
      variable = Number(variable);
      return (variable >= 1 && variable <= 65535)
    }
    return false;
}

bvalid.prototype.isEmail = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object String]" ||
      (
        ___brw_isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')
      )
    ){
      return ___brw_validEmailReg.test(variable);
    }
    return false;
}

bvalid.prototype.isUppercase = function(variable){
  if(
    Object.prototype.toString.call(variable) == "[object String]" ||
    (
      ___brw_isValidData(variable) && (typeof variable === "string") &&
      (variable.constructor.name === 'String')
    )
  ){
    return (/[a-z]/g.test(variable)===false);
  }
  return false;
}

bvalid.prototype.isLowercase = function(variable){
  if(
    Object.prototype.toString.call(variable) == "[object String]" ||
    (
      ___brw_isValidData(variable) && (typeof variable === "string") &&
      (variable.constructor.name === 'String')
    )
  ){
    return (/[A-Z]/g.test(variable)===false);
  }
  return false;
}

bvalid.prototype.isAlphabet = function(variable){
  if(
    Object.prototype.toString.call(variable) == "[object String]" ||
    (
      ___brw_isValidData(variable) && (typeof variable === "string") &&
      (variable.constructor.name === 'String')
    )
  ){
    return /^[a-zA-Z]+$/.test(variable);
  }
  return false;
}

bvalid.prototype.isAlphanumeric = function(variable){
  if(
    Object.prototype.toString.call(variable) == "[object String]" ||
    (
      ___brw_isValidData(variable) && (typeof variable === "string") &&
      (variable.constructor.name === 'String')
    )
  ){
    if(variable.trim().length === 0) return false;
    if(/^[a-zA-Z0-9]+$/.test(variable) &&
      /[a-zA-Z]/.test(variable) &&
      /[0-9]/.test(variable)
    ) return true;
  }
  return false;
}