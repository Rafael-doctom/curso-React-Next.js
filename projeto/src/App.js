import React from 'react'


export default function App() {

  const postagem = [
    { titulo: 'Header' },
    { titulo: 'body' },
    { titulo: 'footer' },
  ]
  return (
    <>
      {postagem.map(post => <li>
        {post.titulo}
      </li>)}
    </>
  )
}