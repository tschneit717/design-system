import React, { FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Accordion } from './../../components/accordion/Accordion';
import { componentData } from '../data/components.js';

interface AtlasComponentsType {
  components: Array<{
    name: string;
    details: any;
  }>;
}

export const AtlasComponents: FunctionComponent<AtlasComponentsType> = ({
  components,
}) => {
  return (
    <div className='px-2 pt-10 pb-4 h-screen w-full overflow-y-auto'>
      {componentData.map((component, index) => {
        const uuid = uuidv4();
        const containerKey = `${component.name}-${uuid}`;
        const componentHtml = `${component.sourceCode}`;
        return (
          <div
            id={component.name}
            className='p-4 border-t-2 border-dashed  w-full max-w-full'
            key={containerKey}>
            <h2 className='text-2xl font-bold'>{component.title}</h2>
            <div className='my-8'>
              {React.createElement<any>(componentData[index].component, {
                ...component.details,
              })}
            </div>
            <Accordion title='Source Code'>
              <pre className='bg-gray-200 border p-4 my-2'>
                <code>{componentHtml}</code>
              </pre>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};
