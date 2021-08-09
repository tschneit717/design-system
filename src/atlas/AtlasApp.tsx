import { AtlasComponents } from './components/AtlasComponents';

const testData = [
  {
    name: 'Accordion',
    details: {
      title: 'Title',
      body: 'Body',
    },
  },
];

export const AtlasApp = () => {
  return (
    <div>
      {/* <AtlasMenu></AtlasMenu> */}
      <AtlasComponents components={testData}></AtlasComponents>
      {/* <ModifierContainer></ModifierContainer> */}
    </div>
  );
};
