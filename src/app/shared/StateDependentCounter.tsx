import { Counter } from '@/app/shared/Counter';
import { Cell } from '@/app/examples/caching-callback/Cell';

type Props = {
  externalValue: number;
};

const StateDependentCounter = (props: Props) => {
  console.log('StateDependentCounter');

  return (
    <Cell>
      <Counter value={props.externalValue} />
      <div className="text-gray-600r ml-4 content-center">StateDependentCounter</div>
    </Cell>
  );
};

export default StateDependentCounter;
