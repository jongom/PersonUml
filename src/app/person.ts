const uuidv4 = require('uuid/v4')
export class Person {
    private _id: string;
    protected name: string;
    constructor() {
        this._id = uuidv4();
    }
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getId(): string {
        return this._id;
    }
    public static build(): Person {
        return new Person();
    }
}