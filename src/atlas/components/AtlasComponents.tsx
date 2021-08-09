import React, { FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        return (
          <div key={containerId}>
            <h2>{component.name}</h2>

            {React.createElement<any>(componentData[index].component, {
              ...component.details,
            })}
          </div>
        );
      })}
    </div>
  );
};
