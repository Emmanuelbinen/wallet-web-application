# Wallet Web Application

This is a personal finance tracking application that helps users manage their expenses, income, and budgets across different accounts.

## Features

- Track income and expenses across multiple accounts (bank, mobile money, cash)
- Generate customized financial reports
- Budget tracking with notifications
- Category and subcategory management
- Visual transaction summaries and analytics
- Real-time budget alerts

For those who want to run the app locally, follow these steps:

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Installation & Setup

1. Clone the repository:
```git clone [repository-url]```

2. Navigate to project directory:
```cd wallet-app```

3. Install dependencies:
```npm install```

4. Start the development server:
```npm start```

The application will run on `http://localhost:3000`

Do you want to contribute, raise an issue or add new feature, follow these steps:

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## Tech Stack

- React.js
- Node.js
- Tailwind CSS
- Prisma (database)
- Redux (state management)

## Here is the Component Structure for our App

src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Layout.jsx
│   ├── dashboard/
│   │   ├── TransactionsList.jsx
│   │   ├── BudgetOverview.jsx
│   │   └── Charts.jsx
│   ├── transactions/
│   │   ├── TransactionForm.jsx
│   │   └── TransactionItem.jsx
│   ├── categories/
│   │   ├── CategoryForm.jsx
│   │   └── CategoryList.jsx
│   └── common/
│       ├── Button.jsx
│       └── Input.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   ├── Categories.jsx
│   └── Reports.jsx
└── features/
    ├── transactions/
    ├── categories/
    └── budgets/