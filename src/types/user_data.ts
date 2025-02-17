

export class User {

    constructor(
        private id: number,
        private CompanyName: string,
        private email: string,
        private password: string,
        private companySize: string,
        private acceptedTerms: number
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

    getAcceptedTerms(): number {
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

    setAcceptedTerms(acceptedTerms: number): void {
        this.acceptedTerms = acceptedTerms;
    }


}