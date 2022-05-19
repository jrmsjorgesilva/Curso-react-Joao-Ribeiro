// constantes
const CONFIRMED = 'CONFIRMED';
const REJECTED = 'REJECTED';

//actions
const actionConfirm = () => {
  return {
    type: CONFIRMED
  }
}

const actionReject = () => {
  return {
    type: REJECTED
  }
}

export {
  actionConfirm,
  actionReject
}
