"use client"
import React, {useEffect, useState} from "react";

import {menuConfigItem} from "@/components/menu/menuConfig/menuConfigItem";
import {Menu} from "antd";

import type {MenuProps} from "antd";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {setActiveMenuName} from "@/store/slices/headerSlice"; // App Router uchun


export const MainMenu = ({
                             activeMenu,
                             onClose,
                         }: {
    activeMenu?: boolean;
    onClose?: () => void;
}) => {
    const router = useRouter();


    const [activeMenuName, setActiveMenuLabel] = useState<string | null>(null);
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

    const dispatch = useDispatch()

    useEffect(() => {
        const savedName = localStorage.getItem("activeMenuName");
        const savedItem = localStorage.getItem("activeMenuItem");
        setActiveMenuLabel(savedName);
        setActiveMenuItem(savedItem);
        dispatch(setActiveMenuName(activeMenuName))

    } , [activeMenuName])
    const onClick = (key : string) => {
        // @ts-ignore
        const menuItem = menuConfigItem.find(item  => item.key === key);

        localStorage.setItem("activeMenuItem", key);
        localStorage.setItem("activeMenuName", menuItem?.description || "");
        setActiveMenuItem(key);
        setActiveMenuLabel(menuItem?.description || "");
        router.push("/" + key);
        onClose?.()
    }

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed z-4 inset-0 bg-[#00000090] backdrop-blur-sm transition-opacity duration-300
        ${activeMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* Left Sidebar */}
            <div
                className={`fixed z-50 mt-[10px] rounded-r-lg  left-0 h-full w-[300px] bg-card shadow-xl transition-transform duration-300 
        ${activeMenu ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/*<div className="p-5 text-xl font-semibold">Menu</div>*/}
                <Menu
                    mode="inline"
                    style={{
                        border: "none",
                        padding: "10px",
                        backgroundColor: "oklch(0.145 0 0)",
                        borderRadius: " 0 10px 0 0 ",
                        fontSize: "16px"
                    }}
                    //@ts-ignore
                    items={menuConfigItem}
                    theme={"dark"}
                    //@ts-ignore

                    selectedKeys={[activeMenuItem]}
                    onClick={({ key }) => onClick(key)}
                />


                {/* menu items */}
            </div>
        </>
    );
};
