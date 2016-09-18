import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'
import { postFetch,getFetch } from '../actions'


function mapStateToProps(state) {
  return {
    someResult: state.someResult
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postFetch, getFetch }, dispatch);
}

// 将获取的属性传给APP组件
export default connect(mapStateToProps,mapDispatchToProps)(App)
