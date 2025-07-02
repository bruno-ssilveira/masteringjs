// Superclass
function Account(branch, accountNumber, balance) {
	this.branch = branch;
	this.accountNumber = accountNumber;
	this.balance = balance;
}

Account.prototype.balance = function() {console.log(this.balance)}

Account.prototype.withdraw = function(withdraw) {
	if(this.balance < withdraw) return console.log(`Saldo insuficiente: R$${this.balance}`);
	this.balance -= withdraw;
}

Account.prototype.deposit = function(deposit) {
	this.balance += deposit;
}

const account1 = new Account(1234, 121314, 100);

account1.balance();
account1.withdraw(99);
account1.balance();
account1.deposit(100);
account1.balance();