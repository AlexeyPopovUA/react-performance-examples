import {Counter} from "@/app/shared/Counter";
import {Cell} from "@/app/examples/caching-callback/Cell";

type Props = {
    externalValue: number;
}

const StateDependentCounter = (props: Props) => {
    console.log("StateDependentCounter");
    return <Cell><Counter value={props.externalValue}/></Cell>;
}

export default StateDependentCounter;
