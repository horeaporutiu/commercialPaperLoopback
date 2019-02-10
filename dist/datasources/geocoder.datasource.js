"use strict";
// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = require("./geocoder.datasource.json");
let GeocoderDataSource = class GeocoderDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        dsConfig = Object.assign({}, dsConfig, {
            // A workaround for the current design flaw where inside our monorepo,
            //   packages/service-proxy/node_modules/loopback-datasource-juggler
            // cannot see/load the connector from
            //   examples/todo/node_modules/loopback-connector-rest
            connector: require('loopback-connector-rest'),
        });
        super(dsConfig);
    }
};
GeocoderDataSource.dataSourceName = 'geocoder';
GeocoderDataSource = __decorate([
    __param(0, core_1.inject('datasources.config.geocoder', { optional: true })),
    __metadata("design:paramtypes", [Object])
], GeocoderDataSource);
exports.GeocoderDataSource = GeocoderDataSource;
//# sourceMappingURL=geocoder.datasource.js.map