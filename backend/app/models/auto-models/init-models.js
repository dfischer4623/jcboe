var DataTypes = require("sequelize").DataTypes;
var _PACP210 = require("./PACP210");
var _PAOE301 = require("./PAOE301");
var _PATT240 = require("./PATT240");
var _PATT240L = require("./PATT240L");
var _PATT250 = require("./PATT250");
var _PATT270 = require("./PATT270");
var _PATT420 = require("./PATT420");
var _PATT420L = require("./PATT420L");
var _PCDS801 = require("./PCDS801");
var _PEIS000 = require("./PEIS000");
var _PEIS121 = require("./PEIS121");
var _PEIS121A = require("./PEIS121A");
var _PEIS126 = require("./PEIS126");
var _PEIS127 = require("./PEIS127");
var _PEIS127A = require("./PEIS127A");
var _PEIS128 = require("./PEIS128");
var _PEIS129 = require("./PEIS129");
var _PEIS131 = require("./PEIS131");
var _PEIS132 = require("./PEIS132");
var _PEIS133 = require("./PEIS133");
var _PEIS135 = require("./PEIS135");
var _PEIS141 = require("./PEIS141");
var _PEIS143 = require("./PEIS143");
var _PEIS144 = require("./PEIS144");
var _PEIS151 = require("./PEIS151");
var _PEIS175 = require("./PEIS175");
var _PEIS202 = require("./PEIS202");
var _PEIS204 = require("./PEIS204");
var _PEIS205 = require("./PEIS205");
var _PEIS301N = require("./PEIS301N");
var _PEIS301XX = require("./PEIS301XX");
var _PEIS303 = require("./PEIS303");
var _PEIS305 = require("./PEIS305");
var _PEIS309 = require("./PEIS309");
var _PEIS311 = require("./PEIS311");
var _PEIS321 = require("./PEIS321");
var _PEIS322 = require("./PEIS322");
var _PEIS780 = require("./PEIS780");
var _PFRS000 = require("./PFRS000");
var _PFRS100 = require("./PFRS100");
var _PFRS100L = require("./PFRS100L");
var _PFRS123 = require("./PFRS123");
var _PFRS251 = require("./PFRS251");
var _PGRD450 = require("./PGRD450");
var _PNJF301 = require("./PNJF301");
var _PPAI122 = require("./PPAI122");
var _PPAI251 = require("./PPAI251");
var _PPAI251A = require("./PPAI251A");
var _PPAI711 = require("./PPAI711");
var _PPAI712 = require("./PPAI712");
var _PPAI712U = require("./PPAI712U");
var _PPAI713 = require("./PPAI713");
var _PPAI713U = require("./PPAI713U");
var _PPAI714U = require("./PPAI714U");
var _PPAI715 = require("./PPAI715");
var _PPAI715U = require("./PPAI715U");
var _PPAI716 = require("./PPAI716");
var _PPAI716U = require("./PPAI716U");
var _PPAI718 = require("./PPAI718");
var _PPAI718U = require("./PPAI718U");
var _PPAI719B = require("./PPAI719B");
var _PPAI720 = require("./PPAI720");
var _PPAY100 = require("./PPAY100");
var _PPAY110 = require("./PPAY110");
var _PPAY120 = require("./PPAY120");
var _PPAY120J = require("./PPAY120J");
var _PPAY120L = require("./PPAY120L");
var _PPAY121 = require("./PPAY121");
var _PPAY122H = require("./PPAY122H");
var _PPAY122HL = require("./PPAY122HL");
var _PPAY122I = require("./PPAY122I");
var _PPAY122L = require("./PPAY122L");
var _PPAY124 = require("./PPAY124");
var _PPAY1241 = require("./PPAY1241");
var _PPAY124s = require("./PPAY124s");
var _PPAY125H = require("./PPAY125H");
var _PPAY125L = require("./PPAY125L");
var _PPAY127 = require("./PPAY127");
var _PPAY130 = require("./PPAY130");
var _PPAY140 = require("./PPAY140");
var _PPAY141 = require("./PPAY141");
var _PPAY142 = require("./PPAY142");
var _PPAY150 = require("./PPAY150");
var _PPAY151 = require("./PPAY151");
var _PPAY160 = require("./PPAY160");
var _PPAY302 = require("./PPAY302");
var _PPAY302D = require("./PPAY302D");
var _PPAY305 = require("./PPAY305");
var _PPAY3401 = require("./PPAY3401");
var _PPAY3402 = require("./PPAY3402");
var _PPAY3405 = require("./PPAY3405");
var _PPAY3406 = require("./PPAY3406");
var _PPAY370 = require("./PPAY370");
var _PPAY375 = require("./PPAY375");
var _PPAY408 = require("./PPAY408");
var _PPAY408A = require("./PPAY408A");
var _PPAY408B = require("./PPAY408B");
var _PPAY600 = require("./PPAY600");
var _PPAY600H = require("./PPAY600H");
var _PPAY600J = require("./PPAY600J");
var _PPAY605 = require("./PPAY605");
var _PPAY605H = require("./PPAY605H");
var _PPAY680 = require("./PPAY680");
var _PPAY680D = require("./PPAY680D");
var _PPAY680DSV = require("./PPAY680DSV");
var _PPAY680SV = require("./PPAY680SV");
var _PPAY719 = require("./PPAY719");
var _PPAY729 = require("./PPAY729");
var _PPAY739 = require("./PPAY739");
var _PPAY749 = require("./PPAY749");
var _PPAY765 = require("./PPAY765");
var _PPAY765L = require("./PPAY765L");
var _PPAY775 = require("./PPAY775");
var _PPAY776 = require("./PPAY776");
var _PPAY801 = require("./PPAY801");
var _PPAY801XX = require("./PPAY801XX");
var _PPAY802ORIG = require("./PPAY802ORIG");
var _PPAY802XX = require("./PPAY802XX");
var _PPAY845 = require("./PPAY845");
var _PPAY995 = require("./PPAY995");
var _PPUR301 = require("./PPUR301");
var _PPUR301A = require("./PPUR301A");
var _PPUR301C = require("./PPUR301C");
var _PPUR301X = require("./PPUR301X");
var _PPUR4101 = require("./PPUR4101");
var _PPUR410A = require("./PPUR410A");
var _PPUR410H = require("./PPUR410H");
var _PPUR410LX = require("./PPUR410LX");
var _PPUR420H = require("./PPUR420H");
var _PPUR420L = require("./PPUR420L");
var _PSTU301D = require("./PSTU301D");
var _PSTU320D = require("./PSTU320D");
var _PSTU350D = require("./PSTU350D");
var _PSTU360D = require("./PSTU360D");
var _SALACTXX = require("./SALACTXX");
var _SALARYXX = require("./SALARYXX");
var _lacp441s = require("./lacp441s");
var _pcds801s = require("./pcds801s");
var _peis301s = require("./peis301s");
var _peis480ds = require("./peis480ds");
var _peis480hs = require("./peis480hs");
var _pfrs860s = require("./pfrs860s");
var _ppai714s = require("./ppai714s");
var _ppai719as = require("./ppai719as");
var _ppai719x = require("./ppai719x");
var _ppay121s = require("./ppay121s");
var _ppay122s = require("./ppay122s");
var _ppay125s = require("./ppay125s");
var _ppay127s = require("./ppay127s");
var _ppay3403s = require("./ppay3403s");
var _ppay340hs = require("./ppay340hs");
var _ppay802s = require("./ppay802s");
var _ppur201s = require("./ppur201s");
var _ppur301s = require("./ppur301s");
var _ppur410hs = require("./ppur410hs");
var _salaries = require("./salaries");

