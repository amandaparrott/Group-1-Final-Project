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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/db/cUsers.js":
/*!*********************************!*\
  !*** ./src/server/db/cUsers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/server/db/index.js\");\n\r\n\r\nconst all = async () => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"SELECT * FROM cUser JOIN pUser ON cUser.id = pUser.id;\");\r\n\r\nconst one = async (id) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"SELECT * FROM cUser JOIN pUser ON cUser.id = pUser.id WHERE cUser.id = ?;\", [id]);\r\n\r\nconst insert = (id, name, email, password, role, childid) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"INSERT INTO events (id, name, email, password, role, childid) VALUES (?, ?, ?, ?, ?, ?);\", [id, name, email, password, role, childid]);\r\n\r\n\r\n\r\nconst update = (id, name, email, password, role, childid) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(`\r\nUPDATE events\r\nSET \r\nid = ?, \r\nname = ?, \r\nemail = ?, \r\npassword = ?, \r\nrole = ?,\r\nchildid = ?\r\nWHERE events.id = ?`, [id, name, email, password, role, childid]);\r\n/* ? prevents users from creating their own auths */\r\n\r\nconst destroy = (id) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"DELETE FROM cUser WHERE cUser.id = ?;\", [id]);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    all,\r\n    one,\r\n    insert,\r\n    update,\r\n    destroy\r\n});\n\n//# sourceURL=webpack:///./src/server/db/cUsers.js?");

/***/ }),

/***/ "./src/server/db/category.js":
/*!***********************************!*\
  !*** ./src/server/db/category.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/server/db/index.js\");\n\r\n\r\nconst all = async () => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"SELECT * FROM category JOIN cUser ON category.id = events.id;\");\r\n\r\nconst one = async (id) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"SELECT * FROM category JOIN cUser ON category.id = cUser.id WHERE category.id = ?;\", [id]);\r\n\r\nconst insert = (id, name) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"INSERT INTO events (id, name) VALUES (?, ?);\", [id, name]);\r\n\r\nconst update = (id, name) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(`\r\nUPDATE events\r\nSET \r\nname = ?\r\nWHERE category.id = ?`, [id, name]);\r\n/* ? prevents users from creating their own auths */\r\n\r\nconst destroy = (id) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"DELETE FROM category WHERE category.id = ?;\", [id]);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    all,\r\n    one,\r\n    insert,\r\n    update,\r\n    destroy\r\n});\n\n//# sourceURL=webpack:///./src/server/db/category.js?");

/***/ }),

/***/ "./src/server/db/events.js":
/*!*********************************!*\
  !*** ./src/server/db/events.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/server/db/index.js\");\n\r\n\r\nconst all = async () => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"SELECT * FROM events JOIN pUser ON events.id = pUser.id;\");\r\n\r\nconst one = async (id) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"SELECT * FROM events JOIN pUser ON events.id = pUser.id WHERE events.id = ?;\", [id]);\r\n\r\nconst insert = (id, title, location, time, duedate, mandatorytask, completedtask, categoryid, childid) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"INSERT INTO events (id, title, location, time, duedate, mandatorytask, completedtask, categoryid) VALUES (?, ?, ?, ?, ?, ?, ?, ?);\", [id, title, location, time, duedate, mandatorytask, completedtask, categoryid, childid]);\r\n\r\n\r\n\r\nconst update = (id, title, location, time, duedate, mandatorytask, completedtask, categoryid, childid) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(`\r\nUPDATE events\r\nSET \r\ntitle = ?, \r\nlocation = ?, \r\ntime = ?, \r\nduedate = ?, \r\nmandatorytask = ?, \r\ncompletedtask = ?, \r\ncategoryid = ?,\r\nchildid = ?, \r\nWHERE events.id = ?`, [id, title, location, time, duedate, mandatorytask, completedtask, categoryid, childid]);\r\n/* ? prevents users from creating their own auths */\r\n\r\nconst destroy = (id) => Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"Query\"])(\"DELETE FROM events WHERE events.id = ?;\", [id]);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    all,\r\n    one,\r\n    insert,\r\n    update,\r\n    destroy\r\n});\n\n//# sourceURL=webpack:///./src/server/db/events.js?");

