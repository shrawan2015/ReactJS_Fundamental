import React , { Component } from 'react'
import axios from 'axios'

class Home extends Component {

    state = {
        movieList:[],
        favouriteList:[],
        bgColor:[]
    }



    //43dd8bb11c9abefef643794c5e0953d2
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=43dd8bb11c9abefef643794c5e0953d2&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=27')
        .then(res => {
            console.log(res.data.results)
            this.setState({
                movieList:res.data.results
            })
        })
    }

    favouriteList = (e,movie) => {
        console.log(movie)
        e.preventDefault()
        // e.target.style.backgroundColor =  'blue'
        this.props.favouriteFunc(movie)
        
        let bgColor =  [...this.state.bgColor,e.id];
        this.setState({
            bgColor:bgColor
        })
    }

    render() {

        const {movieList} = this.state;

         let bgcolorrs = this.state.bgColor

        const postList  = movieList.length ? (
            movieList.map((movie) => {

                return(
                            

                            <div className="col s3"  key={movie.id}>
                                <div className="card large">
                                    <div className="card-image">

                                    <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}/>
                                    <span className="card-title">{movie.title}</span>
                                    </div>
                                    <div className="card-content">
                                    <p>{movie.overview}</p>
                                    </div>
                                    <div className="card-action">
                                    <button className="waves-effect btn"  id={movie.id}   onClick={ (e) => this.favouriteList(e,movie) }  >Favourite</button>
                                    </div>
                                </div>
                        </div>

                        
                    )
            })

        ) : (
            <div className="center"> No movie list</div>
        )
        return( 
            <div className="container">
            <div className="row ">
                <h4 className="center"></h4>
                <h4 className="center"></h4>
                {postList}
                </div>
            </div>
    
        )
    }
    
}


export default Home
