import { NonClickableItem } from '@/app/shared/NonClickableItem';

type Props = {
  variant: string;
};

export const IAmUsedAsAsAProperty = (props: Props) => {
  console.log(`IAmUsedAsAsAProperty ${props.variant}`);

  return <NonClickableItem className="border-gray-300">IAmUsedAsAsAProperty {props.variant}</NonClickableItem>;
};
