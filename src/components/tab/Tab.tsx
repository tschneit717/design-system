import { useState } from 'react';
import { PropsWithChildren, FunctionComponent } from 'react';

export interface TabProps extends PropsWithChildren<any> {
  tabOptions: { title: string; content: JSX.Element }[];
}

export const Tab: FunctionComponent<TabProps> = ({ tabOptions }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div data-component-type='Tab'>
      <div role='tablist' className='inline-flex row border border-r'>
        {tabOptions.map((tab, index) => (
          <button
            key={index}
            aria-selected={index === activeTab}
            role='tab'
            className={`${index < tabOptions.length - 1 ? 'border-r ' : ''} ${
              index === activeTab ? 'bg-gray-700 text-white' : ''
            } px-6 py-2`}
            onClick={() => setActiveTab(index)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div role='tabpanel' className='border box-border p-4 -mt-px'>
        {tabOptions[activeTab].content}
      </div>
    </div>
  );
};
