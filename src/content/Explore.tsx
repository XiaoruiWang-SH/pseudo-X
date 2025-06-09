
import { useEffect, useState } from "react";
import search from "../assets/search.svg"
import more_account from "../assets/more_account.svg"
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
        <div className="flex justify-between items-center h-[40px] px-2.5 border-b-[0.5px] border-gray-300">
            {
                tabs.map((ele, index) =>
                    <div key={index} className="flex justify-center items-center gap-2.5 hover:bg-gray-300 w-full h-full relative"
                        onClick={() => {
                            handleClick({ index });
                        }}>
                        <div>{ele.title}</div>
                        <div className={`bg-blue-400 w-1/2 h-1 rounded-[2px]  absolute bottom-0 ${!ele.selected ? "hidden" : ""}`}></div>
                    </div>
                )
            }
        </div>
    );
}


export const Trending = () => {
    const trending = [
        { title: "Politics. Trending", content: "Los Angeles", count: "1.82M" },
        { title: "Trending in Switzerland", content: "#Madleen", count: "295K" },
        { title: "Sports. Trending", content: "#RolandGarros2025", count: "45K" },
        { title: "Sports. Trending", content: "#PORESP", count: "34.7K" },
        { title: "Politics. Trending", content: "Greta", count: "962K" },
        { title: "Sports. Trending", content: "Nuno", count: "616K" },
        { title: "Sports. Trending", content: "Sinner", count: "333K" },
        { title: "Sports. Trending", content: "Alcaraz", count: "522K" },
        { title: "Politics. Trending", content: "California", count: "1.22M" },
        { title: "Politics. Trending", content: "National Guard", count: "908K" },
        { title: "Politics. Trending", content: "Gaza", count: "1.59M" },
        { title: "Trending in Switzerland", content: "Demonstranten", count: "5117" },
        { title: "Gaming. Trending", content: "Xbox", count: "338K" },
    ]

    return (
        <div className="flex flex-col gap-4 h-[calc(100dvh-110px)] overflow-scroll">
            {
                trending.map((ele, index) =>
                    <TrendingCell key={index} title={`${index+1}. ${ele.title}`} content={ele.content} count={ele.count} />
                )
            }
        </div>

    );
}

const TrendingCell = ({ title, content, count }: { title: string, content: string, count: string }) => {
    return (
        <div className="flex justify-between items-start">
            <div className="flex flex-col">
                <div className="text-sm text-gray-600">
                    {title}
                </div>
                <div className="font-semibold">
                    {content}
                </div>
                <div className="text-sm text-gray-600">
                    {count} posts
                </div>
            </div>
            <img src={more_account} alt="more" />
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