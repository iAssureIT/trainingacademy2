"use client";

import React, { useState } from "react";

import CreateUser from "@/modules/UserManagement/create-user.js"

export default function CreateUserPage(params) {

    return (
        <div className="block">
            <CreateUser  _id={params._id}/>
        </div>
    );
}
