"use client"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function PostCard({post}){
    const params = useParams();
    console.log({params})

    return(
        <div className="bg-gray-900 p-10">
            <Link href={`/posts/${post.id}`}>
                <h3 className="text-xl font-bold mb-4">{post.id} {post.title}</h3>
            </Link>
            <p className="text-slate-300 mb-4">{post.body}</p>
            <button onClick={() => alert("Post")}>Click</button>
        </div>
    )
};