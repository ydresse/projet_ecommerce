export class User {

    public idUser: number;
    public gender: string;
    public lastname: string;
    public firstname: string;
    public address: string;
    public cp: string;
    public city: string;
    public country: string;
    public phone: string;
    public email: string;
    public login: string;
    public password: string;

    constructor() {
    }

    public jwt(idUser: string, login: string): void {
        this.idUser = Number(idUser);
        this.login = login;
    }

    public setUser(gender: string, lastname: string, firstname: string, address: string, cp: string, city: string,
                  country: string, phone: string, email: string, login: string, password: string): void {
        this.gender = gender;
        this.lastname = lastname;
        this.firstname = firstname;
        this.address = address;
        this.cp = cp;
        this.city = city;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.login = login;
        this.password = password;
    }

    // public sample(){
    //     this.gender = "Homme";
    //     this.lastname = "Dresse";
    //     this.firstname = "Yassine";
    //     this.address = "3 Rue Colette";
    //     this.cp = "67200";
    //     this.city = "Strasbourg";
    //     this.country = "France";
    //     this.phone = "076736419";
    //     this.email = "dresseyassine@gmail.com";
    //     this.login = "ydresse";
    //     this.password = "pass";
    // }
}
