"use client"

import { useRouter } from "next/navigation";

// No se puede usar un export en el metadata mientras esta el use client
const metadata = {
    title: 'My Next App - Abaut'
};

export default function Abaut(){
    const router = useRouter();

    return (
        <div>
            <h1>Abaut</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius asperiores vero iste dicta iure illo labore voluptates dignissimos! Magnam molestiae, cumque odio quidem, perferendis iste consequuntur earum pariatur possimus nam cum, ipsa non? Explicabo deserunt assumenda voluptas dolor et quas dolores hic excepturi, similique accusantium tempore quam maiores ipsam suscipit ipsa incidunt saepe, tempora, adipisci ut! Illo dicta unde recusandae ad perspiciatis soluta voluptatibus voluptates error officia provident, praesentium nesciunt velit dolorem sapiente accusantium repellat dolore. Non, ducimus debitis doloremque ut quod quos consectetur natus. Cum nihil corporis magni consectetur suscipit velit assumenda, sequi aliquam totam at officia iusto. Voluptatum.</p>
            <button
                className="bg-sky-400 px-3 py-2 rounded-md"
                onClick={() => {
                    alert("Executing loading...");
                    router.push('/')
                }}
            >
                Click
            </button>
        </div>
    )
};