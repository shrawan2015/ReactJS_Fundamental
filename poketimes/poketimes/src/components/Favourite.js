
import React from 'react';

const Favourite = (favourite) => {
      
    const favouriteList = favourite.favouriteFunc;
   
    const favouriteLists  = favouriteList.length ? (
        favouriteList.map(movie => {
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
                                <a onClick={ () => {this.favouriteList(movie) } }>UnFavourite</a>
                                </div>
                            </div>
                    </div>

                    
                )
        })

    ) : (
        <div className="center"> No Favourite list</div>
    )

    return( 
        <div>
            <div className="container">
            <div className="row ">
                <h4 className="center"></h4>
                <h4 className="center"></h4>
                  {favouriteLists}
                </div>
            </div>
         </div>
    )
}


export default Favourite
