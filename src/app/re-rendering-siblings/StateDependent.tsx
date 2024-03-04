type Props = {
    externalValue: number;
}

const StateDependent = (props: Props) => {
    console.log("StateDependent");
  return <div>{props.externalValue}</div>;
}

export default StateDependent;
