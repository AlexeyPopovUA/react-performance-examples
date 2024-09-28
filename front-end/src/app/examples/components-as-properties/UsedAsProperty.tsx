import { NonClickableItem } from '@/app/shared/NonClickableItem';

type Props = {
  variant: string;
};

export const UsedAsProperty = (props: Props) => {
  console.log(`UsedAsProperty ${props.variant}`);

  return <NonClickableItem className="border-gray-300">UsedAsProperty {props.variant}</NonClickableItem>;
};

UsedAsProperty.displayName = 'UsedAsProperty';
