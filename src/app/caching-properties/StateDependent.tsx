import {Counter} from "@/app/shared/Counter";
import {Cell} from "@/app/caching-callback/Cell";

type Props = {
    externalValue: number;
}

const StateDependent = (props: Props) => {
    console.log("StateDependent");
    return <Cell><Counter value={props.externalValue}/></Cell>;
}

export default StateDependent;
