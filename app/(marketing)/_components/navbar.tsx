"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/auth/loading"; // Assuming this exists or I'll use a simple loader

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="fixed top-0 w-full h-16 px-4 border-b border-white/10 flex items-center bg-black/20 backdrop-blur-lg z-50 transition-all">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
                    <div className="flex items-center gap-x-2">
                        {isLoading && (
                            <Spinner />
                        )}
                        {!isAuthenticated && !isLoading && (
                            <>
                                <Button size="sm" variant="ghost" asChild className="text-white/80 hover:text-white hover:bg-white/10">
                                    <SignInButton>
                                        Login
                                    </SignInButton>
                                </Button>
                                <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 border-none text-white shadow-lg shadow-purple-500/20">
                                    <SignInButton>
                                        Get Boardy
                                    </SignInButton>
                                </Button>
                            </>
                        )}
                        {isAuthenticated && !isLoading && (
                            <>
                                <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10">
                                    <Link href="/dashboard">
                                        Enter Boardy
                                    </Link>
                                </Button>
                                <UserButton afterSignOutUrl="/" />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Logo Component inside same file for now
const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-x-2 transition hover:opacity-75">
                <div className="bg-white/10 p-1.5 rounded-lg border border-white/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
                        <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className="font-bold text-xl tracking-tight text-white hidden md:flex">
                    Boardy
                </span>
            </div>
        </Link>
    )
}
