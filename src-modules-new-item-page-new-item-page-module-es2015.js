(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-modules-new-item-page-new-item-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/products/new-item-page/new-item-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/products/new-item-page/new-item-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"container_form\" [formGroup]=\"newItemForm\">\n    <div class=\"container_form_head\">\n      <h2>New Item</h2>\n      <button type=\"button\" class=\"btn dark\" routerLink=\"//products\">\n        Back\n      </button>\n    </div>\n    <div class=\"container_form_upper\">\n      <div class=\"container_form_right\">\n        <div class=\"container_form__item\">\n          Name:\n          <input formControlName=\"name\" type=\"text\" placeholder=\"Name\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('name')\n            }\" />\n        </div>\n        <div class=\"container_form__item\">\n          Brand name:\n          <input formControlName=\"brandName\" type=\"text\" placeholder=\"Brand name\" class=\"container_form__item-control\"\n            [ngClass]=\"{\n              'red-border': isFieldValid('brandName')\n            }\" />\n        </div>\n        <div class=\"container_form__item\">\n          Price:\n          <input formControlName=\"price\" type=\"number\" placeholder=\"Price\" class=\"container_form__item-control\"\n            [ngClass]=\"{\n              'red-border': isFieldValid('price')\n            }\" />\n        </div>\n        <div class=\"container_form__item\">\n          Cloth:\n          <select formControlName=\"cloth\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('cloth')\n            }\">\n            <option value=\"cotton\">Cotton</option>\n            <option value=\"wool\">Wool</option>\n            <option value=\"silk\">Silk</option>\n            <option value=\"synthetic\">Synthetic</option>\n          </select>\n          <br />\n        </div>\n      </div>\n      <div class=\"container_form_left\">\n        <div class=\"container_form__item\">\n          Available sizes:\n          <select multiple formControlName=\"sizes\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('sizes')\n            }\" size=\"3\">\n            <option value=\"XS\">XS</option>\n            <option value=\"S\">S</option>\n            <option value=\"M\">M</option>\n            <option value=\"L\">L</option>\n            <option value=\"XL\">XL</option>\n          </select>\n        </div>\n        <div class=\"container_form__item\">\n          Available colors:\n          <select multiple formControlName=\"colors\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('colors')\n            }\" size=\"2\">\n            <option value=\"White\">White</option>\n            <option value=\"Green\">Green</option>\n            <option value=\"Yellow\">Yellow</option>\n            <option value=\"Gray\">Gray</option>\n          </select>\n        </div>\n        <div class=\"container_form__item\">\n          Description:\n          <textarea formControlName=\"description\" class=\"container_form__item-control\" [ngClass]=\"{\n              'red-border': isFieldValid('description')\n            }\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"container_form_footer\">\n      <div>\n        Please load images: <br />\n        <input formControlName=\"img\" type=\"file\" class=\"container_form__item-control\" style=\"line-height: 0.5;\"\n          value=\"Choose file\" [ngClass]=\"{\n            'red-border': isFieldValid('img')\n          }\" />\n      </div>\n      <div>\n        <p>OR</p>\n      </div>\n      <div>\n        Set link for picture\n        <input formControlName=\"img\" type=\"text\" class=\"container_form__item-control\" [ngClass]=\"{\n            'red-border': isFieldValid('img')\n          }\" />\n      </div>\n    </div>\n    <div style=\"display: flex; justify-content: flex-end\">\n      <button (click)=\"addItem()\" type=\"button\" class=\"btn success\" [disabled]=\"newItemForm.invalid\">\n        Save\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/modules/new-item-page/new-item-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/new-item-page/new-item-page.module.ts ***!
  \***********************************************************/
/*! exports provided: NewItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageModule", function() { return NewItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_pages_products_new_item_page_new_item_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/products/new-item-page/new-item-page.component */ "./src/pages/products/new-item-page/new-item-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: src_pages_products_new_item_page_new_item_page_component__WEBPACK_IMPORTED_MODULE_3__["NewItemPageComponent"],
    },
];
let NewItemPageModule = class NewItemPageModule {
};
NewItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_pages_products_new_item_page_new_item_page_component__WEBPACK_IMPORTED_MODULE_3__["NewItemPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
        exports: [src_pages_products_new_item_page_new_item_page_component__WEBPACK_IMPORTED_MODULE_3__["NewItemPageComponent"]],
        providers: [],
    })
], NewItemPageModule);



