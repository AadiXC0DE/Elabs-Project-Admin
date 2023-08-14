"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserPage() {
  const [uid, setUid] = useState("");
  const [score, setScore] = useState("");
  const [comments, setComments] = useState("");
  const [evalcode, setEvalcode] = useState("");

  useEffect(() => {
    fetchEvaluationDetails();
  }, []);

  const fetchEvaluationDetails = async () => {
    try {
      const uid = localStorage.getItem("uid");
      const response = await axios.post(
        "https://elabs-proj-eval-api.el.r.appspot.com/api/v1/proj/getUser",
        { uid: uid }
      );
      setScore(response.data.score);
      setComments(response.data.comments);
      setEvalcode(response.data.code);
      console.log(response.data.score);
    } catch (error) {
      console.error("Error fetching evaluation details:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {evalcode !== "notEval" ? (
        <div className="max-w-md w-full p-8 rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Submission Review
          </h1>

          <div className="mb-4">
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              Your Score: {score}
            </h2>
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              Comments: {comments}
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen">
          <p className="text-4xl text-white">Please wait for evaluation.</p>
        </div>
      )}
    </div>
  );
}
