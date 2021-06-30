import base from './default';

const environment = process.env.NODE_ENV || 'development';
const added = require(`./${environment}`).default;

const configBlock: any = {
    ...base,
    ...added
  };


export default configBlock;