export const inc = () => {
  return {type: 'INC'}
}

export const dec = () => {
  return {type: 'DEC'}
}

export const stepChange = e => {
  return {
    type: 'STEP_CHANGED',
    payload: e.target.value
  }
}