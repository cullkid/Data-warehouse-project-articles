import "./App.css";
import Logo from "./img/mylogo.jpg";
import { FaPlaneDeparture } from "react-icons/fa";
import Accident2 from "./img/accident2.png";
import Accident4 from "./img/accident4.png";
import Accident3 from "./img/accident3.png";
import { FaCarCrash } from "react-icons/fa";
import Weather from "./img/weather.png";
import Weather2 from "./img/weather2.png";
import Badroad from "./img/badroad.png";
import Dymention from "./img/dymention.png";
import Monthtrend from "./img/monthtrend.png";
import Distance from "./img/distance.png";

function App() {
  return (
    <div className="w-[1000px]  mx-auto mt-[15px] ">
      <div className="flex w-[1000px] justify-between items-center mx-auto mt-[15px]">
        <div className="flex flex-col justify-center items-center">
          <img
            src={Logo}
            alt=""
            className="w-[100px] h-[100px] rounded-full border-4"
          />
          <p className="font-bold text-blue-700">Author</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl font-bold">Vehicle Accidents</span>
          <div className="flex justify-between items-center w-[400px]">
            font
            <FaCarCrash className="text-xl text-blue-600" />
            <span className="font-serif">
              A Global Threat and Data‑Driven Prevention
            </span>
            <FaPlaneDeparture className="text-xl text-blue-600" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold">Duration</span>
          <span>One Week</span>
        </div>
      </div>

      <hr className="mt-[25px]" />

      <div className="mt-[25px]">
        <div>
          <span className="font-bold underline mr-2 text-blue-600">
            What is Accident?
          </span>
          A vehicle (road traffic) accident is essentially a collision involving
          one or more vehicles (cars, motorcycles, trucks, etc.) on a public
          road, often also involving pedestrians or stationary objects. In
          technical terms, a road traffic accident (RTA) is “an accident
          occurring on a road or road open to public transport, resulting in the
          death or injury of one or more individuals and the presence of at
          least one moving vehicle”. In other words, any crash on the public way
          that causes injury or damage qualifies as a vehicle accident. Such
          incidents can range from minor fender-benders to catastrophic
          collisions causing multiple fatalities and disabilities.
        </div>
        <div className="mt-[10px]">
          <span className="font-bold underline mr-2 text-blue-600">
            Plane crash
          </span>{" "}
          is also another tragic accident involving an aircraft that fails to
          land safely, often resulting in damage, injuries, or loss of life.
          These crashes can be caused by technical failures, weather conditions,
          human error, or even intentional acts. Though rare, the impact of
          plane crashes is profound—they lead to loss of lives, emotional trauma
          for families, and financial costs for airlines and governments.
          Globally, they also raise concerns about aviation safety, trigger
          investigations, and often lead to improvements in air travel
          technology, training, and regulations to help prevent future
          tragedies.
        </div>
        <div className="flex items-center justify-center py-[50px]">
          <div className="w-[450px] p-4 rounded-2xl">
            <img src={Accident2} alt="" className="rounded-2xl" />
          </div>
          <div className="w-[450px] rounded-2xl">
            <img src={Accident3} alt="" className="rounded-2xl" />
          </div>
        </div>
        <div className="w-[850px] rounded-2xl flex mx-auto">
          <img src={Accident4} alt="" className="rounded-2xl" />
        </div>

        <div>
          <div className="mt-[20px]">
            <span className="font-bold underline mr-2 text-blue-600">
              How is accident a global threat?
            </span>
            Vehicle crashes are a major global public health and social problem.
            Every year roughly 1.2 million people die worldwide in road
            collisions, and another 20–50 million suffer non-fatal injuries
            (many of which lead to permanent disability) . These tolls make
            traffic crashes one of the leading causes of death and injury
            globally, especially among the young: road injuries are the #1 cause
            of death for people aged 5–29 years. The burden falls
            disproportionately on low- and middle-income countries (which
            account for about 92% of the deaths despite having ~60% of vehicles)
          </div>
          <ul className="list-disc pl-10 mt-[5px]">
            <li>
              <span className="font-bold underline mr-2 text-blue-600">
                Human impact:
              </span>
              Millions of families are affected each year. Victims may be
              killed, severely injured, or disabled, creating lifelong medical
              and social needs. One study notes that crashes “lead to poverty by
              causing loss of productivity, injury, disability, sorrow, and
              death” . Survivors often require long‑term care, and loved ones
              may suffer psychological trauma. Vulnerable road users
              (pedestrians, cyclists, motorcyclists) bear many of the casualties
            </li>
          </ul>
          <ul className="list-disc pl-10 mt-[5px]">
            <li>
              <span className="font-bold underline mr-2 text-blue-600">
                Economic cost:
              </span>
              Crashes impose a huge economic burden. The World Health
              Organization estimates road crashes cost most countries on the
              order of 3% of GDP. These costs include emergency response,
              medical care, vehicle damage, and lost productivity for victims
              and caregivers. For example, the UK estimates about £43 billion in
              crash costs annually (roughly 1.4% of GDP) . Globally, these costs
              can translate to an effective “tax” on the economy – one Lancet
              analysis equated road injuries to about 0.1% of world GDP each
              year.
            </li>
          </ul>
          <ul className="list-disc pl-10 mt-[5px]">
            <li>
              <span className="font-bold underline mr-2 text-blue-600">
                Social impact:
              </span>
              Beyond dollars, crashes disrupt communities and slow development.
              Young people killed or disabled represent future workers and
              parents. Families often face financial hardship when a breadwinner
              dies or is injured. Child traffic deaths and injuries create
              long-term disability burdens. In many places, serious crash
              injuries exceed deaths by a wide margin, placing heavy demands on
              healthcare and social systems
            </li>
          </ul>
        </div>

        <hr className="mt-[25px]" />

        <div className="my-[30px] flex justify-between items-center">
          Due to the critical importance of human safety and its broader impact
          on societal and economic stability, I gathered datasets on the history
          of both vehicle and plane accidents. This analysis aims to uncover
          deeper insights into the causes, patterns, and frequency of these
          incidents, ultimately contributing to informed discussions around
          safety improvements. Additionally, by comparing these two major modes
          of transportation, I explored which offers a safer and more reliable
          means of travel, helping stakeholders and the public make
          better-informed decisions about mobility and risk management.{" "}
        </div>
        <div className="font-bold underline mr-2 text-blue-600">
          Storytelling Insight: Understanding the Patterns Behind Vehicle Crash
          Incidents
        </div>
        <div>
          The goal of this project is to provide actionable insights aimed at
          reducing fatalities and the economic burden caused by vehicle and
          aviation accidents. By identifying key root causes behind these
          incidents, the analysis seeks to recommend practical safety
          improvement measures. The data used in this project was sourced from
          publicly available platforms including data.montgomerycountymd.gov,
          asn.flightsafety.org, and findings from my own personal research.
          While every effort has been made to ensure accuracy, the datasets are
          based on the sources’ original publications and may not reflect my own
          official validation or endorsement.
        </div>

        <hr className="mt-[25px]" />

        <div>
          <div className="font-bold underline mr-2 text-blue-600 mt-[25px]">
            Vehicle Accidents
          </div>
          <div>
            After collecting the vehicle accident data, a complete data pipeline
            was followed to ensure accurate, meaningful, and actionable
            insights. The pipeline consisted of five major stages: Data
            Collection, Data Cleaning, Data Integration, Data Analysis, and Data
            Visualization. The data was first gathered from
            data.montgomerycountymd.gov, then cleaned to handle missing values,
            remove duplicates, and standardize formats. After that, relevant
            fields were integrated to create a unified dataset that supported
            deep analysis. Using Tableau Public for visualization, the analysis
            revealed key trends such as the most common types of collisions,
            peak accident times, high-risk road conditions, and contributing
            factors like driver substance abuse or weather. These insights can
            help inform local authorities, policymakers, and the public in
            implementing targeted safety improvements to reduce traffic-related
            injuries, fatalities, and economic loss.
          </div>
          <div>
            <ul className="list-disc pl-10 mt-[5px]">
              <li>
                <span className="font-bold underline mr-2 text-blue-600">
                  Weather Conditions as a Leading Factor
                </span>
                The "Top 5 Most Accident Weather" chart reveals that CLEAR
                weather surprisingly leads in accident count (65,516), followed
                by RAINING and CLOUDY conditions. This contradicts assumptions
                that poor weather alone causes crashes and implies that driver
                overconfidence during clear weather may be a key contributor.
              </li>
            </ul>
            <div className="my-[15px]">
              <a href="https://public.tableau.com/app/profile/anthony.eze4518/viz/top5mostaccidentbyweather/top5mostaccidentweather?publish=yes">
                <img src={Weather} alt="" className="rounded-2xl" />
              </a>
            </div>
            <div>
              <span className="font-bold text-blue-600">
                📌Recommendation:{" "}
              </span>
              Increase public awareness and training on safe driving practices
              regardless of weather, particularly in optimal conditions. Launch
              safety campaigns focusing on "Don't Relax Just Because It's Clear.
            </div>
          </div>
          <div className="mt-[30px]">
            <ul className="list-disc pl-10 mt-[5px]">
              <li>
                <span className="font-bold underline mr-2 text-blue-600">
                  Time of Day Analysis
                </span>
                The "Time of Crash" visualization indicates night-time crashes
                far outweigh evening crashes (111,117 vs. 7), suggesting reduced
                visibility, driver fatigue, or impaired driving could be major
                factors at night.
              </li>
            </ul>
            <div className="my-[15px]">
              <a href="https://public.tableau.com/app/profile/anthony.eze4518/viz/dayandnightaccidentoccurance/dayandnightaccidentoccurance">
                <img src={Weather2} alt="" className="rounded-2xl" />
              </a>
            </div>
            <div>
              <span className="font-bold text-blue-600">
                📌Recommendation:{" "}
              </span>
              Enhance nighttime visibility on roads using better street lighting
              and reflective signage. Law enforcement presence and sobriety
              checkpoints should be increased during night hours.
            </div>
          </div>
          <div className="mt-[30px]">
            <ul className="list-disc pl-10 mt-[5px]">
              <li>
                <span className="font-bold underline mr-2 text-blue-600">
                  Poor Road Infrastructure Insights
                </span>
                The "Lanes with Most Bad Roads" chart identifies the North and
                South lanes as having the highest crash counts. This might be
                due to higher traffic volumes or infrastructure issues.
              </li>
            </ul>
            <div className="my-[15px]">
              <a href="https://public.tableau.com/app/profile/anthony.eze4518/viz/Badlane/Badlane">
                <img src={Badroad} alt="" className="rounded-2xl" />
              </a>
            </div>
            <div>
              <span className="font-bold text-blue-600">
                📌 Recommendation:{" "}
              </span>
              Prioritize maintenance and inspection schedules for North and
              South lanes. Implement road quality audits and gather driver
              feedback for hazardous spots.
            </div>
          </div>
          <div className="mt-[30px]">
            <ul className="list-disc pl-10 mt-[5px]">
              <li>
                <span className="font-bold underline mr-2 text-blue-600">
                  Crash Impact Type (Dynamic Dimension)
                </span>
                The "Hit and Run" cases (18,333) are significantly higher than
                "Unconfirmed" and "Hit and Stay" incidents, indicating a
                potential lack of accountability and enforcement in many crash
                situations. It can also indicate that majority of the drivers
                involved are not well trained drivers with history of breaking
                law and orders
              </li>
            </ul>
            <div className="my-[15px]">
              <a href="https://public.tableau.com/app/profile/anthony.eze4518/viz/CARCRASHPROJCTKPIsNO_2DynamicdimentionsvisualsbyReportNumbercount/dynamicdimensionvisual">
                <img src={Dymention} alt="" className="rounded-2xl" />
              </a>
            </div>
            <div>
              <span className="font-bold text-blue-600">
                📌 Recommendation:{" "}
              </span>
              Install surveillance cameras at accident-prone areas. Promote
              legal consequences awareness for hit-and-run offenses and reward
              systems for witnesses.
            </div>
          </div>
          <div className="mt-[30px]">
            <ul className="list-disc pl-10 mt-[5px]">
              <li>
                <span className="font-bold underline mr-2 text-blue-600">
                  Trend Over Time (Crash History)
                </span>
                The line graph shows a steady accident frequency from 2015–2019,
                a sudden drop in 2020 (likely due to COVID-19 lockdowns), and a
                resurgence in crash volume post-2021. The red-highlighted points
                from a set action identify peak crash months.
              </li>
            </ul>
            <div className="my-[15px]">
              <a href="https://public.tableau.com/app/profile/anthony.eze4518/viz/interactionablemonthlyaccidenttrends/interactionablemonthlyaccidenttrends">
                <img src={Monthtrend} alt="" className="rounded-2xl" />
              </a>
            </div>
            <div>
              <span className="font-bold text-blue-600">
                📌 Recommendation:{" "}
              </span>
              Use these peak months for targeted safety interventions. For
              instance, ramp up road safety campaigns and traffic law
              enforcement during historically high-risk months.
            </div>
          </div>
          <div className="mt-[30px]">
            <ul className="list-disc pl-10 mt-[5px]">
              <li>
                <span className="font-bold underline mr-2 text-blue-600">
                  Influence of Distance Between Vehicles
                </span>
                The pie chart titled "Distance Might Have Contributed"
                emphasizes that a significant portion (92,546 records) of the
                crashes occurred where distance wasn't maintained adequately
                between vehicles.
              </li>
            </ul>
            <div className="my-[15px]">
              <a href="https://public.tableau.com/app/profile/anthony.eze4518/viz/Distancetrends/Distancetrends">
                <img src={Distance} alt="" className="rounded-2xl" />
              </a>
            </div>
            <div>
              <span className="font-bold text-blue-600">
                📌 Recommendation:{" "}
              </span>
              Enforce minimum safe following distances through smart traffic
              cameras and warning systems. Incorporate distance-keeping training
              in driver license programs and additional percentage charges if
              found guilty on this act after training.
            </div>
          </div>
        </div>

        <hr className="mt-[25px]" />

        <div className="flex pb-[25px]">
          <div className="pr-[5px]">
            For more understanding about this project? use the link to get
            access to my public
          </div>
          <a
            className="font-bold text-blue-700 border-b-2 p-0"
            href="https://public.tableau.com/app/profile/anthony.eze4518/vizzes"
          >
            Tableau page
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
