import { Component } from "react/cjs/react.production.min";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    };
    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {
                        comments.map(
                            aComment => (
                                <div key={aComment.text}>
                                    {aComment.author}
                                    {
                                        new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(aComment.date)))
                                    }
                                </div>
                            )
                        )
                    }
                </div>
            )
        } else {
            return <div></div>
        }
    }
    render() {
        if (this.props.campsite) {
            return (
                    <div className="row" >
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                    </div>
            )
        } else {
            return (<div> </div>)
        }
    }
}
export default CampsiteInfo;
