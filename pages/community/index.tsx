import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
    const [title, setTitle] = useState<string>('hello')
    return <div>COMMUNITY { " "}
    <button onClick={() => alert("Helllo Mit!")} style={{margin: "15px"}}> PressMe</button>
    </div>
};

export default withLayoutBasic(Community);
