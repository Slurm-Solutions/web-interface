import React from 'react';
import { connect } from 'react-redux';
import ModalView from '../components/ModalView'
import ClientView from '../components/ClientView';
import DrinkView from '../components/DrinkView';
import BoundOrderView from './BoundOrderView';
import { clearView } from '../actions';


const ModalSelector = ({focus, clearFocus}) => {
    if(focus.type !== undefined) {
        return (<ModalView clear={clearFocus} title={focus.title}>
        {(() => {switch(focus.type) {
            case 'client':
                return <ClientView clientID={focus.clientID} />
            case 'drink':
                return <DrinkView orderID={focus.orderID} drinkID={focus.drinkID} />
            case 'order':
                return <BoundOrderView orderID={focus.orderID} />
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
