import React from 'react'

export default function About(props) {
    return (
        <div className="container my-3">
            <h1   style={{
                 backgroundColor: props.mode==='dark'?'#0f132b':'white',
                 color : props.mode==='dark'?'white':'black'
                 }}
                 >About Us </h1>
            <p   style={{
                 backgroundColor: props.mode==='dark'?'#0f132b':'white',
                 color : props.mode==='dark'?'white':'black'
                 }} className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat praesentium quos libero illo quia at id. Quis obcaecati perspiciatis nisi sapiente amet alias, eveniet ratione dolor dolorem repellat soluta ab corporis optio veniam maiores praesentium exercitationem debitis fuga ut. Non odit debitis eius, vitae enim voluptatibus nostrum sed hic, culpa quia esse, ea omnis? Nam, commodi dolorum atque magnam dignissimos asperiores dicta amet sint maxime repudiandae quas ut autem quo magni quasi. Sapiente sed esse veritatis accusantium architecto, quam, repudiandae vitae explicabo ducimus harum quo numquam. Iste quidem vel impedit sapiente, veritatis, similique iusto doloremque perspiciatis unde, non eveniet tenetur.</p>
       
        </div>
    )
}
