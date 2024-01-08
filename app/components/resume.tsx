import * as React from "react";
import Layout from '../components/Layout';

export default function Resume() {
  return (
    <Layout>
      <div className="bg-[#F4F5F7]">
      <div className="bg-white text-black mt-16 mb-16 min-h-screen max-w-[800px] mx-auto p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2">Summer Alexis Vu</h1>
          <p className="mb-4">
            544 D Avenue
            <br />
            Coronado, California 92118
          </p>
          <p className="mb-6">
            619-600-9797
            <br />
            summer2001@yahoo.com
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-2">EDUCATION:</h2>
        <ul className="mb-6 list-disc pl-5">
          <li>Coronado High School - 2015 to 2019</li>
          <li>Chapman University - 2019 to 2023</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">HONORS & AWARDS:</h2>
        <ul className="mb-6 list-disc pl-5">
          <li>National Honor Society - 2016 to 2019</li>
          <li>Certificate of Excellence - Social Science 2017</li>
          <li>Honor Roll Coronado High School</li>
          <li>Varsity Letter in Girls Tennis - 2015, 2016, 2017, 2018</li>
          <li>Finalist - Western League Doubles Championship - 2016</li>
          <li>Islander Sports Foundation Award for Integrity, Sportsmanship, and Friendship - 2016</li>
          <li>All Western League Player- 2015, 2016, 2017</li>
          <li>Represented CHS in CIF singles and doubles - 2015, 2016, 2017</li>
          <li>USTA Ranking in singles and doubles in Southern California</li>
          <li>Number 1 Singles Player, CHS - 2017, 2018</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          SCHOOL ACTIVITIES AND LEADERSHIP:
        </h2>
        <ul className="mb-6 list-disc pl-5">
          <li>Coronado SAFE Club- 2015</li>
          <li>Interact Club- 2015, 2016, 2017</li>
          <li>UNICEF Club- 2018</li>
          <li>Hearts for the World Club- 2018</li>
          <li>Random Acts of Kindness Club - 2018</li>
          <li>Green Club - 2017, 2018</li>
          <li>Red Cross - 2017, 2018</li>
          <li>Oceanography Club - 2017, 2018</li>
          <li>Coronado HS Girls Tennis Fundraiser - 2018. Each participant had a monetary goal by sharing via social media or directly asking for donations.</li>
          <li>Varsity Girls Tennis Team - 2015, 2016, 2017, 2018 (Captain)</li>
          <li>Entrepreneur: Owner of PresetsBySummer on Etsy. I have ratings of 5 stars with 950 current sales. I market my own products through my own social media accounts on Instagram and Tik Tok</li>
          <li>Member of Alpha Phi sorority - 2021</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">COMMUNITY SERVICE:</h2>
        <ul className="mb-6 list-disc pl-5">
          <li>Grace Church - Sunday school volunteer for children - 2015, 2016</li>
          <li>Cassia Hotel - Clerical duties - 2015, 2016</li>
          <li>Balboa Accident & Injury Center - Filing, receptionist duties 2015, 2016, 2017</li>
          <li>Beach clean up at Breakers Beach on North Island as well as Gator Beach on the amphibious base</li>
          <li>Volunteer tennis instructor at Barnes Tennis Center for the junior 10 and under players</li>
          <li>Assistant to Tournament Director at Barnes Tennis Center</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">EMPLOYMENT:</h2>
        <ul className="mb-6 list-disc pl-5">
          <li>Babysitter - for children community 2015-2017</li>
          <li>Dog Sitter - dog sitting for owners while they are on vacation 2015-2021</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">OTHER INTERESTS AND ACTIVITIES:</h2>
        <ul className="list-disc pl-5">
          <li>Social Media- Generated a following of 9000 on Instagram</li>
          <li>Enjoy learning and exploring new cultures through my travels</li>
        </ul>
      </div>


      <div className="absolute top-32 right-8 bg-white p-8 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-black">Professional Skillset</h2>
        <div className="text-black">
          <span className="text-blue-500">&#9632;</span> <span className="ml-2">Public Speaking</span><br />
          <span className="text-blue-500">&#9632;</span> <span className="ml-2">Creativity</span><br />
          <span className="text-blue-500">&#9632;</span> <span className="ml-2">Teamwork and Collaboration</span><br />
          <span className="text-blue-500">&#9632;</span> <span className="ml-2">Organization</span><br />
          <span className="text-blue-500">&#9632;</span> <span className="ml-2">Computer Literacy (Microsoft)</span><br />
          <span className="text-blue-500">&#9632;</span> <span className="ml-2">Design (Canva)</span><br />
        </div>
      </div>


      </div>
    </Layout>
  );
}
