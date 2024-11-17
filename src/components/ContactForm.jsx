
export default function Form() {
    return (
        <section>
            <div className="card">
                <label for="basic-url" class="form-label">Your vanity URL</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/> 
                </div>
            </div>
        </section>
    );
}