/***/ }),

/***/ "./src/server/db/index.js":
/*!********************************!*\
  !*** ./src/server/db/index.js ***!
  \********************************/
/*! exports provided: Connection, Query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Connection\", function() { return Connection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Query\", function() { return Query; });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/server/db/events.js\");\n/* harmony import */ var _cUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cUsers */ \"./src/server/db/cUsers.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ \"./src/server/db/category.js\");\n\r\n\r\n\r\n\r\n\r\nconst Connection = mysql__WEBPACK_IMPORTED_MODULE_0__[\"createConnection\"]({\r\n    host: \"localhost\",\r\n    port: 3306,\r\n    user: \"eventsapp\",\r\n    password: \"\",\r\n    database: \"\"\r\n});\r\n\r\nconst Query = (query, values) => {\r\n    return new ((resolve, reject) => {\r\n        Connection.query(query, values, (err, results) => {\r\n            if (err) return reject(err);\r\n            resolve(results);\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    Events: _events__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    cUsers: _cUsers__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    Category: _category__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n});\n\n//# sourceURL=webpack:///./src/server/db/index.js?");

/***/ }),

/***/ "./src/server/routes/events.js":
/*!*************************************!*\
  !*** ./src/server/routes/events.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db */ \"./src/server/db/index.js\");\n\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\r\n\r\nrouter.get(\"/\", async (req, res) => {\r\n    try {\r\n        const data = await _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Chirps.all();\r\n        res.json(data);\r\n    } catch (err) {\r\n        console.log(err);\r\n        res.status(500).send(err);\r\n    }\r\n});\r\n\r\nrouter.get(\"/:id\", async (req, res) => {\r\n    try {\r\n        const id = req.params.id;\r\n        const data = await _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Chirps.one(id);\r\n        res.send(data[0]);\r\n    } catch (err) {\r\n        console.log(err);\r\n        res.status(500).send(err);\r\n    }\r\n});\r\n\r\nrouter.post(\"/\", async (req, res) => {\r\n    try {\r\n        const newUserName = req.body.name;\r\n        const newChirpContent = req.body.content;\r\n\r\n        const newUser = await _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Users.insert(newUserName);\r\n        const newUserId = newUser.insertId;\r\n\r\n        const newChirp = await _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Chirps.insert(newUserId, newChirpContent);\r\n        res.status(200).send(`\r\n        user created with id: ${newUserId}\r\n        chirp created with id: ${newChirp.insertId}\r\n        `);\r\n    } catch (err) {\r\n        console.log(err);\r\n        res.status(500).send(err);\r\n    }\r\n});\r\n\r\nrouter.put(\"/:id\", async (req, res) => {\r\n    try {\r\n        const id = req.params.id;\r\n        const newChirpContent = req.body.content;\r\n\r\n        await _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Chirps.update(newChirpContent, id);\r\n    \r\n        res.status(200).send(`Updated chirp ${id}`)\r\n    } catch (err) {\r\n        console.log(err);\r\n        res.status(500).send(err);\r\n    }\r\n});\r\n\r\nrouter.delete(\"/:id\", async (req, res) => {\r\n    try {\r\n        const id = req.params.id;\r\n\r\n        await _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Mentions.destroy(id);\r\n        await _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Chirps.destroy(id);\r\n\r\n        res.send(`chirp ${id} was deleted`);\r\n    } catch (err) {\r\n        console.log(err);\r\n        res.status(500).send(err);\r\n    }\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/events.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/server/routes/events.js\");\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\r\n\r\nrouter.use(\"/events\", _events__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\r\nvar app = express();\r\napp.use(express.json());\r\napp.use(\"/api\", routes_1.default);\r\napp.use(express.static(\"public\"));\r\napp.get(\"*\", function (req, res) {\r\n    res.sendFile(path.join(__dirname, \"../public/index.html\"));\r\n});\r\napp.listen(3000, function () { return console.log(\"Server listening on port 3000\"); });\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });