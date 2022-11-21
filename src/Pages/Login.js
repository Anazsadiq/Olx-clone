import React, { useState } from 'react';
import Login from '../Components/Login/Login';

function LoginPage() {
  const [a,setA]=useState("1m1l")
  return (
    <div>
      <Login name={a} />
    </div>
  );
}

export default LoginPage;
