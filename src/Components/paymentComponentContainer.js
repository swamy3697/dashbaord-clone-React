
import './paymentContainer.css';
import AddAgentBtn  from './AddAgentBtn';
import plus from '../assets/plus.png';
function paymentComponentContianer(){
    return (<div className='payment-container-component'>
        <AddAgentBtn name={"Payment Method"} icon={plus} />
    </div>)
}
export default paymentComponentContianer;