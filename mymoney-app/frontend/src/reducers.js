import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reducer as toastrReducer} from 'react-redux-toastr';

import DashBoardReducer from './billingCycle/Dashboard/dashboardReducer';
import TabReducer from './common/tab/tabReducer';
import billingCycleReducer from './billingCycle/BillingCycle/billingCycleReducer';

const rootReducer = combineReducers({
  dashboard: DashBoardReducer,
  tab: TabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;