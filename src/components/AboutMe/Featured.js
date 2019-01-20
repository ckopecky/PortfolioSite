import React from 'react';
import { Link } from 'react-router-dom';

const Featured = (props) => {
    return (
        <div className="about-me-container">
            <h5 className="about-me-featured-header">Featured:</h5>
                <div className="card-container">
                    <div className="card">
                        <div className="card-img-top">
                            <img id="breakout" className="image-project" src={props.BreakoutPic2} alt="cap"/>
                            <img id="breakout" className="image-project" src={props.BreakoutPic} alt="cap1"/>
                        </div>  
                        <div className="card-body">
                            <h5 className="card-title">Breakout-Clone(ish)</h5>
                            <p className="card-text">A clone of the game Breakout that was part of a Sprint Challenge I did for Lambda School. What I have here was completed in three hours.</p>
                            <Link className="submit-button" to="/projects/breakout">See project on Github</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img-top" id="sorting">
                            <img className="image-project" id="HP" src={props.HP02} 
                            alt="cap"/>
                            <img className="image-project" id="HP" src={props.HP01} alt="cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Sorting Hat</h5>
                            <p className="card-text">Welcome to Hogwarts School of Witchcraft and Wizardry! Answer these six questions to be sorted into your house!</p>
                            <div id="button-div">
                                <Link className="submit-button" to="http://thegreathall.herokuapp.com">See Website</Link><br/>
                                <Link className="submit-button" target="_blank" rel="noopener noreferrer" to="https://github.com/ckopecky/React-Sorting-Hat">Github Repo</Link>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
    );
};

export default Featured;