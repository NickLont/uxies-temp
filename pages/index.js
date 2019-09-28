import Link from 'next/link'

// The home page
function Index () {
  const text = 'Hello Next'
  return (
    <div className="c-homepage">

      <p className="c-random-component">Text</p>
      <Link href="/about">
        <a title="Test Title" id="Test id">About Page Link</a>
      </Link>
      <p>{text}</p>
    </div>
  )
}

export default Index
