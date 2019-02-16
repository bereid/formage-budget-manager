import { connect } from 'react-redux';
import getAllData from './config/getAllData';
import Main from './Main';

const mapStateToProps = state => ({
  data: state.getAllDataReducer.data
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => getAllData(dispatch)
});

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;