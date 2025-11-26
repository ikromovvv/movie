"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { Provider } from "react-redux"
import store from "@/store/store"
import Header from "@/components/header";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
        {/*<Header/>*/}
      <Provider store={store}>{children}</Provider>
      {/*<Analytics />*/}
    </>
  )
}
