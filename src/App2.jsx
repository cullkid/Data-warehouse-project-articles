// import "./App.css";
// import Logo from "./img/mylogo.jpg";
// import Table from "./img/createTable.png";
// import Warehouse from "./img/createWarehouse.png";
// import TableSchema from "./img/tableSchema.png";
// import Bronze1 from "./img/bronze1.png";
// import Bronze2 from "./img/bronze2.png";
// import TableSource from "./img/tableSource.png";
// import InsertSilver from "./img/insertSilver.png";
// import InsertSilver2 from "./img/insertSilver2.png";
// import InsertGold from "./img/insertGold.png";
// import InsertGold2 from "./img/insertGold2.png";
// import Relationship from "./img/relationship.png";
// import Relashionship2 from "./img/relationship2.png";
// import { TbBusinessplan } from "react-icons/tb";

// function App() {
//   return (
//     <div className="w-[1000px]  mx-auto mt-[15px]">
//       <div className="flex w-[1000px] justify-between items-center mx-auto mt-[15px]">
//         <div className="flex flex-col justify-center items-center">
//           <img
//             src={Logo}
//             alt=""
//             className="w-[100px] h-[100px] rounded-full border-4"
//           />
//           <p className="font-bold text-blue-700">Author</p>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <span className="text-2xl font-bold">
//             Big Data Warehouse Architecture
//           </span>
//           <div className="flex justify-between items-center w-[400px]">
//             <TbBusinessplan className="text-xl text-blue-600" />
//             <span className="font-serif">
//               For Business Transactions Over The Past Years
//             </span>
//             <TbBusinessplan className="text-xl text-blue-600" />
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <span className="font-bold">Duration</span>
//           <span>01/01/2025 - 25/03/2025</span>
//         </div>
//       </div>

//       <hr className="mt-[25px]" />

//       <div className="mt-[25px]">
//         <div>
//           This project focuses on designing and implementing a structured{" "}
//           <span className="font-bold">
//             Business Sales Data Warehouse Architecture
//           </span>{" "}
//           from scratch using SQL Server Management Studio (SSMS) and Draw.io.
//           The objective was to optimize historical sales data storage,
//           transformation, and analysis by following a multi-layered schema
//           architecture. The dataset is consist of six database: customer_info
//           product_info and sales_details cust_az12 loc_a101 px_cat_g1v2, these
//           six tables after cleaning and joining at the end will be three tables
//           insde gold schema.The Warehouse is structured to have three schema
//           layers which will be used to store the data accordingly
//         </div>
//         <div className="my-[30px] flex justify-between items-center">
//           <div className="w-[300px] border-2 p-4 rounded-2xl border-gray-200">
//             <p className="flex items-center justify-center pb-4 text-blue-600 font-bold">
//               Creating Data Warehouse
//             </p>
//             <img src={Warehouse} alt="" />
//           </div>
//           <div className="w-[300px] border-2 p-4 rounded-2xl border-gray-200">
//             <p className="flex items-center justify-center pb-4 text-blue-600 font-bold">
//               Creating Table
//             </p>
//             <img src={Table} alt="" />
//           </div>
//           <div className="w-[300px] border-2 p-4 rounded-2xl border-gray-200">
//             <p className="flex items-center justify-center pb-4 text-blue-600 font-bold">
//               Dataset Dimention
//             </p>
//             <img src={TableSchema} alt="" />
//           </div>
//         </div>
//         <hr className="mt-[25px]" />

//         <div>
//           <div className="mt-[25px]">
//             A well-designed data warehouse always begins with a complete data
//             modeling process, which involves carefully planning and structuring
//             how data will be stored, organized, and related across different
//             layers. In my project, I followed a layered data architecture
//             (Bronze, Silver, and Gold) and applied dimensional modeling to
//             ensure efficient data flow and meaningful business insights.
//           </div>
//         </div>

