/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_infraestructure_DbMongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/infraestructure/DbMongo */ \"./src/infraestructure/DbMongo.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(Object(express__WEBPACK_IMPORTED_MODULE_0__[\"json\"])());\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\n\nvar DataBase = new _src_infraestructure_DbMongo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"mongo\");\napp.listen(process.env.PORT || 8081, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.log(\"Escuchando en el Puerto 8081\");\n});\napp.get(\"/\", function (req, res) {\n  res.status(200).send(\"Bienvenido a Bcloud\");\n});\napp.post(\"/login\",\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var token;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return DataBase.findUser(req.body.email, req.body.passw);\n\n          case 2:\n            token = _context.sent;\n            res.send({\n              token: token\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.post(\"/signup\",\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var exist;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return DataBase.existUser(req.body.email);\n\n          case 2:\n            exist = _context2.sent;\n            if (exist) res.send(\"Email ya usado\");else {\n              DataBase.addUser(req.body.email, req.body.passw);\n              res.send(200);\n            }\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/domain/Db.js":
/*!**************************!*\
  !*** ./src/domain/Db.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Db =\n/*#__PURE__*/\nfunction () {\n  function Db() {\n    _classCallCheck(this, Db);\n  }\n\n  _createClass(Db, [{\n    key: \"addUser\",\n    value: function addUser() {\n      throw new Error(\"unimplemented\");\n    }\n  }]);\n\n  return Db;\n}();\n\nmodule.exports = {\n  Db: Db\n};\n\n//# sourceURL=webpack:///./src/domain/Db.js?");

/***/ }),

/***/ "./src/infraestructure/DbMongo.js":
/*!****************************************!*\
  !*** ./src/infraestructure/DbMongo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domain_Db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/Db */ \"./src/domain/Db.js\");\n/* harmony import */ var _domain_Db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_domain_Db__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ \"./src/infraestructure/models.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar DbMongo =\n/*#__PURE__*/\nfunction (_Db) {\n  _inherits(DbMongo, _Db);\n\n  function DbMongo(name) {\n    _classCallCheck(this, DbMongo);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(DbMongo).call(this));\n  }\n\n  _createClass(DbMongo, [{\n    key: \"findUser\",\n    value: function () {\n      var _findUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(email_, passw_) {\n        var user, passwordIsValid, token;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _models__WEBPACK_IMPORTED_MODULE_3__[\"UserData\"].findOne({\n                  email: email_\n                });\n\n              case 2:\n                user = _context.sent;\n                passwordIsValid = Object(bcrypt__WEBPACK_IMPORTED_MODULE_1__[\"compareSync\"])(passw_, user.passw);\n\n                if (!passwordIsValid) {\n                  _context.next = 9;\n                  break;\n                }\n\n                token = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__[\"sign\"])({\n                  id: email_\n                }, \"supersecret\", {\n                  expiresIn: 10\n                });\n                return _context.abrupt(\"return\", token);\n\n              case 9:\n                return _context.abrupt(\"return\", \"\");\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function findUser(_x, _x2) {\n        return _findUser.apply(this, arguments);\n      }\n\n      return findUser;\n    }()\n  }, {\n    key: \"addUser\",\n    value: function addUser(email_, passw_) {\n      var cryptpassw = Object(bcrypt__WEBPACK_IMPORTED_MODULE_1__[\"hashSync\"])(passw_, 8);\n      var data = new _models__WEBPACK_IMPORTED_MODULE_3__[\"UserData\"]({\n        passw: cryptpassw,\n        email: email_,\n        gustos: []\n      });\n      data.save().then(console.log(\"Ingresado con éxito\"));\n    }\n  }, {\n    key: \"existUser\",\n    value: function () {\n      var _existUser = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(email_) {\n        var user;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _models__WEBPACK_IMPORTED_MODULE_3__[\"UserData\"].findOne({\n                  email: email_\n                });\n\n              case 2:\n                user = _context2.sent;\n\n                if (!(user != null)) {\n                  _context2.next = 7;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", true);\n\n              case 7:\n                return _context2.abrupt(\"return\", false);\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function existUser(_x3) {\n        return _existUser.apply(this, arguments);\n      }\n\n      return existUser;\n    }()\n  }]);\n\n  return DbMongo;\n}(_domain_Db__WEBPACK_IMPORTED_MODULE_0__[\"Db\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DbMongo);\n\n//# sourceURL=webpack:///./src/infraestructure/DbMongo.js?");

/***/ }),

/***/ "./src/infraestructure/models.js":
/*!***************************************!*\
  !*** ./src/infraestructure/models.js ***!
  \***************************************/
/*! exports provided: LibroData, UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LibroData\", function() { return LibroData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserData\", function() { return UserData; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"];\nvar LibreriaSchema = new Schema({\n  nombre: String,\n  genero: Array,\n  autor: String,\n  fechaPublicacion: Date,\n  descripcion: String,\n  valoracion: Number,\n  url: String,\n  price: Number\n}, {\n  collection: \"BookData\"\n});\nvar LibroData = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])(\"BookData\", LibreriaSchema);\nvar UserSchema = new Schema({\n  gustos: Array,\n  email: String,\n  passw: String,\n  librosAdquiridos: Array,\n  nickName: String,\n  librosFavoritos: Array\n}, {\n  collection: \"UserData\"\n});\nvar UserData = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])(\"UserData\", UserSchema);\nObject(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(\"mongodb://localhost:27017/prueba\");\nObject(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"set\"])(\"useFindAndModify\", false);\n\n//# sourceURL=webpack:///./src/infraestructure/models.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });