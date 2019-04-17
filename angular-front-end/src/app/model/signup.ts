export class SignUpInfo {
	
    name: string;
	surname: string;
    username: string;
    email: string;
    role: string[];
	photo: string;
    password: string;

    constructor( name: string, surname: string, username: string, email: string, photo: string, password: string) {
        this.name = name;
		this.surname = surname;
        this.username = username;
        this.email = email;
		this.photo = photo;
        this.password = password;
        this.role = ['admin'];
    }
}