//         <div className="mt-[25px]">
//           <div>
//             <div className="mt-[25px] font-bold text-blue-600">
//               Key Concepts in Data Modeling:
//             </div>
//             <ul className="list-disc pl-10">
//               <li>
//                 Entities – Real-world objects (e.g., Customers, Orders,
//                 Products).
//               </li>
//               <li>
//                 Attributes – Properties of entities (e.g., Customer Name, Order
//                 Date).
//               </li>
//               <li>
//                 Relationships – Connections between entities (e.g., A Customer
//                 places Orders).
//               </li>
//               <li>
//                 Primary Key (PK) – A unique identifier for each record in a
//                 table.
//               </li>
//               <li>
//                 Foreign Key (FK) – A reference to a primary key in another
//                 table.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-[25px]">
//           <div className="mt-[25px] font-bold text-blue-600">
//             Types of Data Models
//           </div>
//           <div className="mt-[5px] font-bold">
//             1. Conceptual Data Model (High-Level, Business View, Big Picture)
//           </div>
//           <ul className="list-disc pl-10">
//             <li>
//               What it does: Shows the big picture of data, focusing on entities
//               and their relationships.
//             </li>
//             <li>Example: A Customer places an Order.</li>
//             <li>Best for: Business stakeholders & planning.</li>
//           </ul>
//           <div className="mt-[5px] font-bold">
//             2. Logical Data Model (Detailed, Structured View, Blueprint)
//           </div>
//           <ul className="list-disc pl-10">
//             <li>
//               What it does: Defines the structure of data, including attributes,
//               primary keys, and relationships, but without database-specific
//               details.
//             </li>
//             <li>
//               Example: Customer (Customer_ID, Name, Email) Order (Order_ID,
//               Customer_ID, Order_Date)
//             </li>
//             <li>Best for: Database architects & analysts. </li>
//           </ul>
//           <div className="mt-[5px] font-bold">
//             3. Physical Data Model (Implementation, Database-Specific)
//           </div>
//           <ul className="list-disc pl-10">
//             <li>
//               What it does: Translates the logical model into an actual database
//               schema, specifying table structures, data types, and indexes.
//             </li>
//             <li>
//               Example: Customer_ID INT PRIMARY KEY, Name VARCHAR(255), Email
//               VARCHAR(255).
//             </li>
//             <li>Best for: Database administrators & developers. </li>
//           </ul>
//           <div className="mt-[25px]">
//             <div className="mt-[25px] font-bold text-blue-600">
//               Why is Data Modeling Important?
//             </div>
//             <ul className="list-disc pl-10">
//               <li>✅ Ensures Data Consistency & Accuracy </li>
//               <li> ✅ Improves Performance & Scalability </li>
//               <li> ✅ Reduces Redundancy & Errors </li>
//               <li> ✅ Enhances Query & Reporting Efficiency </li>
//             </ul>
//           </div>
//         </div>
//         <hr className="mt-[25px]" />

//         <div className="mt-[25px]">
//           <div>
//             <span className="font-bold text-blue-600">
//               1. Bronze Layer Raw Data (Staging Area):
//             </span>{" "}
//             This layer acts as the raw data storage zone, where data is ingested
//             directly from the source without any transformations. It ensures we
//             preserve the original state of the data for audit or debugging
//             purposes.
//           </div>
//           <div className="font-medium mt-[5px] ml-[25px]">
//             Tables in this layer:
//           </div>
//           <ul className="list-disc pl-10">
//             <li className="">Customer Info</li>
//             <li className="">Product Info</li>
//             <li className="">Sales Details</li>
//           </ul>
//           <div className="py-8">
//             <p className="flex justify-center items-center pb-6">
//               Query To Insert Data into Bronze Schema
//             </p>
//             <div className="flex justify-between items-center">
//               <img src={Bronze1} alt="" className="w-[500px] h-[300px]" />
//               <img src={Bronze2} alt="" className="w-[500px] h-[300px]" />
//             </div>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <p>
//               The created tables has two different source{" "}
//               <span className="font-bold">ERM</span> and{" "}
//               <span className="font-bold">ERP</span>
//             </p>
//             <img src={TableSource} alt="" />
//           </div>
//         </div>
//       </div>

