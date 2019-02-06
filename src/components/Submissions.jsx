import React, { Component } from 'react';
import './css/Submissions.css';

import firebase from './Firebase';

export default class Submissions extends Component {
	constructor(props) {
		super(props);
		this.ref = firebase.firestore().collection('submissions');
		this.state = {
			name: '', title: '', email: '', medium: '', year: '', dateCompleted: '', school: '', websiteLink: '', artistStatement: '', link: '', comments: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const state = this.state
		state[event.target.name] = event.target.value;
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

		const { name, title, email, medium, year, dateCompleted, school, websiteLink, artistStatement, link, comments } = this.state;
		this.ref.add({ name, title, email, medium, year, dateCompleted, school, websiteLink, artistStatement, link, comments }).then((docRef) => {
			this.setState({
				name: '', title: '', email: '', medium: '', year: '', dateCompleted: '', school: '', websiteLink: '', artistStatement: '', link: '', comments: ''
			});
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="name" placeholder="name" spellCheck="false" value={this.state.name} onChange={this.handleChange} required />
					<input type="text" name="title" placeholder="title" spellCheck="false" value={this.state.title} onChange={this.handleChange} required />
					<input type="text" name="email" placeholder="email" spellCheck="false" value={this.state.email} onChange={this.handleChange} required />
					<input type="text" name="medium" placeholder="medium" spellCheck="false" value={this.state.medium} onChange={this.handleChange} required />
					<input type="text" name="year" placeholder="year" spellCheck="false" value={this.state.year} onChange={this.handleChange} required />
					<input type="text" name="dateCompleted" placeholder="date completed (mm/dd/yy)" spellCheck="false" value={this.state.dateCompleted} onChange={this.handleChange} required />
					<input type="text" name="school" placeholder="school" spellCheck="false" value={this.state.school} onChange={this.handleChange} required />
					<input type="text" name="websiteLink" placeholder="website link" spellCheck="false" value={this.state.websiteLink} onChange={this.handleChange} required />
					<input type="text" name="link" placeholder="link to hosted files (ensure permissions are public)" spellCheck="false" value={this.state.link} onChange={this.handleChange} required />
					<textarea name="artistStatement" value={this.state.artistStatement} onChange={this.handleChange} placeholder="artist statement" spellCheck="false" required />
					<input className ="submit" type="submit" value="submit" />
					<p className="disclaimer">By checking this box you are agreeing to Roski Mag’s terms and conditions. By submitting your work, you are agreeing to allow Roski Mag to potentially publish it on its online platform and printed magazine.</p>
				</form>
			</div>
		)
	}
}
