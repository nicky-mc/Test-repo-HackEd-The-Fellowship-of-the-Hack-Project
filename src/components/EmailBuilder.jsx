import React, { useState } from "react";

const EmailBuilder = () => {
  const [topic, setTopic] = useState("sick");
  const [managerName, setManagerName] = useState("");
  const [userName, setUserName] = useState("");

  const getTemplate = () => {
    const greeting = managerName
      ? `Dear ${managerName},`
      : "To whom it may concern,";
    const signOff = `\n\nKind regards,\n${userName ? userName : "[Your Name]"}`;

    switch (topic) {
      case "sick":
        return `${greeting}\n\nPlease accept this email as notification that I am unwell today and will not be able to attend work. \n\nI will rest today and keep you updated on whether I will be fit to return tomorrow. If anything urgent comes up, please let me know.\n\nThank you for understanding.${signOff}`;
      case "job":
        return `${greeting}\n\nI am writing to express my interest in the open position at your company. I have attached my CV for your review. \n\nI am a hardworking, reliable individual who is eager to learn and contribute to your team. I would welcome the opportunity to discuss this role with you in an interview.\n\nThank you for your time and consideration.${signOff}`;
      case "council":
        return `Dear Customer Service Team,\n\nI am writing regarding my recent council tax bill (Account Number: [Insert Number Here]). \n\nI am currently experiencing some financial difficulties and would like to request to set up a manageable payment plan for my arrears.\n\nPlease could you advise me on the next steps to arrange this?${signOff}`;
      default:
        return "";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getTemplate());
    alert("Email copied to clipboard!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-sbs-dark text-2xl font-bold mb-2">
        Professional Email Builder ✉️
      </h3>
      <p className="text-gray-600 mb-6">
        Fill in the boxes and select a topic. We will write a polite,
        professional email for you to copy and paste.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-bold text-sbs-dark mb-2">
            What do you need to write about?
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sbs-mid bg-white"
          >
            <option value="sick">Calling in sick to work</option>
            <option value="job">Sending a CV for a job application</option>
            <option value="council">
              Asking the council for a payment plan
            </option>
          </select>
        </div>

        <div>
          <label className="block font-bold text-sbs-dark mb-2">
            Who are you writing to? (Optional)
          </label>
          <input
            type="text"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            placeholder="e.g. Sarah, or HR Manager"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sbs-mid"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-bold text-sbs-dark mb-2">Your Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="e.g. John Smith"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sbs-mid md:w-1/2"
        />
      </div>

      <div className="bg-sbs-light border-2 border-sbs-mid p-5 rounded-xl">
        <div className="flex justify-between items-center mb-3 border-b border-sbs-mid pb-2">
          <span className="font-bold text-sbs-dark">Your Generated Email:</span>
          <button
            onClick={handleCopy}
            className="bg-sbs-dark text-white px-4 py-2 rounded text-sm font-bold hover:bg-sbs-mid transition-colors"
          >
            Copy Text
          </button>
        </div>
        <pre className="whitespace-pre-wrap font-sans text-gray-800 text-base leading-relaxed">
          {getTemplate()}
        </pre>
      </div>
    </div>
  );
};

export default EmailBuilder;