/***/ }),

/***/ "./src/pages/products/new-item-page/new-item-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/products/new-item-page/new-item-page.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  padding: 0 3vw;\n}\n.container_form {\n  width: 100%;\n  height: 60vh;\n}\n.container_form_upper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.container_form_right, .container_form_left {\n  width: 35vw;\n}\n.container_form_head {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.container_form_footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.container_form_footer div {\n  width: 20vw;\n}\n.container_form_footer div p {\n  padding: 4vh 9vw;\n  font-size: 20px;\n}\n.container_form__item {\n  margin-bottom: 1rem;\n}\n.container_form__item-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: white;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.container_form textarea {\n  resize: none;\n  height: 64.5px;\n}\n.container_form p {\n  display: block;\n}\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  margin-top: 0.25rem;\n}\n.btn:disabled {\n  opacity: 0.5;\n}\n.success {\n  color: #28a745;\n  border-color: #28a745;\n}\n.success:hover {\n  color: white;\n  background-color: #28a745;\n  cursor: pointer;\n}\n.success:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n  outline: none;\n}\n.dark {\n  color: #343a40;\n  border-color: #343a40;\n}\n.dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  cursor: pointer;\n}\n.dark:focus {\n  outline: none;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.red-border {\n  border-left: 7px solid #bd3939;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wcm9kdWN0cy9uZXctaXRlbS1wYWdlL0Q6XFxJbmNvcmFcXEZhc2hpb25TdG9yZVxcRmFzaGlvblN0b3JlL3NyY1xccGFnZXNcXHByb2R1Y3RzXFxuZXctaXRlbS1wYWdlXFxuZXctaXRlbS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL3Byb2R1Y3RzL25ldy1pdGVtLXBhZ2UvbmV3LWl0ZW0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wcm9kdWN0cy9uZXctaXRlbS1wYWdlL0Q6XFxJbmNvcmFcXEZhc2hpb25TdG9yZVxcRmFzaGlvblN0b3JlL3NyY1xcc3R5bGVzXFxjb2xvcnNcXGNvbG9ycy5zY3NzIiwic3JjL3BhZ2VzL3Byb2R1Y3RzL25ldy1pdGVtLXBhZ2UvRDpcXEluY29yYVxcRmFzaGlvblN0b3JlXFxGYXNoaW9uU3RvcmUvc3JjXFxzdHlsZXNcXGNvbW1vblxcY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNGRjtBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGSjtBRElJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0ZOO0FES0k7RUFFRSxXQUFBO0FDSk47QURPSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNMTjtBRFFJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ05OO0FEUU07RUFDRSxXQUFBO0FDTlI7QURRUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ05WO0FEV0k7RUFDRSxtQkFBQTtBQ1ROO0FEV007RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRWZjO0VGZ0JkLHVCRW5EQTtFRm9EQSw0QkFBQTtFQUNBLHlCRWpCYztFRmtCZCxzQkFBQTtFQUNBLGdGQUFBO0VBQUEsd0VBQUE7QUNWUjtBRGNJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNaTjtBRGVJO0VBQ0UsY0FBQTtBQ2JOO0FEa0JBO0VHdkVFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2SUFBQTtFQUFBLHFJQUFBO0VIMERBLG1CQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7QUNBSjtBRElBO0VFckJFLGNBQUE7RUFDQSxxQkFBQTtBRHFCRjtBQ25CRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURxQko7QUNsQkU7RUFDRSwrQ0FBQTtFQUNBLGFBQUE7QURvQko7QUROQTtFRTFDRSxjQUFBO0VBQ0EscUJBQUE7QURvREY7QUNsREU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FEb0RKO0FDaERFO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0FEa0RKO0FEaEJBO0VBQ0UsOEJBQUE7QUNtQkYiLCJmaWxlIjoic3JjL3BhZ2VzL3Byb2R1Y3RzL25ldy1pdGVtLXBhZ2UvbmV3LWl0ZW0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3NyYy9zdHlsZXMvY29tbW9uL2NvbW1vbi5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL3NyYy9zdHlsZXMvY29sb3JzL2NvbG9ycy5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAzdnc7XHJcblxyXG4gICZfZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjB2aDtcclxuXHJcbiAgICAmX3VwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICZfcmlnaHQsXHJcbiAgICAmX2xlZnQge1xyXG4gICAgICB3aWR0aDogMzV2dztcclxuICAgIH1cclxuXHJcbiAgICAmX2hlYWQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgJl9mb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAyMHZ3O1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDR2aCA5dnc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAmLWNvbnRyb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XHJcbiAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAkYXV0aF9jaGVja2JveF9jb2xvcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6ICRhdXRoX2NoZWNrYm94X2JvcmRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICBoZWlnaHQ6IDY0LjVweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICBAaW5jbHVkZSBidG47XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VjY2VzcyB7XHJcbiAgQGluY2x1ZGUgc3VjY2VzcztcclxufVxyXG5cclxuLmRhcmsge1xyXG4gIEBpbmNsdWRlIGRhcms7XHJcbn1cclxuXHJcbi5yZWQtYm9yZGVyIHtcclxuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICRhY2NvdW50LXNldHRpbmdzX3JlZC1ib3JkZXI7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgM3Z3O1xufVxuLmNvbnRhaW5lcl9mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjB2aDtcbn1cbi5jb250YWluZXJfZm9ybV91cHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250YWluZXJfZm9ybV9yaWdodCwgLmNvbnRhaW5lcl9mb3JtX2xlZnQge1xuICB3aWR0aDogMzV2dztcbn1cbi5jb250YWluZXJfZm9ybV9oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbnRhaW5lcl9mb3JtX2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250YWluZXJfZm9ybV9mb290ZXIgZGl2IHtcbiAgd2lkdGg6IDIwdnc7XG59XG4uY29udGFpbmVyX2Zvcm1fZm9vdGVyIGRpdiBwIHtcbiAgcGFkZGluZzogNHZoIDl2dztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lcl9mb3JtX19pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jb250YWluZXJfZm9ybV9faXRlbS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLmNvbnRhaW5lcl9mb3JtIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IDY0LjVweDtcbn1cbi5jb250YWluZXJfZm9ybSBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuLmJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xufVxuLnN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdWNjZXNzOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuNSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kYXJrIHtcbiAgY29sb3I6ICMzNDNhNDA7XG4gIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcbn1cbi5kYXJrOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kYXJrOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTIsIDU4LCA2NCwgMC41KTtcbn1cblxuLnJlZC1ib3JkZXIge1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNiZDM5Mzk7XG59IiwiLy8gbWFpbiBjb2xvcnNcclxuJGdyZXktYmx1ZTogcmdiKDMxLCAzNCwgNDMpO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZ3JleTogZ3JleTtcclxuJGFsaWNlYmx1ZTogYWxpY2VibHVlO1xyXG5cclxuLy8gYWNjb3VudC1zZXR0aW5nc1xyXG5cclxuJGFjY291bnQtc2V0dGluZ3NfY29udGVudDogIzQ4NTA1NztcclxuJGFjY291bnQtc2V0dGluZ3NfcmVkLWJvcmRlcjogI2JkMzkzOTtcclxuJGFjY291bnQtc2V0dGluZ3NfZW1haWwtc3ZnOiAjZTllY2VmO1xyXG4kYWNjb3VudC1zZXR0aW5nc19yZWQtY29sb3I6ICNhZjM0MzQ7XHJcbiRhY2NvdW50LXNldHRpbmdzX2J1dHRvbi1iYzogIzMxNmJmZjtcclxuJGFjY291bnQtc2V0dGluZ3NfYnV0dG9uLWNvbG9yOiAjZmZmZjtcclxuJGFjY291bnQtc2V0dGluZ3NfYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuXHJcbi8vIG1vZGFsXHJcblxyXG4kbW9kYWxfaGVhZGVyLWJjOiAjNDk0YWZkO1xyXG4kbW9kYWxfaGVhZGVyLWNvbG9yOmFsaWNlYmx1ZTtcclxuJG1vZGFsX2hvdmVyLWJjOiNmOGY5ZmE7XHJcbiRtb2RhbF9ob3Zlci1jb2xvcjojNmI3YWZjO1xyXG5cclxuLy8gcHJvZHVjdC1pdGVtXHJcbiRwcm9kdWN0LWl0ZW1fYm9yZGVyOjFweCBzb2xpZCByZ2JhKDMxLCAzNCwgNDMsIDAuMik7XHJcbiRwcm9kdWN0LWl0ZW0taG92ZXI6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuJHByb2R1Y3QtaXRlbV9idXR0b24tYmM6I2Y0NTExZTtcclxuXHJcbi8vIHNlYXJjaC1ib3hcclxuJHNlYXJjaC1ib3gtYmM6ICNmNWY1ZjY7XHJcblxyXG4vLyBzaWRlYmFyXHJcbiRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1ib3JkZXI6MnB4IHNvbGlkIHJnYigzMywgNzYsIDIwNyk7XHJcbiRzaWRlYmFyX2xpc3RfaXRlbS1ob3Zlci1jb2xvcjpyZ2IoNjMsIDY4LCA4NCk7XHJcblxyXG4vLyBhdXRoXHJcbiRhdXRoX2J1dHRvbl9jb2xvcjogIzAwN2JmZjtcclxuJGF1dGhfY2hlY2tib3hfY29sb3I6ICM0OTUwNTc7XHJcbiRhdXRoX2NoZWNrYm94X2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtcclxuJGF1dGhfY2hlY2tib3hfYm9yZGVyLWJlZm9yZTogI2FkYjViZCBzb2xpZCAxcHg7XHJcblxyXG4vLyBidXR0b25zXHJcbkBtaXhpbiBkYXJrIHtcclxuICBjb2xvcjogIzM0M2E0MDtcclxuICBib3JkZXItY29sb3I6ICMzNDNhNDA7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDUyLCA1OCwgNjQsIC41KVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgLjUpO1xyXG4gICAgb3V0bGluZTogbm9uZVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/pages/products/new-item-page/new-item-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/products/new-item-page/new-item-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewItemPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageComponent", function() { return NewItemPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let NewItemPageComponent = class NewItemPageComponent {
    constructor(fb) {
        this.fb = fb;
        this.addItem = () => {
            console.log(this.newItemForm.value);
        };
        this.isFieldValid = (filedName) => {
            return (this.newItemForm.get(filedName).invalid &&
                this.newItemForm.get(filedName).touched);
        };
    }
    ngOnInit() {
        this.newItemForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brandName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cloth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sizes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            colors: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
};
NewItemPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
NewItemPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-item-page',
        template: __webpack_require__(/*! raw-loader!./new-item-page.component.html */ "./node_modules/raw-loader/index.js!./src/pages/products/new-item-page/new-item-page.component.html"),
        styles: [__webpack_require__(/*! ./new-item-page.component.scss */ "./src/pages/products/new-item-page/new-item-page.component.scss")]
    })
], NewItemPageComponent);



/***/ })

}]);
//# sourceMappingURL=src-modules-new-item-page-new-item-page-module-es2015.js.map