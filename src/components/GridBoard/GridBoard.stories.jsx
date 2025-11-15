import GridBoard from "./GridBoard";

export default {
  title: "Grid/GridBoard",
  component: GridBoard,
  argTypes: {
    position: {
      control: { type: "object" },
      description:
        "Position of the object on the grid, including x, y, and direction.",
    },
  },
};

const Template = (args) => <GridBoard {...args} />;

export const CenterNorth = Template.bind({});
CenterNorth.args = {
  position: { x: 2, y: 2, direction: "NORTH" },
};

export const CenterEast = Template.bind({});
CenterEast.args = {
  position: { x: 2, y: 2, direction: "EAST" },
};

export const CenterWest = Template.bind({});
CenterWest.args = {
  position: { x: 2, y: 2, direction: "WEST" },
};

export const CenterSouth = Template.bind({});
CenterSouth.args = {
  position: { x: 2, y: 2, direction: "SOUTH" },
};

export const TopLeftNorth = Template.bind({});
TopLeftNorth.args = {
  position: { x: 0, y: 4, direction: "NORTH" },
};

export const TopRightWest = Template.bind({});
TopRightWest.args = {
  position: { x: 4, y: 4, direction: "WEST" },
};

export const BottomLeftSouth = Template.bind({});
BottomLeftSouth.args = {
  position: { x: 0, y: 0, direction: "SOUTH" },
};

export const BottomRightEast = Template.bind({});
BottomRightEast.args = {
  position: { x: 4, y: 0, direction: "EAST" },
};

export const CustomValidNorth = Template.bind({});
CustomValidNorth.args = {
  position: { x: 1, y: 3, direction: "NORTH" },
};

export const CustomValidEast = Template.bind({});
CustomValidEast.args = {
  position: { x: 3, y: 1, direction: "EAST" },
};

export const CustomValidWest = Template.bind({});
CustomValidWest.args = {
  position: { x: 1, y: 1, direction: "WEST" },
};

export const CustomValidSouth = Template.bind({});
CustomValidSouth.args = {
  position: { x: 3, y: 3, direction: "SOUTH" },
};

export const CustomInvalid = Template.bind({});
CustomInvalid.args = {
  position: null,
};
