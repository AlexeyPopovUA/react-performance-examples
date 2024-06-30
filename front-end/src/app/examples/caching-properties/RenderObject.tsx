import { NonClickableItem } from '@/app/shared/NonClickableItem';

export const RenderObject = (props: { value: Record<string, unknown>; variant?: string }) => {
  console.log(`RenderObject ${JSON.stringify(props.value)}`);
  return (
    <NonClickableItem className="mb-4">
      {props.variant ? props.variant : null}
      <pre>{JSON.stringify(props.value)}</pre>
    </NonClickableItem>
  );
};

RenderObject.displayName = 'RenderObject';
