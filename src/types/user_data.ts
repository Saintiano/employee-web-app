

export class User {

    constructor(
        public id: number,
        public CompanyName: string,
        public email: string,
        public password: string,
        public companySize: string,
        public acceptedTerms: boolean
    ) {}

    getCompanyName(): string {
        return this.CompanyName;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    getCompanySize(): string {
        return this.companySize;
    }

    getAcceptedTerms(): boolean {
        return this.acceptedTerms;
    }

    setCompanyName(CompanyName: string): void {
        this.CompanyName = CompanyName;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    setCompanySize(companySize: string): void {
        this.companySize = companySize;
    }

    setAcceptedTerms(acceptedTerms: boolean): void {
        this.acceptedTerms = acceptedTerms;
    }


}

let users : User[] = [];

export default users;