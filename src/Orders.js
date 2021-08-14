import React, { useEffect } from 'react'
import "./Orders.css"
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import Order from "./Order";

function Orders() {
    const [{ cart, user }, dispatch] = useStateValue();
    const [orders, setOrders] = React.useState([])

    useEffect(() => {
        if(user) {
            db
            // access users collection from firebase db
            .collection('users')
            // get user's id
            .doc(user?.uid)
            // get user's orders
            .collection('orders')
            // 
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                // maps through all items ordered  
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    
      }, [user])

      return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
