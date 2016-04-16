import React from 'react';
import { connect } from 'react-redux';
import ModalView from '../components/ModalView'
import ClientView from '../components/ClientView';
import DrinkView from '../components/DrinkView';
import OrderView from '../components/OrderView';
import { clearView } from '../actions';


const ModalSelector = ({focus, clearFocus}) => {
    if(focus.type !== undefined) {
        return (<ModalView clear={clearFocus} title={focus.title}>
        {(() => {switch(focus.type) {
            case 'client':
                return <ClientView client={focus.clientID} />
            case 'drink':
                return <DrinkView order={focus.orderID} drink={focus.drinkID} />
            case 'order':
                return <OrderView order={focus.orderID} />
        }})()}
        </ModalView>)
    } else {
        return <div></div>
    }
}

const mapStateToProps = (state) => {
    return {
        focus: state.focus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearFocus: () => {
            dispatch(clearView());
        }
    };
};

const CurrentModalView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalSelector);

export default CurrentModalView;
