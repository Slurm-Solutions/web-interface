import { connect } from 'react-redux';
import ClientList from '../components/ClientList';
import {viewClient} from '../actions/client';

const mapStateToProps = (state) => {
    return {
        clients: state.clients,
        timeouts: state.timeouts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClientClick: (id) => {
            dispatch(viewClient(id));
        }
    };
};

const CurrentClientList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientList);

export default CurrentClientList;
