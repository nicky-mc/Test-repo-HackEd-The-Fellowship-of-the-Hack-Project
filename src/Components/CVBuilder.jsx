import React, { useState } from "react";

const CVBuilder = () => {
  const [cv, setCv] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    summary: "",
    job1Title: "",
    job1Company: "",
    job1Dates: "",
    job1Desc: "",
    job2Title: "",
    job2Company: "",
    job2Dates: "",
    job2Desc: "",
    eduQual: "",
    eduSchool: "",
    eduDates: "",
    skills: "",
  });

  const handleChange = (e) => setCv({ ...cv, [e.target.name]: e.target.value });

  const formatCV = () => {
    // Helper function to only render sections if the user typed something
    const renderJob = (title, company, dates, desc) => {
      if (!title && !company) return "";
      return `${title ? title.toUpperCase() : ""} | ${company}\n${dates}\n- ${desc.replace(/\n/g, "\n- ")}\n\n`;
    };

    return `${cv.name ? cv.name.toUpperCase() : "[YOUR NAME]"}
Location: ${cv.location} | Phone: ${cv.phone} | Email: ${cv.email}
--------------------------------------------------------------------------------

PROFESSIONAL SUMMARY
${cv.summary}

WORK HISTORY & EXPERIENCE
${renderJob(cv.job1Title, cv.job1Company, cv.job1Dates, cv.job1Desc)}${renderJob(cv.job2Title, cv.job2Company, cv.job2Dates, cv.job2Desc)}
EDUCATION & QUALIFICATIONS
${cv.eduQual ? cv.eduQual.toUpperCase() : ""} | ${cv.eduSchool}
${cv.eduDates}

KEY SKILLS
${cv.skills
  .split(",")
  .map((skill) => (skill.trim() ? `- ${skill.trim()}` : ""))
  .join("\n")}
`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formatCV());
    alert(
      "CV copied! You can now paste it directly into a Word document, Google Doc, or an email.",
    );
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md mb-6 border-t-8 border-sbs-dark">
      <h3 className="text-sbs-dark text-3xl font-bold mb-2">
        Detailed CV Builder 📄
      </h3>
      <p className="text-gray-600 mb-8">
        Fill out the fields below. Don't worry if you leave some blank—the
        builder will automatically format what you provide into a clean,
        professional layout.
      </p>

      {/* 1. PERSONAL DETAILS */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-sbs-mid border-b-2 border-gray-200 mb-4 pb-1">
          1. Personal Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            onChange={handleChange}
            placeholder="Full Name (e.g., Sarah Jenkins)"
            className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid bg-gray-50"
          />
          <input
            name="location"
            onChange={handleChange}
            placeholder="City/Town (e.g., Manchester, UK)"
            className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid bg-gray-50"
          />
          <input
            name="phone"
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid bg-gray-50"
          />
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
            className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid bg-gray-50"
          />
        </div>
      </div>

      {/* 2. PROFESSIONAL SUMMARY */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-sbs-mid border-b-2 border-gray-200 mb-4 pb-1">
          2. Professional Summary
        </h4>
        <textarea
          name="summary"
          onChange={handleChange}
          placeholder="A short 3-4 sentence paragraph about who you are, what your strongest traits are, and what kind of role you are looking for."
          className="w-full p-3 border rounded h-24 focus:ring-2 focus:ring-sbs-mid bg-gray-50"
        ></textarea>
      </div>

      {/* 3. WORK EXPERIENCE */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-sbs-mid border-b-2 border-gray-200 mb-4 pb-1">
          3. Work Experience (Most Recent First)
        </h4>

        {/* Job 1 */}
        <div className="bg-sbs-light p-4 rounded-lg mb-4">
          <p className="font-bold text-sm text-sbs-dark mb-2">
            Most Recent Role
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <input
              name="job1Title"
              onChange={handleChange}
              placeholder="Job Title (e.g., Sales Assistant)"
              className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid"
            />
            <input
              name="job1Company"
              onChange={handleChange}
              placeholder="Company Name"
              className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid"
            />
            <input
              name="job1Dates"
              onChange={handleChange}
              placeholder="Dates (e.g., Oct 2021 - Present)"
              className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid"
            />
          </div>
          <textarea
            name="job1Desc"
            onChange={handleChange}
            placeholder="List your responsibilities and achievements here. Tip: Use action words like 'Managed', 'Assisted', or 'Organized'."
            className="w-full p-3 border rounded h-20 focus:ring-2 focus:ring-sbs-mid"
          ></textarea>
        </div>

        {/* Job 2 */}
        <div className="bg-sbs-light p-4 rounded-lg">
          <p className="font-bold text-sm text-sbs-dark mb-2">
            Previous Role (Optional)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <input
              name="job2Title"
              onChange={handleChange}
              placeholder="Job Title"
              className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid"
            />
            <input
              name="job2Company"
              onChange={handleChange}
              placeholder="Company Name"
              className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid"
            />
            <input
              name="job2Dates"
              onChange={handleChange}
              placeholder="Dates (e.g., Jan 2019 - Sep 2021)"
              className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid"
            />
          </div>
          <textarea
            name="job2Desc"
            onChange={handleChange}
            placeholder="List your responsibilities..."
            className="w-full p-3 border rounded h-20 focus:ring-2 focus:ring-sbs-mid"
          ></textarea>
        </div>
      </div>

      {/* 4. EDUCATION */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-sbs-mid border-b-2 border-gray-200 mb-4 pb-1">
          4. Education & Certifications
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            name="eduQual"
            onChange={handleChange}
            placeholder="Qualification (e.g., 3 GCSEs, First Aid Cert)"
            className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid bg-gray-50"
          />
          <input
            name="eduSchool"
            onChange={handleChange}
            placeholder="School or Provider"
            className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid bg-gray-50"
          />
          <input
            name="eduDates"
            onChange={handleChange}
            placeholder="Year Completed"
            className="p-3 border rounded focus:ring-2 focus:ring-sbs-mid bg-gray-50"
          />
        </div>
      </div>

      {/* 5. SKILLS */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-sbs-mid border-b-2 border-gray-200 mb-4 pb-1">
          5. Key Skills
        </h4>
        <input
          name="skills"
          onChange={handleChange}
          placeholder="Type skills separated by commas (e.g., Teamwork, Customer Service, Cash Handling, Punctual)"
          className="w-full p-3 border rounded focus:ring-2 focus:ring-sbs-mid bg-gray-50"
        />
      </div>

      {/* LIVE PREVIEW BOX */}
      <div className="bg-white border-2 border-sbs-dark p-6 md:p-8 rounded-xl relative shadow-inner mt-10">
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-4 bg-sbs-dark text-white px-5 py-3 rounded-lg font-bold hover:bg-sbs-mid transition shadow-md"
        >
          📋 Copy Full CV
        </button>
        <h4 className="font-bold text-gray-400 mb-6 border-b pb-2 uppercase tracking-wider text-sm">
          Document Preview
        </h4>

        {/* The actual preview rendering */}
        <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed text-sm md:text-base">
          {formatCV()}
        </pre>
      </div>
    </div>
  );
};

export default CVBuilder;
