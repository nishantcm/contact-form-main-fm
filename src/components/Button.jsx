import React, { useState } from "react";
 

export default function Button() {
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        };
    return (
        <form onSubmit={handleSubmit}>
            <div className="d-grid gap-2 mt-3">
                <button className="btn buttonColor text-white text-center py-2" type="submit">Submit</button>
            </div>
        

            {showAlert && (
                <div>
                    Success! Your form has been submitted.
                </div>
            )}
        </form>
    );
    
};