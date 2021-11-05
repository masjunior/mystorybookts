import { storiesOf } from "@storybook/react";
import Task from "../../Task";

storiesOf('Components/Form/TaskOther', module)
.add('Default',() => {
    return (
    <Task task={{
            id: "",
            title: "",
            state: ""
        }} onArchiveTask={function (id: string): void {
            throw new Error("Function not implemented.");
        } } onPinTask={function (id: string): void {
            throw new Error("Function not implemented.");
        } }/>
    )
} )