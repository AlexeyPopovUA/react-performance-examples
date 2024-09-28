import { NonClickableItem } from '@/app/shared/NonClickableItem';

type Props = {
  variant: string;
};

export const UsedAsChild = (props: Props) => {
  console.log(`UsedAsChild ${props.variant}`);

  return <NonClickableItem className="border-gray-300">UsedAsChild {props.variant}</NonClickableItem>;
};

UsedAsChild.displayName = 'UsedAsChild';
