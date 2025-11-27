"use client"

import Header from "@/components/header" // agar header bor bo‘lsa

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            {/*<Header />*/}

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
                <h1 className="text-3xl font-bold mb-4">Profile</h1>
                <p className="text-lg text-muted-foreground">Welcome to your profile page!</p>
            </div>
        </div>
    )
}
