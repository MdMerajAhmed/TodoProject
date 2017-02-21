"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ServicesList_1 = require('./ServicesList');
var Rx_1 = require('rxjs/Rx');
var TodoComponent = (function () {
    function TodoComponent(_demoService) {
        this._demoService = _demoService;
        this.newWorkItem = [];
        this.rowNum = 0;
    }
    TodoComponent.prototype.AddElements = function (value) {
        this.newWorkItem.push(value);
    };
    TodoComponent.prototype.SaveRecord = function (value, item) {
        var todoitem = { name: name };
        this._demoService.saveRecord(value, todoitem).subscribe(function (data) {
            return true;
        }, function (error) {
            console.error("Error saving food!");
            return Rx_1.Observable.throw(error);
        });
        console.log(value, item);
    };
    TodoComponent.prototype.DeleteRecord = function (value) {
        console.log(value);
        this._demoService.deleteRecord(value).subscribe(function (data) {
            return true;
        }, function (error) {
            console.error("Error deleting food!");
            return Rx_1.Observable.throw(error);
        });
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo',
            template: "<label>Enter WorkItem:</label>\n  <input #textbox type=\"text\" required/>\n  <button (click)=\"AddElements(textbox.value)\">Add Record</button>\n  <table border='1px solid'>\n  <tr >\n    <th>SerialNumber</th>\n    <th>WorkItem</th>\n    <th>Modification</th>\n  </tr>\n\n  <tr *ngFor=\"let item of newWorkItem; let i = index\">\n    <td>{{i+1}}</td>\n    <td>{{item}}</td>\n    <td><button (click)=\"SaveRecord(i+1,item)\">Save</button><button (click)=\"DeleteRecord(i+1)\">Delete</button></td>\n  </tr>\n  </table>",
            providers: [ServicesList_1.DemoService]
        }), 
        __metadata('design:paramtypes', [ServicesList_1.DemoService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=ToDoList.js.map