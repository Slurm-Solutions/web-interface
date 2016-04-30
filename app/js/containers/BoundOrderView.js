import { connect } from 'react-redux';
import OrderView from '../components/OrderView';

const mapStateToProps = (state, ownProps) => {
    const index = state.orders.findIndex((order)=>{
        return order.orderID == ownProps.orderID
    })
    return {
        order: state.orders[index]
    };
};

const BoundOrderView = connect(
    mapStateToProps
)(OrderView);

export default BoundOrderView;
