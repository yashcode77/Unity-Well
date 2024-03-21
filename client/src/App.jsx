// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import SignIn from "./pages/SignIn";
// import Dashboard from "./pages/Dashboard";
// import Projects from "./pages/Projects";
// import SignUp from "./pages/SignUp";
// import Landing from "./pages/Landing";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import PrivateRoute from "./components/PrivateRoute";
// import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
// import CreatePost from "./pages/CreatePost";
// import UpdatePost from "./pages/UpdatePost";
// import PostPage from "./pages/PostPage";
// import ScrollToTop from "./components/ScrollToTop";
// import Search from "./pages/Search";
// import Diary from "./pages/Diary";
// import Calendly from "./components/Calendly"

// // import DashSidebar from "./components/DashSidebar";
// import GenricSidebar from './components/GenricSidebar'
// import RelaxingActivities from "./pages/RelaxingActivities";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <Header />
//       <GenricSidebar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/" element={<Landing />} /> */}
//         <Route path="/about" element={<About />} />
//         <Route path="/activities" element={<RelaxingActivities />} />

//         <Route path="/sign-in" element={<SignIn />} />
//         <Route path="/sign-up" element={<SignUp />} />
//         <Route path="/search" element={<Search />} />
//         <Route element={<PrivateRoute />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Route>
//         <Route element={<OnlyAdminPrivateRoute />}>
//           <Route path="/create-post" element={<CreatePost />} />
//           <Route path="/update-post/:postId" element={<UpdatePost />} />
//         </Route>
//         <Route path="/calendly" element={<Calendly />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/post/:postSlug" element={<PostPage />} />
//         <Route path="/diary" element={<Diary />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import Diary from "./pages/Diary";
import Calendly from "./components/Calendly";
import ChatWindow from "./components/ChatWindow";
import GenricSidebar from "./components/GenricSidebar";
import RelaxingActivities from "./pages/RelaxingActivities";
import Exercise from "./pages/Exercise";
import DailyActivities from "./pages/daily-activities/DailyActivities";
import MeditationTracker from "./pages/daily-activities/MeditationTracker";
import AnxietyPage from "./pages/Meditation/AnxietyPage";
import StepMeditation from "./pages/Meditation/StepMeditation";
import Meditation from "./pages/Meditation";
import Questionnaire from "./pages/questionnaire/Questions";
import Community from "./pages/Community";

import EmotionExplorer from "./gameComponents/games/EmotionExplorer";
import ZenPuzzleChallenge from "./gameComponents/games/ZenPuzzleChallenge";
import GratitudeGarden from "./gameComponents/games/GratitudeGarden";
import UnderstandYourself from "./gameComponents/games/UnderstandYourself";
import GoogleMap from "./components/GoogleMap";
import DocDetails from "./components/DocDetails";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />
//       <div className="flex flex-col gap-2">
//         {/* Sidebar on the left */}

//         {/* Main content on the right */}
//         <div className="flex-1 flex flex-col">
//           {/* Header takes full screen width */}
//           <Header />
//           {/* Main content takes full screen width */}
//           <div className="flex-1 overflow-y-auto">
// <Routes>
//   <Route path="/" element={<Home />} />
//   {/* <Route path="/" element={<Landing />} /> */}
//   <Route path="/about" element={<About />} />
//   <Route path="/activities" element={<RelaxingActivities />} />

