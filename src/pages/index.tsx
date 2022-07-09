import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {trpc} from '../utils/trpс'

export default function Home() {


  return (
    <h1 className='bg-slate-400 h-screen'>
      Hello World
    </h1>
  )
}

