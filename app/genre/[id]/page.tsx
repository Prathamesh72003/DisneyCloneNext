
type Props = {
    params: {
        id: string
    }
    searchParams: {
        genre: string
    }
}

function GenrePage({params: {id}, searchParams: {genre}}: Props) {
  return (
    <div>GenrePage with id {id} and search term {genre}</div>
  )
}

export default GenrePage