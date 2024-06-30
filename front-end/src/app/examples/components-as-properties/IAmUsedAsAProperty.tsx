import { NonClickableItem } from '@/app/shared/NonClickableItem';

type Props = {
  variant: string;
};

export const IAmUsedAsAProperty = (props: Props) => {
  console.log(`IAmUsedAsAsAProperty ${props.variant}`);

  return <NonClickableItem className="border-gray-300">IAmUsedAsAsAProperty {props.variant}</NonClickableItem>;
};

IAmUsedAsAProperty.displayName = 'IAmUsedAsAProperty';
