import { StackBanner, StackButton, Diagrams, ApplyIncubation, FullTable } from "components/stacking";
import { useStackingContext } from "context/stackingContext";
import { Animate } from "components/global/animation";
import { colors } from "constants/colors";

const Stacking = () => {
    const { isLeaderBoardButtonClicked } = useStackingContext();

    return (
        <div style={{
            backgroundColor: colors.primaryBackground
        }}>
            <Animate.FadeUp>
                <StackBanner />
            </Animate.FadeUp>
            <Animate.FadeUp>
                <StackButton />
            </Animate.FadeUp>
            <Animate.FadeUp>
                {isLeaderBoardButtonClicked ? <FullTable /> : <Diagrams />}
            </Animate.FadeUp>
            <Animate.FadeUp>
                <ApplyIncubation />
            </Animate.FadeUp>
        </div>
    )
};

export default Stacking;