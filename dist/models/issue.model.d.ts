import { Entity } from '@loopback/repository';
export declare class Issue extends Entity {
    issuer: string;
    paperNumber: string;
    issueDateTime: string;
    maturityDateTime?: string;
    faceValue?: string;
    constructor(data?: Partial<Issue>);
}
