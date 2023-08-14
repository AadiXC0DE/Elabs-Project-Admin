"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserPage() {
  const [uid, setUid] = useState("");
  const [score, setScore] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    fetchEvaluationDetails();
  }, []);

  const fetchEvaluationDetails = async () => {
    try {
      const uid = localStorage.getItem("uid");
      const response = await axios.get(
        `https://elabs-proj-eval-api.el.r.appspot.com/api/v1/proj`
      );
      setScore(response.data.score);
      setComments(response.data.comments);
    } catch (error) {
      console.error("Error fetching evaluation details:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          User Evaluation Page
        </h1>

        <div>
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            Your Score: {score}
          </h2>
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            Comments: {comments}
          </h2>
        </div>
      </div>
    </div>
  );
}
