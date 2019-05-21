"use strict";

const Regex = require('../helper/Regex');

function isValidData(variable){
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

exports.isString = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object String]" ||
      (
        isValidData(variable) && (typeof variable === "string") &&
        (variable.constructor.name === 'String')
      )
    ) return true;
    return false;
}

exports.isArray = function(variable){
    if(
      isValidData(variable) && variable.constructor.name === 'Array' ||
      Object.prototype.toString.call(variable) == "[object Array]"
    ) return true;
    return false;
}

exports.isNumber = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Number]" ||
      (
        isValidData(variable) && (typeof variable === "number") && (variable.constructor.name === 'Number')
      )
    ) return true;
    return false;
}

exports.isInt = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Number]" ||
      (
        isValidData(variable) && (typeof variable === "number") && (variable.constructor.name === 'Number')
      )
    ){
      if(String(variable) === "Infinity") return false;
      return (variable % 1) === 0;
    }
    return false;
}

exports.isFloat = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Number]" ||
      (
        isValidData(variable) && (typeof variable === "number") && (variable.constructor.name === 'Number')
      )
    ){
      if(String(variable) === "Infinity") return false;
      return variable === variable && variable % 1 !== 0;
    }
    return false;
}

exports.isBigInt = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object BigInt]" ||
      (
        isValidData(variable) && variable.constructor.name === 'BigInt'
      )
    ) return true;
    return false;
}

exports.isNull= function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Null]" ||
      variable === null
    ) return true;
    return false;
}

exports.isUndefined= function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Undefined]" ||
      variable === undefined
    ) return true;
    return false;
}

exports.isBuffer = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Buffer') return true;
    return false;
}

exports.isRegex = function(variable){
    if(
        Object.prototype.toString.call(variable) == "[object RegExp]" ||
        (
          isValidData(variable) && variable.constructor.name === 'RegExp'
        )
    ) return true;
    return false;
}

exports.isObject = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Object]" ||
      (
        isValidData(variable) && variable.constructor.name === 'Object'
      )
    ) return true;
    return false;
}

exports.isBoolean = function(variable) {
    if(
      Object.prototype.toString.call(variable) == "[object Boolean]" ||
      (
        (variable === true || variable === false) && variable.constructor.name === 'Boolean'
      )
    ) return true;
    return false;
}

exports.isFunction = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Function]" ||
      (
        isValidData(variable) && variable.constructor.name === 'Function'
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

exports.isClass = function(variable){
    if(isValidData(variable) && variable.constructor.name === 'Function'){
        try{
          var cls = /^class\s+/.test(variable.toString().trim())
          if(cls){return true}
          return false;
        }catch(err){return false}
    }
    return false;
}

exports.isDate = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Date]" ||
      (
        isValidData(variable) && variable.constructor.name === 'Date'
      )
    ) return true;
    return false;
}

exports.isError = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Error]" ||
      (
        isValidData(variable) && variable.constructor.name === 'Error'
      )
    ) return true;
    return false;
}

exports.isSymbol = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Symbol]" ||
      (
        isValidData(variable) && variable.constructor.name === 'Symbol'
      )
    ) return true;
    return false;
}

exports.isPromise = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object Promise]" ||
      (
        isValidData(variable) && variable.constructor.name === 'Promise'
      )
    ) return true;
    return false;
}

exports.isBase64 = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object String]" ||
      (
        isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')
      )
    ){
      return Regex.base64.test(variable);
    }
    return false;
}

exports.isUrl = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object String]" ||
      (
        isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')
      )
    ){
        if(Regex.validDomainReg.test(variable)) return true;
        if(Regex.validIpUrlReg.test(variable)) return true;
    }
    return false;
}

exports.isPort = function(variable){
    if(isValidData(variable) && isNaN(variable) === false){
      variable = Number(variable);
      return (variable >= 1 && variable <= 65535)
    }
    return false;
}

exports.isEmail = function(variable){
    if(
      Object.prototype.toString.call(variable) == "[object String]" ||
      (
        isValidData(variable) && (typeof variable === "string") && (variable.constructor.name === 'String')
      )
    ){
      return Regex.validEmailReg.test(variable);
    }
    return false;
}