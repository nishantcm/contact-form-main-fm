import EmailInput from "../EmailInput";
import Button from "./Button";
export default function Form() {
    return (
        <section>
            <div className="section">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center vh-100">
                        <div className="col-12 col-sm-12 col-md-7">
                            <div className="card cardPadding rounded-4">
                                <div className="head pb-2">
                                    <h3>Contact Us</h3>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6">
                                            <label for="first-name" className="form-label">First Name <span className="symbolRequired">*</span></label>
                                            <div className="form-label mb-3">
                                                <input type="text" className="form-control" id="first-name" aria-describedby="basic-addon3" required/> 
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6">
                                            <label for="last-name" className="form-label">Last Name <span className="symbolRequired">*</span></label>
                                            <div className="form-label mb-3">
                                                <input type="text" className="form-control" id="last-name" aria-describedby="basic-addon3" required/> 
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12">
                                            <label for="email" className="form-label">Email <span className="symbolRequired">*</span></label>
                                            <EmailInput></EmailInput>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12">
                                            <fieldset>
                                                <legend className="fs-6">Query Type <span className="symbolRequired">*</span></legend>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="form-label mb-3 border border-1 p-2 rounded-2">
                                                            <input type="radio" className="form-check-input ms-2 me-2" name="queryType" id="radio1" autocomplete="off" required/>
                                                            <label className="form-check-label" for="radio1">General Enquiry</label> 
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="form-label mb-3 border border-1 p-2 rounded-2">
                                                            <input type="radio" className="form-check-input ms-2 me-2" name="queryType" id="radio2" autocomplete="off"/>
                                                            <label className="form-check-label" for="radio2">Support Request</label> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="form-label mb-3">
                                            <label className="form-label" for="message">Message <span className="symbolRequired">*</span></label> 
                                            <textarea type="text" className="form-control" id="message" aria-describedby="basic-addon3" required></textarea> 
                                        </div>
                                        <div className="d-flex">
                                            <input type="checkbox" className="form-check-input me-3" id="consentCheck" required />
                                            <label className="form-check-label" for="consentCheck">I consent to being contacted by the team <span className="symbolRequired">*</span></label>
                                        </div>
                                        <Button></Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}