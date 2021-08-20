import './News.scss'
import articleThumb1 from '../../images/Rectangle 1 copy 25.png'
import articleThumb2 from '../../images/Rectangle -1.png'
import articleThumb3 from '../../images/Rectangle -2.png'

function News(){

    return(

        <section className="news_container"> 
        <h3>LATEST NEWS</h3>

        <div className="news_box">
            <div className="container">
                <div className="news">
                    <div className="news__image">
                        <img src={articleThumb1} alt="" />
                    </div>
                    <div className="news__details">
                        <div className="news__details--date">
                            01 Jan, 2015
                        </div>
                        <div className="news__details--title">
                            Typesetting industry
                        </div>
                        <div className="news__details--text">
                            Lorem ipsum is simply dummy text of the printing and
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="news">
                    <div className="news__image">
                        <img src={articleThumb2} alt=""/>
                    </div>
                    <div className="news__details">
                        <div className="news__details--date">
                            01 Jan, 2015
                        </div>
                        <div className="news__details--title">
                            Typesetting industry
                        </div>
                        <div className="news__details--text">
                            Lorem ipsum is simply dummy text of the printing and
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="news">
                    <div className="news__image">
                        <img src={articleThumb3} alt=""/>
                    </div>
                    <div className="news__details">
                        <div className="news__details--date">
                            01 Jan, 2015
                        </div>
                        <div className="news__details--title">
                            Typesetting industry
                        </div>
                        <div className="news__details--text">
                            Lorem ipsum is simply dummy text of the printing and
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    )

}

export default News;