import dva from 'dva';
import modelsCombine from './models/modelsCombine'
import hookData from './hookData'
import './style.css';

const app = dva(hookData);
// app.model(Countor);
modelsCombine.forEach(m=>app.model(m))
app.router(require('./router').default);
app.start('#root');
