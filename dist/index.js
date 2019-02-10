"use strict";
// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.TodoListApplication = application_1.TodoListApplication;
async function main(options = {}) {
    const app = new application_1.TodoListApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    return app;
}
exports.main = main;
__export(require("./models"));
// export * from './repositories';
__export(require("@loopback/rest"));
//# sourceMappingURL=index.js.map