
# Homework

## Created Repository: `goit-react-hw-01`

- When submitting homework, provide two links: one to the source files and one to the live task page on Vercel.
- The project is created using Vite.
- The console contains no errors or warnings when visiting the live page.
- Each component in the `src/components` folder has its own directory, which includes:
  - The JSX file of the React component.
  - The component's stylesheet file.
- The folder name, component file name (with `.jsx` extension), and stylesheet file name (before `.module.css`) are identical and follow the names provided in the tasks (if specified).
- Components are exported using default export (`export default`).
- All task components are rendered on a single page within the root component `<App>`.
- All props expected by a component are passed to it during its invocation.
- The JS code is clean and readable, using Prettier.
- Styling is implemented with CSS modules.

---

## Task 1 - Social Network Profile

You need to create a `<Profile>` component to display user information for a social network.

![User Avatar](https://github.com/AndriiDorohov/goit-react-hw-01/blob/main/temp/task0101.png?raw=true)

### Component Props:
- `name` — the user's name.
- `tag` — the user's social media tag (without `@`).
- `location` — the user's city and country.
- `image` — a link to the user's avatar image.
- `stats` — an object containing activity information.

### Component Structure:
The component should generate markup with dynamic data passed through props, as described above.
```jsx
<div>
  <div>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
    />
    <p>Petra Marica</p>
    <p>@pmarica</p>
    <p>Salvador, Brasil</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>
```


### Example Usage in `<App>`:
Render the `<Profile>` component inside `<App>` and pass data to it as props.
```jsx
const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
```
### Additional Instructions:
- Move user data to a JSON file to avoid cluttering the `<App>` component.
- For example, create a file `src/userData.json`, format the user data in JSON format, and then import it into `<App>` to pass the data as props.
```jsx
import userData from "../userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
```
---

## Task 2 - Friend List

You need to create a `<FriendList>` component to display a user's friend information.
![Friend List](https://github.com/AndriiDorohov/goit-react-hw-01/blob/main/temp/task0201.png?raw=true)
### Component Props:
- The `<FriendList>` component should accept one prop, `friends`, which is an array of friend objects.

### Component Structure:
The `<FriendList>` component should generate DOM markup with the following structure:
```html

<ul>
	{/* The number of li depends on the number of objects in the array */}
	<li>
		<FriendListItem />
	</li>
</ul>
```

#### `<FriendListItem>` Component:
- A card representing one friend.
- Props:
  - `avatar` — link to the avatar image.
  - `name` — friend's name.
  - `isOnline` — a boolean indicating whether the friend is online.
```jsx
<div>
  <img src="" alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</div>
```

The `<FriendListItem>` component should generate DOM markup with the following structure. Depending on the `isOnline` prop:
- If `true`, the text in `p.status` should be "Online" with green text.
- Otherwise, the text should be "Offline" with red text.
This can be achieved using different CSS classes.

### Example Usage in `<App>`:
Render the `<FriendList>` component inside `<App>` and pass the friends data as props.
```jsx
const friends = [
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    name: "Mango",
    isOnline: true,
    id: 1812
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    name: "Kiwi",
    isOnline: false,
    id: 1137
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    name: "Ajax",
    isOnline: true,
    id: 1213
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    name: "Jay",
    isOnline: true,
    id: 1714
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    name: "Poly",
    isOnline: false,
    id: 1284
  }
];

const App = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};
```


### Additional Instructions:
- Move the friend data to a JSON file to avoid cluttering the `<App>` component.
- For example, create a file `src/friends.json`, format the friend data in JSON format, and then import it into `<App>` to pass the data as props.
```jsx
 import userData from "../userData.json";
import friends from "../friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};
```
---

## Task 3 - Transaction History

You need to create a transaction history component for an online banking dashboard.
![Transaction History](https://github.com/AndriiDorohov/goit-react-hw-01/blob/main/temp/task0301.png?raw=true)
### Data Format:
The transaction data is provided as an array of objects, where each object describes one transaction with the following properties:
- `id` — unique transaction identifier.
- `type` — type of transaction.
- `amount` — transaction amount.
- `currency` — transaction currency.

### Component `<TransactionHistory>`:
- Accepts one prop, `items`, which is an array of transaction objects.
- Generates a table structure where each transaction is a table row.
```jsx
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

### Example Usage in `<App>`:
Render the `<TransactionHistory>` component inside `<App>` and pass the transaction data as props.
```jsx
const transactions = [
  {
    id: "1e0700a2-5183-4291-85cc-2065a036a683",
    type: "invoice",
    amount: "964.82",
    currency: "LRD",
  },
  {
    id: "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
    type: "payment",
    amount: "686.50",
    currency: "WST",
  },
  {
    id: "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
    type: "invoice",
    amount: "828.62",
    currency: "UGX",
  },
  {
    id: "ea8ed3dc-2b68-4a53-905a-53ecb0adef33",
    type: "withdrawal",
    amount: "527.80",
    currency: "ALL",
  },
  {
    id: "63ca02f9-d637-46b5-9237-f3b24425e029",
    type: "payment",
    amount: "862.44",
    currency: "AUD",
  },
  {
    id: "ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",
    type: "withdrawal",
    amount: "907.00",
    currency: "GEL",
  },
  {
    id: "4eaab41b-b967-40ac-82ed-85fc66f646f1",
    type: "deposit",
    amount: "103.10",
    currency: "BWP",
  },
  {
    id: "9648a350-8469-42d5-8bf3-18090de5fe67",
    type: "withdrawal",
    amount: "322.32",
    currency: "MRO",
  },
  {
    id: "9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",
    type: "invoice",
    amount: "14.79",
    currency: "PYG",
  }
];

const App = () => {
  return (
    <>
      <TransactionHistory items={transactions} />
    </>
  );
};
```

### Additional Instructions:
- Move the transaction data to a JSON file to avoid cluttering the `<App>` component.
- For example, create a file `src/transactions.json`, format the transaction data in JSON format, and then import it into `<App>` to pass the data as props.
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
```jsx

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
```

