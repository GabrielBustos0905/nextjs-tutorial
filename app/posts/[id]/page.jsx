import Post from "../page";
import { Suspense } from "react";

async function loadPost(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return data
}

async function PostId({params}){
    const post = await loadPost(params.id)

    return(
        <div>
            <h1>{params.id} {post.title}.</h1>
            <p>{post.body}</p>

            <hr />
            <h3>Otras publicaciones</h3>
            <Suspense fallback={<h2>Cargando Posts ...</h2>}>
                <Post />
            </Suspense>
        </div>
    )
};

export default PostId;