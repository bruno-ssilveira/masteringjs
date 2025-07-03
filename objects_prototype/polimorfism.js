function round(value) {
	return parseFloat(value.toFixed(2));
}

// SUPERCLASS - ACCOUNT
function Account(branch, accountNumber, balance) {
	this.branch = branch;
	this.accountNumber = accountNumber;
	this.balance = round(balance);
}

Account.prototype.showBalance = function() {
	console.log(`Branch/Acc: ${this.branch}/${this.accountNumber} | Balance: R$${this.balance.toFixed(2)}`);
}

Account.prototype.withdraw = function(value) {
	if(this.balance < value) return console.log(`Insufficient funds: R$${this.balance.toFixed(2)}`);
	this.balance -= value;
}

Account.prototype.deposit = function(value) {
	this.balance += value;
}

const account1 = new Account(1234, 121314, 100.20);

// CHECKING ACCOUNT
function CheckingAccount(branch, accountNumber, balance, limit) {
	Account.call(this, branch, accountNumber, balance);
	this.limit = limit;
}

CheckingAccount.prototype = Object.create(Account.prototype);

CheckingAccount.prototype.withdraw = function(value) {
	if(value > (this.balance + this.limit)) return console.log(`Insufficient funds: R$${this.balance.toFixed(2)}`);
	this.balance -= value;
}

// SAVINGS ACCOUNT
function SavingsAccount(branch, accountNumber, balance) {
	Account.call(this, branch, accountNumber, balance);
}
SavingsAccount.prototype = Object.create(Account.prototype);

console.log('Checking Account');
const checkingAccount1 = new CheckingAccount(12, 121, 100, 99);
checkingAccount1.showBalance();
checkingAccount1.withdraw(99.01);
checkingAccount1.showBalance();
checkingAccount1.withdraw(90);
checkingAccount1.showBalance();

console.log();

console.log('Savings Account')
const savingsAccount1 = new SavingsAccount(12, 121, 100);
savingsAccount1.showBalance();
savingsAccount1.withdraw(99.01);
savingsAccount1.showBalance();
savingsAccount1.withdraw(90);
savingsAccount1.showBalance();

/*account1.showBalance();
account1.withdraw(99);
account1.showBalance();
account1.deposit(100);
account1.showBalance();*/