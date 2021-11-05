import React, { Fragment } from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs'
import Task, { TaskProps } from '../components/Task';
import { useArgs, useEffect } from '@storybook/addons';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

// https://github.com/storybookjs/storybook/tree/next/addons/controls
// https://storybook.js.org/docs/react/essentials/controls#annotation
// https://storybook.js.org/addons/@storybook/addon-docs
// https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/docspage.md
// https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/blob/v4.1.6/README.md#options
// https://github.com/storybookjs/storybook/blob/next/addons/docs/react/README.md#props-tables
// https://storybook.js.org/docs/react/writing-docs/docs-page#component-parameter
// https://storybook.js.org/addons

export default {
  title: 'Task',
  component: Task,
  decorators: [withKnobs],
  args: {},
  argTypes: {
    error:{
        name: 'ISERROR',
        type: { name: 'boolean', required: false },
        description: 'Show error',
        defaultValue: false,
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'true' },
        },
        control: {
            type: 'boolean'
        }
    },
    error_:{
        name: 'ISERROR2',
        type: { name: 'boolean', required: false },
        description: 'Show error',
        defaultValue: false,
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: 'true' },
        },
        control: {
            type: 'boolean'
        }
    },
    variant_A: {
      options: ['primary', 'secondary'],
      control: { type: 'radio'},
    },
    variant_B: {
        options: ['primary', 'secondary'],
        control: { type: 'boolean' }
      },
    label: {
        name: 'label',
        type: { name: 'string', required: false },
        defaultValue: 'oie',
        description: 'demo description',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: 'Hello' },
        },
        control: {
            type: 'text'
        }
    },
    propertyA: {
        options: ['Item One', 'Item Two', 'Item Three'],
        control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
    range: { 
        control: { type: 'range', min: 400, max: 1200, step: 50 },
    },
    number: { 
        control: { type: 'number', min: 400, max: 1200, step: 50 },
    },
    object: { 
        control: { type: 'object', min: 400, max: 1200, step: 50 },
    },
    file: { 
        control: { type: 'file', accept: '*' },
    },
    radio: { 
        options: ['primary', 'secondary'],
        control: { type: 'radio'},
    },
    inline_radio: { 
        name: 'inline-radio',
        options: ['primary', 'secondary'],
        control: { type: 'inline-radio'},
    },
    check: { 
        options: ['primary', 'secondary'],
        control: { type: 'check'},
    },
    inline_check: { 
        name: 'inline-check',
        options: ['primary', 'secondary'],
        control: { type: 'inline-check'},
    },
    select: { 
        name: 'select',
        options: ['primary', 'secondary'],
        description: 'demo description',
        defaultValue: 'primary',
        control: { type: 'select'},
    },
    multi_select: { 
        name: 'multi-select	',
        options: ['primary', 'secondary'],
        control: { type: 'multi-select	'},
    },
    text: { 
        name: 'text',
        control: { type: 'text'},
    },
    color: { 
        name: 'color',
        control: { type: 'color'},
        presetColors: [{ color: '#ff4785', title: 'Coral' },'#FF0000', '#00FF00', '#0000FF'],
    },
    date: { 
        name: 'date',
        control: { type: 'date'},
        background: '#ff4785',
    },
   

    //exclude props
    task: { table: { disable: true } },
    onArchiveTask: { table: { disable: true } },
    onPinTask: { table: { disable: true }},
   
  },
  parameters: {
    controls: { 
        //hide warning 
        hideNoControlsWarning: true,
        //include coluns Description and Default
        expanded: true,
        // sort in alphabetical order
        sort: 'requiredFirst',

    },
    docs: {
        page: () => {
            return <>
               <h1>OLA MUNDO</h1>
              <Title />
              <Subtitle />
              <Description />
              <Primary />
              <ArgsTable story={PRIMARY_STORY} />
              <Stories />
            </>    
        },
        // description: {
        //   component: 'Descrição dos documentos que o Henrique vai fazer',
        //   story: 'Descrição dos itens',
        // },
      },
      pseudo: {
          hover: true,
      }
    
    // backgrounds: {
    //     values: [
    //         { name: 'red', value: '#f00' },
    //         { name: 'green', value: '#0f0' },
    //         { name: 'blue', value: '#00f' },
    //     ],
    // },
  },

  // Our exports that end in "Data" are not stories.
//   excludeStories: /.*Data$/,
excludeStories: ['actionsData', 'taskData'],
} as Meta;

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// We create a “template” of how args map to rendering
const Template: Story<TaskProps> = (args) => <Task {...args} />;
// Button.stories.ts | Button.stories.tsx

export const Primary_ = Template.bind({});
Primary_.args = { task:{...taskData }, onPinTask : actionsData.onPinTask, onArchiveTask : actionsData.onArchiveTask };


export const Default = () => {
    const [args, updateArgs] = useArgs();
    useEffect(() => {
        if(args.error === true){
            updateArgs({error_: false});
        }
        if(args.error_ === true){
            updateArgs({error: false});
        }

    }, [args.error, args.error_, updateArgs]);
    return (
        <Task task={object ('tasks',{ ...taskData })} {...actionsData} />
    )
};

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;

export const Archived = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);

