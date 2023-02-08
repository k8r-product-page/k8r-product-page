import './stylesheets/demo.css'

function Demo() {

  return (
    <div className="demoContainer">
      <iframe width="1120" height="630" src="https://www.youtube.com/embed/G-eN4C770FM"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </div>
  )
}

export default Demo;
