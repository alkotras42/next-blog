import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {trpc} from '../utils/trpс'

export default function Home() {

  const {data, error, isLoading} = trpc.useQuery(['hello'])

  if(isLoading) return <p>Loading...</p>

  if(error) return <p>Something went wrong</p>

  return (
    <h1 className="text-3xl font-bold underline">
      {JSON.stringify(data)}
    </h1>
  )
}

