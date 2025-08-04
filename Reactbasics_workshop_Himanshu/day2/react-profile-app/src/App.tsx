import ProfileCard from './components/ProfileCard';
import './App.css';

const users = [
  {
    name: "John Cena",
    age: 28,
    email: "cena@workplace.com",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    badges: ["Frontend", "React", "TypeScript"],
    socials: { twitter: "https://twitter.com/johncena", linkedin: "https://linkedin.com/in/johncena" },
    bio: "John is a frontend developer with 2 years of experience in React and TypeScript. He loves hiking and photography in his free time."
  },
  {
    name: "Dwayne Johnson",
    age: 35,
    email: "dwayne.johnson@workplace.com",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    badges: ["Backend", "Node.js", "Microservices"],
    socials: { twitter: "https://twitter.com/djohnson", linkedin: "https://linkedin.com/in/djohnson" },
    bio: "Dwayne is a backend engineer specializing in Node.js and microservices architecture. He's also an amateur chef who enjoys cooking Italian cuisine."
  },
  {
    name: "Roman Reigns",
    age: 42,
    email: "romanReigns@company.org",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    badges: ["Full Stack", "Mentor", "Team Lead"],
    socials: { linkedin: "https://linkedin.com/in/rreigns" },
    bio: "Roman is a full-stack developer and team lead. With over 15 years in the industry, he mentors junior developers and contributes to open-source projects."
  }
];

const App = () => (
  <div className="app">
    <h1 className="title">Profile Cards</h1>
    <div className="wave-bg"></div>
    <div className="cards-container">
      {users.map((u) =>
        <ProfileCard
          key={u.email}
          name={u.name}
          age={u.age}
          email={u.email}
          avatarUrl={u.avatarUrl}
          badges={u.badges}
          socials={u.socials}
        >
          {u.bio}
        </ProfileCard>
      )}
    </div>
  </div>
);

export default App;
