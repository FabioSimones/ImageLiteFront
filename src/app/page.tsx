'use client'

import { userAuth } from '@/resources'
import LoginPage from './login/page'
import GaleriaPage from './galeria/page'

export default function Home() {

  const auth = userAuth();
  const user = auth.getUserSession();

  if(!user){
    return <LoginPage />
  }

  return (
    <GaleriaPage />
  )
}