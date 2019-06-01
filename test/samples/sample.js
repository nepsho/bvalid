"use strict";
const email_s = require("./emails_sample");
const url_s = require("./url_sample");
const isString = require("../../index").isString;
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


var s_emails = email_s.samples_v;
var s_emails_i = email_s.samples_i;

var s_urls = url_s.samples_v;
var s_urls_i = url_s.samples_i;

var s_string = [
  "",
  "bcrazydreamer",
  "fu*k",
  "****",
  "12345",
  "*********************************************",
  ";;;;:::::;;;::}}}{}{}{}{}]{}{}{}{[]{}{{{}{}}}}",
  "\"\"",
  "''",
  "\\",
  "\/"
];

var s_number = [
  1,
  100,
  0,
  9999,
  127636389987667676,
  -1,
  1.0,
  1.0009,
  0.9
];

var s_boolean = [
  true,
  false
];

var s_null = [null];
var s_undefined = [undefined];
var s_array = [[null],[],[1,2,3,4,5],["1","2",111,null,undefined]];
var s_int = [1,23,4,5,6,7,298,3348,34,-673];
var s_float = [1.7,24.9,0.9,8.8,0.000001];

if(node_v>=10){
  var s_bigint =[ BigInt(1) , BigInt(123456)];
} else {
  var s_bigint = [];
}

try{
  var buff_a = Buffer.alloc(123);
  var buff_b = Buffer.from([1,2,3,4,5,6]);
  var buff_c = Buffer.from("bcrazydreamer");
} catch(err){
  var buff_a = new Buffer(123);
  var buff_b = new Buffer([1,2,3,4,5,6]);
  var buff_c = new Buffer("bcrazydreamer");
}

var s_buffer = [buff_a,buff_b,buff_c];


var s_regex = [/bcrazy/,/[a-zA-Z]/,/^b$/];
var s_object = [{a:1,b:2},{},{"a":"1","b":"2"}];

var s_function = [function(){}];
var s_class = [class abc{}];
var s_promise = [new Promise(function(resolve, reject) {})];

var s_date = [new Date()];
var s_error = [new Error(),new Error("Its a error")];

var s_symbol = [Symbol(),Symbol(123),Symbol("123")];
var s_base64 = [
  "YmNyYXp5ZHJlYW1lcg==",
  "YmFzZTY0",
  "MTIzNDU="
];

var s_port = [
  3000,
  "8000",
  20000,
  "80",
  "443"
]

var all_sample = [
  ["email",s_emails],
  ["url",s_urls],
  ["string",s_string],
  ["number",s_number],
  ["boolean",s_boolean],
  ["null",s_null],
  ["undefined",s_undefined],
  ["array",s_array],
  ["int",s_int],
  ["float",s_float],
  ["bigint",s_bigint],
  ["buffer",s_buffer],
  ["regex",s_regex],
  ["object",s_object],
  ["function",s_function],
  ["class",s_class],
  ["promise",s_promise],
  ["date",s_date],
  ["error",s_error],
  ["symbol",s_symbol],
  ["base64",s_base64]
]

module.exports = {
  s_emails: s_emails,
  s_emails_i: s_emails_i,
  s_urls: s_urls,
  s_urls_i: s_urls_i,
  s_string: s_string,
  s_number: s_number,
  s_boolean: s_boolean,
  s_null: s_null,
  s_undefined: s_undefined,
  s_array: s_array,
  s_int: s_int,
  s_float: s_float,
  s_bigint: s_bigint,
  s_buffer: s_buffer,
  s_regex: s_regex,
  s_object: s_object,
  s_function: s_function,
  s_class: s_class,
  s_promise: s_promise,
  s_date: s_date,
  s_error: s_error,
  s_symbol: s_symbol,
  s_base64: s_base64,
  all_sample : all_sample
}