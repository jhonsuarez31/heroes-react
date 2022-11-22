import React from 'react'
import { AuthProvaider } from './auth'
import { AppRouter } from './Router/AppRouter'

export const HeroesApp = () => {
  return (
    <AuthProvaider>
        <AppRouter/>  
    </AuthProvaider>
  )
}
