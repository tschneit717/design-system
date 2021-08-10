import { componentData } from '../data/components.js';
import { v4 as uuidv4 } from 'uuid';

export const AtlasMenu = () => {
  return (
    <nav className='p-8 w-52 h-screen border-r'>
      <ul>
        {componentData.map((component, index) => {
          const uuid = uuidv4();
          const containerId = `${component.name}-${uuid}`;
          return (
            <li
              className={index !== componentData.length - 1 ? 'py-2' : 'pt-2'}
              key={containerId}>
              <a href={`#${component.name}`}>{component.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
