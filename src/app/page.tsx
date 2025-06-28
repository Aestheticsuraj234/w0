"use client"
import { Button } from '@/components/ui/button'
import { useTRPC } from '@/trpc/client'
import { useMutation } from '@tanstack/react-query'
import React from 'react'

const Page = () => {
  const trpc = useTRPC()
  const invoke = useMutation(trpc.invoke.mutationOptions({}))
  return (
   <div className='p-4 max-w-7xl mx-auto'>
      <Button onClick={()=>invoke.mutate({text:"Jhon"})}>
        Invoke Background Job
      </Button>
   </div>
  )
}

export default Page