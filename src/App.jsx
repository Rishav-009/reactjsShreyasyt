import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    role: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    pay: "$120/hr",
    posted: "2 days ago",
    location: "Seattle, WA",
  },
  {
    id: 2,
    company: "Google",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
    role: "Frontend Developer",
    type: "Full-Time",
    level: "Mid Level",
    pay: "$95/hr",
    posted: "1 day ago",
    location: "Mountain View, CA",
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png",
    role: "React Developer",
    type: "Full-Time",
    level: "Senior Level",
    pay: "$110/hr",
    posted: "3 days ago",
    location: "Redmond, WA",
  },
  {
    id: 4,
    company: "Apple",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    role: "UI Engineer",
    type: "Hybrid",
    level: "Mid Level",
    pay: "$105/hr",
    posted: "5 days ago",
    location: "Cupertino, CA",
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-logo.png",
    role: "Product Designer",
    type: "Remote",
    level: "Senior Level",
    pay: "$130/hr",
    posted: "Today",
    location: "Los Gatos, CA",
  },
  {
    id: 6,
    company: "Meta",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
    role: "Full Stack Developer",
    type: "Full-Time",
    level: "Senior Level",
    pay: "$125/hr",
    posted: "4 days ago",
    location: "Menlo Park, CA",
  },
  {
    id: 7,
    company: "Adobe",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    role: "UX Researcher",
    type: "Remote",
    level: "Mid Level",
    pay: "$90/hr",
    posted: "6 days ago",
    location: "San Jose, CA",
  },
  {
    id: 8,
    company: "Spotify",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png",
    role: "Frontend Engineer",
    type: "Hybrid",
    level: "Junior Level",
    pay: "$80/hr",
    posted: "Yesterday",
    location: "New York, NY",
  },
  {
    id: 9,
    company: "Tesla",
    logo: "https://1000logos.net/wp-content/uploads/2018/02/Tesla-Logo.png",
    role: "Software Engineer",
    type: "Full-Time",
    level: "Mid Level",
    pay: "$115/hr",
    posted: "2 hours ago",
    location: "Austin, TX",
  },
  {
    id: 10,
    company: "Airbnb",
    logo: "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.png",
    role: "UI Developer",
    type: "Remote",
    level: "Senior Level",
    pay: "$118/hr",
    posted: "1 week ago",
    location: "San Francisco, CA",
  },
];
  return (
    <div className="parent">
      {jobs.map(function(job){
        return <Card 
        key={job.id}
        company={job.company}
        logo={job.logo}
        role={job.role}
        type={job.type}
        level={job.level}
        pay={job.pay}
        posted={job.posted}
        location={job.location}
        />;
      })}
    </div>
  );
};
export default App; 
