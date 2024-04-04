class BankAccount{
    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    deposit(amount){
        this.balance = amount + this.balance;
        console.log(`Deposited Amount: $${amount} & New Balance is: $${this.balance}`);
    }
    withdraw(amount){
        if(amount <= this.balance){
            this.balance = this.balance - amount;
            console.log(`withdrawal amount is: $${amount} & New Balance is: $${this.balance} `);
        } else{
            console.log(`Insufficient funds`);
        }
    }
    getBalance(){
        return this.balance;
    }
    displayAccountInfo(){
        console.log(`Account Number ${this.accountNumber}, Owner Name ${this.ownerName} and Balance $${this.balance}`);
    }

}
let accountNumber1 = new BankAccount(1001, 'John Doe', 700);
accountNumber1.deposit(2000);
accountNumber1.withdraw(2300);
accountNumber1.displayAccountInfo();
console.log('---------------------------');
let accountNumber2 = new BankAccount(1002, 'Justin Bell', 1500);
accountNumber2.deposit(1000);
accountNumber2.withdraw(1200);
accountNumber2.displayAccountInfo();