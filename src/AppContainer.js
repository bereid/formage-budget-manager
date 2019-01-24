import { connect } from 'react-redux';
import App from './App';
import getAllData from './config/getAllData';

const mapStateToProps = state => ({
  data: state.getAllDataReducer.data
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => getAllData(dispatch)
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;