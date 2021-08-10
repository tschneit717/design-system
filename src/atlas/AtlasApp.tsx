import { AtlasComponents } from './components/AtlasComponents';
import { AtlasMenu } from './components/AtlasMenu';

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
    <div className='flex overflow-hidden absolute left-0 top-0 h-full w-full'>
      <AtlasMenu></AtlasMenu>
      <AtlasComponents components={testData}></AtlasComponents>
      {/* <ModifierContainer></ModifierContainer> */}
    </div>
  );
};
