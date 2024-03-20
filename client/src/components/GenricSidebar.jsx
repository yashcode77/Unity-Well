import { Sidebar } from "flowbite-react";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from "react-icons/hi";
import { FaWpexplorer } from "react-icons/fa6";
import { FaTicketAlt, FaPenNib } from "react-icons/fa";
import { SiChatbot } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi2";
import { GiCurledLeaf } from "react-icons/gi";
import { CiPen } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function GenricSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className="w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1 ">
          {/* {currentUser && (
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item
                active={tab === "dash" || !tab}
                icon={HiChartPie}
                as="div"
              >
                Dashboard
              </Sidebar.Item>
            </Link> */}
          {/* )} */}
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              // label={currentUser.isAdmin ? 'Admin' : 'User'}
              label="user"
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === "posts"}
                icon={HiDocumentText}
                as="div"
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          {currentUser && (
            <>
              {/* <Link to="/dashboard?tab=users">
                <Sidebar.Item
                  active={tab === "users"}
                  icon={HiOutlineUserGroup}
                  as="div"
                >
                  Users
                </Sidebar.Item>
              </Link> */}
              {/* <Link to="/dashboard?tab=comments">
                <Sidebar.Item
                  active={tab === "comments"}
                  icon={HiAnnotation}
                  as="div"
                >
                  Comments
                </Sidebar.Item>
              </Link> */}
            </>
          )}
          <Link to="/activities">
            <Sidebar.Item
              active={tab === "activities"}
              icon={FaWpexplorer}
              as="div"
            >
              Explore
            </Sidebar.Item>
          </Link>
          <Link to="/meditation-tracker">
            <Sidebar.Item
              active={tab === "meditation-tracker"}
              icon={GiCurledLeaf}
              as="div"
            >
              meditation-tracker
            </Sidebar.Item>
          </Link>
          <Link to="/community">
            <Sidebar.Item
              active={tab === "Community"}
              icon={HiUserGroup}
              as="div"
            >
              Community
            </Sidebar.Item>
          </Link>
          <Link to="/calendly">
            <Sidebar.Item
              active={tab === "calendly"}
              icon={FaTicketAlt}
              as="div"
            >
              Book Session
            </Sidebar.Item>
          </Link>
          <Link to="/diary">
            <Sidebar.Item active={tab === "diary"} icon={FaPenNib} as="div">
              Journal
            </Sidebar.Item>
          </Link>
          <Link to="/chatbot">
            <Sidebar.Item active={tab === "chatbot"} icon={SiChatbot} as="div">
              Chatbot
            </Sidebar.Item>
          </Link>
          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer"
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
