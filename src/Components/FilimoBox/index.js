import "./style.css"

export default function FilimoBox(props) {
    function timeLoop() {
        return props.data.map(function(box, index) {
            return(
                <li key={index}>
                    <a href={box.link}>
                        <img src={box.image} />
                        <div className="play-button">
                            <div className="circle"></div>
                            <div className="triangle"></div>
                        </div>
                        <h3>{box.text}</h3>
                    </a>
                </li>
            )
        })
    }
    return (
        <div>
            <div className="filimo-box vertical-padding">
                <div className="container">
                    <div className="title-wrapper">
                        <img className="logo" src="assets/images/filimobox_colored.png" />
                        <h2>{props.title}</h2>
                    </div>
                    <p>{props.description}</p>
                    <a className="button more-info" href="#">
                        <p>اطلاعات بیشتر</p>
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <ul className="video-list">
                        {timeLoop()}
                    </ul>
                    <div className="arrows">
                        <i className="fa-solid fa-angle-right"></i>
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
