function Header(){
    return (
        <div className="top_bar">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
							<div className="top_bar_item">
								<a href="#">FAQ</a>
							</div>
							<div className="top_bar_item">
								<a href="patient-signin.jsp">Request an Appointment</a>
							</div>
							<div
								className="emergencies  d-flex flex-row align-items-center justify-content-start ml-auto">For
								Emergencies: +563 47558 623</div>
						</div>

					</div>
				</div>
			</div>
		</div>
    );
}

export default Header;