"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToAuditSelectRowString = exports.mapToAuditInsertColumnString = void 0;
var mapToAuditInsertColumnString = function (schemaObject) {
    var keys = Object.keys(schemaObject);
    var columns = "\"".concat(keys[0], "\"");
    for (var i = 1; i < keys.length; i++)
        columns += ", \"".concat(keys[i], "\"");
    return columns;
};
exports.mapToAuditInsertColumnString = mapToAuditInsertColumnString;
var mapToAuditSelectRowString = function (schemaObject, schemaShortName) {
    var keys = Object.keys(schemaObject);
    var columns = "\"".concat(schemaShortName, "\".\"").concat(keys[0], "\"");
    for (var i = 1; i < keys.length; i++)
        columns += ", \"".concat(schemaShortName, "\".\"").concat(keys[i], "\"");
    return columns;
};
exports.mapToAuditSelectRowString = mapToAuditSelectRowString;
//# sourceMappingURL=index.js.map