function initModels(sequelize) {
  var PACP210 = _PACP210(sequelize, DataTypes);
  var PAOE301 = _PAOE301(sequelize, DataTypes);
  var PATT240 = _PATT240(sequelize, DataTypes);
  var PATT240L = _PATT240L(sequelize, DataTypes);
  var PATT250 = _PATT250(sequelize, DataTypes);
  var PATT270 = _PATT270(sequelize, DataTypes);
  var PATT420 = _PATT420(sequelize, DataTypes);
  var PATT420L = _PATT420L(sequelize, DataTypes);
  var PCDS801 = _PCDS801(sequelize, DataTypes);
  var PEIS000 = _PEIS000(sequelize, DataTypes);
  var PEIS121 = _PEIS121(sequelize, DataTypes);
  var PEIS121A = _PEIS121A(sequelize, DataTypes);
  var PEIS126 = _PEIS126(sequelize, DataTypes);
  var PEIS127 = _PEIS127(sequelize, DataTypes);
  var PEIS127A = _PEIS127A(sequelize, DataTypes);
  var PEIS128 = _PEIS128(sequelize, DataTypes);
  var PEIS129 = _PEIS129(sequelize, DataTypes);
  var PEIS131 = _PEIS131(sequelize, DataTypes);
  var PEIS132 = _PEIS132(sequelize, DataTypes);
  var PEIS133 = _PEIS133(sequelize, DataTypes);
  var PEIS135 = _PEIS135(sequelize, DataTypes);
  var PEIS141 = _PEIS141(sequelize, DataTypes);
  var PEIS143 = _PEIS143(sequelize, DataTypes);
  var PEIS144 = _PEIS144(sequelize, DataTypes);
  var PEIS151 = _PEIS151(sequelize, DataTypes);
  var PEIS175 = _PEIS175(sequelize, DataTypes);
  var PEIS202 = _PEIS202(sequelize, DataTypes);
  var PEIS204 = _PEIS204(sequelize, DataTypes);
  var PEIS205 = _PEIS205(sequelize, DataTypes);
  var PEIS301N = _PEIS301N(sequelize, DataTypes);
  var PEIS301XX = _PEIS301XX(sequelize, DataTypes);
  var PEIS303 = _PEIS303(sequelize, DataTypes);
  var PEIS305 = _PEIS305(sequelize, DataTypes);
  var PEIS309 = _PEIS309(sequelize, DataTypes);
  var PEIS311 = _PEIS311(sequelize, DataTypes);
  var PEIS321 = _PEIS321(sequelize, DataTypes);
  var PEIS322 = _PEIS322(sequelize, DataTypes);
  var PEIS780 = _PEIS780(sequelize, DataTypes);
  var PFRS000 = _PFRS000(sequelize, DataTypes);
  var PFRS100 = _PFRS100(sequelize, DataTypes);
  var PFRS100L = _PFRS100L(sequelize, DataTypes);
  var PFRS123 = _PFRS123(sequelize, DataTypes);
  var PFRS251 = _PFRS251(sequelize, DataTypes);
  var PGRD450 = _PGRD450(sequelize, DataTypes);
  var PNJF301 = _PNJF301(sequelize, DataTypes);
  var PPAI122 = _PPAI122(sequelize, DataTypes);
  var PPAI251 = _PPAI251(sequelize, DataTypes);
  var PPAI251A = _PPAI251A(sequelize, DataTypes);
  var PPAI711 = _PPAI711(sequelize, DataTypes);
  var PPAI712 = _PPAI712(sequelize, DataTypes);
  var PPAI712U = _PPAI712U(sequelize, DataTypes);
  var PPAI713 = _PPAI713(sequelize, DataTypes);
  var PPAI713U = _PPAI713U(sequelize, DataTypes);
  var PPAI714U = _PPAI714U(sequelize, DataTypes);
  var PPAI715 = _PPAI715(sequelize, DataTypes);
  var PPAI715U = _PPAI715U(sequelize, DataTypes);
  var PPAI716 = _PPAI716(sequelize, DataTypes);
  var PPAI716U = _PPAI716U(sequelize, DataTypes);
  var PPAI718 = _PPAI718(sequelize, DataTypes);
  var PPAI718U = _PPAI718U(sequelize, DataTypes);
  var PPAI719B = _PPAI719B(sequelize, DataTypes);
  var PPAI720 = _PPAI720(sequelize, DataTypes);
  var PPAY100 = _PPAY100(sequelize, DataTypes);
  var PPAY110 = _PPAY110(sequelize, DataTypes);
  var PPAY120 = _PPAY120(sequelize, DataTypes);
  var PPAY120J = _PPAY120J(sequelize, DataTypes);
  var PPAY120L = _PPAY120L(sequelize, DataTypes);
  var PPAY121 = _PPAY121(sequelize, DataTypes);
  var PPAY122H = _PPAY122H(sequelize, DataTypes);
  var PPAY122HL = _PPAY122HL(sequelize, DataTypes);
  var PPAY122I = _PPAY122I(sequelize, DataTypes);
  var PPAY122L = _PPAY122L(sequelize, DataTypes);
  var PPAY124 = _PPAY124(sequelize, DataTypes);
  var PPAY1241 = _PPAY1241(sequelize, DataTypes);
  var PPAY124s = _PPAY124s(sequelize, DataTypes);
  var PPAY125H = _PPAY125H(sequelize, DataTypes);
  var PPAY125L = _PPAY125L(sequelize, DataTypes);
  var PPAY127 = _PPAY127(sequelize, DataTypes);
  var PPAY130 = _PPAY130(sequelize, DataTypes);
  var PPAY140 = _PPAY140(sequelize, DataTypes);
  var PPAY141 = _PPAY141(sequelize, DataTypes);
  var PPAY142 = _PPAY142(sequelize, DataTypes);
  var PPAY150 = _PPAY150(sequelize, DataTypes);
  var PPAY151 = _PPAY151(sequelize, DataTypes);
  var PPAY160 = _PPAY160(sequelize, DataTypes);
  var PPAY302 = _PPAY302(sequelize, DataTypes);
  var PPAY302D = _PPAY302D(sequelize, DataTypes);
  var PPAY305 = _PPAY305(sequelize, DataTypes);
  var PPAY3401 = _PPAY3401(sequelize, DataTypes);
  var PPAY3402 = _PPAY3402(sequelize, DataTypes);
  var PPAY3405 = _PPAY3405(sequelize, DataTypes);
  var PPAY3406 = _PPAY3406(sequelize, DataTypes);
  var PPAY370 = _PPAY370(sequelize, DataTypes);
  var PPAY375 = _PPAY375(sequelize, DataTypes);
  var PPAY408 = _PPAY408(sequelize, DataTypes);
  var PPAY408A = _PPAY408A(sequelize, DataTypes);
  var PPAY408B = _PPAY408B(sequelize, DataTypes);
  var PPAY600 = _PPAY600(sequelize, DataTypes);
  var PPAY600H = _PPAY600H(sequelize, DataTypes);
  var PPAY600J = _PPAY600J(sequelize, DataTypes);
  var PPAY605 = _PPAY605(sequelize, DataTypes);
  var PPAY605H = _PPAY605H(sequelize, DataTypes);
  var PPAY680 = _PPAY680(sequelize, DataTypes);
  var PPAY680D = _PPAY680D(sequelize, DataTypes);
  var PPAY680DSV = _PPAY680DSV(sequelize, DataTypes);
  var PPAY680SV = _PPAY680SV(sequelize, DataTypes);
  var PPAY719 = _PPAY719(sequelize, DataTypes);
  var PPAY729 = _PPAY729(sequelize, DataTypes);
  var PPAY739 = _PPAY739(sequelize, DataTypes);
  var PPAY749 = _PPAY749(sequelize, DataTypes);
  var PPAY765 = _PPAY765(sequelize, DataTypes);
  var PPAY765L = _PPAY765L(sequelize, DataTypes);
  var PPAY775 = _PPAY775(sequelize, DataTypes);
  var PPAY776 = _PPAY776(sequelize, DataTypes);
  var PPAY801 = _PPAY801(sequelize, DataTypes);
  var PPAY801XX = _PPAY801XX(sequelize, DataTypes);
  var PPAY802ORIG = _PPAY802ORIG(sequelize, DataTypes);
  var PPAY802XX = _PPAY802XX(sequelize, DataTypes);
  var PPAY845 = _PPAY845(sequelize, DataTypes);
  var PPAY995 = _PPAY995(sequelize, DataTypes);
  var PPUR301 = _PPUR301(sequelize, DataTypes);
  var PPUR301A = _PPUR301A(sequelize, DataTypes);
  var PPUR301C = _PPUR301C(sequelize, DataTypes);
  var PPUR301X = _PPUR301X(sequelize, DataTypes);
  var PPUR4101 = _PPUR4101(sequelize, DataTypes);
  var PPUR410A = _PPUR410A(sequelize, DataTypes);
  var PPUR410H = _PPUR410H(sequelize, DataTypes);
  var PPUR410LX = _PPUR410LX(sequelize, DataTypes);
  var PPUR420H = _PPUR420H(sequelize, DataTypes);
  var PPUR420L = _PPUR420L(sequelize, DataTypes);
  var PSTU301D = _PSTU301D(sequelize, DataTypes);
  var PSTU320D = _PSTU320D(sequelize, DataTypes);
  var PSTU350D = _PSTU350D(sequelize, DataTypes);
  var PSTU360D = _PSTU360D(sequelize, DataTypes);
  var SALACTXX = _SALACTXX(sequelize, DataTypes);
  var SALARYXX = _SALARYXX(sequelize, DataTypes);
  var lacp441s = _lacp441s(sequelize, DataTypes);
  var pcds801s = _pcds801s(sequelize, DataTypes);
  var peis301s = _peis301s(sequelize, DataTypes);
  var peis480ds = _peis480ds(sequelize, DataTypes);
  var peis480hs = _peis480hs(sequelize, DataTypes);
  var pfrs860s = _pfrs860s(sequelize, DataTypes);
  var ppai714s = _ppai714s(sequelize, DataTypes);
  var ppai719as = _ppai719as(sequelize, DataTypes);
  var ppai719x = _ppai719x(sequelize, DataTypes);
  var ppay121s = _ppay121s(sequelize, DataTypes);
  var ppay122s = _ppay122s(sequelize, DataTypes);
  var ppay125s = _ppay125s(sequelize, DataTypes);
  var ppay127s = _ppay127s(sequelize, DataTypes);
  var ppay3403s = _ppay3403s(sequelize, DataTypes);
  var ppay340hs = _ppay340hs(sequelize, DataTypes);
  var ppay802s = _ppay802s(sequelize, DataTypes);
  var ppur201s = _ppur201s(sequelize, DataTypes);
  var ppur301s = _ppur301s(sequelize, DataTypes);
  var ppur410hs = _ppur410hs(sequelize, DataTypes);
  var salaries = _salaries(sequelize, DataTypes);


  return {
    PACP210,
    PAOE301,
    PATT240,
    PATT240L,
    PATT250,
    PATT270,
    PATT420,
    PATT420L,
    PCDS801,
    PEIS000,
    PEIS121,
    PEIS121A,
    PEIS126,
    PEIS127,
    PEIS127A,
    PEIS128,
    PEIS129,
    PEIS131,
    PEIS132,
    PEIS133,
    PEIS135,
    PEIS141,
    PEIS143,
    PEIS144,
    PEIS151,
    PEIS175,
    PEIS202,
    PEIS204,
    PEIS205,
    PEIS301N,
    PEIS301XX,
    PEIS303,
    PEIS305,
    PEIS309,
    PEIS311,
    PEIS321,
    PEIS322,
    PEIS780,
    PFRS000,
    PFRS100,
    PFRS100L,
    PFRS123,
    PFRS251,
    PGRD450,
    PNJF301,
    PPAI122,
    PPAI251,
    PPAI251A,
    PPAI711,
    PPAI712,
    PPAI712U,
    PPAI713,
    PPAI713U,
    PPAI714U,
    PPAI715,
    PPAI715U,
    PPAI716,
    PPAI716U,
    PPAI718,
    PPAI718U,
    PPAI719B,
    PPAI720,
    PPAY100,
    PPAY110,
    PPAY120,
    PPAY120J,
    PPAY120L,
    PPAY121,
    PPAY122H,
    PPAY122HL,
    PPAY122I,
    PPAY122L,
    PPAY124,
    PPAY1241,
    PPAY124s,
    PPAY125H,
    PPAY125L,
    PPAY127,
    PPAY130,
    PPAY140,
    PPAY141,
    PPAY142,
    PPAY150,
    PPAY151,
    PPAY160,
    PPAY302,
    PPAY302D,
    PPAY305,
    PPAY3401,
    PPAY3402,
    PPAY3405,
    PPAY3406,
    PPAY370,
    PPAY375,
    PPAY408,
    PPAY408A,
    PPAY408B,
    PPAY600,
    PPAY600H,
    PPAY600J,
    PPAY605,
    PPAY605H,
    PPAY680,
    PPAY680D,
    PPAY680DSV,
    PPAY680SV,
    PPAY719,
    PPAY729,
    PPAY739,
    PPAY749,
    PPAY765,
    PPAY765L,
    PPAY775,
    PPAY776,
    PPAY801,
    PPAY801XX,
    PPAY802ORIG,
    PPAY802XX,
    PPAY845,
    PPAY995,
    PPUR301,
    PPUR301A,
    PPUR301C,
    PPUR301X,
    PPUR4101,
    PPUR410A,
    PPUR410H,
    PPUR410LX,
    PPUR420H,
    PPUR420L,
    PSTU301D,
    PSTU320D,
    PSTU350D,
    PSTU360D,
    SALACTXX,
    SALARYXX,
    lacp441s,
    pcds801s,
    peis301s,
    peis480ds,
    peis480hs,
    pfrs860s,
    ppai714s,
    ppai719as,
    ppai719x,
    ppay121s,
    ppay122s,
    ppay125s,
    ppay127s,
    ppay3403s,
    ppay340hs,
    ppay802s,
    ppur201s,
    ppur301s,
    ppur410hs,
    salaries,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
