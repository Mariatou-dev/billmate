export default class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;

    constructor(id: number, username: string, password: string, firstname: string, lastname: string, phoneNumber: string, email: string) { 
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }


}