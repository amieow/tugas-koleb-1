import React from 'react'

export default function Header({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <header className='flex min-h-screen flex-col items-center justify-between p-20 font-light'>
            {children}
        </header>
    )
}