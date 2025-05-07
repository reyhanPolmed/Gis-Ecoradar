"use client"
import { Provider } from "react-redux"
import { store } from "@/lib/store"
import MapView from "@/components/map-view"
import Sidebar from "@/components/sidebar"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex h-screen flex-col">
        <Navbar />
        <div className="flex w-full flex-1 overflow-hidden">
          <Sidebar />
          <MapView />
        </div>
      </main>
    </Provider>
  )
}
