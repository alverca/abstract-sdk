// import * as factory from '@alverca/factory';
import { OK } from 'http-status';

import { ISearchResult, Service } from '../service';

/**
 * 決済レポートサービス
 */
export class PaymentReportService extends Service {
    /**
     * 検索
     */
    public async search(params: any): Promise<ISearchResult<any[]>> {
        return this.fetch({
            uri: '/paymentReports',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        })
            .then(async (response) => {
                return {
                    data: await response.json()
                };
            });
    }
}
