import GridPositionForm from './GridPositionForm';

export default {
    title: 'Grid/GridPositionForm',
    component: GridPositionForm,
    argTypes: {
        defaultValue: {
            control: { type: 'text' },
            description: 'Default input value for the form',
        },
        onSubmit: { action: 'submitted', description: 'Callback for form submission' },
    },
};

const Template = (args) => <GridPositionForm {...args} />;

export const ValidInput = Template.bind({});
ValidInput.args = {
    defaultValue: '2,3 EAST',
};

export const InvalidFormat = Template.bind({});
InvalidFormat.args = {
    defaultValue: 'Position',
};

export const InvalidXInput = Template.bind({});
InvalidXInput.args = {
    defaultValue: '5,2 WEST',
};

export const InvalidYInput = Template.bind({});
InvalidYInput.args = {
    defaultValue: '2,-1 SOUTH',
};

export const InvalidDirection = Template.bind({});
InvalidDirection.args = {
    defaultValue: '2,3 INVALID',
};

export const InvalidAll = Template.bind({});
InvalidAll.args = {
    defaultValue: '6,-1 INVALID',
};