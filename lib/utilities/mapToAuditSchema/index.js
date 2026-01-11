"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToAuditSchema = void 0;
var mapToAuditSchema = function (schema) {
    var auditSchema = {};
    Object.keys(schema).forEach(function (item) {
        auditSchema[item] = { type: schema[item].type, allowNull: true };
    });
    return auditSchema;
};
exports.mapToAuditSchema = mapToAuditSchema;
//# sourceMappingURL=index.js.map