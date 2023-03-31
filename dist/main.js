/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data.js */ \"./src/scripts/data.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  window.test = (0,_scripts_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)();\n  // window.test = function(){ console.log('hello')}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEM7QUFFNUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREMsTUFBTSxDQUFDQyxJQUFJLEdBQUdKLDJEQUFTLEVBQUU7RUFDekI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19taWdyYXRpb25fcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmV0Y2hEYXRhfSBmcm9tIFwiLi9zY3JpcHRzL2RhdGEuanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHdpbmRvdy50ZXN0ID0gZmV0Y2hEYXRhKClcbiAgICAvLyB3aW5kb3cudGVzdCA9IGZ1bmN0aW9uKCl7IGNvbnNvbGUubG9nKCdoZWxsbycpfVxufSk7Il0sIm5hbWVzIjpbImZldGNoRGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doSomething\": function() { return /* binding */ doSomething; },\n/* harmony export */   \"fetchData\": function() { return /* binding */ fetchData; }\n/* harmony export */ });\n// export default async function getData(){\n//     const finalData = [];\n\n//     const stateNum = \"06\" //this will be change as state changed currently set as California\n//     const censusUrl = `https://api.census.gov/data/2020/acs/flows?get=FULL1_NAME,FULL2_NAME,MOVEDNET&for=county:*&in=state:${stateNum}`\n//     try{\n//         let res = await fetch(censusUrl,{\n//             headers: { 'Accept':'application/json' }\n//         });\n//         if (res.ok){\n//             let data = await res.json();\n//             console.log(data)\n//         }else{\n//             throw new Error(res);\n//         }\n//     }catch (err){\n//         console.error(err);\n//     }\n// };\nconst fetchData = async e => {\n  const censusUrl = `https://api.census.gov/data/2020/acs/flows?get=FULL1_NAME,FULL2_NAME,MOVEDNET&for=county:*&in=state:06`;\n  // e.preventDefault();\n  try {\n    let res = await fetch(censusUrl, {\n      headers: {\n        'Accept': 'application/json'\n      }\n    });\n    if (res.ok) {\n      let data = await res.json();\n      const currentStateArray = data[1][0].split(\", \");\n      const currentState = currentStateArray[currentStateArray.length - 1];\n      const migrationCount = {};\n      console.log(data[5]);\n      data.slice(1).forEach(ele => {\n        const migrateStateArray = ele[1].split(\", \");\n        let migrateDes = migrateStateArray[migrateStateArray.length - 1];\n        // console.log(migrateDes);\n        // if (migrateDes === currentState){\n        //     migrateDes = ele[1]\n        // }\n        if (!ele[2]) {\n          ele[2] = 0;\n        }\n        if (!migrationCount[[ele[0], migrateDes]]) {\n          migrationCount[[ele[0], migrateDes]] = 0;\n        }\n        migrationCount[[ele[0], migrateDes]] += parseInt(ele[2]);\n      });\n      console.log(migrationCount, \"mC\");\n      console.log(Array.isArray(data[1]));\n    } else {\n      throw new Error(res);\n    }\n  } catch (err) {\n    console.error(err);\n  }\n};\nconst doSomething = () => {\n  console.log('hello');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLE1BQU1BLFNBQVMsR0FBRyxNQUFPQyxDQUFDLElBQUs7RUFDbEMsTUFBTUMsU0FBUyxHQUFJLHdHQUF1RztFQUMxSDtFQUNBLElBQUc7SUFDQyxJQUFJQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixTQUFTLEVBQUM7TUFDNUJHLE9BQU8sRUFBRTtRQUFFLFFBQVEsRUFBQztNQUFtQjtJQUMzQyxDQUFDLENBQUM7SUFDRixJQUFJRixHQUFHLENBQUNHLEVBQUUsRUFBQztNQUNQLElBQUlDLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUksRUFBRTtNQUUzQixNQUFNQyxpQkFBaUIsR0FBR0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxLQUFLLENBQUMsSUFBSSxDQUFDO01BQ2hELE1BQU1DLFlBQVksR0FBSUYsaUJBQWlCLENBQUNBLGlCQUFpQixDQUFDRyxNQUFNLEdBQUMsQ0FBQyxDQUFFO01BQ3BFLE1BQU1DLGNBQWMsR0FBRyxDQUFDLENBQUM7TUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEJBLElBQUksQ0FBQ1MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsSUFBRztRQUV4QixNQUFNQyxpQkFBaUIsR0FBR0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDUixLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUlVLFVBQVUsR0FBSUQsaUJBQWlCLENBQUNBLGlCQUFpQixDQUFDUCxNQUFNLEdBQUcsQ0FBQyxDQUFFO1FBQ2xFO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSSxDQUFDTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUM7VUFDUkEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZDtRQUNBLElBQUksQ0FBQ0wsY0FBYyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRUUsVUFBVSxDQUFDLENBQUMsRUFBRTtVQUN2Q1AsY0FBYyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzVDO1FBQ0FQLGNBQWMsQ0FBQyxDQUFDSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUVFLFVBQVUsQ0FBQyxDQUFDLElBQUlDLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzVELENBQUMsQ0FBQztNQUtGSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsY0FBYyxFQUFFLElBQUksQ0FBQztNQU9qQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNPLEtBQUssQ0FBQ0MsT0FBTyxDQUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxNQUFJO01BQ0QsTUFBTSxJQUFJaUIsS0FBSyxDQUFDckIsR0FBRyxDQUFDO0lBQ3hCO0VBQ0osQ0FBQyxRQUFPc0IsR0FBRyxFQUFDO0lBQ1JYLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDRCxHQUFHLENBQUM7RUFDdEI7QUFDSixDQUFDO0FBRU0sTUFBTUUsV0FBVyxHQUFHQSxDQUFBLEtBQUs7RUFDNUJiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfbWlncmF0aW9uX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9kYXRhLmpzP2ZiZDEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCl7XG4vLyAgICAgY29uc3QgZmluYWxEYXRhID0gW107XG5cbi8vICAgICBjb25zdCBzdGF0ZU51bSA9IFwiMDZcIiAvL3RoaXMgd2lsbCBiZSBjaGFuZ2UgYXMgc3RhdGUgY2hhbmdlZCBjdXJyZW50bHkgc2V0IGFzIENhbGlmb3JuaWFcbi8vICAgICBjb25zdCBjZW5zdXNVcmwgPSBgaHR0cHM6Ly9hcGkuY2Vuc3VzLmdvdi9kYXRhLzIwMjAvYWNzL2Zsb3dzP2dldD1GVUxMMV9OQU1FLEZVTEwyX05BTUUsTU9WRURORVQmZm9yPWNvdW50eToqJmluPXN0YXRlOiR7c3RhdGVOdW19YFxuLy8gICAgIHRyeXtcbi8vICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGNlbnN1c1VybCx7XG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBY2NlcHQnOidhcHBsaWNhdGlvbi9qc29uJyB9XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICBpZiAocmVzLm9rKXtcbi8vICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4vLyAgICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlcyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9Y2F0Y2ggKGVycil7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbi8vICAgICB9XG4vLyB9O1xuZXhwb3J0IGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgY2Vuc3VzVXJsID0gYGh0dHBzOi8vYXBpLmNlbnN1cy5nb3YvZGF0YS8yMDIwL2Fjcy9mbG93cz9nZXQ9RlVMTDFfTkFNRSxGVUxMMl9OQU1FLE1PVkVETkVUJmZvcj1jb3VudHk6KiZpbj1zdGF0ZTowNmBcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goY2Vuc3VzVXJsLHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0FjY2VwdCc6J2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXMub2spe1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGVBcnJheSA9IGRhdGFbMV1bMF0uc3BsaXQoXCIsIFwiKVxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gKGN1cnJlbnRTdGF0ZUFycmF5W2N1cnJlbnRTdGF0ZUFycmF5Lmxlbmd0aC0xXSlcbiAgICAgICAgICAgIGNvbnN0IG1pZ3JhdGlvbkNvdW50ID0ge31cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbNV0pXG4gICAgICAgICAgICBkYXRhLnNsaWNlKDEpLmZvckVhY2goZWxlID0+e1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG1pZ3JhdGVTdGF0ZUFycmF5ID0gZWxlWzFdLnNwbGl0KFwiLCBcIilcbiAgICAgICAgICAgICAgICBsZXQgbWlncmF0ZURlcyA9IChtaWdyYXRlU3RhdGVBcnJheVttaWdyYXRlU3RhdGVBcnJheS5sZW5ndGggLSAxXSlcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtaWdyYXRlRGVzKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAobWlncmF0ZURlcyA9PT0gY3VycmVudFN0YXRlKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgbWlncmF0ZURlcyA9IGVsZVsxXVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVsZVsyXSl7XG4gICAgICAgICAgICAgICAgICAgIGVsZVsyXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghbWlncmF0aW9uQ291bnRbW2VsZVswXSwgbWlncmF0ZURlc11dKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pZ3JhdGlvbkNvdW50W1tlbGVbMF0sIG1pZ3JhdGVEZXNdXSA9IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWlncmF0aW9uQ291bnRbW2VsZVswXSwgbWlncmF0ZURlc11dICs9IHBhcnNlSW50KGVsZVsyXSk7XG4gICAgICAgICAgICB9KVxuXG5cblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtaWdyYXRpb25Db3VudCwgXCJtQ1wiKTtcblxuXG5cblxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoZGF0YVsxXSkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXMpO1xuICAgICAgICB9XG4gICAgfWNhdGNoIChlcnIpe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZG9Tb21ldGhpbmcgPSAoKSA9PntcbiAgICBjb25zb2xlLmxvZygnaGVsbG8nKVxufSJdLCJuYW1lcyI6WyJmZXRjaERhdGEiLCJlIiwiY2Vuc3VzVXJsIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwib2siLCJkYXRhIiwianNvbiIsImN1cnJlbnRTdGF0ZUFycmF5Iiwic3BsaXQiLCJjdXJyZW50U3RhdGUiLCJsZW5ndGgiLCJtaWdyYXRpb25Db3VudCIsImNvbnNvbGUiLCJsb2ciLCJzbGljZSIsImZvckVhY2giLCJlbGUiLCJtaWdyYXRlU3RhdGVBcnJheSIsIm1pZ3JhdGVEZXMiLCJwYXJzZUludCIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwiZXJyIiwiZXJyb3IiLCJkb1NvbWV0aGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/data.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19taWdyYXRpb25fcHJvamVjdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;