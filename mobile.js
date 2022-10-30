"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var mobileTest_1 = require("./mobileTest");
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.setName = function () {
        return this.name;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setModel = function () {
        return this.model;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setColor = function () {
        return this.color;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setPrice = function () {
        return this.price;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.printMobiles = function (mobiles) {
        for (var i = 0; i < mobileTest_1.myMobiles.length; i++) {
            return mobiles.push(mobileTest_1.myMobiles[i]);
        }
    };
    Mobile.prototype.showCharacteristics = function () {
        var mensaje = "The characteristics of the mobile name are: " + "\n" +
            "Name: " + this.name + "\n" + "Trademark: " + this.trademark + "\n" + "Model: " +
            this.model + "\n" + "Color: " + this.color + "\n" + "Price: " + this.price;
        return mensaje;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
/* let telefonoMiCasa: Mobile = new Mobile("nokia5","Nokia","modelo Z","negro", 543); */
/* console.log(telefonoMiCasa); */
