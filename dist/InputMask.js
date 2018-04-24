!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.InputMask=n():e.InputMask=n()}(this,function(){return function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=e,n.c=r,n.p="",n(0)}([function(e,n,r){"use strict";function t(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n["default"]=e,n}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){for(var n=[],r=!1,t=null===e.match(/^[#\.\,9]+$/),o=0;o<e.length;o++){var i=e[o];"["!==i?"]"!==i?r?n.push(i):"9"!==i?"#"!==i?"a"!==i?"b"!==i?"A"!==i?"B"!==i?"w"!==i?"x"!==i?"*"!==i?"%"!==i?n.push(i):n.push(".?"):n.push(".+"):n.push("([a-z]|[A-Z]|[0-9])?"):n.push("[a-z]|[A-Z]|[0-9]"):n.push("[A-Z]?"):n.push("[A-Z]"):n.push("[a-z]?"):n.push("[a-z]"):(t||(t=!0,n.push("-?")),n.push("\\d?")):(t||(t=!0,n.push("-?")),n.push("\\d")):r=!1:r=!0}var a=new RegExp("^"+n.join("")+"$");return a}function a(e){var n=i(e),r={mask:!1,guide:!1,placeholderChar:"_",pipe:void 0,keepCharPositions:!1,validate:function(e){return n.test(e)}};return r.mask=function(n,r){for(var t=(r.currentCarretPosition,null!==e.match(/[#bBx%]+/),[]),o=!1,i=null===e.match(/^[#\.\,9]+$/),a=0;a<e.length;a++){var u=e[a];"["!==u?"]"!==u?o?t.push(u):"9"!==u&&"#"!==u?"a"!==u&&"b"!==u?"A"!==u&&"B"!==u?"w"!==u?"x"!==u?"*"!==u&&"%"!==u?t.push(u):t.push(/.+/):t.push(/([a-z]|[A-Z]|[0-9])/):t.push(/[a-z]|[A-Z]|[0-9]/):t.push(/[A-Z]/):t.push(/[a-z]/):(i||(i=!0,0===n.length?t.push(/-|\d/):"-"===n[0]&&t.push("-")),t.push(/\d/)):(t.push("[]"),o=!1):o=!0}return t},r}function u(e){if("email"===e){var n=l({mask:!1,guide:!1,placeholderChar:"_",pipe:void 0,keepCharPositions:!1,validate:function(e){var n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return n.test(String(e).toLowerCase())}},v["default"]);return n}if("iban"===e){var r={mask:!1,guide:!1,placeholderChar:"_",pipe:void 0,keepCharPositions:!1,validate:function(e){return w.isValid(e)}};return r}return a(e)}function s(e){var n=u(e),r=n.inputElement,t=(0,p["default"])(textMaskConfig),o=function(e){var n=e.target.value;return t.update(n)};return r.addEventListener("input",o),t.update(r.value),{textMaskInputElement:t,destroy:function(){r.removeEventListener("input",o)}}}Object.defineProperty(n,"__esModule",{value:!0}),n.conformToMask=n.createTextMaskInputElement=void 0;var l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e};n.createTextMaskConfig=u,n.inputMask=s;var c=r(3);Object.defineProperty(n,"createTextMaskInputElement",{enumerable:!0,get:function(){return o(c)["default"]}});var f=r(2);Object.defineProperty(n,"conformToMask",{enumerable:!0,get:function(){return o(f)["default"]}});var d=r(3),p=o(d),h=r(6),v=o(h),F=r(5),w=t(F);n["default"]=s},function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.placeholderChar="_"},function(e,n,r){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=r.guide,u=void 0===t||t,s=r.previousConformedValue,l=void 0===s?a:s,c=r.placeholderChar,f=void 0===c?i.placeholderChar:c,d=r.placeholder,p=void 0===d?(0,o.convertMaskToPlaceholder)(n,f):d,h=r.currentCaretPosition,v=r.keepCharPositions,F=u===!1&&void 0!==l,w=e.length,A=l.length,g=p.length,m=n.length,C=w-A,y=C>0,B=h+(y?-C:0),b=B+Math.abs(C);if(v===!0&&!y){for(var M=a,x=B;x<b;x++)p[x]===f&&(M+=f);e=e.slice(0,B)+M+e.slice(B,w)}for(var S=e.split(a).map(function(e,n){return{"char":e,isNew:n>=B&&n<b}}),O=w-1;O>=0;O--){var P=S[O]["char"];if(P!==f){var T=O>=B&&A===m;P===p[T?O-C:O]&&S.splice(O,1)}}var U=a,k=!1;e:for(var E=0;E<g;E++){var N=p[E];if(N===f){if(S.length>0)for(;S.length>0;){var I=S.shift(),L=I["char"],R=I.isNew;if(L===f&&F!==!0){U+=f;continue e}if(n[E].test(L)){if(v===!0&&R!==!1&&l!==a&&u!==!1&&y){for(var V=S.length,_=null,Z=0;Z<V;Z++){var j=S[Z];if(j["char"]!==f&&j.isNew===!1)break;if(j["char"]===f){_=Z;break}}null!==_?(U+=L,S.splice(_,1)):E--}else U+=L;continue e}k=!0}F===!1&&(U+=p.substr(E,g));break}U+=N}if(F&&y===!1){for(var G=null,K=0;K<U.length;K++)p[K]===f&&(G=K);U=null!==G?U.substr(0,G+1):a}return{conformedValue:U,meta:{someCharsRejected:k}}}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=t;var o=r(4),i=r(1),a=""},function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function o(e){var n={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:n,update:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=t.inputElement,l=t.mask,f=t.guide,w=t.pipe,g=t.placeholderChar,m=void 0===g?h.placeholderChar:g,C=t.keepCharPositions,y=void 0!==C&&C,B=t.showMask,b=void 0!==B&&B;if("undefined"==typeof r&&(r=o.value),r!==n.previousConformedValue){("undefined"==typeof l?"undefined":s(l))===A&&void 0!==l.pipe&&void 0!==l.mask&&(w=l.pipe,l=l.mask);var M=void 0,x=void 0;if(l instanceof Array&&(M=(0,p.convertMaskToPlaceholder)(l,m)),l!==!1){var S=a(r),O=o.selectionEnd,P=n.previousConformedValue,T=n.previousPlaceholder,U=void 0;if(("undefined"==typeof l?"undefined":s(l))===v){if(x=l(S,{currentCaretPosition:O,previousConformedValue:P,placeholderChar:m}),x===!1)return;var k=(0,p.processCaretTraps)(x),E=k.maskWithoutCaretTraps,N=k.indexes;x=E,U=N,M=(0,p.convertMaskToPlaceholder)(x,m)}else x=l;var I={previousConformedValue:P,guide:f,placeholderChar:m,pipe:w,placeholder:M,currentCaretPosition:O,keepCharPositions:y},L=(0,d["default"])(S,x,I),R=L.conformedValue,V=("undefined"==typeof w?"undefined":s(w))===v,_={};V&&(_=w(R,u({rawValue:S},I)),_===!1?_={value:P,rejected:!0}:(0,p.isString)(_)&&(_={value:_}));var Z=V?_.value:R,j=(0,c["default"])({previousConformedValue:P,previousPlaceholder:T,conformedValue:Z,placeholder:M,rawValue:S,currentCaretPosition:O,placeholderChar:m,indexesOfPipedChars:_.indexesOfPipedChars,caretTrapIndexes:U}),G=Z===M&&0===j,K=b?M:F,z=G?K:Z;n.previousConformedValue=z,n.previousPlaceholder=M,o.value!==z&&(o.value=z,i(o,j))}}}}}function i(e,n){document.activeElement===e&&(g?m(function(){return e.setSelectionRange(n,n,w)},0):e.setSelectionRange(n,n,w))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return F;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(n,"__esModule",{value:!0});var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n["default"]=o;var l=r(8),c=t(l),f=r(2),d=t(f),p=r(4),h=r(1),v="function",F="",w="none",A="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,n,r){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(n)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(n)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?n:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var n=[],r=void 0;r=e.indexOf(l),r!==-1;)n.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:n}}Object.defineProperty(n,"__esModule",{value:!0}),n.convertMaskToPlaceholder=t,n.isString=o,n.isNumber=i,n.processCaretTraps=a;var u=r(1),s=[],l="[]"},function(e,n,r){var t,o,i;"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(r,a){o=[n],t=a,i="function"==typeof t?t.apply(n,o):t,!(void 0!==i&&(e.exports=i))}(void 0,function(e){function n(e){return e=e.toUpperCase(),e=e.substr(4)+e.substr(0,4),e.split("").map(function(e){var n=e.charCodeAt(0);return n>=s&&n<=l?n-s+10:e}).join("")}function r(e){for(var n,r=e;r.length>2;)n=r.slice(0,9),r=parseInt(n,10)%97+r.slice(n.length);return parseInt(r,10)%97}function t(e){var n=e.match(/(.{3})/g).map(function(e){var n,r=e.slice(0,1),t=parseInt(e.slice(1),10);switch(r){case"A":n="0-9A-Za-z";break;case"B":n="0-9A-Z";break;case"C":n="A-Za-z";break;case"F":n="0-9";break;case"L":n="a-z";break;case"U":n="A-Z";break;case"W":n="0-9a-z"}return"(["+n+"]{"+t+"})"});return new RegExp("^"+n.join("")+"$")}function o(e){return e.replace(f,"").toUpperCase()}function i(e,n,r,t){this.countryCode=e,this.length=n,this.structure=r,this.example=t}function a(e){c[e.countryCode]=e}function u(e){return"string"==typeof e||e instanceof String}Array.prototype.map||(Array.prototype.map=function(e){"use strict";if(void 0===this||null===this)throw new TypeError;var n=Object(this),r=n.length>>>0;if("function"!=typeof e)throw new TypeError;for(var t=new Array(r),o=arguments.length>=2?arguments[1]:void 0,i=0;i<r;i++)i in n&&(t[i]=e.call(o,n[i],i,n));return t});var s="A".charCodeAt(0),l="Z".charCodeAt(0);i.prototype._regex=function(){return this._cachedRegex||(this._cachedRegex=t(this.structure))},i.prototype.isValid=function(e){return this.length==e.length&&this.countryCode===e.slice(0,2)&&this._regex().test(e.slice(4))&&1==r(n(e))},i.prototype.toBBAN=function(e,n){return this._regex().exec(e.slice(4)).slice(1).join(n)},i.prototype.fromBBAN=function(e){if(!this.isValidBBAN(e))throw new Error("Invalid BBAN");var t=r(n(this.countryCode+"00"+e)),o=("0"+(98-t)).slice(-2);return this.countryCode+o+e},i.prototype.isValidBBAN=function(e){return this.length-4==e.length&&this._regex().test(e)};var c={};a(new i("AD",24,"F04F04A12","AD1200012030200359100100")),a(new i("AE",23,"F03F16","AE070331234567890123456")),a(new i("AL",28,"F08A16","AL47212110090000000235698741")),a(new i("AT",20,"F05F11","AT611904300234573201")),a(new i("AZ",28,"U04A20","AZ21NABZ00000000137010001944")),a(new i("BA",20,"F03F03F08F02","BA391290079401028494")),a(new i("BE",16,"F03F07F02","BE68539007547034")),a(new i("BG",22,"U04F04F02A08","BG80BNBG96611020345678")),a(new i("BH",22,"U04A14","BH67BMAG00001299123456")),a(new i("BR",29,"F08F05F10U01A01","BR9700360305000010009795493P1")),a(new i("BY",28,"A04F04A16","BY13NBRB3600900000002Z00AB00")),a(new i("CH",21,"F05A12","CH9300762011623852957")),a(new i("CR",22,"F04F14","CR72012300000171549015")),a(new i("CY",28,"F03F05A16","CY17002001280000001200527600")),a(new i("CZ",24,"F04F06F10","CZ6508000000192000145399")),a(new i("DE",22,"F08F10","DE89370400440532013000")),a(new i("DK",18,"F04F09F01","DK5000400440116243")),a(new i("DO",28,"U04F20","DO28BAGR00000001212453611324")),a(new i("EE",20,"F02F02F11F01","EE382200221020145685")),a(new i("ES",24,"F04F04F01F01F10","ES9121000418450200051332")),a(new i("FI",18,"F06F07F01","FI2112345600000785")),a(new i("FO",18,"F04F09F01","FO6264600001631634")),a(new i("FR",27,"F05F05A11F02","FR1420041010050500013M02606")),a(new i("GB",22,"U04F06F08","GB29NWBK60161331926819")),a(new i("GE",22,"U02F16","GE29NB0000000101904917")),a(new i("GI",23,"U04A15","GI75NWBK000000007099453")),a(new i("GL",18,"F04F09F01","GL8964710001000206")),a(new i("GR",27,"F03F04A16","GR1601101250000000012300695")),a(new i("GT",28,"A04A20","GT82TRAJ01020000001210029690")),a(new i("HR",21,"F07F10","HR1210010051863000160")),a(new i("HU",28,"F03F04F01F15F01","HU42117730161111101800000000")),a(new i("IE",22,"U04F06F08","IE29AIBK93115212345678")),a(new i("IL",23,"F03F03F13","IL620108000000099999999")),a(new i("IS",26,"F04F02F06F10","IS140159260076545510730339")),a(new i("IT",27,"U01F05F05A12","IT60X0542811101000000123456")),a(new i("IQ",23,"U04F03A12","IQ98NBIQ850123456789012")),a(new i("JO",30,"A04F22","JO15AAAA1234567890123456789012")),a(new i("KW",30,"U04A22","KW81CBKU0000000000001234560101")),a(new i("KZ",20,"F03A13","KZ86125KZT5004100100")),a(new i("LB",28,"F04A20","LB62099900000001001901229114")),a(new i("LC",32,"U04F24","LC07HEMM000100010012001200013015")),a(new i("LI",21,"F05A12","LI21088100002324013AA")),a(new i("LT",20,"F05F11","LT121000011101001000")),a(new i("LU",20,"F03A13","LU280019400644750000")),a(new i("LV",21,"U04A13","LV80BANK0000435195001")),a(new i("MC",27,"F05F05A11F02","MC5811222000010123456789030")),a(new i("MD",24,"U02A18","MD24AG000225100013104168")),a(new i("ME",22,"F03F13F02","ME25505000012345678951")),a(new i("MK",19,"F03A10F02","MK07250120000058984")),a(new i("MR",27,"F05F05F11F02","MR1300020001010000123456753")),a(new i("MT",31,"U04F05A18","MT84MALT011000012345MTLCAST001S")),a(new i("MU",30,"U04F02F02F12F03U03","MU17BOMM0101101030300200000MUR")),a(new i("NL",18,"U04F10","NL91ABNA0417164300")),a(new i("NO",15,"F04F06F01","NO9386011117947")),a(new i("PK",24,"U04A16","PK36SCBL0000001123456702")),a(new i("PL",28,"F08F16","PL61109010140000071219812874")),a(new i("PS",29,"U04A21","PS92PALS000000000400123456702")),a(new i("PT",25,"F04F04F11F02","PT50000201231234567890154")),a(new i("QA",29,"U04A21","QA30AAAA123456789012345678901")),a(new i("RO",24,"U04A16","RO49AAAA1B31007593840000")),a(new i("RS",22,"F03F13F02","RS35260005601001611379")),a(new i("SA",24,"F02A18","SA0380000000608010167519")),a(new i("SC",31,"U04F04F16U03","SC18SSCB11010000000000001497USD")),a(new i("SE",24,"F03F16F01","SE4550000000058398257466")),a(new i("SI",19,"F05F08F02","SI56263300012039086")),a(new i("SK",24,"F04F06F10","SK3112000000198742637541")),a(new i("SM",27,"U01F05F05A12","SM86U0322509800000000270100")),a(new i("ST",25,"F08F11F02","ST68000100010051845310112")),a(new i("SV",28,"U04F20","SV62CENR00000000000000700025")),a(new i("TL",23,"F03F14F02","TL380080012345678910157")),a(new i("TN",24,"F02F03F13F02","TN5910006035183598478831")),a(new i("TR",26,"F05F01A16","TR330006100519786457841326")),a(new i("UA",29,"F25","UA511234567890123456789012345")),a(new i("VG",24,"U04F16","VG96VPVG0000012345678901")),a(new i("XK",20,"F04F10F02","XK051212012345678906")),a(new i("AO",25,"F21","AO69123456789012345678901")),a(new i("BF",27,"F23","BF2312345678901234567890123")),a(new i("BI",16,"F12","BI41123456789012")),a(new i("BJ",28,"F24","BJ39123456789012345678901234")),a(new i("CI",28,"U01F23","CI17A12345678901234567890123")),a(new i("CM",27,"F23","CM9012345678901234567890123")),a(new i("CV",25,"F21","CV30123456789012345678901")),a(new i("DZ",24,"F20","DZ8612345678901234567890")),a(new i("IR",26,"F22","IR861234568790123456789012")),a(new i("MG",27,"F23","MG1812345678901234567890123")),a(new i("ML",28,"U01F23","ML15A12345678901234567890123")),a(new i("MZ",25,"F21","MZ25123456789012345678901")),a(new i("SN",28,"U01F23","SN52A12345678901234567890123"));var f=/[^a-zA-Z0-9]/g,d=/(.{4})(?!$)/g;e.isValid=function(e){if(!u(e))return!1;e=o(e);var n=c[e.slice(0,2)];return!!n&&n.isValid(e)},e.toBBAN=function(e,n){"undefined"==typeof n&&(n=" "),e=o(e);var r=c[e.slice(0,2)];if(!r)throw new Error("No country with code "+e.slice(0,2));return r.toBBAN(e,n)},e.fromBBAN=function(e,n){var r=c[e];if(!r)throw new Error("No country with code "+e);return r.fromBBAN(o(n))},e.isValidBBAN=function(e,n){if(!u(n))return!1;var r=c[e];return r&&r.isValidBBAN(o(n))},e.printFormat=function(e,n){return"undefined"==typeof n&&(n=" "),o(e).replace(d,"$1"+n)},e.electronicFormat=o,e.countries=c})},function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function o(e,n){e=e.replace(C,h);var r=n.placeholderChar,t=n.currentCaretPosition,o=e.indexOf(v),c=e.lastIndexOf(p),f=c<o?-1:c,d=i(e,o+1,v),F=i(e,f-1,p),w=a(e,o,r),A=u(e,o,f,r),g=s(e,f,r,t);w=l(w),A=l(A),g=l(g,!0);var m=w.concat(d).concat(A).concat(F).concat(g);return m}function i(e,n,r){var t=[];return e[n]===r?t.push(r):t.push(F,r),t.push(F),t}function a(e,n){return n===-1?e:e.slice(0,n)}function u(e,n,r,t){var o=h;return n!==-1&&(o=r===-1?e.slice(n+1,e.length):e.slice(n+1,r)),o=o.replace(new RegExp("[\\s"+t+"]",A),h),o===v?d:o.length<1?w:o[o.length-1]===p?o.slice(0,o.length-1):o}function s(e,n,r,t){var o=h;return n!==-1&&(o=e.slice(n+1,e.length)),o=o.replace(new RegExp("[\\s"+r+".]",A),h),0===o.length?e[n-1]===p&&t!==e.length?d:h:o}function l(e,n){return e.split(h).map(function(e){return e===w?e:n?m:g})}Object.defineProperty(n,"__esModule",{value:!0});var c=r(7),f=t(c),d="*",p=".",h="",v="@",F="[]",w=" ",A="g",g=/[^\s]/,m=/[^.\s]/,C=/\s/g;n["default"]={mask:o,pipe:f["default"]}},function(e,n){"use strict";function r(e,n){var r=n.currentCaretPosition,i=n.rawValue,d=n.previousConformedValue,p=n.placeholderChar,h=e;h=t(h);var v=h.indexOf(u),F=null===i.match(new RegExp("[^@\\s."+p+"]"));if(F)return a;if(h.indexOf(l)!==-1||v!==-1&&r!==v+1||i.indexOf(o)===-1&&d!==a&&i.indexOf(s)!==-1)return!1;var w=h.indexOf(o),A=h.slice(w+1,h.length);return(A.match(f)||c).length>1&&h.substr(-1)===s&&r!==i.length&&(h=h.slice(0,h.length-1)),h}function t(e){var n=0;return e.replace(i,function(){return n++,1===n?o:a})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r;var o="@",i=/@/g,a="",u="@.",s=".",l="..",c=[],f=/\./g},function(e,n){"use strict";function r(e){var n=e.previousConformedValue,r=void 0===n?o:n,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,s=void 0===u?0:u,l=e.conformedValue,c=e.rawValue,f=e.placeholderChar,d=e.placeholder,p=e.indexesOfPipedChars,h=void 0===p?t:p,v=e.caretTrapIndexes,F=void 0===v?t:v;if(0===s||!c.length)return 0;var w=c.length,A=r.length,g=d.length,m=l.length,C=w-A,y=C>0,B=0===A,b=C>1&&!y&&!B;if(b)return s;var M=y&&(r===l||l===d),x=0,S=void 0,O=void 0;if(M)x=s-C;else{var P=l.toLowerCase(),T=c.toLowerCase(),U=T.substr(0,s).split(o),k=U.filter(function(e){return P.indexOf(e)!==-1});O=k[k.length-1];var E=a.substr(0,k.length).split(o).filter(function(e){return e!==f}).length,N=d.substr(0,k.length).split(o).filter(function(e){return e!==f}).length,I=N!==E,L=void 0!==a[k.length-1]&&void 0!==d[k.length-2]&&a[k.length-1]!==f&&a[k.length-1]!==d[k.length-1]&&a[k.length-1]===d[k.length-2];!y&&(I||L)&&E>0&&d.indexOf(O)>-1&&void 0!==c[s]&&(S=!0,O=c[s]);for(var R=h.map(function(e){return P[e]}),V=R.filter(function(e){return e===O}).length,_=k.filter(function(e){return e===O}).length,Z=d.substr(0,d.indexOf(f)).split(o).filter(function(e,n){return e===O&&c[n]!==e}).length,j=Z+_+V+(S?1:0),G=0,K=0;K<m;K++){var z=P[K];if(x=K+1,z===O&&G++,G>=j)break}}if(y){for(var D=x,H=x;H<=g;H++)if(d[H]===f&&(D=H),d[H]===f||F.indexOf(H)!==-1||H===g)return D}else if(S){for(var J=x-1;J>=0;J--)if(l[J]===O||F.indexOf(J)!==-1||0===J)return J}else for(var W=x;W>=0;W--)if(d[W-1]===f||F.indexOf(W)!==-1||0===W)return W}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r;var t=[],o=""}])});