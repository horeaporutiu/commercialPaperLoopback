import { juggler, AnyObject } from '@loopback/repository';
export declare class GeocoderDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
