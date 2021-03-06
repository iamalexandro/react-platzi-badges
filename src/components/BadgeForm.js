import React from 'react';

class BadgeForm extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		jobTitle: '',
		twitter: '',
	};

	render() {
		return (
			<div>
				<h1>New Attendant</h1>

				<form action="" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="">First Name</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="firstName"
							maxLength="12"
							value={this.props.formValues.firstName}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="">Last Name</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="lastName"
							value={this.props.formValues.lastName}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="">Job Title</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="jobTitle"
							value={this.props.formValues.jobTitle}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="">Twitter</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="text"
							name="twitter"
							value={this.props.formValues.twitter}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="">Email</label>
						<input
							onChange={this.props.onChange}
							className="form-control"
							type="email"
							name="email"
							value={this.props.formValues.email}
						/>
					</div>

					<button onClick={this.props.onSubmit} className="btn btn-primary">
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default BadgeForm;
