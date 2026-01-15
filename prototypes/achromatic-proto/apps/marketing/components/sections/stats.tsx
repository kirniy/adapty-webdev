import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { NumberTicker } from '~/components/fragments/number-ticket';

const DATA = [
  {
    value: 2,
    prefix: '$',
    suffix: 'B+',
    description: 'tracked revenue',
    decimalPlaces: 0,
  },
  {
    value: 99.99,
    suffix: '%',
    description: 'historical uptime',
    decimalPlaces: 2,
  },
  {
    value: 2.5,
    suffix: 'B+',
    description: 'users served',
    decimalPlaces: 1,
  },
  {
    value: 60,
    suffix: 'B+',
    description: 'API calls / month',
    decimalPlaces: 0,
  }
];

export function Stats(): React.JSX.Element {
  return (
    <GridSection>
      <div className="py-8 text-center">
        <h2 className="text-lg font-medium text-muted-foreground">
          Adapty processes subscription revenue with the industry&apos;s highest SLA Rate
        </h2>
      </div>
      <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
        {DATA.map((stat, index) => (
          <div
            key={index}
            className={cn(
              'justify-top flex flex-col items-center border-dashed p-6 text-center lg:p-8 ',
              (index === 2 || index === 3) && 'border-t lg:border-t-0'
            )}
          >
            <p className="whitespace-nowrap text-2xl font-semibold md:text-3xl">
              {stat.prefix}
              <NumberTicker value={stat.value} decimalPlaces={stat.decimalPlaces} />
              {stat.suffix}
            </p>
            <p className="mt-2 whitespace-nowrap text-xs text-muted-foreground sm:text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </GridSection>
  );
}
