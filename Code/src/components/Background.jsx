// Pure decoration: three big blurred circles drifting slowly (animated in index.css).
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <span className="blob blob-1" />
      <span className="blob blob-2" />
      <span className="blob blob-3" />
    </div>
  )
}
