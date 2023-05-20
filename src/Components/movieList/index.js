import "./style.css"

export default function MovieList(props) {
    function timeLoop() {
        return props.data.map(function(movie, index) {
            return (
                <li key={index} className="movie">
                    <a href={movie.link}>
                        {movie.isExclusive === true ? <img className="main-darker" src={movie.image} /> : <img className="main" src={movie.image} />}
                        {movie.isExclusive === true ? <img className="exclusive" src="assets/images/exclusive-fa.svg" /> : ""}
                    </a>
                </li>
            )
        })
    }
    return (
        <div>
            <div className="popular">
                <div className="popular-top">
                    <div className="container">
                        <h1>{props.title}</h1>
                        <ul>
                            {timeLoop()}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}