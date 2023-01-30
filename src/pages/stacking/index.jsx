import { StackBanner, StackButton, Diagrams, ApplyIncubation } from "components/stacking";
import { useStackingContext } from "context/stackingContext";

const Stacking = () => {
    const { isLeaderBoardButtonClicked } = useStackingContext();

    return (
        <div>
            <StackBanner />
            <StackButton />
            {isLeaderBoardButtonClicked ? <div>Table</div> : <Diagrams />}
            <ApplyIncubation />
        </div>
    )
};

export default Stacking;