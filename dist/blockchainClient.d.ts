export declare module BlockChainModule {
    class BlockchainClient {
        connectToNetwork(): Promise<{
            contract: any;
        } | undefined>;
        redeem(args: any): Promise<any>;
        issue(args: any): Promise<any>;
        buy(args: any): Promise<any>;
        queryByKey(keyPassed: any): Promise<any>;
    }
}
