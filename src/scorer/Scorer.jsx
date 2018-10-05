import React from 'react';
import Scoreboard from './Scoreboard';
import {connect} from 'react-redux';

const Scorer = (props) => (
  <div>
    <Scoreboard game={props.game} score={props.score}/>
  </div>
);



export const mapStateToProps = (state) => {
    return {
        score: state.scoreInformation,
        game:state.gameInformation
    }
}

export default connect(mapStateToProps)(Scorer)