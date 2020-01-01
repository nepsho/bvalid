"use strict";

const Regex = require('./helper/Regex');
const bvalid = function(){}

const isValidData = function(variable){
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
    return Object.prototype.toString.call(variable) === "[object Undefined]"
}

bvalid.prototype.isBuffer = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Buffer') return true;
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
    if(Object.prototype.toString.call(variable) === "[object Function]"){
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
      return Regex.base64.test(variable);
    }
    return false;
}

bvalid.prototype.isUrl = function(variable){
    if(Object.prototype.toString.call(variable) === "[object String]"){
        if(Regex.validDomainReg.test(variable) || Regex.validIpUrlReg.test(variable)) return true
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
      return Regex.validEmailReg.test(variable);
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

module.exports = new bvalid();