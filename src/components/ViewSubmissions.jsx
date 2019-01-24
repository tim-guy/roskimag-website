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
          const { name, title, email, medium, year, dateCompleted, school, websiteLink, artistStatement, link } = doc.data();
          submissions.push({
            key: doc.id,
            doc, // DocumentSnapshot
            name, title, email, medium, year, dateCompleted, school, websiteLink, artistStatement, link
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
        <div>
        </div>
    )
  }
}
