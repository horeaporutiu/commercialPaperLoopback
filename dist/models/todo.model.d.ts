import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id?: number;
    title: string;
    desc?: string;
    isComplete?: boolean;
    remindAtAddress?: string;
    remindAtGeo?: string;
    constructor(data?: Partial<Todo>);
}
