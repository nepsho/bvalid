"use strict";
const vali = require("./utils/ValidationProcess");


/*
* All function exported as object
*/
module.exports = {
        isString              : vali.isString,
        isArray               : vali.isArray,
        isInt                 : vali.isInt,
        isFloat               : vali.isFloat,
        isNumber              : vali.isNumber,
        isBigInt              : vali.isBigInt,
        isNull                : vali.isNull,
        isUndefined           : vali.isUndefined,
        isBuffer              : vali.isBuffer,
        isRegex               : vali.isRegex,
        isObject              : vali.isObject,
        isBoolean             : vali.isBoolean,
        isFunction            : vali.isFunction,
        isClass               : vali.isClass,
        isDate                : vali.isDate,
        isError               : vali.isError,
        isSymbol              : vali.isSymbol,
        isPromise             : vali.isPromise,
        isBase64              : vali.isBase64,
        isUrl                 : vali.isUrl,
        isPort                : vali.isPort
}