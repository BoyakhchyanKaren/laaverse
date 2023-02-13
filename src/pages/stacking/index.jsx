import { StackBanner, StackButton, Diagrams, ApplyIncubation, FullTable } from "components/stacking";
import { useStackingContext } from "context/stackingContext";
import { colors } from "constants/colors";

const Stacking = () => {
    const { isLeaderBoardButtonClicked } = useStackingContext();

    return (
        <div style={{
            backgroundColor: colors.primaryBackground
        }}>
            <StackBanner />
            <StackButton />
            {isLeaderBoardButtonClicked ? <FullTable /> : <Diagrams />}
            <ApplyIncubation />
        </div>
    )
};

export default Stacking;