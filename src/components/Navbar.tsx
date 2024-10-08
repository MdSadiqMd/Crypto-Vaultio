"use client";

import { Wallet } from "lucide-react";
import React from "react";

import { ModeToggle } from "./ui/theme-button";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
                <Wallet className="size-8" />
                <div className="flex flex-col gap-4">
                    <span className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
                        Vault.io{" "}
                    </span>
                </div>
            </div>
            <ModeToggle />
        </nav>
    );
};

export default Navbar;