//   <Route path="/sign-in" element={<SignIn />} />
//   <Route path="/sign-up" element={<SignUp />} />
//   <Route path="/search" element={<Search />} />
//   <Route element={<PrivateRoute />}>
//     <Route path="/dashboard" element={<Dashboard />} />
//   </Route>
//   <Route element={<OnlyAdminPrivateRoute />}>
//     <Route path="/create-post" element={<CreatePost />} />
//     <Route path="/update-post/:postId" element={<UpdatePost />} />
//   </Route>
//   <Route path="/calendly" element={<Calendly />} />
//   <Route path="/projects" element={<Projects />} />
//   <Route path="/post/:postSlug" element={<PostPage />} />
//   <Route path="/diary" element={<Diary />} />
// </Routes>
//           </div>
//           {/* Footer takes full screen width */}
//           <Footer />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }
const agencies = [
  {
    name: 'MindCare Psychiatry Clinic',
    type: 'psychiatrist',
    location: 'Airoli',
    latitude: 19.159581,
    longitude: 72.996645,
  },
  {
    name: 'NutriHealth Diet Clinic',
    type: 'dietician',
    location: 'Rabale',
    latitude: 19.136944,
    longitude: 73.000000,
  },
  {
    name: 'FitGuru Fitness Center',
    type: 'fitness trainer',
    location: 'Ghansoli',
    latitude: 19.123057,
    longitude: 72.999011,
  },
  {
    name: 'SereneMind Meditation Center',
    type: 'meditation center',
    location: 'Thane',
    latitude: 19.218330,
    longitude: 72.978088,
  },
  {
    name: 'MindSpace Psychiatry Clinic',
    type: 'psychiatrist',
    location: 'Koparkhairane',
    latitude: 19.103498,
    longitude: 73.004520,
  },
  {
    name: 'HealthyEats Diet Clinic',
    type: 'dietician',
    location: 'Vashi',
    latitude: 19.075989,
    longitude: 72.998398,
  },
  {
    name: 'StrongLife Fitness Center',
    type: 'fitness trainer',
    location: 'Juinagar',
    latitude: 19.056610,
    longitude: 73.018740,
  },
  {
    name: 'TranquilMind Meditation Center',
    type: 'meditation center',
    location: 'Turbhe',
    latitude: 19.078547,
    longitude: 73.017614,
  },
  {
    name: 'MentalWellness Psychiatry Clinic',
    type: 'psychiatrist',
    location: 'Nerul',
    latitude: 19.0330,
    longitude: 73.0181,
  },
  {
    name: 'DietPlus Diet Clinic',
    type: 'dietician',
    location: 'Seawoods',
    latitude: 19.022585,
    longitude: 73.019767,
  },
  {
    name: 'ActiveFit Fitness Center',
    type: 'fitness trainer',
    location: 'Kharghar',
    latitude: 19.0258,
    longitude: 73.0588,
  },
  {
    name: 'InnerPeace Meditation Center',
    type: 'meditation center',
    location: 'Panvel',
    latitude: 18.9900,
    longitude: 73.1175,
  },
  {
    name: 'Tranquility Wellness Center',
    type: 'psychiatrist',
    location: 'Belapur',
    latitude: 19.0192,
    longitude: 73.0387,
  },
  {
    name: 'Harmony Health Clinic',
    type: 'dietician',
    location: 'CBD Belapur',
    latitude: 19.0183,
    longitude: 73.0413,
  },
  {
    name: 'Elevate Fitness Studio',
    type: 'fitness trainer',
    location: 'Kharghar',
    latitude: 19.0213,
    longitude: 73.0640,
  },
  {
    name: 'Serenity Mindfulness Hub',
    type: 'meditation center',
    location: 'Kamothe',
    latitude: 19.0196,
    longitude: 73.0914,
  },
  {
    name: 'Wellbeing Psychiatry Clinic',
    type: 'psychiatrist',
    location: 'Koperkhairane',
    latitude: 19.1137,
    longitude: 73.0676,
  },
  {
    name: 'NutriVive Diet Center',
    type: 'dietician',
    location: 'Sanpada',
    latitude: 19.0646,
    longitude: 73.0092,
  },
  {
    name: 'PulseFit Gym',
    type: 'fitness trainer',
    location: 'Navi Mumbai',
    latitude: 19.0330,
    longitude: 73.0297,
  },
  {
    name: 'Peaceful Mind Meditation Studio',
    type: 'meditation center',
    location: 'Nerul',
    latitude: 19.0330,
    longitude: 73.0181,
  },
  {
    name: 'Tranquil Life Psychiatry Clinic',
    type: 'psychiatrist',
    location: 'Vashi',
    latitude: 19.0759,
    longitude: 73.0007,
  },
  {
    name: 'HealthyLiving Diet Clinic',
    type: 'dietician',
    location: 'Kopar Khairane',
    latitude: 19.1035,
    longitude: 73.0045,
  },
  {
    name: 'ActiveLife Fitness Hub',
    type: 'fitness trainer',
    location: 'Turbhe',
    latitude: 19.0760,
    longitude: 73.0176,
  },
  {
    name: 'Tranquility Meditation Center',
    type: 'meditation center',
    location: 'Ghansoli',
    latitude: 19.1231,
    longitude: 72.9990,
  },
  {
    name: 'MindEase Psychiatry Clinic',
    type: 'psychiatrist',
    location: 'Panvel',
    latitude: 18.9900,
    longitude: 73.1175,
  },
  {
    name: 'NutriCare Diet Center',
    type: 'dietician',
    location: 'Seawoods',
    latitude: 19.0226,
    longitude: 73.0198,
  },
  {
    name: 'FitFusion Gym',
    type: 'fitness trainer',
    location: 'Navi Mumbai',
    latitude: 19.0330,
    longitude: 73.0297,
  },
  {
    name: 'SoulSpace Meditation Studio',
    type: 'meditation center',
    location: 'Kamothe',
    latitude: 19.0196,
    longitude: 73.0914,
  },
  {
    name: 'MindWell Psychiatry Clinic',
    type: 'psychiatrist',
    location: 'Belapur',
    latitude: 19.0192,
    longitude: 73.0387,
  },
  {
    name: 'NutriFit Diet Clinic',
    type: 'dietician',
    location: 'CBD Belapur',
    latitude: 19.0183,
    longitude: 73.0413,
  },
  {
    name: 'FitFusion Fitness Hub',
    type: 'fitness trainer',
    location: 'Kharghar',
    latitude: 19.0213,
    longitude: 73.0640,
  },
  {
    name: 'MindfulLiving Meditation Center',
    type: 'meditation center',
    location: 'Kamothe',
    latitude: 19.0196,
    longitude: 73.0914,
  },
];


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <div>
          <Header></Header>
        </div>
        <div className="flex">
          {/* <div>
            <GenricSidebar />
          </div> */}
          <div className="flex justify-center w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/" element={<Landing />} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/activities" element={<RelaxingActivities />} />

              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/search" element={<Search />} />
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route element={<OnlyAdminPrivateRoute />}>
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/update-post/:postId" element={<UpdatePost />} />
              </Route>
              <Route path="/calendly" element={<Calendly />} />
              <Route path="/calendly/book-session" element={<Calendly />} />
              <Route path="/calendly/map" element={<GoogleMap agencies={agencies} />} />
              <Route path="/calendly/view-details" element={<DocDetails />} />
              <Route path="/chatbot" element={<ChatWindow />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/post/:postSlug" element={<PostPage />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/exercise" element={<Exercise />} />
              <Route path="/daily-activities" element={<DailyActivities />} />
              <Route
                path="meditation-tracker"
                element={<MeditationTracker />}
              />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/meditation/AnxietyPage" element={<AnxietyPage />} />
              <Route
                path="/meditation/StepMeditation"
                element={<StepMeditation />}
              />
              <Route path="/questions" element={<Questionnaire />} />
              <Route path="/community" element={<Community />} />


              <Route path="/emotion-explorer" element={<EmotionExplorer />} />
              <Route path="/zen" element={<ZenPuzzleChallenge />} />
              <Route path="/gratitude" element={<GratitudeGarden />} />
              <Route path="/understandyourself" element={<UnderstandYourself />} />
            </Routes>
            {/* <FaCommentAlt
              style={chatIconStyle}
              onClick={toggleChatbot} // Toggle chatbot visibility on icon click
            />
            {showChatbot && <ChatWindow />}  */}
            {/* Render chatbot component if showChatbot is true */}
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}
