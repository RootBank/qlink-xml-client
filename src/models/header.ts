import { TransactionType } from '../enums/transaction-type';
import { PayrollIdentifier } from '../enums/payroll-identifier';
import { Configuration } from '../types';
import { QLinkBase } from './qlink-base';
import { serializeHeaderToXML } from '../serialization/header-serializer';

/**
 * Represents the header section required for requests to the Q LINK API.
 * Extends the basic `Configuration` with additional fields specific to each request type.
 */
export class Header extends QLinkBase implements Configuration {
  /**
   * Username issued by Q LINK.
   * - Used for authenticating the request.
   */
  public username: string;

  /**
   * Password associated with the `username`.
   * - Required for securing the connection.
   */
  public password: string;

  /**
   * Base URL for the Q LINK API.
   * - Specifies the environment URL for the requests.
   * - Defaults to `https://govtest.qlink.co.za/cgi-bin/XmlProc` if not provided.
   */
  public baseUrl: string = 'https://govtest.qlink.co.za/cgi-bin/XmlProc';

  /**
   * Institution ID assigned by Q LINK.
   * - Identifies the client institution associated with the API request.
   */
  public institution: number;

  /**
   * Transaction type identifier.
   * - Determines the type of transaction being executed.
   * - Mapped to the `TRX` field in the Q LINK header.
   */
  public transactionType?: TransactionType;

  /**
   * Payroll Identifier.
   * - Indicates the payroll system associated with this transaction.
   * - Mapped to the `PAY` field in the Q LINK header.
   */
  public payrollIdentifier?: PayrollIdentifier;

  /**
   * Effective Salary Month.
   * - Salary month specified in the CCYYMM format.
   * - Mapped to the `SALMON` field in the Q LINK header.
   * - Used primarily for payroll transactions.
   */
  public effectiveSalaryMonth?: string;

  /**
   * Optional transaction key.
   * - Unique identifier for client reference only.
   * - Mapped to the `KEY` field in the Q LINK header, but not processed by Q LINK.
   * - Returned in the response to assist with request tracking.
   */
  public key?: string;

  /**
   * Constructs a new `Header` instance.
   * @param config - The configuration needed to initialize the Header.
   * @param options - Optional fields specific to each request, such as transaction type and salary month.
   */
  constructor(config: Configuration, options?: Partial<Header>) {
    super()
    this.username = config.username;
    this.password = config.password;
    this.institution = config.institution;
    this.baseUrl = config.baseUrl || this.baseUrl;

    if (options) {
      this.transactionType = options.transactionType;
      this.payrollIdentifier = options.payrollIdentifier;
      this.effectiveSalaryMonth = options.effectiveSalaryMonth;
      this.key = options.key;
    }
  }

  /**
   * Serializes the header fields to XML for API requests.
   * - Ensures all required fields are included in the proper format.
   * @returns The XML string representation of the header.
   */
  toXML(): string {
    return serializeHeaderToXML(this);
  }
}