import { connect } from 'react-redux';
import OrderList from '../components/OrderList';

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    };
};

const CurrentOrderList = connect(
    mapStateToProps
)(OrderList);

export default CurrentOrderList;
