// tslint:disable:max-classes-per-file
/**
 * Alverca API Service Library for Javascript
 */
import * as factory from '@alverca/factory';

import { AuthClient } from './auth/authClient';

import { AccountingReportService } from './service/accountingReport';
import { PaymentReportService } from './service/paymentReports';
import { SalesReportService } from './service/salesReport';
import * as transporters from './transporters';

export import factory = factory;
export import transporters = transporters;

/**
 * auth client abstract class
 * 認証クライアント抽象クラス
 */
export abstract class Auth extends AuthClient { }

export namespace service {
    /**
     * 経理レポートサービス
     */
    export class AccountingReport extends AccountingReportService { }
    /**
     * 決済レポートサービス
     */
    export class PaymentReport extends PaymentReportService { }

    /**
     * 売上レポートサービス
     */
    export class SalesReport extends SalesReportService { }
}
