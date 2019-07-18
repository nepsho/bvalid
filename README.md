
# BValid

[![NPM](https://nodei.co/npm/bvalid.png)](https://nodei.co/npm/bvalid/)

  

[![Build Status](https://travis-ci.org/nepsho/bvalid.svg?branch=master)](https://travis-ci.org/nepsho/bvalid)

[![npm version](https://img.shields.io/npm/v/bvalid.svg?style=flat-square)](https://www.npmjs.org/package/bvalid)

[![npm license](https://img.shields.io/static/v1.svg?label=License&message=MIT&color=informational)](https://github.com/nepsho/bvalid/blob/master/LICENSE)

[![npm repository](https://img.shields.io/static/v1.svg?label=Repository&message=GitHub&color=yellow)](https://github.com/nepsho/bvalid)

[![npm author](https://img.shields.io/static/v1.svg?label=Author&message=bcrazydreamer&color=success)](https://www.npmjs.com/~bcrazydreamer)

  

**BValid** is a api to check the type of data. That data can either be function/class or can either be basic data structure

## Features

- Validate type of any data in JavaScript

- Support in modern JavaScript also

  

## Support

ES5 | ES6 |

--- | --- |

✔|✔|

  

## Installing

```bash

$ npm install bvalid

```

  

## Examples

  

```js

const  bvalid = require("bvalid")

```

```js

bvalid.isString( "Hello" ); //true

bvalid.isArray( [] ) //true

bvalid.isObject( {a:"1",b:"2"} ) //true

  

bvalid.isNumber( "bval12" ) //false

bvalid.isInt( 123 ) //true

bvalid.isFloat( 1.23 ) //true

bvalid.isBigInt( 1234567890n ) //true

  

bvalid.isNull( null ) //true

bvalid.isUndefined( undefined ) //true

bvalid.isBoolean( "true" ) //false

  

bvalid.isBuffer( 1234 ) //false

bvalid.isRegex( /[0-9]/ ) //true

  

bvalid.isFunction( [1,2,3] ) //false

bvalid.isClass( "bvalid" ) //false

bvalid.isPromise( ifPromise ) //true

  

bvalid.isDate( 12345 ) //false

bvalid.isError( new  Error("Err") ) //true

bvalid.isSymbol( "bvalid" ) //false

bvalid.isBase64( ifBase64String ) //true

  

bvalid.isUrl("http://www.nepsho.com") //true

bvalid.isEmail("bcrazydreamer@gmail.com") //true

bvalid.isPort("3030") //true

bvalid.isUppercase("BVALID") //true
bvalid.isLowercase("bvalid") //false
bvalid.isAlphabet("bvalid") //true
bvalid.isAlphanumeric("bvalid12345") //true

```

  

## isUrl:

>This validator covers all possible URLs with latest structure. It includes valid IP URLs also. This function is able to work even without the URL protocol.

  

## isEmail:

>Its validate emails as per latest URL structure.

  

## isPort:

>Its validate computer port (computer networking).

  
  
  

## licence

MIT [licence](https://opensource.org/licenses/MIT)

  

## Author

@BCrazyDreamer