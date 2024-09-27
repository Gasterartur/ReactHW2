import React from 'react';
import Greeting from './components/greeting.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import OrderStatus from './components/OrderStatus.jsx';

const items = [
  {id:1, name: "Яблоки"},
  {id:2, name:"Бананы"}, 
  {id:3, name:"Апельсины"}
];
const orders = [
  { orderId: 123, status: 'в пути' },
  { orderId: 456, status: 'обработан' },
  { orderId: 789, status: 'доставлен' },
];

function App() {
  return (
    <div className="App">
      <Greeting name="Имя пользователя" />
      <ShoppingList items={items} />
      {orders.map((order) => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </div>
  );
}

export default App;

