import { connect } from 'react-redux';
import SettingsBar from '../components/SettingsBar';

const mapStateToProps = (state) => {
    return {
        settings: state.settings
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const SystemSettingsBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsBar);

export default SystemSettingsBar;
