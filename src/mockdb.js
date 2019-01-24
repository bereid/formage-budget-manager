module.exports = {
  user: {
    username: 'user.name',
    avatar: 'User Name',
    currentBalance: 0,
    categories: {
      income: ['Salary', 'Rent'],
      spend: ['Utilities', 'Home/Rent', 'Car', 'Food/Groceries', 'Personal', 'Insurance/Medical', 'Entertainment', 'Misc/One-time']
    },
    transactions: {
      january2019: {
        income: [
          {
            date: '',
            type: 'income',
            name: 'Salary',
            description: '',
            category: 'Salary',
            amount: 600,
            newBalance: 640,
          },
          {
            date: '',
            type: 'income',
            name: 'Rent',
            description: '',
            category: 'Rent',
            amount: 200,
            newBalance: 640,
          },
        ],
        utilities: [
          {
            date: '',
            type: 'expense',
            name: 'Heating',
            description: '',
            category: 'Utilities',
            amount: 20,
            newBalance: 640,
          },
          {
            date: '',
            type: 'expense',
            name: 'Heating',
            description: '',
            category: 'Utilities',
            amount: 20,
            newBalance: 640,
          },
        ],
        rent: [
          {
            date: '',
            type: 'expense',
            name: 'Rent',
            description: '',
            category: 'Home/Rent',
            amount: 200,
            newBalance: 640,
          },
        ],
        car: [
          {
            date: '',
            type: 'expense',
            name: 'Benzin',
            description: '',
            category: 'Car',
            amount: 80,
            newBalance: 640,
          },
          {
            date: '',
            type: 'expense',
            name: 'Benzin',
            description: '',
            category: 'Car',
            amount: 80,
            newBalance: 640,
          },
        ],
        food: [
          {
            date: '',
            type: 'expense',
            name: 'Parizsi',
            description: '',
            category: 'Food/Groceries',
            amount: 100,
            newBalance: 640,
          },
        ],
        personal: [
          {
            date: '',
            type: 'expense',
            name: 'Könyv',
            description: '',
            category: 'Personal',
            amount: 5,
            newBalance: 640,
          },
        ],
        medical: [
          {
            date: '',
            type: 'expense',
            name: 'Klamidia gyogyszer',
            description: '',
            category: 'Insurance/Medical',
            amount: 30,
            newBalance: 640,
          },
        ],
        entertainment: [
          {
            date: '',
            type: 'expense',
            name: 'Dildo',
            description: '',
            category: 'Entertainment',
            amount: 40,
            newBalance: 640,
          },
        ],
        misc: [
          {
            date: '',
            type: 'expense',
            name: 'Happy finnish',
            description: '',
            category: 'Misc/One-time',
            amount: 10,
            newBalance: 640,
          },
        ],
      }
    },
  },
}

