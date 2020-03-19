"use strict";

const Regex = require('./helper/regex');
const bvalid = function(){}

const isValidData = function(_v){
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
    return Object.prototype.toString.call(_v) === "[object Undefined]"
}

bvalid.prototype.isBuffer = function(_v){
    if(isValidData(_v) && _v.constructor.name === 'Buffer') return true;
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
    if(Object.prototype.toString.call(_v) === "[object Function]"){
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
      return Regex.base64.test(_v);
    }
    return false;
}

bvalid.prototype.isUrl = function(_v){
    if(Object.prototype.toString.call(_v) === "[object String]"){
        if(Regex.validDomainReg.test(_v) || Regex.validIpUrlReg.test(_v)) return true
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
      return Regex.validEmailReg.test(_v);
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

module.exports = new bvalid();