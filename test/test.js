"use strict";
const bvalid = require("../lib/bvalid");
const sample = require("./samples/sample");
const isString = bvalid.isString;
const node_version = process.version || "v0";
var node_v = 0;

if(isString(node_version)==false)
{
  node_version = "v0";
}

if(node_version[1] != undefined){
  if(isNaN(node_version[1]))
  {
    node_v = Number(node_version[1]);
  }
} else {
  node_v = 0;
}


//string
for(var i = 0 ; i < sample.s_string.length ; i++)
{
  if(bvalid.isString(sample.s_string[i]) === false)
  {
    throw new Error("Test fail at string");
  }
}

//number
for(var i = 0 ; i < sample.s_number.length ; i++)
{
  if(bvalid.isNumber(sample.s_number[i]) === false)
  {
    throw new Error("Test fail at number");
  }
}

//boolean
for(var i = 0 ; i < sample.s_boolean.length ; i++)
{
  if(bvalid.isBoolean(sample.s_boolean[i]) === false)
  {
    throw new Error("Test fail at boolean");
  }
}

//null
for(var i = 0 ; i < sample.s_null.length ; i++)
{
  if(bvalid.isNull(sample.s_null[i]) === false)
  {
    throw new Error("Test fail at null");
  }
}

//undefined
for(var i = 0 ; i < sample.s_undefined.length ; i++)
{
  if(bvalid.isUndefined(sample.s_undefined[i]) === false)
  {
    throw new Error("Test fail at undefined");
  }
}

//array
for(var i = 0 ; i < sample.s_array.length ; i++)
{
  if(bvalid.isArray(sample.s_array[i]) === false)
  {
    throw new Error("Test fail at array");
  }
}

//int
for(var i = 0 ; i < sample.s_int.length ; i++)
{
  if(bvalid.isInt(sample.s_int[i]) === false)
  {
    throw new Error("Test fail at int");
  }
}

//float
for(var i = 0 ; i < sample.s_float.length ; i++)
{
  if(bvalid.isFloat(sample.s_float[i]) === false)
  {
    throw new Error("Test fail at float");
  }
}


//bigint
if(node_v>=10){
  for(var i = 0 ; i < sample.s_bigint.length ; i++)
  {
    if(bvalid.isBigInt(sample.s_bigint[i]) === false)
    {
      throw new Error("Test fail at bigint");
    }
  }
}

//buffer
for(var i = 0 ; i < sample.s_buffer.length ; i++)
{
  if(bvalid.isBuffer(sample.s_buffer[i]) === false)
  {
    throw new Error("Test fail at buffer");
  }
}

//regex
for(var i = 0 ; i < sample.s_regex.length ; i++)
{
  if(bvalid.isRegex(sample.s_regex[i]) === false)
  {
    throw new Error("Test fail at regex");
  }
}

//object
for(var i = 0 ; i < sample.s_object.length ; i++)
{
  if(bvalid.isObject(sample.s_object[i]) === false)
  {
    throw new Error("Test fail at object");
  }
}

//function
for(var i = 0 ; i < sample.s_function.length ; i++)
{
  if(bvalid.isFunction(sample.s_function[i]) === false)
  {
    throw new Error("Test fail at function");
  }
}

//class
for(var i = 0 ; i < sample.s_class.length ; i++)
{
  if(bvalid.isClass(sample.s_class[i]) === false)
  {
    throw new Error("Test fail at buffer");
  }
}

//promise
for(var i = 0 ; i < sample.s_promise.length ; i++)
{
  if(bvalid.isPromise(sample.s_promise[i]) === false)
  {
    throw new Error("Test fail at promise");
  }
}

//date
for(var i = 0 ; i < sample.s_date.length ; i++)
{
  if(bvalid.isDate(sample.s_date[i]) === false)
  {
    throw new Error("Test fail at date");
  }
}

//error
for(var i = 0 ; i < sample.s_error.length ; i++)
{
  if(bvalid.isError(sample.s_error[i]) === false)
  {
    throw new Error("Test fail at error");
  }
}

//symbol
for(var i = 0 ; i < sample.s_symbol.length ; i++)
{
  if(bvalid.isSymbol(sample.s_symbol[i]) === false)
  {
    throw new Error("Test fail at symbol");
  }
}

//base64
for(var i = 0 ; i < sample.s_base64.length ; i++)
{
  if(bvalid.isBase64(sample.s_base64[i]) === false)
  {
    throw new Error("Test fail at base64");
  }
}

//url
for(var i = 0 ; i < sample.s_urls.length ; i++)
{
  if(bvalid.isUrl(sample.s_urls[i]) === false)
  {
    throw new Error("Test fail at URLs");
  }
}


//emails
for(var i = 0 ; i < sample.s_emails.length ; i++)
{
  if(bvalid.isEmail(sample.s_emails[i]) === false)
  {
    throw new Error("Test fail at Emails");
  }
}

//upperCase
for(var i = 0 ; i < sample.s_uppercase.length ; i++)
{
  if(bvalid.isUppercase(sample.s_uppercase[i]) === false)
  {
    throw new Error("Test fail at Upeercase");
  }
}

//lowerCase
for(var i = 0 ; i < sample.s_lowercase.length ; i++)
{
  if(bvalid.isLowercase(sample.s_lowercase[i]) === false)
  {
    throw new Error("Test fail at Lowercase");
  }
}

//alphanumeric
for(var i = 0 ; i < sample.s_alphanumeric.length ; i++)
{
  if(bvalid.isAlphanumeric(sample.s_alphanumeric[i]) === false)
  {
    throw new Error("Test fail at Alphanumeric");
  }
}

console.log("All test cases passes");