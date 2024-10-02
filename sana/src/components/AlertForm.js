import React, { useState } from 'react';

const AlertForm = () => {
    const [cancerType, setCancerType] = useState('');
    const [description, setDescription] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false); // State to handle visibility

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!cancerType || !description) {
            setErrorMessage('Please fill out all fields.');
            return;
        }

        // Simulate a successful submission
        setSuccessMessage('Alert sent successfully!');
        setErrorMessage('');

        // Reset form fields
        setCancerType('');
        setDescription('');
        setContactInfo('');
    };

    return (
        <div className="alert-container">
            <button className="alert-button" onClick={() => setIsVisible(!isVisible)}>
                Report a Risk Factor {/* Exclamation point for the button */}
            </button>

            {isVisible && (
                <div className="alert-form">
                    <button className="close-button" onClick={() => setIsVisible(false)}>
                        &times; {/* Close button */}
                    </button>
                    <h2>Report a Cancer Risk</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="cancer-type">Risk Factor:</label>
                            <input 
                                type="text" 
                                id="cancer-type" 
                                value={cancerType} 
                                onChange={(e) => setCancerType(e.target.value)} 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <textarea 
                                id="description" 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-info">Your Contact Information (optional):</label>
                            <input 
                                type="text" 
                                id="contact-info" 
                                value={contactInfo} 
                                onChange={(e) => setContactInfo(e.target.value)} 
                            />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <button type="submit">Send Alert</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AlertForm;
