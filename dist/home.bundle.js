"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeDisplay)
/* harmony export */ });
function homeDisplay() {
  // create child body element and its children
  const childBody = document.createElement('div');
  childBody.classList.add('child', 'body', 'active');
  const content1 = document.createElement('div');
  content1.classList.add('content', 'picture');
  content1.textContent = '';
  const content2 = document.createElement('div');
  content2.classList.add('content', 'picture2');
  content2.textContent = '';
  const content3 = document.createElement('div');
  content3.classList.add('content', 'text');
  content3.innerHTML = '<p>Where Nature -<br><span>Brings the Beauty</span> <br>Est. 1999</p>';
  const content4 = document.createElement('div');
  content4.classList.add('content', 'text-rights');
  content4.textContent = '2023 All Rights Reserved';
  const content5 = document.createElement('div');
  content5.classList.add('content', 'text-quote');
  content5.textContent = 'and then a marble vase, a mystic flower, a star to fall in love with...';
  const content6 = document.createElement('div');
  content6.classList.add('content', 'text-button');
  content6.innerHTML = '<button>Unearth</button>';
  const textParent = document.createElement('div');
  textParent.classList.add('text-parent');
  const imageParent = document.createElement('div');
  imageParent.classList.add('image-parent');
  // append text div's to images
  imageParent.append(content1, content2);
  // append text div's to parentText
  textParent.append(content3, content4, content6, content5);
  // append content elements to child body
  childBody.append(imageParent, textParent);
  return childBody;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZURpc3BsYXkoKSB7XG4gIC8vIGNyZWF0ZSBjaGlsZCBib2R5IGVsZW1lbnQgYW5kIGl0cyBjaGlsZHJlblxuICBjb25zdCBjaGlsZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hpbGRCb2R5LmNsYXNzTGlzdC5hZGQoJ2NoaWxkJywgJ2JvZHknLCAnYWN0aXZlJyk7XG4gIGNvbnN0IGNvbnRlbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQxLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnLCAncGljdHVyZScpO1xuICBjb250ZW50MS50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBjb250ZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Mi5jbGFzc0xpc3QuYWRkKCdjb250ZW50JywgJ3BpY3R1cmUyJyk7XG4gIGNvbnRlbnQyLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNvbnRlbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQzLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnLCAndGV4dCcpO1xuICBjb250ZW50My5pbm5lckhUTUwgPSAnPHA+V2hlcmUgTmF0dXJlIC08YnI+PHNwYW4+QnJpbmdzIHRoZSBCZWF1dHk8L3NwYW4+IDxicj5Fc3QuIDE5OTk8L3A+JztcbiAgY29uc3QgY29udGVudDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudDQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcsICd0ZXh0LXJpZ2h0cycpO1xuICBjb250ZW50NC50ZXh0Q29udGVudCA9ICcyMDIzIEFsbCBSaWdodHMgUmVzZXJ2ZWQnO1xuICBjb25zdCBjb250ZW50NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50NS5jbGFzc0xpc3QuYWRkKCdjb250ZW50JywgJ3RleHQtcXVvdGUnKTtcbiAgY29udGVudDUudGV4dENvbnRlbnQgPSAnYW5kIHRoZW4gYSBtYXJibGUgdmFzZSwgYSBteXN0aWMgZmxvd2VyLCBhIHN0YXIgdG8gZmFsbCBpbiBsb3ZlIHdpdGguLi4nO1xuICBjb25zdCBjb250ZW50NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Ni5jbGFzc0xpc3QuYWRkKCdjb250ZW50JywgJ3RleHQtYnV0dG9uJyk7XG4gIGNvbnRlbnQ2LmlubmVySFRNTCA9ICc8YnV0dG9uPlVuZWFydGg8L2J1dHRvbj4nO1xuICBjb25zdCB0ZXh0UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHRQYXJlbnQuY2xhc3NMaXN0LmFkZCgndGV4dC1wYXJlbnQnKTtcbiAgY29uc3QgaW1hZ2VQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VQYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtcGFyZW50Jyk7XG4gIC8vIGFwcGVuZCB0ZXh0IGRpdidzIHRvIGltYWdlc1xuICBpbWFnZVBhcmVudC5hcHBlbmQoY29udGVudDEsIGNvbnRlbnQyKTtcbiAgLy8gYXBwZW5kIHRleHQgZGl2J3MgdG8gcGFyZW50VGV4dFxuICB0ZXh0UGFyZW50LmFwcGVuZChjb250ZW50MywgY29udGVudDQsIGNvbnRlbnQ2LCBjb250ZW50NSk7XG4gIC8vIGFwcGVuZCBjb250ZW50IGVsZW1lbnRzIHRvIGNoaWxkIGJvZHlcbiAgY2hpbGRCb2R5LmFwcGVuZChpbWFnZVBhcmVudCwgdGV4dFBhcmVudCk7XG4gIHJldHVybiBjaGlsZEJvZHk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=