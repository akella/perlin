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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = noise;\nfunction noise(x, y, z) {\n\n    var p = new Array(512);\n    var permutation = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];\n    for (var i = 0; i < 256; i++) {\n        p[256 + i] = p[i] = permutation[i];\n    }var X = Math.floor(x) & 255,\n        // FIND UNIT CUBE THAT\n    Y = Math.floor(y) & 255,\n        // CONTAINS POINT.\n    Z = Math.floor(z) & 255;\n    x -= Math.floor(x); // FIND RELATIVE X,Y,Z\n    y -= Math.floor(y); // OF POINT IN CUBE.\n    z -= Math.floor(z);\n    var u = fade(x),\n        // COMPUTE FADE CURVES\n    v = fade(y),\n        // FOR EACH OF X,Y,Z.\n    w = fade(z);\n    var A = p[X] + Y,\n        AA = p[A] + Z,\n        AB = p[A + 1] + Z,\n        // HASH COORDINATES OF\n    B = p[X + 1] + Y,\n        BA = p[B] + Z,\n        BB = p[B + 1] + Z; // THE 8 CUBE CORNERS,\n\n    return scale(lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z), // AND ADD\n    grad(p[BA], x - 1, y, z)), // BLENDED\n    lerp(u, grad(p[AB], x, y - 1, z), // RESULTS\n    grad(p[BB], x - 1, y - 1, z))), // FROM  8\n    lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1), // CORNERS\n    grad(p[BA + 1], x - 1, y, z - 1)), // OF CUBE\n    lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1)))));\n}\nfunction fade(t) {\n    return t * t * t * (t * (t * 6 - 15) + 10);\n}\nfunction lerp(t, a, b) {\n    return a + t * (b - a);\n}\nfunction grad(hash, x, y, z) {\n    var h = hash & 15; // CONVERT LO 4 BITS OF HASH CODE\n    var u = h < 8 ? x : y,\n        // INTO 12 GRADIENT DIRECTIONS.\n    v = h < 4 ? y : h == 12 || h == 14 ? x : z;\n    return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);\n}\nfunction scale(n) {\n    return (1 + n) / 2;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3Blcmxpbi5qcz9mZTNkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2lzZSh4LCB5LCB6KSB7XG5cbiAgIHZhciBwID0gbmV3IEFycmF5KDUxMilcbiAgIHZhciBwZXJtdXRhdGlvbiA9IFsgMTUxLDE2MCwxMzcsOTEsOTAsMTUsXG4gICAxMzEsMTMsMjAxLDk1LDk2LDUzLDE5NCwyMzMsNywyMjUsMTQwLDM2LDEwMywzMCw2OSwxNDIsOCw5OSwzNywyNDAsMjEsMTAsMjMsXG4gICAxOTAsIDYsMTQ4LDI0NywxMjAsMjM0LDc1LDAsMjYsMTk3LDYyLDk0LDI1MiwyMTksMjAzLDExNywzNSwxMSwzMiw1NywxNzcsMzMsXG4gICA4OCwyMzcsMTQ5LDU2LDg3LDE3NCwyMCwxMjUsMTM2LDE3MSwxNjgsIDY4LDE3NSw3NCwxNjUsNzEsMTM0LDEzOSw0OCwyNywxNjYsXG4gICA3NywxNDYsMTU4LDIzMSw4MywxMTEsMjI5LDEyMiw2MCwyMTEsMTMzLDIzMCwyMjAsMTA1LDkyLDQxLDU1LDQ2LDI0NSw0MCwyNDQsXG4gICAxMDIsMTQzLDU0LCA2NSwyNSw2MywxNjEsIDEsMjE2LDgwLDczLDIwOSw3NiwxMzIsMTg3LDIwOCwgODksMTgsMTY5LDIwMCwxOTYsXG4gICAxMzUsMTMwLDExNiwxODgsMTU5LDg2LDE2NCwxMDAsMTA5LDE5OCwxNzMsMTg2LCAzLDY0LDUyLDIxNywyMjYsMjUwLDEyNCwxMjMsXG4gICA1LDIwMiwzOCwxNDcsMTE4LDEyNiwyNTUsODIsODUsMjEyLDIwNywyMDYsNTksMjI3LDQ3LDE2LDU4LDE3LDE4MiwxODksMjgsNDIsXG4gICAyMjMsMTgzLDE3MCwyMTMsMTE5LDI0OCwxNTIsIDIsNDQsMTU0LDE2MywgNzAsMjIxLDE1MywxMDEsMTU1LDE2NywgNDMsMTcyLDksXG4gICAxMjksMjIsMzksMjUzLCAxOSw5OCwxMDgsMTEwLDc5LDExMywyMjQsMjMyLDE3OCwxODUsIDExMiwxMDQsMjE4LDI0Niw5NywyMjgsXG4gICAyNTEsMzQsMjQyLDE5MywyMzgsMjEwLDE0NCwxMiwxOTEsMTc5LDE2MiwyNDEsIDgxLDUxLDE0NSwyMzUsMjQ5LDE0LDIzOSwxMDcsXG4gICA0OSwxOTIsMjE0LCAzMSwxODEsMTk5LDEwNiwxNTcsMTg0LCA4NCwyMDQsMTc2LDExNSwxMjEsNTAsNDUsMTI3LCA0LDE1MCwyNTQsXG4gICAxMzgsMjM2LDIwNSw5MywyMjIsMTE0LDY3LDI5LDI0LDcyLDI0MywxNDEsMTI4LDE5NSw3OCw2NiwyMTUsNjEsMTU2LDE4MFxuICAgXTtcbiAgIGZvciAodmFyIGk9MDsgaSA8IDI1NiA7IGkrKykgXG4gcFsyNTYraV0gPSBwW2ldID0gcGVybXV0YXRpb25baV07IFxuXG4gICAgICB2YXIgWCA9IE1hdGguZmxvb3IoeCkgJiAyNTUsICAgICAgICAgICAgICAgICAgLy8gRklORCBVTklUIENVQkUgVEhBVFxuICAgICAgICAgIFkgPSBNYXRoLmZsb29yKHkpICYgMjU1LCAgICAgICAgICAgICAgICAgIC8vIENPTlRBSU5TIFBPSU5ULlxuICAgICAgICAgIFogPSBNYXRoLmZsb29yKHopICYgMjU1O1xuICAgICAgeCAtPSBNYXRoLmZsb29yKHgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRklORCBSRUxBVElWRSBYLFksWlxuICAgICAgeSAtPSBNYXRoLmZsb29yKHkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT0YgUE9JTlQgSU4gQ1VCRS5cbiAgICAgIHogLT0gTWF0aC5mbG9vcih6KTtcbiAgICAgIHZhciAgICB1ID0gZmFkZSh4KSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENPTVBVVEUgRkFERSBDVVJWRVNcbiAgICAgICAgICAgICB2ID0gZmFkZSh5KSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZPUiBFQUNIIE9GIFgsWSxaLlxuICAgICAgICAgICAgIHcgPSBmYWRlKHopO1xuICAgICAgdmFyIEEgPSBwW1ggIF0rWSwgQUEgPSBwW0FdK1osIEFCID0gcFtBKzFdK1osICAgICAgLy8gSEFTSCBDT09SRElOQVRFUyBPRlxuICAgICAgICAgIEIgPSBwW1grMV0rWSwgQkEgPSBwW0JdK1osIEJCID0gcFtCKzFdK1o7ICAgICAgLy8gVEhFIDggQ1VCRSBDT1JORVJTLFxuXG4gICAgICByZXR1cm4gc2NhbGUobGVycCh3LCBsZXJwKHYsIGxlcnAodSwgZ3JhZChwW0FBICBdLCB4ICAsIHkgICwgeiAgICksICAvLyBBTkQgQUREXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZChwW0JBICBdLCB4LTEsIHkgICwgeiAgICkpLCAvLyBCTEVOREVEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlcnAodSwgZ3JhZChwW0FCICBdLCB4ICAsIHktMSwgeiAgICksICAvLyBSRVNVTFRTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZChwW0JCICBdLCB4LTEsIHktMSwgeiAgICkpKSwvLyBGUk9NICA4XG4gICAgICAgICAgICAgICAgICAgICBsZXJwKHYsIGxlcnAodSwgZ3JhZChwW0FBKzFdLCB4ICAsIHkgICwgei0xICksICAvLyBDT1JORVJTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZChwW0JBKzFdLCB4LTEsIHkgICwgei0xICkpLCAvLyBPRiBDVUJFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlcnAodSwgZ3JhZChwW0FCKzFdLCB4ICAsIHktMSwgei0xICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZChwW0JCKzFdLCB4LTEsIHktMSwgei0xICkpKSkpO1xuICAgfVxuICAgZnVuY3Rpb24gZmFkZSh0KSB7IHJldHVybiB0ICogdCAqIHQgKiAodCAqICh0ICogNiAtIDE1KSArIDEwKTsgfVxuICAgZnVuY3Rpb24gbGVycCggdCwgYSwgYikgeyByZXR1cm4gYSArIHQgKiAoYiAtIGEpOyB9XG4gICBmdW5jdGlvbiBncmFkKGhhc2gsIHgsIHksIHopIHtcbiAgICAgIHZhciBoID0gaGFzaCAmIDE1OyAgICAgICAgICAgICAgICAgICAgICAvLyBDT05WRVJUIExPIDQgQklUUyBPRiBIQVNIIENPREVcbiAgICAgIHZhciB1ID0gaDw4ID8geCA6IHksICAgICAgICAgICAgICAgICAvLyBJTlRPIDEyIEdSQURJRU5UIERJUkVDVElPTlMuXG4gICAgICAgICAgICAgdiA9IGg8NCA/IHkgOiBoPT0xMnx8aD09MTQgPyB4IDogejtcbiAgICAgIHJldHVybiAoKGgmMSkgPT0gMCA/IHUgOiAtdSkgKyAoKGgmMikgPT0gMCA/IHYgOiAtdik7XG4gICB9IFxuICAgZnVuY3Rpb24gc2NhbGUobikgeyByZXR1cm4gKDEgKyBuKS8yOyB9XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGliL3Blcmxpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _perlin = __webpack_require__(0);\n\nvar _perlin2 = _interopRequireDefault(_perlin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar size = 600;\nvar canvas = document.createElement('canvas');\nvar ctx = canvas.getContext('2d');\ncanvas.width = size;\ncanvas.height = size;\nvar number = 100;\nvar radius = 100;\nvar x = void 0,\n    y = void 0;\ndocument.body.appendChild(canvas);\n\nfunction draw() {\n\tctx.clearRect(0, 0, size, size);\n\n\t// ctx.fillRect(0,0, 100,100);\n\n\n\tfor (var j = 0; j < 50; j++) {\n\t\tctx.beginPath();\n\t\tfor (var i = 0; i < 30; i++) {\n\t\t\tctx.lineTo(i * 20, j * 10 + 100 * (0, _perlin2.default)(100 * i / size, j / 10, time / 100));\n\t\t}\n\t\tctx.stroke();\n\t}\n}\nvar time = 0;\nfunction render() {\n\tdraw();\n\ttime++;\n\twindow.requestAnimationFrame(render);\n}\n\nrender();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBlcmxpbiBmcm9tICcuL2xpYi9wZXJsaW4nO1xuXG5cblxuXG5sZXQgc2l6ZSA9IDYwMDtcbmxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IHNpemU7XG5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbmxldCBudW1iZXIgPSAxMDA7XG5sZXQgcmFkaXVzID0gMTAwO1xubGV0IHgseTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuXG5mdW5jdGlvbiBkcmF3KCl7XG5cdGN0eC5jbGVhclJlY3QoMCwwLHNpemUsc2l6ZSk7XG5cdFxuXHQvLyBjdHguZmlsbFJlY3QoMCwwLCAxMDAsMTAwKTtcblx0XG5cblxuXHRmb3IgKHZhciBqID0gMDsgaiA8IDUwOyBqKyspIHtcblx0XHRjdHguYmVnaW5QYXRoKClcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDMwOyBpKyspIHtcblx0XHRcdGN0eC5saW5lVG8oaSoyMCxqKjEwICsgMTAwKlBlcmxpbigxMDAqaS9zaXplLGovMTAsdGltZS8xMDApKTtcblx0XHR9XG5cdFx0Y3R4LnN0cm9rZSgpO1xuXHR9XG5cbn1cbmxldCB0aW1lID0gMDtcbmZ1bmN0aW9uIHJlbmRlcigpe1xuXHRkcmF3KCk7XG5cdHRpbWUrKztcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xufVxuXHRcbnJlbmRlcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);