class BankAccount {
    // readonly: cannot be changed after the object is created
    constructor(
        public readonly accountNumber: number,
        public ownerName: string,

        // private: only BankAccount can access this directly
        private balance: number,

        // protected: BankAccount + child classes can access this
        protected bankName: string
    ) {}

    // public method
    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than 0");
            return;
        }

        this.balance += amount;

        console.log(`Deposited: ${amount}`);
    }

    // public method
    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than 0");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;

        console.log(`Withdrawn: ${amount}`);
    }

    // We cannot access balance directly outside the class,
    // so we provide a method to read it.
    getBalance(): number {
        return this.balance;
    }

    showAccountInfo(): void {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner: ${this.ownerName}`);
        console.log(`Bank: ${this.bankName}`);
        console.log(`Balance: ${this.balance}`);
    }
}


// Inheritance
class SavingsAccount extends BankAccount {

    addInterest(): void {
        // We cannot do this.balance because balance is private.

        // Instead, use the public methods provided by BankAccount.
        const currentBalance = this.getBalance();
        const interest = currentBalance * 0.05;

        this.deposit(interest);

        console.log(`Interest added: ${interest}`);
    }

    showBankName(): void {
        // bankName is protected,
        // so the child class can access it.
        console.log(`Bank: ${this.bankName}`);
    }
}


// Creating an object
const account = new SavingsAccount(
    1001,
    "Dirag",
    10000,
    "Nepal Bank"
);


// Using the object
account.deposit(2000);

account.withdraw(3000);

account.addInterest();

console.log("Final Balance:", account.getBalance());

console.log("Owner:", account.ownerName);

console.log("Account Number:", account.accountNumber);

account.showBankName();

account.showAccountInfo();