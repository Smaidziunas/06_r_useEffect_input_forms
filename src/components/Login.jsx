import { useState } from 'react';

function Login(props) {
  // susikurti state email ir password
  const [emailVal, setEmailVal] = useState('');
  const [pswValm, setPswVal] = useState('');

  // susieti su two way biding inputus su state

  function inputHandlerEm(event) {
    const enteredEValue = event.target.value;
    setEmailVal(enteredEValue);
  }

  function inputHandlerPsw(event) {
    const enteredPswValue = event.target.value;
    setPswVal(enteredPswValue);
  }

  const isEVal = !emailVal.length;
  const isPswVal = !pswValm.length;

  // atvaizduoti html/jsx ivestas reiksmes

  return (
    <div>
      <form className='card'>
        <input
          onChange={inputHandlerEm}
          value={emailVal}
          type='email'
          placeholder='Email'
        />
        <input
          onChange={inputHandlerPsw}
          value={pswValm}
          type='password'
          placeholder='Password'
        />
        <button type='submit'>Login</button>
      </form>

      <div className='card'>
        {!isEVal && <h3>{emailVal}</h3>}
        {!isPswVal && <h3>{pswValm}</h3>}
      </div>
    </div>
  );
}
export default Login;
