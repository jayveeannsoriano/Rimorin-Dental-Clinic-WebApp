import React from "react";
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";
// import Footer from "../components/footer.jsx";
import '../styles/prescription.css';

export default function EPrescription() {  
    return(
        <div>
			<main id="main" className="main">
			<section className="section dashboard">
				<div className="row">
					<div class="col-md-7 col-lg-8 col-xl-9">
								<div class="card">
									<div class="card-header">
										<h4 class="card-title mb-0">Create Prescription</h4>
									</div>
									<div class="card-body">
										<div class="row">
											<div class="col-sm-6">
												<div class="biller-info">
													<h4 class="d-block">Dra. Pamela Conception</h4>
													<span class="d-block text-sm text-muted">Dentist</span>
													<span class="d-block text-sm text-muted">Newyork, United States</span>
												</div>
											</div>
											<div class="col-sm-6 text-sm-right">
												<div class="billing-info">
													<h4 class="d-block">1 November 2022</h4>
													<span class="d-block text-muted">#INV0001</span>
												</div>
											</div>
										</div>
										
								
										<div class="add-more-item text-right">
											<a href="#"><i class="fas fa-plus-circle"></i> Add Item</a>
										</div>
										
										<div class="card card-table">
											<div class="card-body">
												<div class="table-responsive">
													<table class="table table-hover table-center">
														<thead>
															<tr>
																<th style={{minwidth:"200px"}}>Name</th>
																<th style={{minwidth:"100px"}}>Quantity</th>
																<th style={{minwidth:"100px"}}>Days</th>
																<th style={{minwidth:"100px"}}>Time</th>
																<th style={{minwidth:"880px"}}></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<input class="form-control" type="text"/>
																</td>
																<td>
																	<input class="form-control" type="text"/>
																</td>
																<td>
																	<input class="form-control" type="text"/>
																</td>
																<td>
																	<div class="form-check form-check-inline">
																		<label class="form-check-label">
																			<input class="form-check-input" type="checkbox" text="Morning"/>
																		</label>
																	</div>
																	<div class="form-check form-check-inline">
																		<label class="form-check-label">
																			<input class="form-check-input" type="checkbox" text="Afternoon"/>
																		</label>
																	</div>
																	<div class="form-check form-check-inline">
																		<label class="form-check-label">
																			<input class="form-check-input" type="checkbox" text="Evening"/>
																		</label>
																	</div>
																	<div class="form-check form-check-inline">
																		<label class="form-check-label">
																			<input class="form-check-input" type="checkbox" text="Night"/>
																		</label>
																	</div>
																</td>
																<td>
																	<a href="#" class="btn bg-danger-light trash"><i class="far fa-trash-alt"></i></a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										
										<div class="row">
											<div class="col-md-12 text-right">
												<div class="signature-wrap">
													<div class="signature">
														Click here to sign
													</div>
													<div class="sign-name">
														<p class="mb-0">( Dra. Pamela Conception )</p>
														<span class="text-muted">Signature</span>
													</div>
												</div>
											</div>
										</div>
									
										
										
										<div class="row">
											<div class="col-md-12">
												<div class="submit-section">
													<button type="submit" class="btn btn-primary submit-btn">Save</button> <span/>
													<button type="reset" class="btn btn-secondary submit-btn">Clear</button>
												</div>
											</div>
										</div>
									
										
									</div>
									
								</div>
						</div>

				</div>
			</section>

				</main>
       <Header />
       <Sidebar />
    </div>

    );
}