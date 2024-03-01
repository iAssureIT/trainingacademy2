"use client";

import React, { useState } from "react";

import CreateRole from "@/modules/RoleManagement/create-role.js"

export default function CreateRolePage(params) {

    return (
        <div className="block">
            <CreateRole _id={params._id} />
        </div>
    );
}
