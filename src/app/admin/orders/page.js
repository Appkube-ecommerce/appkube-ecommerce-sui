"use client"
import { Provider } from 'react-redux';
import store from '@/components/redux/store/store';
import Orders from '@/components/admin/orders/orders';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Orders />
      </div>
    </Provider>
  );
};

export default App;
