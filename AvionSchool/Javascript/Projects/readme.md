BANKING APP
Scenario
The user is a bank employee who manually manages the bank's accounts.
He does the creation of account manually using the account holders name and sets the initial balance of the account if
possible.
He also does the withdrawal and deposit manually for each account.
He also does the transfer of balances if there are requests for it.
Your task is to help this poor employee out by creating a simple admin banking app.

PS: Don't worry about security for now, he is a trustworthy guy... I think...

Features


OBJECTIVE

• app should have a page to display all users (can be a table where the name and balance are visible)
• app should have a page for creating a user
• app should have a page for deposit/withdraw/transfer (can be separate or in one page)

• all design features will depend on YOUR IDEAS.

Here are the required functions.

• create_user(user, balance)
• function creates new user in the system
• New user has zero balance (or an optional initial balance)
• user (argument) is any string value
• deposit(user, amount)
• increases user's balance by amount value
• returns new_balance of the user
• withdraw(user, amount)
• decreases user's balance by amount value
• returns new_balance of the user
• send(from_user, to_user, amount)
• decreases from_user's balance by amount value
• increases to_user's balance in amount value
• returns balance of from_user and to_user in given format
• get_balance(user)
• returns balance of the user in given format (₱xx,xxx.xx or Phpxx,xxx.xx)
• list_users()
• returns all users

Error Handling

• wrong_arguments (e.g. amount cannot be negative, name cannot start with a number)
• user_already_exists ('Den' == 'den')
• user_does_not_exists ('Den' == 'den')
• not_enough_money
• sender_does_not_exists
• receiver_does_not_exists

Use localStorage

• You may use a button somewhere in your application page that when pressed should load the initial data to the
localStorage
• This will help you, and other visitors on you Github Page, to immediately test the capabilities of your banking app

Note: localStorage across different pages will only work on your Github Pages because it depends on the domain.

Something Unique...

• Create at least 3 features unique to your banking app
• The feature should make it convenient for the user to use your app.
• It can be a graph of some sort?
• It can be a totally new page that does another thing?
• Or just surprise us... 😏😏😏


HTML:
1. need login / registration form
2. page to create user profiles / accounts
3. page to display user profiles / accounts (display account overview, deposit, withdraw, transaction history)
4. withdraw / deposit page
5. send money
6. recent transactions
