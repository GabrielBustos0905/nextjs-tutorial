"use client"

import { useEffect } from "react"

export default function User(){
    useEffect(() => {
        alert("Hello!!!")
    }, [])

    return(
        <h1>User</h1>
    )
};