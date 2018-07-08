
import {
  ValidateCounterparty,
  ValidateOurparty,
  ValidateTrader
} from './validation';

const validations = new Map();
validations.set('ValidateCounterparty', ValidateCounterparty);
validations.set('ValidateOurparty', ValidateOurparty);
validations.set('ValidateTrader', ValidateTrader);

export default validations;