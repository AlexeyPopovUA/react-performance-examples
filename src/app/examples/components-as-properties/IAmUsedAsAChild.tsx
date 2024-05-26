import { NonClickableItem } from '@/app/shared/NonClickableItem';

type Props = {
  variant: string;
};

export const IAmUsedAsAsAChild = (props: Props) => {
  console.log(`IAmUsedAsAsAChild ${props.variant}`);

  return <NonClickableItem className="border-gray-300">IAmUsedAsAsAChild {props.variant}</NonClickableItem>;
};
