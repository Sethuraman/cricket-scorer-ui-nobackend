import React from 'react';
import {Container, Row, Col} from 'reactstrap';


const renderCurrentlyBattingTeamScore = (props) => {

    let team = props.score.currentlyBattingTeamName === props.game.team1.name ? props.score.team1 : props.score.team2;

    return (<Row>
        <Col md="5" xs="4">
            <b>{props.score.currentlyBattingTeamName}</b>
        </Col>
        <Col sm="1" xs="2"/>
        <Col style={{textAlign: "right"}}>
            <b>{team.score + "/" + team.wickets + " in " + team.overs + "/" + props.game.numberOfOvers}</b>
        </Col>
    </Row>)
}

const renderCurrentlyBowlingTeamScore = (props) => {

    let team;
    if (props.score.currentlyBattingTeamName === props.game.team1.name) {
        team = props.score.team2;
        team.name = props.game.team2.name;
    }
    else {
        team = props.score.team1;
        team.name = props.game.team1.name;
    }

    return (
        <Row>
            <Col>
                {team.name}
            </Col>
            <Col style={{textAlign: "right"}}>
                {team.score + "/" + team.wickets + " in " + team.overs + "/" + props.game.numberOfOvers}
            </Col>
        </Row>
    );
}


const ScoreBoard = (props) =>
    <Container>
        <br/>
        <Row>
            <Col md={{size: 6, offset: 3}}>
                {renderCurrentlyBattingTeamScore(props)}
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md={{size: 6, offset: 3}} sm="12">
                {renderCurrentlyBowlingTeamScore(props)}
            </Col>
        </Row>
    </Container>

export default ScoreBoard;