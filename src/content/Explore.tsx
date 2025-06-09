
import { useEffect, useState } from "react";
import search from "../assets/search.svg"
import { Outlet, useLocation, useNavigate } from "react-router";

export const Explore = () => {

    let [tabs, setTabs] = useState([
        { title: "Trending", route: "/explore/trending", selected: true },
        { title: "News", route: "/explore/news", selected: false },
        { title: "Sports", route: "/explore/sports", selected: false },
        { title: "Entertainment", route: "/explore/entertainment", selected: false }
    ]);

    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        let pathname = location.pathname;
        console.log(`location.pathname: ${pathname}`);
        if (pathname == "/explore") {
            pathname += "/trending";
        }
        let newTabs = tabs.map((ele) => {
            if (ele.route == pathname) {
                ele.selected = true;
            } else {
                ele.selected = false;
            }
            return ele;
        });
        setTabs(newTabs);
    }, [location]);

    return (
        <div className="px-2.5 flex flex-col gap-2.5">
            <SearchBar />
            <SwitchTab tabs={tabs} handleClick={({ index }) => {
                navigate(tabs[index].route);
            }} />
            <Outlet />
        </div>
    );
}

const SearchBar = () => {
    return (
        <div className="flex justify-center items-center border-[0.5px] border-black h-[40px] rounded-[20px] px-2 gap-2.5">
            <img className="w-[20px]" src={search} alt="search" />
            <input type="text" className="w-full h-full outline-0" placeholder="search" />
        </div>
    );
}

const SwitchTab = ({ tabs, handleClick }: { tabs: { title: string, route: string, selected: boolean }[], handleClick: ({ index }: { index: number }) => void }) => {
    return (
        <div className="flex justify-between items-center h-[40px] px-2.5">
            {
                tabs.map((ele, index) =>
                    <div key={index} className="flex justify-center items-center gap-2.5 hover:bg-gray-300 w-full h-full relative"
                        onClick={() => {
                            handleClick({ index });
                        }}>
                        <div>{ele.title}</div>
                        <div className={`bg-blue-400 w-1/2 h-1 absolute bottom-0 ${!ele.selected ? "hidden" : ""}`}></div>
                    </div>
                )
            }
        </div>
    );
}


export const Trending = () => {
    return (
        <div>
            Trending
        </div>
    );
}

export const News = () => {
    return (
        <div>
            News
        </div>
    );
}

export const Sports = () => {
    return (
        <div>
            Sports
        </div>
    );
}

export const Entertainment = () => {
    return (
        <div>
            Entertainment
        </div>
    );
}