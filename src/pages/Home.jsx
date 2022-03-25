import React, { useState } from 'react'

import Header from '../components/header/Header'
import Navigation from '../components/menu/Navigation'
import Sidebar from "../components/menu/Sidebar"
import NewsList from '../components/newsList/NewsList'
import ChoosePostList from '../components/choosePostList/ChoosePostList'
import FeaturedPosts from '../components/featuredPosts/FeaturedPosts'
import RecentNews from '../components/recentNews/RecentNews'

export default function Home() {

    const [sideBar, setSideBar] = useState(false)

    const toggleSidebar = () => {
        setSideBar(!sideBar)
    }

    document.onclick = function (e) {
        if (e.target.id !== "active" && e.target.tagName !== "svg" && e.target.tagName !== "line") {
            setSideBar(false)
        }
        console.log("CLICKED", e.target)
    }

    console.log("SIDEBAR", sideBar)

    return (
        <div>
            <Header />
            <Navigation toggleSidebar={toggleSidebar} />
            <Sidebar sidebar={sideBar} />
            <NewsList />
            <ChoosePostList />
            <FeaturedPosts />
            <RecentNews />
        </div>
    )
}
