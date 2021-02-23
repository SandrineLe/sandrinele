// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/langs.min.js":[function(require,module,exports) {
jsonLangs = {
  "ab": {
    "name": "Abkhaz",
    "nativeName": "Ð°Ò§ÑÑƒÐ°"
  },
  "aa": {
    "name": "Afar",
    "nativeName": "Afaraf"
  },
  "af": {
    "name": "Afrikaans",
    "nativeName": "Afrikaans"
  },
  "ak": {
    "name": "Akan",
    "nativeName": "Akan"
  },
  "sq": {
    "name": "Albanian",
    "nativeName": "Shqip"
  },
  "am": {
    "name": "Amharic",
    "nativeName": "áŠ áˆ›áˆ­áŠ›"
  },
  "ar": {
    "name": "Arabic",
    "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
  },
  "an": {
    "name": "Aragonese",
    "nativeName": "AragonÃ©s"
  },
  "hy": {
    "name": "Armenian",
    "nativeName": "Õ€Õ¡ÕµÕ¥Ö€Õ¥Õ¶"
  },
  "as": {
    "name": "Assamese",
    "nativeName": "à¦…à¦¸à¦®à§€à¦¯à¦¼à¦¾"
  },
  "av": {
    "name": "Avaric",
    "nativeName": "Ð°Ð²Ð°Ñ€ Ð¼Ð°Ñ†Ó€, Ð¼Ð°Ð³Ó€Ð°Ñ€ÑƒÐ» Ð¼Ð°Ñ†Ó€"
  },
  "ae": {
    "name": "Avestan",
    "nativeName": "avesta"
  },
  "ay": {
    "name": "Aymara",
    "nativeName": "aymar aru"
  },
  "az": {
    "name": "Azerbaijani",
    "nativeName": "azÉ™rbaycan dili"
  },
  "bm": {
    "name": "Bambara",
    "nativeName": "bamanankan"
  },
  "ba": {
    "name": "Bashkir",
    "nativeName": "Ð±Ð°ÑˆÒ¡Ð¾Ñ€Ñ‚ Ñ‚ÐµÐ»Ðµ"
  },
  "eu": {
    "name": "Basque",
    "nativeName": "euskara, euskera"
  },
  "be": {
    "name": "Belarusian",
    "nativeName": "Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ"
  },
  "bn": {
    "name": "Bengali",
    "nativeName": "à¦¬à¦¾à¦‚à¦²à¦¾"
  },
  "bh": {
    "name": "Bihari",
    "nativeName": "à¤­à¥‹à¤œà¤ªà¥à¤°à¥€"
  },
  "bi": {
    "name": "Bislama",
    "nativeName": "Bislama"
  },
  "bs": {
    "name": "Bosnian",
    "nativeName": "bosanski jezik"
  },
  "br": {
    "name": "Breton",
    "nativeName": "brezhoneg"
  },
  "bg": {
    "name": "Bulgarian",
    "nativeName": "Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº"
  },
  "my": {
    "name": "Burmese",
    "nativeName": "á€—á€™á€¬á€…á€¬"
  },
  "ca": {
    "name": "Catalan; Valencian",
    "nativeName": "CatalÃ "
  },
  "ch": {
    "name": "Chamorro",
    "nativeName": "Chamoru"
  },
  "ce": {
    "name": "Chechen",
    "nativeName": "Ð½Ð¾Ñ…Ñ‡Ð¸Ð¹Ð½ Ð¼Ð¾Ñ‚Ñ‚"
  },
  "ny": {
    "name": "Chichewa; Chewa; Nyanja",
    "nativeName": "chiCheÅµa, chinyanja"
  },
  "zh": {
    "name": "Chinese",
    "nativeName": "ä¸­æ–‡ (ZhÅngwÃ©n), æ±‰è¯­, æ¼¢èªž"
  },
  "cv": {
    "name": "Chuvash",
    "nativeName": "Ñ‡Ó‘Ð²Ð°Ñˆ Ñ‡Ó—Ð»Ñ…Ð¸"
  },
  "kw": {
    "name": "Cornish",
    "nativeName": "Kernewek"
  },
  "co": {
    "name": "Corsican",
    "nativeName": "corsu, lingua corsa"
  },
  "cr": {
    "name": "Cree",
    "nativeName": "á“€á¦áƒá”­ááá£"
  },
  "hr": {
    "name": "Croatian",
    "nativeName": "hrvatski"
  },
  "cs": {
    "name": "Czech",
    "nativeName": "Äesky, ÄeÅ¡tina"
  },
  "da": {
    "name": "Danish",
    "nativeName": "dansk"
  },
  "dv": {
    "name": "Divehi; Dhivehi; Maldivian;",
    "nativeName": "Þ‹Þ¨ÞˆÞ¬Þ€Þ¨"
  },
  "nl": {
    "name": "Dutch",
    "nativeName": "Nederlands, Vlaams"
  },
  "en": {
    "name": "English",
    "nativeName": "English"
  },
  "eo": {
    "name": "Esperanto",
    "nativeName": "Esperanto"
  },
  "et": {
    "name": "Estonian",
    "nativeName": "eesti, eesti keel"
  },
  "ee": {
    "name": "Ewe",
    "nativeName": "EÊ‹egbe"
  },
  "fo": {
    "name": "Faroese",
    "nativeName": "fÃ¸royskt"
  },
  "fj": {
    "name": "Fijian",
    "nativeName": "vosa Vakaviti"
  },
  "fi": {
    "name": "Finnish",
    "nativeName": "suomi, suomen kieli"
  },
  "fr": {
    "name": "French",
    "nativeName": "franÃ§ais, langue franÃ§aise"
  },
  "ff": {
    "name": "Fula; Fulah; Pulaar; Pular",
    "nativeName": "Fulfulde, Pulaar, Pular"
  },
  "gl": {
    "name": "Galician",
    "nativeName": "Galego"
  },
  "ka": {
    "name": "Georgian",
    "nativeName": "áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜"
  },
  "de": {
    "name": "German",
    "nativeName": "Deutsch"
  },
  "el": {
    "name": "Greek, Modern",
    "nativeName": "Î•Î»Î»Î·Î½Î¹ÎºÎ¬"
  },
  "gn": {
    "name": "GuaranÃ­",
    "nativeName": "AvaÃ±eáº½"
  },
  "gu": {
    "name": "Gujarati",
    "nativeName": "àª—à«àªœàª°àª¾àª¤à«€"
  },
  "ht": {
    "name": "Haitian; Haitian Creole",
    "nativeName": "KreyÃ²l ayisyen"
  },
  "ha": {
    "name": "Hausa",
    "nativeName": "Hausa, Ù‡ÙŽÙˆÙØ³ÙŽ"
  },
  "he": {
    "name": "Hebrew (modern)",
    "nativeName": "×¢×‘×¨×™×ª"
  },
  "hz": {
    "name": "Herero",
    "nativeName": "Otjiherero"
  },
  "hi": {
    "name": "Hindi",
    "nativeName": "à¤¹à¤¿à¤¨à¥à¤¦à¥€, à¤¹à¤¿à¤‚à¤¦à¥€"
  },
  "ho": {
    "name": "Hiri Motu",
    "nativeName": "Hiri Motu"
  },
  "hu": {
    "name": "Hungarian",
    "nativeName": "Magyar"
  },
  "ia": {
    "name": "Interlingua",
    "nativeName": "Interlingua"
  },
  "id": {
    "name": "Indonesian",
    "nativeName": "Bahasa Indonesia"
  },
  "ie": {
    "name": "Interlingue",
    "nativeName": "Originally called Occidental; then Interlingue after WWII"
  },
  "ga": {
    "name": "Irish",
    "nativeName": "Gaeilge"
  },
  "ig": {
    "name": "Igbo",
    "nativeName": "Asá»¥sá»¥ Igbo"
  },
  "ik": {
    "name": "Inupiaq",
    "nativeName": "IÃ±upiaq, IÃ±upiatun"
  },
  "io": {
    "name": "Ido",
    "nativeName": "Ido"
  },
  "is": {
    "name": "Icelandic",
    "nativeName": "Ãslenska"
  },
  "it": {
    "name": "Italian",
    "nativeName": "Italiano"
  },
  "iu": {
    "name": "Inuktitut",
    "nativeName": "áƒá“„á’ƒá‘Žá‘á‘¦"
  },
  "ja": {
    "name": "Japanese",
    "nativeName": "æ—¥æœ¬èªž (ã«ã»ã‚“ã”ï¼ã«ã£ã½ã‚“ã”)"
  },
  "jv": {
    "name": "Javanese",
    "nativeName": "basa Jawa"
  },
  "kl": {
    "name": "Kalaallisut, Greenlandic",
    "nativeName": "kalaallisut, kalaallit oqaasii"
  },
  "kn": {
    "name": "Kannada",
    "nativeName": "à²•à²¨à³à²¨à²¡"
  },
  "kr": {
    "name": "Kanuri",
    "nativeName": "Kanuri"
  },
  "ks": {
    "name": "Kashmiri",
    "nativeName": "à¤•à¤¶à¥à¤®à¥€à¤°à¥€, ÙƒØ´Ù…ÙŠØ±ÙŠâ€Ž"
  },
  "kk": {
    "name": "Kazakh",
    "nativeName": "ÒšÐ°Ð·Ð°Ò› Ñ‚Ñ–Ð»Ñ–"
  },
  "km": {
    "name": "Khmer",
    "nativeName": "áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš"
  },
  "ki": {
    "name": "Kikuyu, Gikuyu",
    "nativeName": "GÄ©kÅ©yÅ©"
  },
  "rw": {
    "name": "Kinyarwanda",
    "nativeName": "Ikinyarwanda"
  },
  "ky": {
    "name": "Kirghiz, Kyrgyz",
    "nativeName": "ÐºÑ‹Ñ€Ð³Ñ‹Ð· Ñ‚Ð¸Ð»Ð¸"
  },
  "kv": {
    "name": "Komi",
    "nativeName": "ÐºÐ¾Ð¼Ð¸ ÐºÑ‹Ð²"
  },
  "kg": {
    "name": "Kongo",
    "nativeName": "KiKongo"
  },
  "ko": {
    "name": "Korean",
    "nativeName": "í•œêµ­ì–´ (éŸ“åœ‹èªž), ì¡°ì„ ë§ (æœé®®èªž)"
  },
  "ku": {
    "name": "Kurdish",
    "nativeName": "KurdÃ®, ÙƒÙˆØ±Ø¯ÛŒâ€Ž"
  },
  "kj": {
    "name": "Kwanyama, Kuanyama",
    "nativeName": "Kuanyama"
  },
  "la": {
    "name": "Latin",
    "nativeName": "latine, lingua latina"
  },
  "lb": {
    "name": "Luxembourgish, Letzeburgesch",
    "nativeName": "LÃ«tzebuergesch"
  },
  "lg": {
    "name": "Luganda",
    "nativeName": "Luganda"
  },
  "li": {
    "name": "Limburgish, Limburgan, Limburger",
    "nativeName": "Limburgs"
  },
  "ln": {
    "name": "Lingala",
    "nativeName": "LingÃ¡la"
  },
  "lo": {
    "name": "Lao",
    "nativeName": "àºžàº²àºªàº²àº¥àº²àº§"
  },
  "lt": {
    "name": "Lithuanian",
    "nativeName": "lietuviÅ³ kalba"
  },
  "lu": {
    "name": "Luba-Katanga",
    "nativeName": ""
  },
  "lv": {
    "name": "Latvian",
    "nativeName": "latvieÅ¡u valoda"
  },
  "gv": {
    "name": "Manx",
    "nativeName": "Gaelg, Gailck"
  },
  "mk": {
    "name": "Macedonian",
    "nativeName": "Ð¼Ð°ÐºÐµÐ´Ð¾Ð½ÑÐºÐ¸ Ñ˜Ð°Ð·Ð¸Ðº"
  },
  "mg": {
    "name": "Malagasy",
    "nativeName": "Malagasy fiteny"
  },
  "ms": {
    "name": "Malay",
    "nativeName": "bahasa Melayu, Ø¨Ù‡Ø§Ø³ Ù…Ù„Ø§ÙŠÙˆâ€Ž"
  },
  "ml": {
    "name": "Malayalam",
    "nativeName": "à´®à´²à´¯à´¾à´³à´‚"
  },
  "mt": {
    "name": "Maltese",
    "nativeName": "Malti"
  },
  "mi": {
    "name": "MÄori",
    "nativeName": "te reo MÄori"
  },
  "mr": {
    "name": "Marathi (MarÄá¹­hÄ«)",
    "nativeName": "à¤®à¤°à¤¾à¤ à¥€"
  },
  "mh": {
    "name": "Marshallese",
    "nativeName": "Kajin MÌ§ajeÄ¼"
  },
  "mn": {
    "name": "Mongolian",
    "nativeName": "Ð¼Ð¾Ð½Ð³Ð¾Ð»"
  },
  "na": {
    "name": "Nauru",
    "nativeName": "EkakairÅ© Naoero"
  },
  "nv": {
    "name": "Navajo, Navaho",
    "nativeName": "DinÃ© bizaad, DinÃ©kÊ¼ehÇ°Ã­"
  },
  "nb": {
    "name": "Norwegian BokmÃ¥l",
    "nativeName": "Norsk bokmÃ¥l"
  },
  "nd": {
    "name": "North Ndebele",
    "nativeName": "isiNdebele"
  },
  "ne": {
    "name": "Nepali",
    "nativeName": "à¤¨à¥‡à¤ªà¤¾à¤²à¥€"
  },
  "ng": {
    "name": "Ndonga",
    "nativeName": "Owambo"
  },
  "nn": {
    "name": "Norwegian Nynorsk",
    "nativeName": "Norsk nynorsk"
  },
  "no": {
    "name": "Norwegian",
    "nativeName": "Norsk"
  },
  "ii": {
    "name": "Nuosu",
    "nativeName": "ê†ˆêŒ ê’¿ Nuosuhxop"
  },
  "nr": {
    "name": "South Ndebele",
    "nativeName": "isiNdebele"
  },
  "oc": {
    "name": "Occitan",
    "nativeName": "Occitan"
  },
  "oj": {
    "name": "Ojibwe, Ojibwa",
    "nativeName": "áŠá“‚á”‘á“ˆá¯á’§áŽá“"
  },
  "cu": {
    "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
    "nativeName": "Ñ©Ð·Ñ‹ÐºÑŠ ÑÐ»Ð¾Ð²Ñ£Ð½ÑŒÑÐºÑŠ"
  },
  "om": {
    "name": "Oromo",
    "nativeName": "Afaan Oromoo"
  },
  "or": {
    "name": "Oriya",
    "nativeName": "à¬“à¬¡à¬¼à¬¿à¬†"
  },
  "os": {
    "name": "Ossetian, Ossetic",
    "nativeName": "Ð¸Ñ€Ð¾Ð½ Ã¦Ð²Ð·Ð°Ð³"
  },
  "pa": {
    "name": "Panjabi, Punjabi",
    "nativeName": "à¨ªà©°à¨œà¨¾à¨¬à©€, Ù¾Ù†Ø¬Ø§Ø¨ÛŒâ€Ž"
  },
  "pi": {
    "name": "PÄli",
    "nativeName": "à¤ªà¤¾à¤´à¤¿"
  },
  "fa": {
    "name": "Persian",
    "nativeName": "ÙØ§Ø±Ø³ÛŒ"
  },
  "pl": {
    "name": "Polish",
    "nativeName": "polski"
  },
  "ps": {
    "name": "Pashto, Pushto",
    "nativeName": "Ù¾ÚšØªÙˆ"
  },
  "pt": {
    "name": "Portuguese",
    "nativeName": "PortuguÃªs"
  },
  "qu": {
    "name": "Quechua",
    "nativeName": "Runa Simi, Kichwa"
  },
  "rm": {
    "name": "Romansh",
    "nativeName": "rumantsch grischun"
  },
  "rn": {
    "name": "Kirundi",
    "nativeName": "kiRundi"
  },
  "ro": {
    "name": "Romanian, Moldavian, Moldovan",
    "nativeName": "romÃ¢nÄƒ"
  },
  "ru": {
    "name": "Russian",
    "nativeName": "Ñ€ÑƒÑÑÐºÐ¸Ð¹ ÑÐ·Ñ‹Ðº"
  },
  "sa": {
    "name": "Sanskrit (Saá¹ská¹›ta)",
    "nativeName": "à¤¸à¤‚à¤¸à¥à¤•à¥ƒà¤¤à¤®à¥"
  },
  "sc": {
    "name": "Sardinian",
    "nativeName": "sardu"
  },
  "sd": {
    "name": "Sindhi",
    "nativeName": "à¤¸à¤¿à¤¨à¥à¤§à¥€, Ø³Ù†ÚŒÙŠØŒ Ø³Ù†Ø¯Ú¾ÛŒâ€Ž"
  },
  "se": {
    "name": "Northern Sami",
    "nativeName": "DavvisÃ¡megiella"
  },
  "sm": {
    "name": "Samoan",
    "nativeName": "gagana faa Samoa"
  },
  "sg": {
    "name": "Sango",
    "nativeName": "yÃ¢ngÃ¢ tÃ® sÃ¤ngÃ¶"
  },
  "sr": {
    "name": "Serbian",
    "nativeName": "ÑÑ€Ð¿ÑÐºÐ¸ Ñ˜ÐµÐ·Ð¸Ðº"
  },
  "gd": {
    "name": "Scottish Gaelic; Gaelic",
    "nativeName": "GÃ idhlig"
  },
  "sn": {
    "name": "Shona",
    "nativeName": "chiShona"
  },
  "si": {
    "name": "Sinhala, Sinhalese",
    "nativeName": "à·ƒà·’à¶‚à·„à¶½"
  },
  "sk": {
    "name": "Slovak",
    "nativeName": "slovenÄina"
  },
  "sl": {
    "name": "Slovene",
    "nativeName": "slovenÅ¡Äina"
  },
  "so": {
    "name": "Somali",
    "nativeName": "Soomaaliga, af Soomaali"
  },
  "st": {
    "name": "Southern Sotho",
    "nativeName": "Sesotho"
  },
  "es": {
    "name": "Spanish; Castilian",
    "nativeName": "espaÃ±ol, castellano"
  },
  "su": {
    "name": "Sundanese",
    "nativeName": "Basa Sunda"
  },
  "sw": {
    "name": "Swahili",
    "nativeName": "Kiswahili"
  },
  "ss": {
    "name": "Swati",
    "nativeName": "SiSwati"
  },
  "sv": {
    "name": "Swedish",
    "nativeName": "svenska"
  },
  "ta": {
    "name": "Tamil",
    "nativeName": "à®¤à®®à®¿à®´à¯"
  },
  "te": {
    "name": "Telugu",
    "nativeName": "à°¤à±†à°²à±à°—à±"
  },
  "tg": {
    "name": "Tajik",
    "nativeName": "Ñ‚Ð¾Ò·Ð¸ÐºÓ£, toÄŸikÄ«, ØªØ§Ø¬ÛŒÚ©ÛŒâ€Ž"
  },
  "th": {
    "name": "Thai",
    "nativeName": "à¹„à¸—à¸¢"
  },
  "ti": {
    "name": "Tigrinya",
    "nativeName": "á‰µáŒáˆ­áŠ›"
  },
  "bo": {
    "name": "Tibetan Standard, Tibetan, Central",
    "nativeName": "à½–à½¼à½‘à¼‹à½¡à½²à½‚"
  },
  "tk": {
    "name": "Turkmen",
    "nativeName": "TÃ¼rkmen, Ð¢Ò¯Ñ€ÐºÐ¼ÐµÐ½"
  },
  "tl": {
    "name": "Tagalog",
    "nativeName": "Wikang Tagalog, áœáœ’áœƒáœ…áœ” áœ†áœ„áœŽáœ“áœ„áœ”"
  },
  "tn": {
    "name": "Tswana",
    "nativeName": "Setswana"
  },
  "to": {
    "name": "Tonga (Tonga Islands)",
    "nativeName": "faka Tonga"
  },
  "tr": {
    "name": "Turkish",
    "nativeName": "TÃ¼rkÃ§e"
  },
  "ts": {
    "name": "Tsonga",
    "nativeName": "Xitsonga"
  },
  "tt": {
    "name": "Tatar",
    "nativeName": "Ñ‚Ð°Ñ‚Ð°Ñ€Ñ‡Ð°, tatarÃ§a, ØªØ§ØªØ§Ø±Ú†Ø§â€Ž"
  },
  "tw": {
    "name": "Twi",
    "nativeName": "Twi"
  },
  "ty": {
    "name": "Tahitian",
    "nativeName": "Reo Tahiti"
  },
  "ug": {
    "name": "Uighur, Uyghur",
    "nativeName": "UyÆ£urqÉ™, Ø¦Û‡ÙŠØºÛ‡Ø±Ú†Û•â€Ž"
  },
  "uk": {
    "name": "Ukrainian",
    "nativeName": "ÑƒÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°"
  },
  "ur": {
    "name": "Urdu",
    "nativeName": "Ø§Ø±Ø¯Ùˆ"
  },
  "uz": {
    "name": "Uzbek",
    "nativeName": "zbek, ÐŽÐ·Ð±ÐµÐº, Ø£Û‡Ø²Ø¨ÛÙƒâ€Ž"
  },
  "ve": {
    "name": "Venda",
    "nativeName": "Tshivená¸“a"
  },
  "vi": {
    "name": "Vietnamese",
    "nativeName": "Tiáº¿ng Viá»‡t"
  },
  "vo": {
    "name": "VolapÃ¼k",
    "nativeName": "VolapÃ¼k"
  },
  "wa": {
    "name": "Walloon",
    "nativeName": "Walon"
  },
  "cy": {
    "name": "Welsh",
    "nativeName": "Cymraeg"
  },
  "wo": {
    "name": "Wolof",
    "nativeName": "Wollof"
  },
  "fy": {
    "name": "Western Frisian",
    "nativeName": "Frysk"
  },
  "xh": {
    "name": "Xhosa",
    "nativeName": "isiXhosa"
  },
  "yi": {
    "name": "Yiddish",
    "nativeName": "×™×™Ö´×“×™×©"
  },
  "yo": {
    "name": "Yoruba",
    "nativeName": "YorÃ¹bÃ¡"
  },
  "za": {
    "name": "Zhuang, Chuang",
    "nativeName": "SaÉ¯ cueÅ‹Æ…, Saw cuengh"
  }
};
},{}],"../../../../../../Users/sandrinele/.nvm/versions/node/v15.7.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64029" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../Users/sandrinele/.nvm/versions/node/v15.7.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/langs.min.js"], null)
//# sourceMappingURL=/langs.min.40f781cd.js.map