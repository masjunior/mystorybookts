import { action, HandlerFunction } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Button } from "../../../stories/Button";
import Task from "../../Task";

storiesOf('Components/Form/RadioOther', module)
.add('Default',() => {
    return (
    <Button 
        label={"Teste"} 
        primary 
        onClick={action('onClick')}
        // onMouseOver={action('onMouseOver')}
        // onMouseEnter={action('onMouseEnter')}
        // onMouseLeave={action('onMouseLeave')}
         />
    )
} )