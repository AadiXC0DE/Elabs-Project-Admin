"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProjectSubmit() {
  const [projectLink, setProjectLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const uid = localStorage.getItem("uid");

      // Send POST request using Axios
      const response = await axios.post(
        "https://elabs-proj-eval-api.el.r.appspot.com/api/v1/proj/crtProj/ui-final",
        {
          projLink: projectLink,
          uid: uid,
        }
      );
      //if code==already submitted already submitted show user page
      if (response.data.code == "alreadySubmitted") {
        alert("project already submitted");
      } else {
        alert("Project submitted successfully!");
      }
      router.push("/userPage");

      // Show success message

      // Clear form fields
      setProjectLink("");
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("Error submitting project. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Submit Your Project
        </h1>
        <div className="mb-4">
          <label className="block font-medium text-gray-800 mb-2">
            Project Link:
          </label>
          <input
            type="text"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            className="w-full text-black py-2 px-3 rounded-lg border focus:outline-none focus:border-yellow-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
