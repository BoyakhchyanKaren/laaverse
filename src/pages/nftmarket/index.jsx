import { NftBanner, TopSeller, TopCollection, NftFooter, SellNfts, ExploreProduct, LatestNewsUpdates } from "components/nftmarket";
import { colors } from "constants/colors";

const NftMarket = () => {
    return (
        <div
            style={{
                backgroundColor: colors.primaryBackgroundLight
            }}
        >
            <NftBanner />
            <TopSeller />
            <TopCollection />
            <SellNfts />
            <ExploreProduct />
            <LatestNewsUpdates />
            <NftFooter />
        </div>
    );
};

export default NftMarket;