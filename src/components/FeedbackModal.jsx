import React, { useState } from 'react';

const FeedbackModal = ({ onClose }) => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (feedback.trim() !== '') {
      setSubmitted(true);
      setTimeout(() => {
        setFeedback('');
        setSubmitted(false);
        onClose();
      }, 1500); // Auto-close after thank you
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Send Feedback</h2>
        {submitted ? (
          <p className="text-green-600">Thank you for your feedback!</p>
        ) : (
          <>
            <textarea
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback or report here..."
              className="w-full p-2 border rounded mb-4"
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-4 py-1 border rounded text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
