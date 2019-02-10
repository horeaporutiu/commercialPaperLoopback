import { Entity } from '@loopback/repository';
export declare class Buy extends Entity {
    issuer: string;
    paperNumber: string;
    currentOwner: string;
    newOwner?: string;
    price?: string;
    purchaseDateTime?: string;
    constructor(data?: Partial<Buy>);
}
