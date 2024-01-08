import * as React from "react";
import Layout from "./Layout";

export default function Projects() {
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center p-6 bg-[#F4F5F7]">
      {/* <div className="absolute top-6 left-6 bg-[#367BF5] w-10 h-10" /> */}

      <h1 className="text-4xl font-bold font-roboto mb-6 text-center text-[#121212]">
        Projects
      </h1>

      <p className="text-lg font-light font-roboto mb-10 text-center text-[#121212] max-w-4xl">
        Here are some projects that I have had the opportunity to work on. I have valued each learning experience, as it has made me into the communicator that I am now!
      </p>

      {/* Example Project 1 */}
      <div className="flex flex-wrap justify-center items-start gap-8 bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="w-full md:w-[500px] bg-white rounded-lg p-6">
          <h2 className="text-2xl text-[#121212] font-semibold font-roboto mb-4 flex items-center gap-2">
            <span className="bg-[#367BF5] h-1 w-12" />
            Wheely Bean
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li className="text-md font-roboto text-[#121212]">
            Developed a comprehensive presentation addressing a campus issue at Chapman College, proposing a business idea centered around addressing inconvenient coffee experiences
            </li>
            <li className="text-md font-roboto text-[#121212]">
            Utilized Canva as a primary tool to craft a visually engaging and informative presentation, effectively communicating the proposed solution and business concept
            </li>
          </ul>
        </div>
        <img
          src="/images/coffee.png"
          alt="Document displaying press release announcements"
          className="w-full md:w-[500px] md:h-[283px] object-cover shadow-lg rounded-lg"
        />
      </div>

      {/* Example Project 2 */}
      <div className="flex flex-wrap justify-center items-start gap-8 bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="w-full md:w-[500px] bg-white rounded-lg p-6">
          <h2 className="text-2xl text-[#121212] font-semibold font-roboto mb-4 flex items-center gap-2">
            <span className="bg-[#367BF5] h-1 w-12" />
            Exploring Gender Dynamics in Leadership
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li className="text-md font-roboto text-[#121212]">
            Facilitated an interactive exercise focused on exploring the intricate dynamics between gender and leadership, fostering a nuanced understanding among peers
            </li>
            <li className="text-md font-roboto text-[#121212]">
            Employed structured methodologies and discussion frameworks to guide classmates through critical reflections and insights into gender roles within leadership contexts
            </li>
            <li className="text-md font-roboto text-[#121212]">
            Encouraged an open and respectful dialogue among participants, emphasizing the importance of inclusivity and diversity in leadership paradigms for holistic organizational success
            </li>
          </ul>
        </div>
        <img
          src="/images/gender.png"
          alt="Document displaying press release announcements"
          className="w-full md:w-[500px] md:h-[283px] object-cover shadow-lg rounded-lg"
        />
      </div>

      {/* Example Project 3 */}
      <div className="flex flex-wrap justify-center items-start gap-8 bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="w-full md:w-[500px] bg-white rounded-lg p-6">
          <h2 className="text-2xl text-[#121212] font-semibold font-roboto mb-4 flex items-center gap-2">
            <span className="bg-[#367BF5] h-1 w-12" />
            NVC Impact on School During COVID
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li className="text-md font-roboto text-[#121212]">
            Conducted a comprehensive case study examining the nuances and adaptations of nonverbal communication strategies within educational environments amidst the COVID-19 pandemic.
            </li>
            <li className="text-md font-roboto text-[#121212]">
            Conducted a comprehensive case study examining the nuances and adaptations of nonverbal communication strategies within educational environments amidst the COVID-19 pandemic.
            </li>
          </ul>
        </div>
        <img
          src="/images/NVC.png"
          alt="Document displaying press release announcements"
          className="w-full md:w-[500px] md:h-[283px] object-cover shadow-lg rounded-lg"
        />
      </div>

      {/* Example Project 4 */}
      <div className="flex flex-wrap justify-center items-start gap-8 bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="w-full md:w-[500px] bg-white rounded-lg p-6">
          <h2 className="text-2xl text-[#121212] font-semibold font-roboto mb-4 flex items-center gap-2">
            <span className="bg-[#367BF5] h-1 w-12" />
            NVC Impact on School During COVID
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li className="text-md font-roboto text-[#121212]">
            Developed a research poster exploring the implications and public sentiment surrounding the proposition of increasing taxes on the affluent segment of society
            </li>
            <li className="text-md font-roboto text-[#121212]">
            Utilized empirical data and comprehensive analysis to elucidate varying political views and arguments both supporting and opposing the policy measure 
            </li>
            <li className="text-md font-roboto text-[#121212]">
            Synthesized key findings, visual representations, and policy implications to provide a nuanced understanding of the potential economic, social, and political ramifications associated with the proposed tax reforms targeting the wealthy
            </li>
          </ul>
        </div>
        <img
          src="/images/poster.png"
          alt="Document displaying press release announcements"
          className="w-full md:w-[500px] md:h-[283px] object-cover shadow-lg rounded-lg"
        />
      </div>
    </div>

    </Layout>

    
  );
}
