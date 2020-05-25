import counterRed from './counter';
import LoggedReduce from './Islogged';
import {combineReducers} from 'redux';

const allreducer=combineReducers(
{
    counterReduce:counterRed,
    LoggedReduce:LoggedReduce
}
)

export default  allreducer;