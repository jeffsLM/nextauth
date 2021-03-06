import {FormEvent, useState,useContext} from 'react'
import {AuthContext} from '../contexts/AuthContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const {singIn} = useContext(AuthContext)


  async function handleSubmit(event:FormEvent){
    event.preventDefault();


   const data = {
      email,
      password,
    }

  await singIn(data);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <button type="submit">entrar</button>
    </form>
  )
}


