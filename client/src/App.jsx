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
import GenricSidebar from "./components/GenricSidebar";
import RelaxingActivities from "./pages/RelaxingActivities";
import Exercise from "./pages/Exercise";
import DailyActivities from "./pages/daily-activities/DailyActivities";
import MeditationTracker from "./pages/daily-activities/MeditationTracker";
import AnxietyPage from "./pages/Meditation/AnxietyPage";
import StepMeditation from "./pages/Meditation/StepMeditation";
import Meditation from "./pages/Meditation";

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

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <div>
          <Header></Header>
        </div>
        <div className="flex">
          <div>
            <GenricSidebar />
          </div>
          <div className="flex justify-center mx-auto">
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
              <Route path="/projects" element={<Projects />} />
              <Route path="/post/:postSlug" element={<PostPage />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="daily-activities" element={<DailyActivities />} />
              <Route path="meditation-tracker" element={<MeditationTracker />} />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/meditation/AnxietyPage" element={<AnxietyPage />} />
              <Route path="/meditation/StepMeditation" element={<StepMeditation />} />
            </Routes>
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}
