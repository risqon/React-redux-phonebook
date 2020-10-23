import { connect } from 'react-redux'
import { deletePhone, resendPhone, clickEditAct } from '../actions'
import TodoItem from '../components/TodoItem'

const mapDispatchToProps = (dispatch, ownProps) => ({
  remove: () => dispatch(deletePhone(ownProps.id)),
  resend: () => dispatch(resendPhone(ownProps.id, ownProps.name, ownProps.phone)),
  onEdit: () => dispatch(clickEditAct(ownProps.id))
})

export default connect(
  null,
  mapDispatchToProps
)(TodoItem)