import { NonClickableItem } from '@/app/shared/NonClickableItem';

export const RenderObject = (props: { value: Record<string, unknown> }) => {
  console.log(`RenderObject ${JSON.stringify(props.value)}`);
  return (
    <NonClickableItem>
      <pre>{JSON.stringify(props.value)}</pre>
    </NonClickableItem>
  );
};
