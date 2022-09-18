import React from "react"

function Loading(props){

    return (
        <div className="loading">
            <p className="icon"><i className="fa-solid fa-spinner"></i></p>
            <h3 className="loading-subtitle">Loading...</h3>
        </div>
    )
}

export {Loading}