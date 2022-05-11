import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: '',
		},
	};

	handleChange = e => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = e => {
		console.log('Submit button was clicked');
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 mt-4">
              <Badge
                avatarUrl="https://media-exp1.licdn.com/dms/image/C5603AQGaZYXT3lye2A/profile-displayphoto-shrink_100_100/0/1614566026990?e=1657756800&v=beta&t=Pr_SFQ6MKKo0sdHP5bjhjbwY8ds-2jMTDjYbPArtZ2Q"
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-sm-12 col-md-6 mt-4">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
	}
}

export default BadgeNew;