//       <div className="mt-[25px]">
//         <div>
//           <span className="font-bold text-blue-600">
//             2. Silver Schema (Refined Data Layer):
//           </span>{" "}
//           Extracted, cleaned, and transformed data from the three-bronze layer,
//           ensuring consistency, integrity, and relational structuring for
//           advanced analysis, and then use the cleaned data tables to create the
//           silver schema tables.To ensure data integrity, consistency, and
//           accurate transformation, I established relationships among the six key
//           tables — customer_info, product_info, sales_details, cust_az12,
//           loc_a101, and px_cat_g1v2 — by linking their primary and foreign keys.
//           These relationships were carefully mapped based on their unique
//           identifiers, allowing me to perform accurate data cleaning, resolve
//           duplicates, and ensure referential integrity across the dataset. This
//           relational structure played a critical role in building a reliable and
//           well-structured data model that supports meaningful analysis and
//           reporting.
//         </div>
//         <div className="flex flex-col items-center mt-[15px]">
//           <p className="pb-[18px] font-medium">
//             Quey to clean the bronze table and link their relationship
//           </p>
//           <div className="flex justify-between items-center w-full">
//             <img src={InsertSilver} alt="" className="w-[500px] h-[250px]" />
//             <img src={InsertSilver2} alt="" className="w-[500px] h-[250px]" />
//           </div>
//         </div>
//       </div>

//       <div className="mt-[25px]">
//         <div>
//           <span className="font-bold  text-blue-600">
//             3. Gold Schema (Optimized Reporting Layer):
//           </span>{" "}
//           Aggregated and structured the cleaned silver data into
//           high-performance tables optimized for reporting, insights, and
//           business intelligence by merging or joining the tables relationships.
//         </div>
//         <div className="flex flex-col items-center mt-[15px]">
//           <p className="pb-[18px] font-medium">
//             Query for joining the tables relationships
//           </p>
//           <div className="flex justify-between items-center w-full">
//             <img src={InsertGold} alt="" className="w-[500px] h-[250px]" />
//             <img src={InsertGold2} alt="" className="w-[500px] h-[250px]" />
//           </div>
//         </div>
//         <div className="flex flex-col items-center mt-[15px]">
//           <p className="pb-[18px] font-medium">Relationship Tables</p>
//           <div className="flex justify-between items-center w-full">
//             <img src={Relationship} alt="" className="w-[500px] h-[250px]" />
//             <img src={Relashionship2} alt="" className="w-[500px] h-[250px]" />
//           </div>
//         </div>
//       </div>

//       <div className="py-[35px]">
//         <span className="font-bold text-blue-600">
//           Final Gold Schema Overview:
//         </span>{" "}
//         The Gold schema represents the final curated layer of the data warehouse
//         and consists of three core tables: Customer Dimension, Product
//         Dimension, and Sales Fact. These tables are derived by combining and
//         joining data from the six cleaned tables in the Silver schema. The
//         result is a comprehensive and reliable dataset, with high data quality
//         and accuracy, ready to be used for advanced business analysis. By
//         modeling the Gold layer with both dimension and fact tables, the
//         structure supports efficient querying and enables the generation of
//         meaningful KPIs, trends, and business insights over the past years. This
//         dimensional model serves as the foundation for performance tracking and
//         strategic decision-making.
//       </div>
//       <div className="flex pb-[25px]">
//         <div className="pr-[5px]">
//           For more understanding about this project? use the link to get access
//           the
//         </div>
//         <a
//           className="font-bold text-blue-700 border-b-2 p-0"
//           href="https://github.com/cullkid/SQL_Data_Warehouse_Analysis_Project"
//         >
//           Github
//         </a>
//       </div>
//     </div>
//   );
// }

// export default App;
