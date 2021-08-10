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
    <div>
      {componentData.map((component, index) => {
        const uuid = uuidv4();
        const containerId = `${component.name}-${uuid}`;
        const componentHtml = `${component.sourceCode}`;
        console.log(componentHtml);
        return (
          <div
            className='p-4 border-2 border-dashed  w-full max-w-full'
            key={containerId}>
            <h2 className='text-2xl font-bold'>{component.title}</h2>
            {React.createElement<any>(componentData[index].component, {
              ...component.details,
            })}
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
