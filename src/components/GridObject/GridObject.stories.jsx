import GridObject from './GridObject';

export default {
    title: 'Grid/GridObject',
    component: GridObject,
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['NORTH', 'EAST', 'SOUTH', 'WEST'],
        },
    },
};

const Template = (args) => <GridObject {...args} />;

export const FacingNorth = Template.bind({});
FacingNorth.args = {
    direction: 'NORTH',
};

export const FacingEast = Template.bind({});
FacingEast.args = {
    direction: 'EAST',
};

export const FacingSouth = Template.bind({});
FacingSouth.args = {
    direction: 'SOUTH',
};

export const FacingWest = Template.bind({});
FacingWest.args = {
    direction: 'WEST',
};