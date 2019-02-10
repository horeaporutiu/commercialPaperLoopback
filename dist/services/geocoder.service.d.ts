import { juggler } from '@loopback/service-proxy';
import { Provider } from '@loopback/core';
export interface GeoPoint {
    /**
     * latitude
     */
    y: number;
    /**
     * longitude
     */
    x: number;
}
export interface GeocoderService {
    geocode(address: string): Promise<GeoPoint[]>;
}
export declare class GeocoderServiceProvider implements Provider<GeocoderService> {
    protected dataSource: juggler.DataSource;
    constructor(dataSource?: juggler.DataSource);
    value(): Promise<GeocoderService>;
}
