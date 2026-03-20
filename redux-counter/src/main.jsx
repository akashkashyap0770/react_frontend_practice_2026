import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✅ Provider connects the Redux store with the React app so that global state is accessible in all components */}
    {/*  Interview Line :- Provider Redux store ko React application ke saath connect karta hai taaki global state har component me accessible ho. */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

/*
🧠 FINAL INTERVIEW SUMMARY (Best):-
 
🔹 "Redux Toolkit me hum global state ko slices me manage karte hain.
🔹 Provider ke through store poori app ko milta hai.
🔹 useDispatch actions bhejne ke liye aur useSelector state read karne ke liye use hota hai.
🔹 Redux Toolkit Immer use karta hai isliye push jaise mutable methods safe hote hain."
*/