var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function uIElement(target) { }
function deprecated(t, p, d) {
    console.log('this method will go away soon.');
}
var ContactForm = (function () {
    function ContactForm() {
    }
    ContactForm.prototype.someOldMethod = function () { };
    return ContactForm;
}());
__decorate([
    deprecated
], ContactForm.prototype, "someOldMethod", null);
ContactForm = __decorate([
    uIElement
], ContactForm);
// These are used in angular to define meta-data
function uIElement2(element) {
    return function (target) {
        console.log("Creating new element: " + element);
    };
}
var ContactForm2 = (function () {
    function ContactForm2() {
    }
    return ContactForm2;
}());
ContactForm2 = __decorate([
    uIElement2('Simple Contact Form')
], ContactForm2);
// <TFunction extends Function>(target: TFunction) => TFunction | void; 
//# sourceMappingURL=tsDay7.js.map