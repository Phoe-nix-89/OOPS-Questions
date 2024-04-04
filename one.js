function BankAccount(initbalance) {
    this.balance = initbalance;

    this.Deposit = function(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Amount added = ${amount}`);
        }
        else{
            console.log("Invalid amount");
        }
    }

    this.Withdraw = (amount) => {
        if(amount < this.balance){
            this.balance -= amount;
            console.log(`Amount withdrawn is ${amount}`);
        }
        else{
            console.log("Invalid amount");
        }
    }
}

BankAccount.prototype.checkBalance = function() {
    console.log(`Current Balance in your account = ${this.balance}`);
}

const acc1 = new BankAccount(3000);
acc1.checkBalance();
acc1.Deposit(1000);
acc1.checkBalance();
acc1.Withdraw(2000);
acc1.checkBalance();