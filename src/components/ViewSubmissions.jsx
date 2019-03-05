import React, { Component } from 'react';
import './css/ViewSubmissions.css';

import firebase from './Firebase';

export default class ViewSubmissions extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('submissions');
        this.unsubscribe = null;
        this.state = {
            submissions: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const submissions = [];
        querySnapshot.forEach((doc) => {
          const { name, title, email, medium, year, dateCompleted, school, websiteLink, artistStatement, link, comments } = doc.data();
          submissions.push({
            key: doc.id,
            doc, // DocumentSnapshot
            name, title, email, medium, year, dateCompleted, school, websiteLink, artistStatement, link, comments
          });
        });
        this.setState({
          submissions
       });
      }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
    return (
        <div class="container">
            <h3 className="header">RM Submissions...</h3>
                <div class="body">
                    {this.state.submissions.map(submission =>
                        <ul className="submission-header">
                            <li>
                                <div onClick="">{submission.title} by {submission.name}</div>
                                (<a href={submission.link} target="_blank">link to work</a>) 
                                (<a href={submission.websiteLink} target="_blank">link to artist website</a>)
                            </li>
                            <ul>
                                <li>Artists Statement: {submission.artistStatement}</li>
                                <li>Medium: {submission.medium}</li>
                                <li>Year: {submission.year}</li>
                                <li>School: {submission.school}</li>
                                <li>Email: {submission.email}</li>
                                <li>Date Completed: {submission.dateCompleted}</li>
                            </ul><br/>
                            {/* <textarea className="comments" placeholder="No comments yet.">{submission.comments}</textarea><br/>
                            <button>Save</button> */}
                        </ul>
                    )}
                </div>
        </div>
    )
  }
}
