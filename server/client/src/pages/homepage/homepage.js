import React from "react";
import ClassroomLogin from "./components/classroomlogin"
import MakeClassroomButton from "./components/makeClassroomButton"
import Typography from "@material-ui/core/Typography";

const homepage = () => {
    return (
        <div>
            <ClassroomLogin />
            <Typography variant="h6">
                or
            </Typography>
            <MakeClassroomButton />
        </div>
    );
}

export default homepage;