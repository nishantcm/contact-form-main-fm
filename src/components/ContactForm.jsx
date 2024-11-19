
export default function Form() {
    return (
        <section>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-8">
                            <div className="card cardPadding">
                                <div className="head">
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6">
                                        <label for="first-name" class="form-label" required>First Name</label>
                                        <div class="form-label mb-3">
                                            <input type="text" class="form-control" id="first-name" aria-describedby="basic-addon3"/> 
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6">
                                        <label for="last-name" class="form-label" required>Last Name</label>
                                        <div class="form-label mb-3">
                                            <input type="text" class="form-control" id="last-name" aria-describedby="basic-addon3"/> 
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12">
                                        <label for="email" class="form-label" required>Email</label>
                                        <div class="form-label mb-3">
                                            <input type="text" class="form-control" id="email" aria-describedby="basic-addon3"/> 
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12">
                                        <label for="email" class="form-label" required>Query Type</label>
                                        <div class="form-label mb-3">
                                            <input type="radio" class="form-label" name="btnradio" id="radio1" autocomplete="off" checked />
                                            <label class="btn btn-outline-secondary" for="radio1">Radio 1</label> 
                                        </div>
                                        <div class="form-label mb-3">
                                            <input type="radio" class="form-label" name="btnradio" id="radio1" autocomplete="off" checked />
                                            <label class="btn btn-outline-secondary" for="radio1">Radio 1</label> 
                                        </div>
                                        <div class="form-label mb-3">
                                            <label class="form-label" for="message" required>Message</label> 
                                            <textarea type="text" class="form-control" id="message" aria-describedby="basic-addon3"></textarea> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}