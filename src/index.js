import dva from 'dva';
import modelsCombine from './models/modelsCombine';
import './style.css';

const app = dva();
// app.model(Countor);
modelsCombine.forEach(model=>app.model(model))
app.router(require('./router').default);
app.start('#root');
