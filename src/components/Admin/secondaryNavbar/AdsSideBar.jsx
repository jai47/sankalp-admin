import React from 'react';
import { BsCommand } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';

const AdsSideBar = () => {
    const [search, setSearch] = React.useState('');

    return (
        <nav className="h-full w-[17%] bg-[#ffffff] relative">
            <div className="w-full h-[7%] border-b border-[#E1E0DC] flex justify-center items-center">
                <div className="flex items-center justify-around bg-[#ececec] rounded-md gap-2 py-2 px-1">
                    <IoSearchOutline />
                    <input
                        type="text"
                        className="text-xs border-none outline-none w-[70%] h-full"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <p className="flex justify-center items-center gap-1 text-xs bg-[#ffffff] border border-[#d5d5d5] p-1 rounded-md">
                        <BsCommand size={10} /> <span>K</span>
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default AdsSideBar;
