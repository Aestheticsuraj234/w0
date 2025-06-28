"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTRPC } from '@/trpc/client'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'

const Page = () => {
  const [value , setValue]  = useState("")
  const trpc = useTRPC()
  const invoke = useMutation(trpc.invoke.mutationOptions({}))
  return (
   <div className='p-4 max-w-7xl mx-auto'>
    <Input value={value} onChange={(e)=>setValue(e.target.value)}/>
      <Button onClick={()=>invoke.mutate({value:value})}>
        Invoke Background Job
      </Button>
   </div>
  )
}

export default Page