export class Employee{
    id: number;
    name: string;
    email: string;
    mobile: string;
    landline: string;
    website: string;
    address: string;
    constructor(id: number = null,
            name:string = '',
            email: string = '',
            mobile: string = '',
            landline: string = '',
            website: string = '',
            address: string = '')
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    }
}