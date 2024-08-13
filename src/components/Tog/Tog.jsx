import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
import Toggle from "../../core/Toggle/Toggle"
// Example 1: All data provided
const data1 = {
  title: '1.Pre-Feasibility',
  description: 'SPS conducts a systematic preliminary assessment of all critical elements of the project in the initial phase.',
  ass_title: "Assessments of connection options and sensitivities including:",
  assessments: [
    'Network capacity assessment;',
    'Voltage impact studies;',
    'System strength and short circuit calculations;',
    'Remediation options such as runbacks, and special protection schemes.'
  ],
  eng_title:"Engagement with key parties, such as:",
  engagements: [
    'OEM to assess fitness of models and control architecture;',
    'NSP and AEMO to support in the decision making around connection location and obligations under the NER.'
  ]
};

// Example 2: Some data missing
const data2 = {
  title: '2. Connection Application',
  description: 'SPS develops complete Connection Application packages and supports clients through the application process.',
  ass_title: "SPS delivers all key assessments required for CA:",
  assessments: [
    'Generator Performance Standards (GPS) and Connection Study Reports (CSR).',
    'Power quality and harmonic emissions assessment and preliminary filter sizing. ',
    'PSSe & PSCAD Models and Releasable User Guide (RUG) development.',
    'Dynamic Model Acceptance Tests (DMAT) and Benchmarking report.',
    'Voltage Control Strategy Report (VCS), Single Line Diagrams (SLD), Protection Reports.',
    'Support in negotiating GPS with NSPs and AEMO.'
  ],
};

// Example 3: Minimal data
const data3 = {
  title: '3. Registration (R1)',
  description: 'SPS develops complete R1 packages and supports clients through the application process.',
  ass_title: "Developing R1 studies packages as per Connection Application with updated as built info, as well as:",
  assessments: [
    'Transformer energization.',
    'Communications fail.',
    'PFR.',
    'Commissioning program.',
    'Addressing unresolved compliance issues before registration.',
    'Supporting negotiations with NSPs and AEMO.'
  ],
};


// Example 3: Minimal data
const data4 = {
  title: '4. R2 Testing & Model validation',
  description: 'We provide clients with support through commissioning, hold point testing and the R2 process.',
  ass_title: "",
  assessments: [
    'Pre-test simulation studies.',
    'Developing GPS compliance test plans.',
    'GPS testing support.',
    'Hold point reports.',
    'R2 reports and model validation.',
    'FCAS testing support.',
    'Addressing unresolved compliance matters',
    'Negotiation with NSPs and AEMO.',
    'Witnessing FAT and SAT of primary and secondary equipment.',
  ],
};

const data5 = {
  title: '5. Ongoing Compliance',
  description: 'SPS develops and implements Compliance Monitoring Programs in accordance with NER requirements and industry best practice.',
  ass_title: "",
  assessments: [
    'Developing Compliance Monitoring Programs tailored to your site.',
    'Implementing compliance monitoring systems for the retrieval, storage and processing  of high-speed data to produce evidence of compliance.',
    'Produce routine compliance monitoring reports. ',
    'Investigating trips, faults and failures.',
    'Performing site technical compliance reviews, including review of the existing compliance framework, test reports and other records used as evidence of ongoing compliance.'
  ],
};

const data6 = {
  title: '6. Strategic REview & Plan',
  description: 'Developing a connection strategy enables the identification of the most suitable approach for projects, reducing regulatory risk and timeframes.',
  ass_title: "",
  assessments: [
    'Review project status and objectives.',
    'Review schedule, submission requirements and interaction with the Network Service Provider and AEMO.',
    'Review contractual milestone requirements. ',
    'Review intended consultant and OEM for grid connection, and their capabilities, strengths and weaknesses.',
    'Complete a risk assessment of intended delivery methods, with regard to the difficulty of progress and project impacts with your OEM, clients, AEMO and NSP.',
    "Develop mitigation strategies to minimise requirements and progress the projects to align with your milestones.",
    "Produce a strategic report documenting the above."
  ],
};

const data7 = {
  title: '7. Project Support',
  description: 'Our ongoing project support service ensures the critical path for the project is maintained.',
  // ass_title: "By closely managing all the documentation and keeping discussions open with AEMO and the NSP, we reduce iterations in the review of projects and consequently manage timeframe risks. ",
  ass_title: "SPS can support your project: ",
  assessments: [
    'Liaison with regulatory and connection bodies to discuss project progress focusing on aligning timeframes and requirements with AEMO, the NSP, the OEM and other key stakeholders.',
    'Reviewing submissions to ensure they are suitable for evaluation. ',
    'Strategic advice about options to resolve issues as they arise to minimise delays and manage timeline risks.',
    'Continuous advocacy for your project.'
  ],
};

const data8 = {
  title: '8. Independent Engineering and Owner\'s Engineering Services',
  ass_title: "SPS provides technical support to lenders and owners. ",
  assessments: [
    'Connection Management.',
    'Independent technical review of connection risks.',
    'Independent technical review of curtailment, MLF & FCAS cost forecasts. ',
    'Technical Due Diligence on connection packages, connection agreements and EPC contracts.',
  ],
};



const Tog = () => (
  <div>
    {/* Render with different sets of data */}
    <Toggle {...data1} />
    <Toggle {...data2} />
    <Toggle {...data3} />
    <Toggle {...data4} />
    <Toggle {...data5} />
    <Toggle {...data6} />
    <Toggle {...data7} />
    <Toggle {...data8} />
  </div>
);
export default Tog;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppContainer />);
