"use client";

import React, { useState } from "react";

import CreateUser from "@/modules/UserManagement/create-user.js"

export default function CreateUserPage() {

    return (
        <div className="block">
            <CreateUser />
        </div>
    );
}
