import './order.css';
import { OrderItem } from '../OrderItem/orderItem.jsx';

export const Order = ({ items }) => {
    return (
        <div className="order">
            <div className="order__content">
                <h1>Vaše objednávka</h1>      
                {(items.length === 0) ? (
                    <p className="order__empty">Nemáte žádné objednávky.</p>
                ) : (
                    <div className="order__items">
                        {items.map(item => (
                            <OrderItem key={item.id} name={item.name} image={item.image} />
                 ))}
                    </div>
                )}  
            </div>
        </div>
    );
};