import { NftBanner, TopSeller, TopCollection, NftFooter, SellNfts, ExploreProduct, LatestNewsUpdates } from "components/nftmarket";

const NftMarket = () => {
    return (
        <div>
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