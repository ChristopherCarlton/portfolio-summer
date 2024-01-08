import * as React from "react";
import Layout from "./Layout";

export default function classes() {
  return (
    <Layout>
    <div className="bg-[#F4F5F7] min-h-screen">
      <div className="max-w-[1161px] mx-auto p-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h1 className="text-6xl font-bold mb-4 text-black">
              Highlight Courses
            </h1>
            <p className="text-xl font-roboto text-black">
              Here are some of the most influential and informative courses that
              Chapman University has offered me.
            </p>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-black">1 | Message Design II</h2>
              <ul className="list-disc ml-5 text-black">
                <li>
                  Students will conduct the message campaign and assess the
                  outcomes using relevant statistical analyses.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-black">
                2 | Theories of Persuasion
              </h2>
              <ul className="list-disc ml-5 text-black">
                <li>
                  A survey of advocacy from Aristotelian principles to
                  contemporary practices. Emphasis is on the interdisciplinary
                  generation of persuasion theories from post World War II to
                  the present that empower us to recognize, analyze and evaluate
                  persuasive message.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-black">
                3 | Visual Communication Design
              </h2>
              <ul className="list-disc ml-5 text-black">
                <li>
                  This course is designed to give students experience in
                  planning for and conducting different types of campaigns. This
                  course will introduce you to the concepts, analyses, and
                  activities that comprise advertising and promotion management
                  and provide practice in assessing and solving advertising and
                  promotion challenges. Class sessions will be devoted to
                  learning major advertising and promotion concepts and applying
                  them to real world examples and experiences.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-black">
                4 | Organizational Communication
              </h2>
              <ul className="list-disc ml-5 text-black">
                <li>
                  Instruction includes a mix of theory and practice of
                  interpersonal communication in organizational settings. Major
                  research theories are experienced through analysis of case
                  studies and guided role-play of typical situations in
                  organizations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
