import { NftBanner, TopSeller, TopCollection, NftFooter, SellNfts, ExploreProduct, LatestNewsUpdates } from "components/nftmarket";
import { Animate } from "components/global/animation";
import { colors } from "constants/colors";

const NftMarket = () => {
    return (
        <div
            style={{
                backgroundColor: colors.primaryBackgroundLight
            }}
        >
            <Animate.FadeUp>
                <NftBanner />
            </Animate.FadeUp>
            <Animate.FadeUp>
                <TopSeller />
            </Animate.FadeUp>
            <Animate.FadeUp>
                <TopCollection />
            </Animate.FadeUp>
            <Animate.FadeUp>
                <SellNfts />
            </Animate.FadeUp>
            <Animate.FadeUp>
                <ExploreProduct />
            </Animate.FadeUp>
            <Animate.FadeUp>
                <LatestNewsUpdates />
            </Animate.FadeUp>
            <Animate.FadeUp>
                <NftFooter />
            </Animate.FadeUp>
        </div>
    );
};

export default NftMarket;